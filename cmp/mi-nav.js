/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><a href="/index.html">Inicio</a></li>
        <li><a href="/2_sw.html">Software a Instalar</a></li>
        <li><a href="/1_patrones">Patrones de Diseño</a></li>
        <li><a href="/2_promesas">Promesas</a></li>
        <li><a href="/3_met_arrs">Métodos de Arreglos</a></li>
        <li><a href="/4_arrs_av">Arreglos Avanzados</a></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);