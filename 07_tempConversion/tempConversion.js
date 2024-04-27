const convertToCelsius = function(tempF) {
            let convertedTemp = 0;
            let returnTemp = 0;
            convertedTemp = (tempF - 32) * (5/9);
            if (convertedTemp === 0) return convertedTemp;
            returnTemp = parseFloat(convertedTemp.toFixed(1));
            return returnTemp;
};

const convertToFahrenheit = function(tempC) {
            let convertedTemp = 0;
            let returnTemp = 0;
            convertedTemp = (tempC * (9/5)) + 32;
            if (convertedTemp === 0) return convertedTemp;
            returnTemp = parseFloat(convertedTemp.toFixed(1));
            return returnTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
