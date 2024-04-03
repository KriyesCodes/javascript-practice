var isSquare = function (n) {
	return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(-1));
console.log(isSquare(4));
console.log(isSquare(3));
console.log(isSquare(0));
