function descendingOrder(n) {
	return parseInt(
		n
			.toString()
			.split("")
			.sort(function (a, b) {
				return b - a;
			})
			.join("")
	);
}

console.log(descendingOrder(103814810812));
console.log(descendingOrder(9111911919281011));
