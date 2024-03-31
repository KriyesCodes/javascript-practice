const uniqueInOrder = (iterable) => {
	if (iterable.length === 0) return [];

	const uniqueArr = [iterable[0]];

	for (let i = 1; i < iterable.length; i++) {
		if (iterable[i] !== iterable[i - 1]) {
			uniqueArr.push(iterable[i]);
		}
	}

	return uniqueArr;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
