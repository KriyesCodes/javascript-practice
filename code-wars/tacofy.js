function tacofy(word) {
	const ingredients = {
		t: "tomato",
		l: "lettuce",
		c: "cheese",
		g: "guacamole",
		s: "salsa",
	};
	const taco = word
		.split("")
		.map((char) => {
			if (/[aeiou]/i.test(char)) {
				return "beef";
			}
			if (/[tlcgs]/i.test(char)) {
				return ingredients[char.toLowerCase()];
			}
			return "";
		})
		.filter((e) => e !== "");
	taco.unshift("shell");
	taco.push("shell");
	return taco;
}

let word = "hello";
console.log(`${word} => ${tacofy(word)}`);
word = "hot sauce";
console.log(`${word} => ${tacofy(word)}`);
word = "cheese";
console.log(`${word} => ${tacofy(word)}`);
word = "beans";
console.log(`${word} => ${tacofy(word)}`);
