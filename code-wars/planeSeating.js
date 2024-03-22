function planeSeat(a) {
	const yAxisQuadrants = {
		1: "Front",
		2: "Middle",
		3: "Back",
	};

	const xAxisQuadrants = {
		A: "Left",
		B: "Left",
		C: "Left",
		D: "Middle",
		E: "Middle",
		F: "Middle",
		G: "Right",
		H: "Right",
		K: "Right",
	};

	const num = a.slice(0, -1);
	const letter = a.slice(-1);

	console.log(num);

	if (num > 60 || !(letter in xAxisQuadrants)) return "No Seat!!";

	const numQuadrantIndex = Math.ceil(num / 20);

	return `${yAxisQuadrants[Math.ceil(num / 20)]}-${xAxisQuadrants[letter]}`;
}

console.log(planeSeat("2B"));
console.log(planeSeat("20B"));
