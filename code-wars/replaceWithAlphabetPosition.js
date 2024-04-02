function alphabetPosition(text) {
	const textLowered = text.toLowerCase();
	const positions = [];

	for (let i = 0; i < textLowered.length; i++) {
		const charCode = textLowered[i].charCodeAt(0);

		if (charCode >= 97 && charCode <= 122) {
			positions.push(charCode - 96);
		}
	}
	return positions.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
