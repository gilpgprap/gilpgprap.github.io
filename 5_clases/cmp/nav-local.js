/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Introducción a HTML5</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_clases.html">Clases</a></p></li>
        <li><p><a href="4_instancias.html">Instancias</a></p></li>
        <li><p><a href="5_constructor.html">Constructor</a></p></li>
        <li><p><a href="6_privado.html">Acceso Privado</a></p></li>
        <li><p><a href="7_setters.html">Setters y Getters</a></p></li>
      </ol>`;
  }
});