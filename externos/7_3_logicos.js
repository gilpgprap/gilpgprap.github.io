console.log(false && true); // false
console.log(false && false); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(true && "hola"); // hola
console.log(3 && "hola"); // hola
console.log(0 && "hola"); // 0
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("gg" || "yy"); // gg
console.log("" || "bb"); // bb
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!"h"); // false
console.log(true ? 3 : 8); // 3
console.log(false ? 3 : 8); // 8
console.log("h" ? 3 : 8); // 3
console.log("" ? 3 : 8); // 8