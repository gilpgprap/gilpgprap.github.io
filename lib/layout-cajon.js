/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { ANCHO_SEPARADOR, SHADOW_HTML } from "./layout-cajon_shadow.js";

/** @typedef {Object} Movimiento
 * @property {number} x0 posición inicial del movimiento.
 * @property {number} separadorOffsetLeft offsetLeft del separador.
 * @property {number} navWidth offsetWidth del primer hijo.
 * @property {number} principalOffsetLeft offsetLeft del último hijo. */

class LayoutCajón extends HTMLElement {
  constructor() {
    super();
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.abre = this.abre.bind(this);
    this.cierra = this.cierra.bind(this);
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = SHADOW_HTML;
    /**@type {HTMLElement} */
    this.nav = shadowRoot.querySelector("#nav");
    /**@type {HTMLElement} */
    this.separador = shadowRoot.querySelector("#separador");
    /**@type {HTMLElement} */
    this.principal = shadowRoot.querySelector("#principal");
    this.separador.addEventListener("mousedown", this.mouseDown);
    this.separador.addEventListener("touchstart", this.touchStart);
    const botón = shadowRoot.querySelector("#abre");
    botón.addEventListener("click", this.abre);
    const cierran = Array.from(shadowRoot.querySelectorAll(".cierra"));
    for (const c of cierran) {
      c.addEventListener("click", this.cierra);
    }
    /**@type {HTMLSlotElement} */
    const slotNav = shadowRoot.querySelector("#slotNav");
    slotNav.addEventListener("slotchange", () => {
      document.body.classList.add("visible");
      const assignedElements = slotNav.assignedElements();
      const href = location.href;
      for (const element of assignedElements) {
        const anclas = Array.from(element.querySelectorAll("a"));
        for (const ancla of anclas) {
          if (href === ancla.href || href + "index.html" === ancla.href
            || href.startsWith(ancla.href)) {
            ancla.classList.add("actual");
          }
        }
      }
    });
  }
  /** @param {MouseEvent} evt */
  mouseDown(evt) {
    this.separador.classList.add("activo");
    /** @type {Movimiento} */
    this.md = {
      x0: evt.x,
      separadorOffsetLeft: this.separador.offsetLeft,
      navWidth: this.nav.offsetWidth,
      principalOffsetLeft: this.principal.offsetLeft
    };
    document.addEventListener("mousemove", this.mouseMove);
    document.addEventListener("mouseup", this.mouseUp, { once: true });
  }
  abre() {
    this.classList.add("abierto");
  }
  cierra() {
    this.classList.remove("abierto");
  }
  /** @param {MouseEvent} evt */
  mouseMove(evt) {
    if (this.md) {
      this.ajustaElements(evt.x - this.md.x0, this.md);
    }
  }
  /** @param {number} dx
   * @param {Movimiento} m */
  ajustaElements(dx, m) {
    const separadorOffsetLeft = m.separadorOffsetLeft + dx;
    const boundingRect = this.getBoundingClientRect();
    // limita delta
    if (boundingRect.left < separadorOffsetLeft
      && (separadorOffsetLeft + this.separador.offsetWidth - 1)
      < boundingRect.right) {
      const primeroWidth = `${m.navWidth + dx}px`;
      const principalMarginLeft = `${m.principalOffsetLeft + dx - ANCHO_SEPARADOR + 2}px`;
      this.separador.style.left = `${m.separadorOffsetLeft + dx}px`;
      this.nav.style.width = primeroWidth;
      this.principal.style.marginLeft = principalMarginLeft;
    }
  }
  mouseUp() {
    this.md = null;
    this.separador.classList.remove("activo");
    document.removeEventListener("mousemove", this.mouseMove);
  }
  /** @param {TouchEvent} evt
   * @returns {boolean} */
  touchStart(evt) {
    evt.preventDefault();
    this.separador.classList.add("activo");
    /** @type {Movimiento} */
    this.ts = {
      x0: evt.touches[0].clientX,
      separadorOffsetLeft: this.separador.offsetLeft,
      navWidth: this.nav.offsetWidth,
      principalOffsetLeft: this.principal.offsetLeft
    };
    document.addEventListener("touchmove", this.touchMove)
    document.addEventListener("touchend", this.touchEnd, { once: true })
    return false;
  }
  /** @param {TouchEvent} evt
   * @returns {boolean} */
  touchMove(evt) {
    evt.preventDefault();
    if (this.ts) {
      this.ajustaElements(evt.touches[0].clientX - this.ts.x0, this.ts);
    }
    return false;
  }
  touchEnd() {
    this.ts = null;
    this.separador.classList.remove("activo");
    document.removeEventListener("touchmove", this.touchMove);
  }
}
customElements.define("layout-cajon", LayoutCajón);