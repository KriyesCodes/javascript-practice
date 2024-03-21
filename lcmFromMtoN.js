function mnLCM(m, n) {
	let smol = 0;
	let beeg = 0;
	[smol, beeg] = [m, n].sort(function (a, b) {
		return a - b;
	});

	const range = [];
	const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];

	for (let i = smol; i <= beeg; i++) {
		range.push(i);
	}

	let product = 1;

	let i = 0;

	while (i < primes.length) {
		let hasDivided = false;

		for (let j = 0; j < range.length; j++) {
			if (range[j] % primes[i] === 0) {
				range[j] = range[j] / primes[i];
				hasDivided = true;
			}
		}

		if (hasDivided) {
			product *= primes[i];
		} else {
			i++;
		}
	}

	for (let i = 0; i < range.length; i++) {
		if (range[i] > 1) {
			product *= range[i];
		}
	}

	return product;
}

console.log(mnLCM(1, 2));
console.log(mnLCM(1, 5));
console.log(mnLCM(5, 1));
console.log(mnLCM(1, 10));
console.log(mnLCM(5, 15));
