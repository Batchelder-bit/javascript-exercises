const sumAll = function(numberOne, numberTwo) {
    let finalNumber = 0;
    //if (numberOne < 0 || numberTwo < 0) return 'ERROR';
    if ((numberOne < 0 || numberTwo < 0) || (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo))) return 'ERROR';
    if (numberTwo > numberOne){
        for (let i = numberOne; i <= numberTwo; i++){
            finalNumber += i;
        }
    } else {
        for (let i = numberTwo; i <= numberOne; i++) {
            finalNumber += i;
        }
    }
    return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;
