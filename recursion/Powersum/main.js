const perculiarArray = (arr, index, pow)=> {
    
    const length = arr.length;
    if(length === index) {
        return 0;
    }

    if(Number.isInteger(arr[index])){
        return (arr[index] + perculiarArray(arr,index+1,pow));
    }else{
        return (perculiarArray(arr[index], 0, pow + 1))**(pow + 1) + perculiarArray(arr,index+1,pow);
    }
}

// [2,3,[4,1,2],6,7] -> 2 + 3 + (4 +1 + 2)^2 + 6 + 7 = 67

console.log(perculiarArray([2,3,[4,1,2],6,7],0,1));