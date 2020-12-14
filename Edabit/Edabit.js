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
  //check if there are minuts or not
  let steps = 0;
  const arr = time.split(':')
  if (arr[0] !== '00'){
      arr[0] = parseFloat(arr[0])
      if (arr[0] === 1){
          steps = 2
      }
      if (arr[0] > 9){
          steps = 4
      }
      else if (arr[0] <= 9 && arr[0] !== 1){
          steps = 3
      }
  }
  else{
      if (arr[1] === '00'){
          steps = 0
      }
      else if (arr[1] === '30'){
          steps = 1
      }
      else{
          steps = 2
      }
  }

  //the +1 is for the start button
  return steps+1
}
// console.log(microwaveButtons('00:00'))
//microwaveButtons("00:30") ➞ 2


