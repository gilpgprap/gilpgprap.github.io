// Igual que (===)
console.log("h" === "gh"); // false
console.log("h" === "h"); // true
console.log(3 === 3); // true
console.log(3 === -3); // false
// Diferente de (!==)
console.log("h" !== "gh"); // true
console.log("h" !== "h"); // false
console.log(3 !== 3); // false
console.log(3 !== 8); // true
// Menor que (<)
console.log("ah" < "aa"); // false
console.log("ah" < "ah"); // false
console.log("ah" < "ai"); // true
console.log(3 < 0); // false
console.log(3 < 3); // false
console.log(3 < 8); // true
// Menor o igual que (<=)
console.log("ah" <= "aa"); // false
console.log("ah" <= "ah"); // true
console.log("ah" <= "ai"); // true
console.log(3 <= 0); // false
console.log(3 <= 3); // true
console.log(3 <= 8); // true
// Mayor que (>)
console.log("ah" > "aa"); // true
console.log("ah" > "ah"); // false
console.log("ah" > "ai"); // false
console.log(3 > 0); // true
console.log(3 > 3); // false
console.log(3 > 8); // false
// Mayor o igual que (>=)
console.log("ah" >= "aa"); // true
console.log("ah" >= "ah"); // true
console.log("ah" >= "ai"); // false
console.log(3 >= 0); // true
console.log(3 >= 3); // true
console.log(3 >= 8); // false