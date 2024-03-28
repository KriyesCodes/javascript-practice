const squareSum = (numbers) => numbers.reduce((sum, num) => sum + num * num, 0);

console.log(squareSum([4, 5, 1, 2]));
console.log(squareSum([1, 2]));
