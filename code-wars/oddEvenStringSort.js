function sortMyString(S) {
	const stringArr = S.split("");
	let evenStr = "";
	let oddStr = "";
	for (let i = 0; i < stringArr.length; i++) {
		i % 2 ? (oddStr += stringArr[i]) : (evenStr += stringArr[i]);
	}
	return `${evenStr} ${oddStr}`;
}

console.log(sortMyString("CodeWars")); // expect CdWr oeas
