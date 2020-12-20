//  1 --- Moving Zeros To The End
var moveZeros = function (arr) {
    // TODO: Program me
    //declare an array to store all our zeros from the original array
    const zeros = []

    //create a new array that take the original one and filter out the zeros
    let arrWithoutZ = arr.filter(el => el !== 0)

    //loop through arr
    for (let i = 0; i < arr.length; i++){
      let item = arr[i]

      //storing all the zeros
      if (item === 0) zeros.push(item)
    }

    //concat the zeros at the end of the array that has no zeros
    arrWithoutZ = arrWithoutZ.concat(zeros)
    return arrWithoutZ
  }
  
  
  
  //2 --- Rot13
  /*
  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters
   after it in the alphabet. ROT13 is an example of the Caesar cipher.
  */
  
//replace a letter
// a letter with the letter 13 letters after it in the alphabet
function rot13(message) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const regEx = /[a-z]/i;
  if (message.length === 0) return 
  let newL = message;
  let cipher = message
    .split('').map((l, i) => {
      l = l.toLowerCase()
      let indexOfLetter = alphabets.indexOf(l) + 13;
      indexOfLetter > 26 ? (indexOfLetter -= 26) : indexOfLetter;

      if (regEx.test(l)) {
        l = alphabets[indexOfLetter];
      }
      return l;
    })
    .join("");

  for (let i = 0; i < cipher.length; i++) {
    if (newL[i] === newL[i].toLowerCase()) {
      cipher = cipher.replace(cipher[i], cipher[i].toLowerCase())
    } else if (newL[i] === newL[i].toUpperCase()) {
      cipher = cipher.replace(cipher[i], cipher[i].toUpperCase())
    }
  }
 return cipher
}
console.log(rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
// let countdown;
// function timer(seconds){
//   let now = Date.now()
//   let then = now + seconds*1000 
//   countdown = setInterval(() => {
//     let secondsLeft = Math.round((then - Date.now())/1000)
//     secondsLeft--
//     console.log(secondsLeft)
//     if (secondsLeft <= 0) clearInterval(countdown)
    
//   }, 1000)
// }



