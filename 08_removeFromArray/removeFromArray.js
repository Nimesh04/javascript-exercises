const removeFromArray = function(arr, ...a) {
    let reversed = arr.filter(num => !a.includes(num));
    return reversed;
};

// Do not edit below this line
module.exports = removeFromArray;
