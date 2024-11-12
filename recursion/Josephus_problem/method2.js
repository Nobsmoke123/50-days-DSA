const winner = (n,k)=>{
    if(n === 1) return 0;
    return (winner(n-1,k) + k) % n;
}

const findTheWinner = (n,k) => {
    return winner(n,k) + 1;
}


console.log(findTheWinner(5,3));