function dnaStrand(dna) {
	const complement = {
		A: "T",
		T: "A",
		C: "G",
		G: "C",
	};

	let complementStr = "";

	for (let i = 0; i < dna.length; i++) {
		complementStr += complement[dna[i]];
	}

	return complementStr;
}

console.log(dnaStrand("ATTGC"));
