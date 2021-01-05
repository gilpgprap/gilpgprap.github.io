/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export class CtrlDiapositiva extends HTMLElement {
  constructor() {
    super();
    this.abre = this.abre.bind(this);
    this.cierra = this.cierra.bind(this);
  }
  connectedCallback() {
    this.innerHTML = /* html */
    `<a class=anterior><span class="material-icons" title="Diapositiva Anterior">skip_previous</span></a>
    <button class=toc title="Diapositivas de esta Presentación">▤</button>
    <a class=siguiente><span class="material-icons" title="Diapositiva Siguiente">skip_next</span></a>
    <div class=cierra></div><nav><header><button class=cierra>&#x2715;</button></header>${this.lista}</nav>`;
    /** @type {HTMLAnchorElement} */
    const anterior = this.querySelector(".anterior");
    /** @type {HTMLButtonElement} */
    const toc = this.querySelector(".toc");
    /** @type {HTMLAnchorElement} */
    const siguiente = this.querySelector(".siguiente");
    const nav = this.querySelector("nav");
    const anclas = Array.from(nav.querySelectorAll("a"));
    toc.addEventListener("click", this.abre);
    const cierran = Array.from(this.querySelectorAll(".cierra"));
    for (const c of cierran) {
      c.addEventListener("click", this.cierra);
    }
    const href = location.href;
    for (let i = 0, len = anclas.length; i < len; i++) {
      const ancla = anclas[i];
      if (href === ancla.href || href + "index.html" === ancla.href) {
        ancla.classList.add("actual");
        if (i === 0) {
          anterior.hidden = true;
        } else {
          anterior.href = anclas[i - 1].href;
        }
        if (i >= len - 1) {
          siguiente.hidden = true;
        } else {
          siguiente.href = anclas[i + 1].href;
        }
      }
    }
  }
  get lista() {
    return /* html */ `Falta la lista de contenido.`;
  }
  abre() {
    this.classList.add("abierto");
  }
  cierra() {
    this.classList.remove("abierto");
  }
}