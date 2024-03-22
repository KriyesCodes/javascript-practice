// function pisano(n) {
// 	const fibs = [0, 1, 1];
// 	const pisanos = [0, 1, 1];

// 	let pisanoCount = 0;
// 	const matchStartIndex = 0;
// 	let matchIndex = 0;
// 	let matchEndIndex = pisanos.length - 1;

// 	let ttl = 1000;

// 	while (matchIndex < matchEndIndex) {
// 		fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

// 		const piOfCurrentNum = fibs[fibs.length - 1] % n;
// 		pisanos.push(piOfCurrentNum);

// 		// does piOfCurrentNum equal matchIndex value?
// 		// if matching, matchIndex++, pisanoCount++
// 		// if not matching, matchIndex reset to start, matchEndIndex set to current index
// 		// if matchIndex equals matchEndIndex, break out of loop
// 		if (piOfCurrentNum === pisanos[matchIndex]) {
// 			matchIndex++;
// 			pisanoCount++;
// 		} else {
// 			matchIndex = matchStartIndex;
// 			matchEndIndex = pisanos.length - 1;
// 			pisanoCount = 0;
// 		}

// 		if (ttl < 0) {
// 			break;
// 		} else {
// 			ttl--;
// 		}
// 		console.log(pisanos);
// 	}

// 	return pisanoCount + 1;
// }

function pisano(n) {
	const fibs = [0, 1];
	const pisanos = [0, 1];

	while (true) {
		fibs.push((fibs[fibs.length - 1] + fibs[fibs.length - 2]) % n);

		if (fibs[fibs.length - 1] === 1 && fibs[fibs.length - 2] === 0) {
			pisanos.pop();
			break;
		} else {
			pisanos.push(fibs[fibs.length - 1]);
		}
	}

	return pisanos.length;
}

console.log(pisano(3)); //8
console.log(pisano(4)); //6
console.log(pisano(5)); //20
console.log(pisano(6)); //24
console.log(pisano(7)); //16
console.log(pisano(8)); //12
console.log(pisano(9)); //24
console.log(pisano(10)); //60
