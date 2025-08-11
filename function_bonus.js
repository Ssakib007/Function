// console.log("today we will learn function");

function hello() {
  console.log("I am a function");
}
hello(); /// this is called calling a function

function moneybag() {
  var money = 4500;
  console.log("I have " + money + " taka");
}
moneybag();
// console.log(money); /// variables inside a function can not be recalled from outside of the function.

// addition
function additionMachine(input1, input2) {
  let sum = input1 + input2;
  console.log("sum is = " + sum);
  return sum;
}
const result = additionMachine(10, 40);
console.log(result);

// subtraction
function subtractionMachine(input1, input2) {
  let subtraction = input1 - input2;
  console.log("result is = " + subtraction);
  return subtraction;
}
const result2 = subtractionMachine(55, 45);
console.log(result2);

//division
function divisionMachine(input1, input2) {
  let division = input1 / input2;
  console.log("Result is = " + division);
  return division;
}
const result3 = divisionMachine(55, 5);
console.log(result3);

// multiplication
function multiplicationMachine(input1, input2) {
  let multiplication = input1 * input2;
  console.log("Result is = " + multiplication);
  return multiplication;
}
const result4 = multiplicationMachine(44, 3);
console.log(result4);
