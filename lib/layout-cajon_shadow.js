/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const ANCHO_SEPARADOR = 10;
export const SHADOW_HTML = /* html */
  `<style>
    :host {
      display: block;
    }
    #nav {
      position: fixed;
      z-index: 1002;
      top: 0;
      left: 0;
      bottom: 0;
      padding: var(--padding-mi-nav);
      box-sizing: border-box;
      color: var(--color-letra, black);
      overflow: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--color-thumb) var(--color-scrollbar);
    }
    #nav::-webkit-scrollbar {
      width: var(--ancho-thumb);
      height: var(--ancho-thumb);
    }
    #nav::-webkit-scrollbar-track {
      background: var(--color-scrollbar);
    }
    #nav::-webkit-scrollbar-thumb {
      background-color: var(--color-thumb) ;
      border-radius: var(--border-radius-thumb);
    }
    #nav::-webkit-scrollbar-thumb:active {
      background-color: var(--color-thumb-activo);
    }
    #principal {
      box-sizing: border-box;
      background-color: var(--color-fondo, white);
      animation-timing-function: var(--intro-funcion, ease-out);
      animation-duration: var(--intro-duracion, 3s);
      animation-name: desplaza;
    }
    #toolbar {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      z-index: 1000;
    }
    @media screen and (max-width: 999px) {
      #cierra {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--color-sombra);
        transform: translateX(-150%);
        transition: transform 0.7s ease-out;
        z-index: 1001;
      }
      #nav {
        width: min(var(--ancho-nav), 70%);
        background-color: var(--color-fondo-nav);
        box-shadow: 0.5rem 0 0.5rem var(--color-sombra);
        transform: translateX(-150%);
        transition: transform 0.7s ease-in-out;
      }
      :host(.abierto)>#nav,
      :host(.abierto)>#cierra {
        transform: translateX(0);
      }
      #nav header {
        display: flex;
        justify-content: flex-end;
      }
      #separador {
        display: none;
      }
      #principal {
        margin-left: 0 !important;
      }
    }
    @media screen and (min-width: 1000px) {
      #nav {
        width: var(--ancho-nav, 200px);
        box-sizing: border-box;
        background-color: var(--color-fondo, white);
      }
      #nav header, #abre {
        display: none;
      }
      #separador {
        cursor: col-resize;
        background-color: var(--color-fondo-divisor);
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='30'><path d='M2 0 v30 M5 0 v30 M8 0 v30' fill='none' stroke='black'/></svg>");
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        cursor: col-resize;
        position: fixed;
        top: 0;
        left: var(--ancho-nav, 200px);
        width: ${ANCHO_SEPARADOR}px;
        height: 100%;
        z-index: 1003;

        /* Evita que interfiera con drag & drop */
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      #separador.activo {
        background-color: var(--color-fondo-divisor-seleccionado);
      }
      #principal {
        margin-left: calc(var(--ancho-nav, 200px) + 10px);
      }
    }
    @keyframes desplaza {
      from {
        transform: translateX(150%);
      }
      to {
        transform: translateX(0);
      }
    }
  </style><div id=cierra class=cierra></div><nav id=nav><header><button class=cierra title="Cierra">&#x2715;</button></header><slot id=slotNav name=nav></slot></nav><div id=separador></div><div id=principal><div id=toolbar><button id=abre type=button title=Menú>&#x2630;</button><slot name=toolbar></slot></div><slot id=contenido></slot></div>`;