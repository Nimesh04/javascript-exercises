const palindromes = function (word) {
    let alphaNumber = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let checkReady = word.toLowerCase()
                        .split('')
                        .filter((char) => alphaNumber.includes(char))
                        .join('');
    let reverseWord = checkReady.split('').reverse().join('');
    return checkReady === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
