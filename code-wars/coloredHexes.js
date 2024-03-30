function hexColor(codes) {
	if (codes === "") return "black";
	const [red, green, blue] = codes.split(" ").map((value) => parseInt(value));

	if (red === green && red === blue) {
		if (red === 0) {
			return "black";
		} else {
			return "white";
		}
	}

	if (red > green && red > blue) return "red";
	if (green > red && green > blue) return "green";
	if (blue > red && blue > green) return "blue";
	if (red === blue) return "magenta";
	if (green === red) return "yellow";
	if (blue === green) return "cyan";

	return "black";
}

console.log(hexColor("000 000 000"));
