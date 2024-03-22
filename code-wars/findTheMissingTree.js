function findTheMissingTree(trees) {
	const treeCounts = {};

	for (let i = 0; i < trees.length; i++) {
		if (trees[i] in treeCounts) {
			treeCounts[trees[i]]++;
		} else {
			treeCounts[trees[i]] = 1;
		}
	}

	const min = treeCounts[trees[0]];

	for (const [key, value] of Object.entries(treeCounts)) {
		if (value < min) {
			return parseInt(key);
		}
	}

	return trees[0];
}

console.log(findTheMissingTree([11, 2, 3, 3, 3, 11, 2, 2]));
