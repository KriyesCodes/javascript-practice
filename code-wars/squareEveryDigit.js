function squareDigits(num) {
	return parseInt(
		num
			.toString()
			.split("")
			.map((char) => char.toString() ** 2)
			.join("")
	);
}

console.log(squareDigits(3212));
