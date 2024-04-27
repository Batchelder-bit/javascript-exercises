const add = function(number1, ...theArgs) {
      let theArgsIndexed = theArgs.length - 1;
      let finalNumber = 0;
      finalNumber = finalNumber + number1;
      for (let i = 0; i <= theArgsIndexed; i++) {
                finalNumber = finalNumber + theArgs[i];
      };
      return finalNumber;
};

const subtract = function(number1, ...theArgs) {
      let theArgsIndexed = theArgs.length - 1;
      let finalNumber = 0;
      finalNumber += number1;
      for (let i = 0; i <= theArgsIndexed; i++) {
                finalNumber -= theArgs[i];
      };
      return finalNumber;
};

const sum = function(Array) {
      let finalNumber = 0;
      if (Array == []) return 0; 
      for (const number of Array) {
        finalNumber += number;
      }
      return finalNumber;
};

const multiply = function(Array) {
      let finalNumber = 0;
      finalNumber += Array[0];
      arrayItems = Array.length - 1;
      for (let i = 1; i <= arrayItems; i++) {
        finalNumber *= Array[i];
      }
      return finalNumber;
};

const power = function(firstNumber, raisedTo) {
      let finalNumber = firstNumber;
      finalNumber = finalNumber ** raisedTo;
      return finalNumber;
};

const factorial = function(inputNumber) {
      if (inputNumber === 0) return 1;
      let finalNumber = 1;
      for (let i = 1; i <= inputNumber; i++) {
        finalNumber *= i;
      }
      return finalNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
