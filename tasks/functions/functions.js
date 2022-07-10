/**
 * Learning materials:
 * Function declaration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * Function expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

/**
 * write function that will do sum for two numbers
 *
 */
function sum(a=0, b=0) {
return a+b;
}
const result= sum(2,5);
console.log(result);

const sum1=(a,b)=>a+b;
console.log(sum1(2,5));


/**
 * write function that returns firstName and lastName of a given object
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */

const object={
	firstName: "Jenna",
	lastName: "Luchynyn"

}
function getFullName(object) {
	return object.firstName+" "+object.lastName;

}

console.log(getFullName(object));


/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	if(n%2==0){
		return true;}
	return false;
}

console.log(isOdd(8));

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "two", "three"])) // one
 */


function getShortest(wordArray) {
	let lenghtOfTheShortestWord=wordArray[0].length;
	let shortestWord=wordArray[0];
	for(let el of wordArray){
		if(el.length<lenghtOfTheShortestWord){
			shortestWord=el;
		}	
	}
	return shortestWord;
}
	console.log(getShortest(["one", "two", "three"]));
	
	




/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */
function getGoogle(n) {
	let i=0;
	let o='';
	while (i<n){
		o+='o';
		i++;
	}
	return "g"+o+"gle";
}

console.log(getGoogle(7));

/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default ones)
 * @example
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName=null, lastName=null, age = 0) {
 const person={
	firstName:firstName,
	lastName:lastName,
	age:age
}
return person;

}
console.log(getUser());

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

const arr=[{direction: "Kiyv - Minsk", distance: 567}, 
{direction: "Kiyv - Paris", distance: 2402}];

function getTotalPath(path) {
	let sum=0;
for(let el of path){
sum+=el.distance;
}
return sum;
}
console.log(getTotalPath(arr));

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {

	return function (amount) {
		return amount-(percentage/100*amount);
	};
}
const discount10 = discountFunction(10);
console.log(discount10(90));
console.log(discount10(100)); 
/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys:function() {
		for(let key in myObject){
			console.log(myObject[key]);
		}
	},
	call:function() {
		console.log('My name is',this.name, this.lastName,'and I am',this.age,'years old. My best friend is',this.friends[2]);
	}

};
myObject.keys();
myObject.call();

module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};