const sumAll = function(...args) {
    if(args.every(num => (typeof num === 'number') && (num >= 0))){
        let sum = 0;
        let firstSmaller = args[0] < args[1];
        let start = firstSmaller ? args[0] : args[1];
        let end = firstSmaller ? args[1] : args[0];
        for(let i = start; i < end + 1; i++){
            sum += i;
        }
        return sum;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
