function towerBuilder(nFloors) {
	const floors = [];

	for (let i = 1; i <= nFloors; i++) {
		let pad = " ".repeat((2 * nFloors - 1 - (2 * i - 1)) / 2);
		let stars = "*".repeat(2 * i - 1);
		floors.push(pad + stars + pad);
	}

	return floors;
}

console.log(towerBuilder(3));
