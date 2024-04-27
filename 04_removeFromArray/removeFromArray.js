const removeFromArray = function(Array, ...theArgs) {
            const NewArray = [];
        Array.forEach(function (item){
            if (!theArgs.includes(item)) {
                NewArray.push(item);
            }
        })
        return NewArray;
}

// Do not edit below this line
module.exports = removeFromArray;
