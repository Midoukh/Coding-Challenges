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
  
  
  // 2 --- The observed PIN
  function getPINs(observed) {
    // TODO: This is your job, detective!
    const combs = [];
    observed = observed.toString()

    let one = ['1', '2', '4']
    let three = ['3', '2', '6']
    let five = ['5', '4', '8', '2', '6']
    let seven = ['7', '4', '8']

    let len = one.length * three.length * five.length * seven.length

//    for (let i = 0; i < one.length; i++){
//       let number = observed[i]

//       if (number === '1'){
//         combs.push(observed, observed.replace(number, one[1]), observed.replace(number, one[2]))
        
//       }
//    }
//    for (let i = 0; i < three.length; i++){
//     let number = observed[i]

//     if (number === '3'){
//       combs.push(observed.replace(number, three[1]), observed.replace(number, three[2]), observed.replace(number, three[0]))
      
//     }
//  }
      for (let i = 0; i < len; i++){
        let number = observed[i]

              if (number === '1'){
                combs.push(observed, observed.replace(number, one[1]), observed.replace(number, one[2]))
                
              }
              if (number === '3'){
                      combs.push(observed.replace(number, three[1]), observed.replace(number, three[2]), observed.replace(number, three[0]))
                      
              }
              if (number === '5'){
                combs.push(observed.replace(number, five[1]), observed.replace(number, five[2]), observed.replace(number, five[0])
                , observed.replace(number, five[3]), observed.replace(number, five[4]))
                
              }
              if (number === '7'){
                combs.push(observed.replace(number, seven[1]), observed.replace(number, seven[2]), observed.replace(number, seven[0]))
                
              }
      }
    return combs
  }
  console.log(getPINs(1375))

  
