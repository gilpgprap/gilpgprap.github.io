import "./mi-nav.js";
customElements.define("mi-menu", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<button type=button class="abre">&#x2630;</button>
      <div class=cierra></div>
      <nav>
        <header><button class=cierra>&#x2715;</button></header>
        <mi-nav></mi-nav>
      </nav>`;
    this.abre = this.abre.bind(this);
    this.cierra = this.cierra.bind(this);
    const botón = this.querySelector("button");
    botón.addEventListener("click", this.abre);
    const cierran = Array.from(this.querySelectorAll(".cierra"));
    for (const c of cierran) {
      c.addEventListener("click", this.cierra);
    }
    const anclas = Array.from(this.querySelectorAll("a"));
    const href = location.href.replace(/\#.+$/, "");
    for (const a of anclas) {
      if (a.href === href) {
        a.classList.add("actual");
        a.scrollIntoView();
      }
    }
  }
  abre() {
    this.classList.add("abierto")
  }
  cierra() {
    this.classList.remove("abierto")
  }
});