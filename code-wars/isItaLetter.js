// const isItLetter = (character) => /(?=\D)(?=\w)(?=[^_])/.test(character); // attempt 1
const isItLetter = (char) => /[a-z]/i.test(char); // attempt 2

let char = "A";
console.log(`${char} is ${isItLetter(char) ? "letter" : "not a letter"}`);
char = "4";
console.log(`${char} is ${isItLetter(char) ? "letter" : "not a letter"}`);
char = "@";
console.log(`${char} is ${isItLetter(char) ? "letter" : "not a letter"}`);
char = "=";
console.log(`${char} is ${isItLetter(char) ? "letter" : "not a letter"}`);
char = "x";
console.log(`${char} is ${isItLetter(char) ? "letter" : "not a letter"}`);
char = "_";
console.log(`${char} is ${isItLetter(char) ? "letter" : "not a letter"}`);
