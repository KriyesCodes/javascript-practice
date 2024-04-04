function accum(s) {
	return s
		.split("")
		.map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
		.join("-");
}

console.log(accum("RqaEzty"));
