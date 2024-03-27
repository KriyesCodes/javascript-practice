function stepThroughWith(s) {
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) {
			return true;
		}
	}
	return false;
}

// if the string has consecutive double letter, it can step through, otherwise it cannot.
