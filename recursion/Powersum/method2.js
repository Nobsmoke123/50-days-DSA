const powerSum = (arr, power = 1) => {
    let sum = 0;
    arr.forEach(element => {
        if(Array.isArray(element)){
            return sum += powerSum(element,power+1);
        }else{
            sum += element;
        }
    });

    return Math.pow(sum,power);
}

console.log(powerSum([2,3,[4,1,2],6,7]))