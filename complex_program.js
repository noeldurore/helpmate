```javascript
// complex_program.js

// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define a method to introduce the person
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a class called Employee that extends the Person class
class Employee extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  // Define a method to display the employee's information
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Department: ${this.department}`);
  }
}

// Create instances of the Employee class
const emp1 = new Employee("John Doe", 30, "IT");
const emp2 = new Employee("Jane Smith", 35, "HR");

// Print the employee's information
emp1.displayInfo();
emp2.displayInfo();

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate the factorial of 5
console.log(factorial(5));

// Define an array of numbers
const numbers = [10, 5, 20, 15, 30];

// Use the map function to double each number in the array
const doubledNumbers = numbers.map((num) => num * 2);

// Print the resulting array
console.log(doubledNumbers);

// Define a promise that resolves after a given delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Use async/await to delay execution of code
async function executeDelayedCode() {
  console.log("Executing code after a delay...");
  await delay(2000);
  console.log("Code execution complete.");
}

// Call the async function to execute the delayed code
executeDelayedCode();
```

The provided code is an example of a complex program written in JavaScript. It includes class definitions, inheritance, method declarations, function recursion, array manipulation, promises, and async/await syntax. The code creates instances of employees, calculates factorials, doubles numbers in an array, and demonstrates the execution of delayed code using async/await.