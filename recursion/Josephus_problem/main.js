// Approach 1
function findTheWinner(n,k){
    const winner = (arr, start) =>{
        const length = arr.length;
        if(length === 1) {
            return arr[0];
        }
        const indexToRemove = (start + k - 1) % length;
        arr.splice(indexToRemove, 1);
        return winner(arr, indexToRemove);
    }

    const arr = [...Array(n)].map((_,i) => i +1); // generates an array with values from 1 - n
    // const arr = Array.from({length: n},(_,i) => i + 1); // another way to generate an array with values from 1 - n
    return winner(arr, 0);
}

console.log(findTheWinner(5,7));