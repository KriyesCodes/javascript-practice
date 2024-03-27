function strong(n) {
	let sumOfFactorials = 0;
	const digits = n
		.toString()
		.split("")
		.map((c) => parseInt(c));
	for (let i = 0; i < digits.length; i++) {
		let digitFactorial = 1;
		for (let j = 1; j <= digits[i]; j++) {
			digitFactorial *= j;
		}
		sumOfFactorials += digitFactorial;
	}
	return sumOfFactorials === n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(145));
console.log(strong(48));
