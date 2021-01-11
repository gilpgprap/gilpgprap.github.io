/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Herencia</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_sobreescritura.html">Sobreescritura de Métodos</a></p></li>
        <li><p><a href="4_interfaces.html">Interfaces</a></p></li>
        <li><p><a href="5_abstractas.html">Clases Abstractas</a></p></li>
        <li><p><a href="6_ejemplo.html">Ejemplo con Polimorfismo</a></p></li>
      </ol>`;
  }
});