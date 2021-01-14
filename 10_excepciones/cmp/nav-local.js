/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Herencia</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_throw.html">throw</a></p></li>
        <li><p><a href="4_try-catch.html">try-catch</a></p></li>
        <li><p><a href="5_try-finally.html">try-finally</a></p></li>
        <li><p><a href="6_try-catch-finally.html">try-catch-finally</a></p></li>
        <li><p><a href="7_anidado.html">Procesamiento Anidado</a></p></li>
        <li><p><a href="8_formulario.html">Formulario con Validaciones</a></p></li>
      </ol>`;
  }
});