function sortArray(array) {
	const isOdd = [];
	const oddNumbers = [];

	for (let i = 0; i < array.length; i++) {
		const isOddNumber = Boolean(array[i] % 2);
		isOdd.push(isOddNumber);
		if (isOddNumber) {
			oddNumbers.push(array[i]);
		}
	}

	oddNumbers.sort(function (a, b) {
		return a - b;
	});

	let oddNumberIndex = 0;
	for (let i = 0; i < array.length; i++) {
		if (isOdd[i]) {
			array[i] = oddNumbers[oddNumberIndex];
			oddNumberIndex++;
		}
	}

	return array;
}

console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
