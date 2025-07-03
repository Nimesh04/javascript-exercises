const reverseString = function(words) {
    let reversed = '';
    for(let i = 1; i<=words.length; i++){
        reversed += words[words.length - i];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
