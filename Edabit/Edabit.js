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
console.log(makeTitle("This is a title"))
//makeTitle("This is a title") ➞ "This Is A Title"