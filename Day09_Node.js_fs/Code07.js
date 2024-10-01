const h = require("fs");

const data = h.readFileSync("myFile2.txt");

console.log(data);

console.log("After applying .toString() function");

console.log(data.toString());