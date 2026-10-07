/*
Project Standards:
1. Logging Standards
2. Naming Standards:
  camelCase: functions, methods, variables
  PascalCase: classes
  kebab-case: folders, files
  snake_case: css
3. Error Handling
*/

/*
API Turlari:
1. Traditional API
2. Rest API
3. GraphQL API
4...
*/ 

/*
Traditional Front-end Dev: SSR with EJS
Modern Front-end Dev: SPA with REACT
*/

/*
SESSIONlar xislatlari:
1. request join
2. self destroy
*/

/*
VALIDATIONS:
1. Front-End Validation
2. Back-End Validation
3. Data-Base Validaion
*/

// MITASK-S
// Define the Function
const missingNumber = (arr: number[]) => {
  arr.sort((a, b) => a - b);

  let first = arr[0];
  let last = arr[arr.length-1];

  while (first < last){
    if (!arr.includes(first)){
      return first;
    }
    first++
  }
  return arr.length;
};

// Testing
console.log(missingNumber([3, 0, 1])); // 2 is missing
console.log(missingNumber([3, 4, 6, 2, 5, 9, 7, 1])); // 8 is missing
console.log(missingNumber([0, 1, 2, 3])); // none is missing; returns n-th
console.log(missingNumber([4, 5, 8, 7])); // 6 is missing

// WRONG SOLUTION
const missingNumbers = (arr: number[]) => {

  let first = arr[0];
  let last = arr[arr.length-1];
  let newArr = [];

  if ( first > last ) {
    while ( first >= last ) {
      newArr.push( first );
      first--;
    }
  } else if ( first < last ) {
    while( first <= last ) {
      newArr.push( first );
      first++;
    }
  } else {
    return "Invalid argument: First and last elements cannot be equal."
  }
  return newArr;
}

// Testing
// console.log(missingNumbers([3, 0, 1])); // [ 3, 2, 1 ]
// console.log(missingNumbers([5, 3, 1])); // [ 5, 4, 3, 2, 1 ]
// console.log(missingNumbers([5, 0, 1])); // [ 5, 4, 3, 2, 1 ]
// console.log(missingNumbers([1, 0, 0, 5])); // [ 1, 2, 3, 4, 5 ]
// console.log(missingNumbers([5, 0, 0, 0, 5])); // Invalid argument...


// MITASK-R
// Define the Function
// ikta bir-xonali son va qo'shish; 1+2
const calculate1 = (str: string): number => Number(str[0])+Number(str[2]);

// ikta ko'p-xonali son va qo'shish 10+20
const calculate2 = (str: string): number => {
  const [a, b] = str.split('+');
  return Number(a) + Number(b);
};

// ko'p ko'p-xonali son va ko'p qo'shish; 10+2+3
const calculate3 = (str: string): number => {
  const arr = str.split('+');
  let sum = 0;
  for(const char of arr){
    sum += Number(char);
  }
  return(sum);
};

// Testing
// console.log(calculate1("1+2")); // 3
// console.log(calculate2("10+20")); // 30
// console.log(calculate3("10+2+3")); // 15


// MITASK-Q
// Define the Function
const hasProperty = (obj: object, str: string): boolean => str in obj;

// Define the car object
const carObj = {name: "BMW", model: "M3"};

// Testing
// console.log(hasProperty(carObj, "name"))
// console.log(hasProperty(carObj, "model"))
// console.log(hasProperty(carObj, "year"))
// console.log(hasProperty(carObj, "price"))

// MITASK-P
// Define the interface
interface myObj{
  a: number;
  b: number;
}
// Define the function
function objectToArray(obj: myObj){
  let newArr = [];
  for (let [key, value] of Object.entries(obj)){
    newArr.push([key, value]);
  }
  return newArr;
}

// Define the object
const obj = {a: 10, b: 20}

// Testing
//console.log(objectToArray(obj))


// MITASK-O
// Function declaratioin
function calculateSumOfNumbers(arr: unknown[]): number{
  let sum = 0;
  for (const elem of arr){
    if(typeof elem === 'number'){
      sum += elem
    }
  }
  return sum
}

// Array examples
const arr0926 = [10, "10", {son: 10}, true, 35]  // 45
const arr0927 = [5, "10", 15, {son: 10}, false, 25, true, 35] // 80

// Testing
//console.log(calculateSumOfNumbers(arr0926))
//console.log(calculateSumOfNumbers(arr0927))


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

// // Testing
// // palindromeCheck 1
// console.log(palindromeCheck("dad")) // true
// console.log(palindromeCheck("son")) // false

// // palindromeCheck 2
// console.log(palindromeCheck2("radar")) // true
// console.log(palindromeCheck2("camera")) // false

// // palindromeCheck 3
// console.log(palindromeCheck3("2002")) // true
// console.log(palindromeCheck3("2001")) // false

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
