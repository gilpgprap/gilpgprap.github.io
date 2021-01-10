/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { CtrlDiapositiva } from "../../lib/CtrlDiapositiva.js";
import "./nav-local.js";

customElements.define("ctrl-diapositiva", class extends CtrlDiapositiva {
  get lista() {
    return (/* html */ `<nav-local></nav-local>`);
  }
});