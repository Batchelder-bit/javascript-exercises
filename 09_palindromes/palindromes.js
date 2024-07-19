const palindromes = function (theWord) {
    const listOfCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const goodWord = theWord
    .toLowerCase()
    .split('')
    .filter((letter) => listOfCharacters.includes(letter))
    .join('');

    const reversedWord = goodWord.split('').reverse().join('');

    return reversedWord === goodWord;
};

// Do not edit below this line
module.exports = palindromes;