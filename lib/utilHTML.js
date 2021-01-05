/** Asigna el título de la página usando el valor de h1.
 * @param {string} app nombre de la app. */
export function setTitle(app) {
  let h1 = document.querySelector("h1");
  if (h1) {
    document.title = `${h1.textContent} - ${app}`;
  }
}