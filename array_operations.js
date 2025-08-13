// write a function to give me the sum of all numbers in an array.
// declare a function
/// call check -- whether a function is called properly
/// set a parameter
/// pass the parameters and checked whether the parameter is passed in a proper format
/// do the function tasks ( step by step)

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log("sum of numbers is", sum);
