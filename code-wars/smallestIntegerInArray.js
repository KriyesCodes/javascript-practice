class SmallestIntegerFinder {
	findSmallestInt(args) {
		let smallest = args[0];

		for (let i = 1; i < args.length; i++) {
			if (args[i] < smallest) {
				smallest = args[i];
			}
		}

		return smallest;
	}
}
const sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]));
