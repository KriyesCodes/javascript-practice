function findOdd(A) {
	const numberCount = {};

	for (let i = 0; i < A.length; i++) {
		if (A[i] in numberCount) {
			numberCount[A[i]]++;
		} else {
			numberCount[A[i]] = 1;
		}
	}

	for (const [key, value] of Object.entries(numberCount)) {
		if (value % 2 == 1) {
			return parseInt(key);
		}
	}
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
