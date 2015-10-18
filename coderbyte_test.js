// function last() {
// 	return "I am last!";
// }

// console.log('last() should return the string "I am last!" -->', last() === "I am last!");

// function isEven(n) {
// 	if (n % 2 === 0) return true;
// 	return false;
// }

// console.log('isEven(2) should return true -->', isEven(2) === true)
// console.log('isEven(3) should return false -->', isEven(3) === false)

// // ____________________



// // Using the JavaScript language, have the function firstReverse(str) take the str parameter being passed and return the string in reversed order. 

// function firstReverse(str) {
// 	var splitStr = str.split("");
// 	var afterMath = [];
	
// 	for(var i = 0; i < 0; i++) {
// 		afterMath.unshift([])
// 	}
	
	
// }
// // console.log(firstReverse("hey"));


// Short exercises
// ________

function elementType(of) {
	return typeof(of);
}
// console.log(elementType(3));




function b() {
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]); 
	}
}


// b(3, 5, 6);




function hasA(str) {
	for (var i = 0; i < str.length; i++) {
		if ( str[i] === "A" ) {
			return true;
		}
	}
	return false;
}
// console.log(hasA("saBdfased"));
// console.log(hasA("saBAdfased"));
// console.log(hasA("AsaBdfased"));
// console.log(hasA(""));
// console.log(hasA(true));
// console.log(hasA(43));



function hasB(str) {
	if (str.indexOf("a") === -1) {
		return false;
	}
	return true;
	
	
}

// console.log(hasB("dssfsdfsdfs"));
// console.log(hasB("sdfsfsasdfs"));


function capitalizeA(str) {
	var strSplit = str.split("");
	
	for (var i = 0; i < strSplit.length; i++ ) {
		if (strSplit[i] === "a") {
			strSplit[i] = "A";
		}
		
	}
	return strSplit.join('');
}


// console.log(capitalizeA("usa gov sucks"));
// console.log(capitalizeA("NAB"));
// console.log(capitalizeA(""));
// console.log(capitalizeA());
// console.log(capitalizeA(5));



// Objects
// ________________________________

var test = {
	school: "hs" ,
	name: "anton" ,
	team: "falcons"
}

var test2 = {}

var test3 = {
	school: "hs" ,
	team: "falcons"
	
}
var test4 = 67;

function containsAnton(obj) {
	for (var p in obj) {
		if (obj[p] === "anton"){
		return true;
		}
	}
	return false;
}
console.log(containsAnton(test));
console.log(containsAnton(test2));
console.log(containsAnton(test3));
console.log(containsAnton(test4));