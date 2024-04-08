function score(dice) {
	const throws = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	};

	for (let i = 0; i < dice.length; i++) {
		throws[dice[i]]++;
	}

	let points = 0;

	for (let i = 1; i <= 6; i++) {
		if (throws[i] === 3) {
			if (i === 1) {
				points += 1000;
			} else {
				points += i * 100;
			}
		} else if (throws[i] < 3 && throws[i] > 0) {
			if (i === 1) {
				points += throws[i] * 100;
			}
			if (i === 5) {
				points += throws[i] * 50;
			}
		}
	}

	return points;
}

console.log(score([2, 4, 4, 5, 4]));
