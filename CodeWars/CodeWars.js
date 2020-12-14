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
  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

  
