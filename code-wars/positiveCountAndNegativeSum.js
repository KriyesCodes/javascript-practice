function countPositivesSumNegatives(input) {
	if (input === null || input.length === 0) return [];
	const sums = [0, 0];

	for (let i = 0; i < input.length; i++) {
		if (input[i] < 0) {
			sums[1] += input[i];
		} else if (input[i] > 0) {
			sums[0]++;
		}
	}

	return sums;
}
