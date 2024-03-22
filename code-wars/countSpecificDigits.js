function countSpecDigits(integersList, digitsList) {
	const integerCounts = [];

	for (let i = 0; i < digitsList.length; i++) {
		const digitCounts = [digitsList[i], 0];
		const digitString = digitsList[i].toString();

		for (let j = 0; j < integersList.length; j++) {
			const integerString = integersList[j].toString();

			if (integerString.includes(digitString)) {
				for (let k = 0; k < integerString.length; k++) {
					if (digitString === integerString[k]) {
						digitCounts[1]++;
					}
				}
			}
		}

		integerCounts.push(digitCounts);
	}

	return integerCounts;
}

// let integersList = [1, 1, 2, 3, 1, 2, 3, 4];
// let digitsList = [1, 3];
// console.log(
// 	countSpecDigits(integersList, digitsList) ==
// 		[
// 			[1, 3],
// 			[3, 2],
// 		]
// );
// console.log(countSpecDigits(integersList, digitsList));

integersList = [-18, -31, 81, -19, 111, -888];
digitsList = [1, 8, 4];
// console.log(
// 	countSpecDigits(integersList, digitsList) ==
// 		[
// 			[1, 7],
// 			[8, 5],
// 			[4, 0],
// 		]
// );
console.log(countSpecDigits(integersList, digitsList));

// integersList = [-77, -65, 56, -79, 6666, 222];
// digitsList = [1, 8, 4];
// console.log(
// 	countSpecDigits(integersList, digitsList) ==
// 		[
// 			[1, 0],
// 			[8, 0],
// 			[4, 0],
// 		]
// );
// console.log(countSpecDigits(integersList, digitsList));
