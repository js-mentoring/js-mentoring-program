/**
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
	return chars.map(el => el.name);
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
	chars.forEach(el => console.log(el.name));
}

/**
 * return an array of non-human (species !== 'human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
	return chars.filter(el => el.species !== 'Human');
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
	return chars.find(el => el.name === 'Jerry Smith');
}

/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
	return chars.every(el => el.species === 'Human');
}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
	return chars.some(el => el.type === 'Fish-Person');
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
	let min = arr[0];
	for (element of arr) {
		if (element < min) {
			min = element;
		}
	}
	return arr.indexOf(min);
}

module.exports = {
	getCharactersNames,
	printCharacterNames,
	getNonHumanCharacters,
	getJerryInfo,
	isAllHuman,
	isAnyFishPerson,
	minItem
};