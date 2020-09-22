/** @param {*} referencia 
 * @returns {boolean}*/
export function definido(referencia) {
  return referencia !== null && referencia !== undefined
    && (typeof referencia !== "number" || !isNaN(referencia));
}
/** @template T
 * @param {T} valor 
 * @param {T} def 
 * @returns {T}*/
export function coal(valor, def) {
  return definido(valor) ? valor : def;
}
/** Codifica un valor para que escape los caracteres especiales y no se
 * pueda interpretar como HTML. Esta técnica evita la inyección de código.
 * @param {any} valor
 * @returns {string} un texto que no puede interpretarse como HTML. */
export function cod(valor) {
  return coal(valor, "").toString()
    .replace(/[<>"']/g,
      /** @param {string} letra */
      letra => {
        switch (letra) {
          case "<": return "&lt;";
          case ">": return "&gt;";
          case '"': return "&quot;";
          case "'": return "&#039;";
          default: return letra;
        }
      });
}