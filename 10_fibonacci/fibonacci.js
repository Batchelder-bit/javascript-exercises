const fibonacci = function(number) {
let startingNumber = -1;
let secondNumber = 1;
let newNumber = 0;

    if (number < 0) {
        return 'OOPS'
    }
    else {
    for (let i = 0; i <= number; i++) {
        newNumber = startingNumber + secondNumber 
        startingNumber = secondNumber 
        secondNumber = newNumber 
    }}
    return newNumber;
};

// Do not edit below this line
module.exports = fibonacci;
