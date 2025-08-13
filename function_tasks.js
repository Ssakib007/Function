///  TASK-1  ///
/// Take four parameters. Multiply the four numbers and then return the result
function multiply(a, b, c, d) {
  result = a * b * c * d;
  return result;
}
console.log(multiply(2, 3, 4, 5));

///  TASK-2  ///
/// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function processNumber(num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return num * 2;
  }
}
console.log(processNumber(5));

///  TASK-3  ///
/// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
const avgOfNumbers = [5, 5, 5, 5, 5];
function make_avg(array, size) {
  let sum = 0;
  for (const number of array) {
    sum = sum + number;
  }
  let avg = sum / size;
  return avg;
}
console.log(make_avg(avgOfNumbers, avgOfNumbers.length));

///  TASK-4  ///
///Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
  let count = 0;
  for (let zero of binaryString) {
    if (zero === "0") {
      count++;
    }
  }
  return count;
}
console.log(count_zero("11100110101"));

///  TASK-5  ///
/// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(integer_value) {
  if (integer_value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(odd_even(56));
