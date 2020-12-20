// 1 -- Return the Sum of the Two Smallest Numbers
function sumTwoSmallestNums(arr) {

    //declare a new array to hold the the old sorted and filtered array
    const newArr = arr.sort((a, b) => a-b).filter(number => number > 0 )

    //return the sum
    return newArr[0] + newArr[1]


}


// 2 -- XOR Swap Algorithm
/**
 * Your job is to switch 2 variables using the XOR operator, 
 * which means your return statement should be return[a, b],
 * but the value stored in the variables need to be switched.
 */
function xor(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    return [a, b]
}


// 3 -- Capitalize the First Letter of Each Word
function makeTitle(str) {

    //use the split method to turn out string to an array
    //use the map method on the array to make the first letter of each word upperCase
    //join the array and return a string
    return  str.split(' ').map(word => word = word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ')
}


// 4 -- Microwave Buttons
/*
Create a function that takes an argument time and returns the shortest amount of button presses 
to set the given time on the microwave oven. The microwave oven timer always starts at 00:00.
*/
function microwaveButtons(time) {
  let steps = 0;
  const arr = time.split(':')
	//no miuts
	if (arr[1] !== '00' && arr[0] === '00'){
		if (arr[1] === '30'){
		steps = 1
	  }
		if (parseFloat(arr[1]) > 30 || parseFloat(arr[1]) < 30){
            steps = 2
		}
	}
	if (arr[0] !== '00'){
        if (parseInt(arr[0]) === 1){
            steps = 2
        }
		if (parseFloat(arr[0]) < 10 && parseInt(arr[0]) > 1){
            steps = 3
		}
		else if (parseInt(arr[0]) >= 10){
			steps = 4
		}
    }
    else if (arr[1] === '00' && arr[0] === '00'){
        steps = 0
    }
	return steps+1
}


//5 --- Neutralisation
function neutralise(s1, s2) {
	let newStr = ''
	for (let i = 0; i < s1.length; i++){
		if (s1[i] === s2[i]){
			newStr += s1[i]
		}
		else if(s1[i] !== s2[i]){
			newStr += '0'
		}
	}
	return newStr
}


//6 --- Equality of 3 Values
/*
Create a function that takes three integer arguments (a, b, c) and returns the amount of 
integers which are of equal value.
*/
function equal(a, b, c) {
	//if only 2 value equal each others we return 2
	//if there is no equality at all we return 0
	//if all the values equals each others we return 3
    let eqs = 0
    let arr = [a, b, c]
	
    let set = [...new Set(arr)]
    if (set.length === 2){
        eqs = 2
    }
    else if (set.length === 1){
        eqs = 3
    }
    
    return eqs
}


//7 --- Iterated Square Root
/*
The iterated square root of a number is the number of times the square root function must 
be applied to bring the number strictly under 2.
Given an integer, return its iterated square root. Return "invalid" if it is negative.
*/
function iSqrt(n) {
    let t = 0
    let count = 0
    
    if (n < 0) return 'invalid'
	while (n >= 2){
        t = Math.sqrt(n)
        n = t
        count++
    }
    return count
}



//8 --- Solving Exponential Equations With Logarithms
function solveForExp(a, b) {
	return Math.log(b)/Math.log(a)
}
console.log(solveForExp(2, 1024))
