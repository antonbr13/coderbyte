function last() {
	return "I am last!";
}

console.log('last() should return the string "I am last!" -->', last() === "I am last!");

function isEven(n) {
	if (n % 2 === 0) return true;
	return false;
}

console.log('isEven(2) should return true -->', isEven(2) === true)
console.log('isEven(3) should return false -->', isEven(3) === false)


// Using the JavaScript language, have the function firstReverse(str) take the str parameter being passed and return the string in reversed order. 

var afterMath = [];

function firstReverse(str) {
	var splitStr = str.split("");
	
	for(var i = 0; i < 0; i++) {
		return str.split("").reverse().join("");
	}
	
	
}
console.log(firstReverse("hey"));