const removeFromArray = function(array, ...elements) {
    debugger;
    for(const element of elements){
        if(array.includes(element)){
            //find element in array
            for(let i = 0; i < array.length; i++){
                //remove it using .splice()
                let found = array[i] === +element || array[i] === element;
                if(found){
                    array.splice(i, 1);
                }
            }
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
