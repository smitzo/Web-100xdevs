//Write a function named calculate that takes two numbers and a callback function as parameters. 
//The callback function should be invoked with the sum of the two numbers. 
//Call the calculate function with two numbers and a callback function that prints the sum.

function calculate(num1, num2, callback) {
    // Your code here to calculate the sum of num1 and num2
    // Invoke the callback function with the sum as an argument
    let sum=num1+num2;
    callback(sum)

  }
  
  // Callback function
  function printSum(sum) {
    console.log("The sum is:", sum);
  }
  
  // Call the calculate function with two numbers and the printSum callback
  calculate(3, 7, printSum);
  