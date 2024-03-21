function SeriesSum(n) {
	// Happy Coding ^_^
	if (n === 0) return "0.00";
	if (n === 1) return "1.00";
	let sum = 0;

	for (let i = 0; i < n; i++) {
		sum += 1 / (3 * i + 1);
	}

	return sum.toFixed(2);
}

console.log(SeriesSum(58)); // 2.40
console.log(SeriesSum(192)); // 2.80
