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