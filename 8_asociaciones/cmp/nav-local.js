/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Herencia</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_uno.html">Asociaciones a Uno</a></p></li>
        <li><p><a href="4_muchos.html">Asociaciones a Muchos</a></p></li>
        <li><p><a href="5_uno_a_uno.html">Asociaciones Uno a Uno</a></p></li>
        <li><p><a href="6_uno_a_muchos.html">Asociaciones Uno a Muchos</a></p></li>
        <li><p><a href="7_muchos_a_muchos.html">Asociaciones Muchos a Muchos</a></p></li>
        <li><p><a href="8_agregacion.html">Agregación</a></p></li>
        <li><p><a href="9_composicion.html">Composición</a></p></li>
        <li><p><a href="10_ejemplo.html">Ejemplo con Asociaciones</a></p></li>
      </ol>`;
  }
});