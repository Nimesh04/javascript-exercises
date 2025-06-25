const repeatString = function(word, num) {
    let repeatedWord = '';
    if(num < 0){
        repeatedWord = "ERROR";
    } 
    else{
        for(let i = 0; i < num; i++){
        repeatedWord += word;
    }
    }
    
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
