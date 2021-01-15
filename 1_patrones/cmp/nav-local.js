/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Patrones de Diseño</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_concepto.html">Concepto de Patrón de Diseño</a></p></li>
        <li><p><a href="4_singleton.html">Patrón Singleton</a></p></li>
        <li><p><a href="5_factory.html">Patrón Abstract Factory</a></p></li>
        <li><p><a href="6_proxy.html">Patrón Proxy</a></p></li>
        <li><p><a href="7_mvc.html">Patrón MVC</a></p></li>
        <li><p><a href="8_ejemplo.html">Ejemplo con Patrones de Diseño</a></p></li>
      </ol>`;
  }
});