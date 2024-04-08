/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 1) return strs[0];
	if (strs.length === 0) return "";

	strs.sort((a, b) => b.length - a.length);

	return strs.reduce((common, curr) => {
		common.slice(0, curr.length);
		for (let i = 0; i < curr.length; i++) {
			if (common[i] !== curr[i]) {
				return;
			}
		}
	});
};

let input = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(input));

input = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(input));
