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
        <li><a href="/3_funciones">Funciones Mejoradas</a></li>
        <li><a href="/4_obj_basicos">Objetos Básicos</a></li>
        <li><a href="/5_clases">Clases</a></li>
        <li><a href="/6_herencia">Herencia</a></li>
        <li><a href="/7_arreglos">Arreglos</a></li>
        <li><a href="/8_asociaciones">Asociaciones</a></li>
        <li><a href="/9_polimorfismo">Polimorfismo</a></li>
        <li><a href="/10_excepciones">Excepciones</a></li>
        <li><a href="/11_patrones">Patrones de Diseño</a></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);