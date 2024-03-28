function duplicateEncode(word) {
	const lower = word.toLowerCase();
	const letters = {};

	for (let i = 0; i < lower.length; i++) {
		if (lower[i].toLowerCase() in letters) {
			letters[lower[i]]++;
		} else {
			letters[lower[i]] = 1;
		}
	}

	let brackets = "";

	for (let i = 0; i < lower.length; i++) {
		if (letters[lower[i]] === 1) {
			brackets += "(";
		} else {
			brackets += ")";
		}
	}

	return brackets;
}

let arg = "din";

console.log(duplicateEncode(arg));
arg = "recede";
console.log(duplicateEncode(arg));
arg = "Success";
console.log(duplicateEncode(arg));
arg = "(( @";
console.log(duplicateEncode(arg));
