const kthGrammar = (n,k) => {
    if (n ===1) return 0;
    else {
        const mid = Math.pow(2,n-1) / 2;
        if(k > mid){
            return 1 - kthGrammar(n-1,k-mid);
        }else{
            return kthGrammar(n-1,k);
        }
    }
}

console.log(kthGrammar(4,1));

// Recursion tree
// (n=4, k=5) ----> 1
//    |           |
// 1 - (n=3,k=1) ---> 1 - 0 = 1
//    |           |
// (n=2, k=1) ---> 0
//    |           |
// (n=1,k=1) ---> 0 (Base case)