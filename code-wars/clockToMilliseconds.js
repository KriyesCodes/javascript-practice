function past(h, m, s) {
	return 1000 * (s + 60 * (m + 60 * h));
}

console.log(past(0, 1, 1));
