let b = 4;
let c = "pp";
const d = 5;
c = "h"; // c === "h"
c += "gg"; // c = c + "gg"; c === "hgg"
b = d; // b === 5
b += d; // b = b + d; b === 10
b -= 2; // b = b - 2; b === 8
b *= 3; // b = b * 3; b === 24
b /= 3; // b = b / 3; b === 8
b %= 3; // b = b % 3; b === 2
//b **= 3; // b = b ** 3; b === 8