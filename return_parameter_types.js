/// has return and parameter
function add(a, b) {
  return a + b; // has return
}

console.log(add(3, 4)); // 7

/// No return and has parameter
function greet(name) {
  console.log("Hello, " + name); // no return
}

greet("Alice"); // Hello, Alice

/// has return and no parameter
function getPi() {
  return 3.14159;
}

console.log(getPi()); // 3.14159


/// no return no parameter 
function sayHello() {
  console.log("Hello there!");
}

sayHello(); // Hello there!
