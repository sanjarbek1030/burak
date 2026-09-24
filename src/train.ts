// MITASK-N
// Function Declaration

// 3rd attampt
function palindromeCheck(str: string): boolean{
  return str.split("").reverse().join("") === str
}

// 2rd attampt
function palindromeCheck2(str: string): boolean{
  const reverseStr: string = str.split("").reverse().join("");
  return reverseStr === str;
}

// 1rd attampt
function palindromeCheck3(str: string): boolean{
  let arr: string[] = str.split("");
  const arr_length: number = arr.length;
  let new_arr = [];
  for (let i = 0; i < arr_length; i++){
      new_arr.push(arr.pop())
  }
  return new_arr.join("") === str;
}

// Testing
// palindromeCheck 1
console.log(palindromeCheck("dad")) // true
console.log(palindromeCheck("son")) // false

// palindromeCheck 2
console.log(palindromeCheck2("radar")) // true
console.log(palindromeCheck2("camera")) // false

// palindromeCheck 3
console.log(palindromeCheck3("2002")) // true
console.log(palindromeCheck3("2001")) // false

// New array
const arr0920 = [1, 2, 3, 4];

// Define the structure of the objects inside final array
interface NumberSquare {
    number: number;
    square: number;
  }
  
  // Add types to the parameter (number[]) and return type (NumberSquare[])
  function getSquareNumbers(arr: number[]): NumberSquare[] {
    let newArr: NumberSquare[] = [];
  
    for (const elem of arr) {
      // Initialize the object matching interface shape directly
      let newObj: NumberSquare = {
        number: elem,
        square: elem * elem
      };
  
      newArr.push(newObj); 
    }
    
    return newArr;
  }
  

// Testing
// console.log(getSquareNumbers(arr0920));
