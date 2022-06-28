/**
 * Materials: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 */

/**
 * TODO create variable named int and set value equal to 1
 */
var a = 1;
console.log(a);

/**
 *  TODO create variable named int2 and set value equal int plus 1
 */
var int = 1;
var int2 = int + 1;
console.log(int2);
/**
 * TODO create variable named str and set value equal to "John"
 */
var str = "Jhon"
console.log(str)
/**
 * TODO create variable named str2 and set value equal str plus " Dou"
 */
var str = "Jhon "
var str2 = str + "Dou"
console.log(str2)
/**
 * TODO create variable named bool and set value of equality comparison of int and int2 variables
 */
var int = 1<2
var int2 = 2<1
var bool = int
var bool2 = int2
console.log(bool)
console.log(bool2)


/**
 * TODO create variable named arr and set value array of numbers from 1 to 5
 */

var arr = [1,2,3,4,5]
console.log(arr)
/**
 * TODO create variable named fifth and set value as element of array with index 4
 */
var arr = [1,2,3,4,{key:'fifth'}]
console.log(arr[4])

/**
 * TODO create variable named human and set value as object with key firstName and value "John"
 */

var human = Object;

var firstName = "Jhon"

Object = firstName;

console.log(firstName)

/**
 * TODO set new key of human object named lastName and value "Dou"
 */

var human = Object;
var lastName = "Dou";
Object = lastName;
console.log(lastName)

/**
 * TODO set new key of human object named fullName and value of concatenation of firstName and lastName values
 */
var human = Object;
var fullName = "Jhon Doe"
// console.log(fullName)
var firstName = "Jhon "
var lastName = "Dou"
var fullName = firstName + lastName
console.log(fullName)


module.exports = {
  int,
  int2,
  str,
  str2,
  bool,
  arr,
  fifth,
  human
};