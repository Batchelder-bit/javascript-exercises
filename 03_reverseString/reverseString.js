const reverseString = function(text) {
    let textToArray = text.split('');
    let arrayLength = textToArray.length;
    let reversedWord = '';
    for (let i = 1; i <= arrayLength; i++) {
        let reversedArray = arrayLength - i;
        let letter = textToArray[reversedArray];
        reversedWord += letter;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;

