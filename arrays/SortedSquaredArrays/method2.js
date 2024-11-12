const sortSquaredArray = (array) => {
    let newArray = new Array(array.length).fill(0);
    let left = 0;
    let right = array.length - 1;

    let counter = 0;
    while(counter < array.length) {
        const leftSquared = Math.pow(array[left],2);
        const rightSquared = Math.pow(array[right],2);

      if(leftSquared > rightSquared){
        newArray[array.length-1-counter] = leftSquared;
        left++;
      }else{
        newArray[array.length-1-counter] = rightSquared;
        right--;
      }
      counter++;
    }
    return newArray;
}

console.log(sortSquaredArray([-3,1,2,7]))