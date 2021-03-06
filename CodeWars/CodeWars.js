//  1 --- Moving Zeros To The End
var moveZeros = function (arr) {
  // TODO: Program me
  //declare an array to store all our zeros from the original array
  const zeros = []

  //create a new array that take the original one and filter out the zeros
  let arrWithoutZ = arr.filter(el => el !== 0)

  //loop through arr
  for (let i = 0; i < arr.length; i++) {
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


//3 --- Simple Pig Latin
function pigIt(str) {
  //Code here
  const regex = /[a-z]/i
  return str.split(' ').map(word => {
    if (regex.test(word)) {
      word = word.slice(1) + word.slice(0, 1) + "ay"
    }
    return word
  }).join(' ')
}


//4 --- Detect Pangram
/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example,
the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
*/
function isPangram(string) {

  const alpabets = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
  const newString = string
    .split('')
    .filter(el => el !== " " && isNaN(el) && !symbols.test(el))
    .map(el => el = el.toLowerCase()).join('')

  return alpabets.split('').every(x => newString.includes(x))

}


//5 --- How Much?
//f the possible money is between m and n (m and n are inclusive)
//c is the price od each car he should be able to buy 9 cars and have 1 fortune left
//b is the price of each boat he shoud be able to buy 7 boats and have 2 fortune left
//input is m and n
//output array of arrays, each array has 3 strings: "M: f", "B: b", "C: c"
function howmuch(m, n) {
  // your code
  let c, b, f, i, len; const arr = [];
  i = m < n ? i = m : i = n;
  len = n > m ? len = n : len = m;

  for (i; i <= len; i++) {
    f = i;

    if (f % 9 === 1 && f % 7 === 2) {
      console.log('success')
      arr.push([`M: ${f}`, `B: ${Math.round(f / 7)}`, `C: ${Math.round(f / 9)}`])
    }
  }
  return arr
}
//so in this example money will be between 1 and 100 so we can buy 9 cars or 7 boats
//and have some money left


//6 --- Find the odd int
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
  //happy coding!
  const map = {};
  let rep = 0;
  for (let i = 0; i < A.length; i++) {
    let item = A[i]
    if (map[item] === undefined) {
      map[item] = rep
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (map[A[i]] !== undefined) {
      map[A[i]]++
    }
  }
  return parseInt(Object.entries(map).filter(el => el[1] % 2 !== 0)[0][0]);
}


//7 --- Catalog
/*
You are given a small extract of a catalog:
(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:
*/

function catalog(s, article) {
  // your code
  const arrOFArticles = s.replace(/\r/g, "").split(/\n/).filter(ar => ar !== '');
  const check = arrOFArticles.every(el => !el.includes(article))
  if (check) {
    return 'Nothing'
  }
  return arrOFArticles.filter(cat => cat.includes(article))
    .map(el => {
      return `${extractingName(el)} > prx: $${extractingPrice(el)} qty: ${extractingQuantity(el)}`
    }).join('\r\n')
}

function extractingName(arr) {
  let regx = /<name>(.|\n)*?<\/name>/

  return arr.match(regx)[0]
    .replace('<name>', '')
    .replace('</name>', '')
}

function extractingPrice(arr) {
  let regx = /<prx>(.|\n)*?<\/prx>/

  return arr.match(regx)[0]
    .replace('<prx>', '')
    .replace('</prx>', '')
}
function extractingQuantity(arr) {
  let regx = /<qty>(.|\n)*?<\/qty>/

  return arr.match(regx)[0]
    .replace('<qty>', '')
    .replace('</qty>', '')
}

//8 --- Is it a Set?
/*
set! is a card game where you compete with other players, to find out who can find a set of cards first.
Your task is to write a function that checks if a collection of three input cards qualifies as a set.
*/
function isValidSet(quantities, shapes, colours, patterns) {

  let first = quantities[0]
  const checkingQuantitiesSame = quantities.every(x => x === first)
  const checkingQuantitiesDiff = first !== quantities[1] && first !== quantities[2]
    && quantities[1] !== quantities[2]
  let second = shapes[0]
  const checkingShapesSame = shapes.every(x => x === second)
  const checkingShapesDiff = second !== shapes[1] && second !== shapes[2]
    && shapes[1] !== shapes[2]

  let third = colours[0]
  const checkingColiursSame = colours.every(x => x === third)
  const checkingColiursDiff = third !== colours[1] && third !== colours[2]
    && colours[1] !== colours[2]

  let fourth = patterns[0]
  const checkingPatternsSame = patterns.every(x => x === fourth)
  const checkingPatternsDiff = fourth !== patterns[1] && fourth !== patterns[2]
    && patterns[1] !== patterns[2]

  if ((checkingQuantitiesDiff || checkingQuantitiesSame) &&
    (checkingShapesDiff || checkingShapesSame) &&
    (checkingColiursSame || checkingColiursDiff) &&
    (checkingPatternsSame || checkingPatternsDiff)) {
    return true
  }
  else {
    return false
  }
}

//9 --- valid Message
function isAValidMessage(message){
  // your code
  if (message === '') return true
  if (!isNaN(message[message.length-1])) return false
  const regex = /\d+[a-z]+/gi
  
  const arr =  message.match(regex)
  const isValid = arr.every(x => {
    const { digit, word } = splitNumAndStr(x)
    if (parseInt(digit) === word.length) return true
  })
  
  return isValid
}
function splitNumAndStr(str){
  let digit = '', word = ''
  for (let i = 0; i < str.length; i++){
    if (!isNaN(str[i])){
      digit += str[i]
    }
    else{
      word += str[i]
    }
  }
  return{
    digit,
    word
  }
}

//10 --- Error correction #1 - Hamming Code
/*
Background information
The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.
In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:

[ + ] It's simple to implement
[ + ] Compared to other versions of hamming code, we can correct more mistakes
[ - ] The size of the input triples
*/

//encode
function encode(text) {
  const bits = []
  
  for (let i = 0; i < text.length; i++){
    bits.push(text.charCodeAt(i))
  }
  console.log(bits)
  //triple each bit 3 times
  return bits.map(bit => (bit.toString(2) + '').padStart(8, '0'))
  .map(bit => {
    return bit.split('').map(bit => {
      bit = bit + bit + bit
      return bit
    }).join('')
  }).join('');
}

//decode
function decode(bits) {
  const regex = /\d{1,3}/g
  const regex2 = /\d{1,8}/g

  //to triples
  const ascii = bits
  const correctedBits = bits.match(regex).map(char => {
    //check the most occured characters and replace it with one
    //for example 001 => 0 because 0 is the most occured characters
    let zeros = '', ones = '';
   
    char.split('').forEach(char => {
      if (char === '1'){
        ones += char
      }
      else if (char === '0'){
        zeros += char
      }
    })
     return zeros.length > ones.length? '0':'1'
  }).join('')

  const backToNormal = correctedBits.match(regex2).map(byte => String.fromCharCode(parseInt(byte, 2))).join('')

  return backToNormal
}

console.log(isAValidMessage('3hey5hello2hi5'))