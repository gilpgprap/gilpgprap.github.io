import { MiPresentación } from "../cmp/mi-presentacion.js";

/**@abstract */
export class SelDiapositivaBase extends HTMLElement {
  constructor() {
    super();
    this.hashCambió = this.hashCambió.bind(this);
  }
  connectedCallback() {
    this.innerHTML = this.html;
    this.select = this.querySelector("select");
    addEventListener("hashchange", this.hashCambió);
    this.select.addEventListener("change",
      () => location.hash = `#${this.select.value}`);
    this.hashCambió();
    if (this.parentElement instanceof MiPresentación
      && this.hasAttribute("slot")) {
      this.parentElement.selector = this;
    }
  }
  disconnectedCallback() {
    removeEventListener("hashchange", this.hashCambió);
  }
  /** @abstract
   * @returns {string} */
  get html() {
    throw new Error("abstract");
  }
  hashCambió() {
    const hash = location.hash;
    this.select.value = hash.length > 1 ? hash.substring(1) : "";
  }
}