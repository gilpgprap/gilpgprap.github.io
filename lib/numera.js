/** @type {HTMLElement[]} */
const arrNums = Array.from(document.querySelectorAll(".nums"));
for (const nums of arrNums) {
  const total = parseInt(nums.dataset.total, 10);
  let inner = "";
  for (let i = 1; i <= total; i++) {
    inner += /* html */ `<div>${i}</div>`;
  }
  nums.innerHTML = inner;
}