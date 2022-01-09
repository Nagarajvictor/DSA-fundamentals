const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question( name => {
    console.log( ${name}!)
    readline.close()
  })

  let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
  
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  } 
  
  
  findPermutations('aabm')