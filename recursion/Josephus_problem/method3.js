const findTheWinner = (n,k) => {
    let pos = 0;
    for (let i = 2; i <= n; i++) {
       pos = (pos + k) % i;
    }
    return pos + 1;
}

console.log(findTheWinner(5,3));