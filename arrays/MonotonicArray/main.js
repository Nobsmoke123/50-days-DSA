const checkMonotonic = (array) => {
    const arrayLength = array.length;
    if(arrayLength === 0 || arrayLength === 1){
        return true;
    }

    let leftPointer  = array[0];
    let rightPointer = array[arrayLength -1];

    // Monotone decreasing
    if(leftPointer > rightPointer){
        for (let i = 1; i < arrayLength - 1; i++) {
            if(array[i] < array[i+1]){
                return false;
            }
        }
    }else if(leftPointer < rightPointer){
        // Monotone increasing
        for (let i = 1; i < arrayLength - 1; i++) {
            if(array[i] > array[i+1]){
                return false;
            }
        }
    }else{
        for (let i = 1; i < arrayLength - 1; i++) {
            if(array[i] !== array[i+1]){
                return false;
            }
        }
    }
    return true;
}

console.log(checkMonotonic([5,4,3,2,1,9]))