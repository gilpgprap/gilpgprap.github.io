customElements.define("mi-nav", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="0_sw.html">Software a Instalar</a></li>
        <li><a href="2_html.html">Introducción a HTML5</a></li>
        <li><a href="4_css3.html">Introducción a CSS3</a></li>
        <li><a href="5_cajas.html">Modelo de Cajas</a></li>
        <li><a href="6_intro_js.html">Introducción a JavaScript</a></li>
        <li><a href="7_tipos.html">Tipos de Datos</a></li>
        <li><a href="8_formularios.html">Formularios</a></li>
        <li><a href="9_condicionales.html">Condicionales</a></li>
        <li><a href="10_posicionamiento.html">Posicionamiento CSS3</a></li>
        <li><a href="11_ciclos.html">Ciclos</a></li>
        <li><a href="12_funciones.html">Funciones</a></li>
        <li><a href="13_objetos.html">Objetos</a></li>
        <li><a href="14_excepciones.html">Excepciones</a></li>
      </ul>`;
  }
});