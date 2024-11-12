

const towerOfHanoi = ()=>{
    const n = 4;
    const from = 'R1';
    const to = 'R3';
    const aux = 'R2';

    let count = 0;
    const move = (n, from, to, aux) => {
        if(n === 1){
            console.log(`Move disk ${n} from ${from} to ${to}`);
            count +=1;
            return;
        }
        move(n-1, from, aux, to);
        console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
        count += 1;
        move(n-1, aux, to, from);
    }

    move(n,from,to,aux);
    return Math.pow(2,n) -1;
}

const moves = towerOfHanoi();
console.log('Total number of  moves ', moves);

// Time complexity of O(2^N)
// Space complexity of O(n)