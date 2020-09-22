import { SelDiapositivaBase } from "../lib/SelDiapositivaBase.js";
import { cod } from "../lib/utilHTML.js";
export class MiPresentación extends HTMLElement {
  constructor() {
    super();
    this.hashCambió = this.hashCambió.bind(this);
  }
  connectedCallback() {
    this.hashInicial = "#d0";
    /** @type{Element[]} */
    this.elementos = [];
    /** @type{HTMLOptionElement[]} */
    this.opciones = [];
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = /* html */
      `<style>
        :host {
          display: block;
        }
        #selector::slotted(*) {
          display: none;
        }
      </style>
      <slot id=selector name=selector></slot>
      <slot id=diapositivas name=diapositiva></slot>`;
    /**@type {HTMLSlotElement} */
    const diapositivas = shadowRoot.querySelector("#diapositivas");
    diapositivas.addEventListener("slotchange", () => {
      this.elementos = diapositivas.assignedElements();
      this.muestra();
    });
    addEventListener("hashchange", this.hashCambió);
  }
  disconnectedCallback() {
    removeEventListener("hashchange", this.hashCambió);
  }
  hashCambió() {
    const hash = location.hash;
    if (hash === "" || hash === "#") {
      location.hash = this.hashInicial;
    }
  }
  /** @param {SelDiapositivaBase} selector */
  set selector(selector) {
    this._selector = selector;
    this.opciones = Array.from(selector.querySelectorAll("option"));
    this.muestra();
  }
  muestra() {
    /** @type{Map<string, HTMLElement>} */
    const map = new Map();
    const footer = this.getAttribute("footer") ?
      this.getAttribute("footer") : "mi-footer";
    if (this.opciones.length && this.elementos.length) {
      const selector = this._selector.tagName.toLowerCase();
      const opciones = this.opciones;
      const elementos = this.elementos;
      if (opciones.length !== elementos.length) {
        alert("El número de opciones del selector no coincide con el número de diapositivas.");
      } else if (opciones.length < 2) {
        alert("Necesitas al menos 2 diapositivas.");
      } else {
        for (const elemento of elementos) {
          if (elemento instanceof HTMLElement) {
            map.set(elemento.id, elemento);
          }
        }
        {
          const opción = opciones[0];
          const elemento = buscaElemento(opción.value);
          if (elemento) {
            this.hashInicial = `#${opción.value}`;
            asignaTítulo(elemento, opción);
            asignaFooter(elemento);
            const header = elemento.querySelector("header");
            if (header) {
              header.innerHTML = /* html */
                `</span><${selector}></${selector}>${
                anclaSiguiente(opciones, 0)}`;
            }
          }
        }
        for (let i = 1, len = opciones.length - 1; i < len; i++) {
          const opción = opciones[i];
          const elemento = buscaElemento(opción.value);
          if (elemento) {
            asignaTítulo(elemento, opción);
            asignaFooter(elemento);
            const header = elemento.querySelector("header");
            if (header) {
              header.innerHTML = /* html */
                `</span>${anclaAnterior(opciones, i)}<${selector}></${
                selector}>${anclaSiguiente(opciones, i)}`;
            }
          }
        }
        {
          const i = elementos.length - 1;
          const opción = opciones[i];
          const elemento = buscaElemento(opción.value);
          if (elemento) {
            asignaTítulo(elemento, opción);
            asignaFooter(elemento);
            const header = elemento.querySelector("header");
            if (header) {
              header.innerHTML = /* html */
                `</span>${anclaAnterior(opciones, i)}<${selector}></${
                selector}>`;
            }
          }
        }
        this.hashCambió();
      }
    }
    /** @param {Element} elemento
     * @param {Element} opción */
    function asignaTítulo(elemento, opción) {
      const título = elemento.querySelector("h1,h2");
      if (título) {
        título.textContent = opción.textContent;
      }
    }
    /** @param {Element} elemento */
    function asignaFooter(elemento) {
      elemento.appendChild(document.createElement(footer));
    }
    /** @param {HTMLOptionElement[]} opciones
     * @param {number} i */
    function anclaAnterior(opciones, i) {
      const opciónAnterior = opciones[i - 1];
      return (/* html */
        `<a href=#${cod(opciónAnterior.value)}>${
        opciónAnterior.innerHTML}</a>`);
    }
    /** @param {HTMLOptionElement[]} opciones
     * @param {number} i */
    function anclaSiguiente(opciones, i) {
      const opciónSiguiente = opciones[i + 1];
      return (/* html */
        `<a href=#${cod(opciónSiguiente.value)}>${
        opciónSiguiente.innerHTML}</a>`);
    }
    /** @param {string} id */
    function buscaElemento(id) {
      const elemento = map.get(id);
      if (!elemento) {
        alert(`Falta el id ${id}`);
      }
      return elemento;
    }
  }
}
customElements.define("mi-presentacion", MiPresentación);