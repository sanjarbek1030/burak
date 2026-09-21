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
console.log(getSquareNumbers(arr0920));
