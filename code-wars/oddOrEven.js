function oddOrEven(array) {
	const sum = array.reduce((acc, curr) => (acc += curr), 0);
	return sum % 2 ? "odd" : "even";
}

console.log(oddOrEven([1023, 1, 2]));
