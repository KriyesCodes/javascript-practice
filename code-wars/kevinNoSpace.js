function spacey(array) {
	const runningOut = [];
	for (let i = 0; i < array.length; i++) {
		runningOut.push(array.slice(0, i + 1).join(""));
	}
	return runningOut;
}

console.log(spacey(["kevin", "has", "no", "space"]));
