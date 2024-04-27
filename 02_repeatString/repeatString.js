const repeatString = function(text, howManyTimes) {
    let repeatedText = '';
    let error = '';
    if (howManyTimes < 0) {
        error = 'ERROR';
        return error;
    } else {
        for (let i = 0; i < howManyTimes; i++){
            repeatedText += text;
        }
        return repeatedText;
    }
};

repeatString('hey', 3);
repeatString('hey', 10);

// Do not edit below this line
module.exports = repeatString;
