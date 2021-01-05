/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const SHADOW_HTML = /* html */
  `<style>
    :host {
      display: block;
      font-family: Consolas, 'Courier New', monospace;
      white-space: pre;
    }
    table {
      margin-left: auto;
      margin-right: auto;
    }
    #nums {
      text-align: right;
      padding-right: 0.5rem;
      border-right: 1px solid black;
    }

    #cod {
      padding-left: 0.5rem;
    }
  </style><link rel="stylesheet" href="/css/material-icons.css"><table><tr><td colspan=2><button type=button title="Copiar al portapapeles"><span class="material-icons rem">content_copy</span></button></td></tr><tr><td id=nums></td><td id=cod><slot></slot></td></tr></table>`;