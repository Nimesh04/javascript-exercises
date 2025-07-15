const fibonacci = function(pos) {
    if(pos < 0 ) return "OOPS";
    if(pos == 0) return 0;
    let prev = 0;
    let curr = 1;
    let arr = [];
    let sum;
    for(let i = 0; i < pos; i++){
        if(i==0){
            arr.push(curr);
        }else{
            sum = prev + curr;
            arr.push(sum);
            prev = arr[arr.length - 2];
            curr = sum;
        }
    }
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
