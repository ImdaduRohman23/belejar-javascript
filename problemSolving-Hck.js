//HACKERRANK PROBLEM SOLVING


//---------- Solve Me First ----------//
function solveMeFirst(a, b) {
    // Hint: Type return a+b below   
    return a+b;
}

//---------- Compare the Triplets ----------//
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for(let i = 0; i < a.length; i++) {
        if( a[i] > b[i]) {
            alice++
        } else if (a[i] < b[i] ) {
            bob++
        }
    }
    return[alice, bob]
}


//---------- A Very Big Sum ----------//
function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(let i =0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum
}

//---------- Diagonal Difference ----------//
function diagonalDifference(arr) {
    // Write your code here
    let ltr = 0;
    let rtl = 0;
    for (let i = 0; i< arr.length; i++) {
        ltr += arr[i][i];
        rtl += arr[i][arr.length-i-1];
    }
    return Math.abs(ltr - rtl)
}

//---------- Plus Minus ----------//
function plusMinus(arr) {
    // Write your code here
    let p=0;
    let n=0;
    let z=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            p += 1;
        } else if(arr[i] < 0) {
            n++;
        } else {
            z++
        }
    }
    let prob = [p/arr.length, n/arr.length, z/arr.length];
    for (let i = 0; i < prob.length; i++) {
        console.log(prob[i].toFixed(6))
    }
}

console.log(plusMinus([2, -2, 0, 2, 3]))

//INGAT! : .toFiced => mengatur jumlah decimal + menjadikannya string


//---------- Staircase ----------//
function staircase(n) {
    // Write your code here
    for(let i = 0; i < n; i++) {
        let res = '';
        for(let j = 0; j < n-i-1; j++){
            res += ' ';
        }
        for(let k = 0; k < i+1; k++) {
            res += '#';
        }
        console.log(res)
    }
}

//Mini-Max Sum
function miniMaxSum(arr) {
    // Write your code here
    // let max = arr[0];
    let max = 0;
    let min = (arr.reduce((a, b) => a+b));
    for(let i = 0; i < arr.length; i++){
        let jum = (arr.reduce((a, b) => a+b))-arr[i];
        if( jum > max) {
            max = jum;
        }
        if( jum < min) {
            min = jum;
        }
    }
    console.log(min, max)
}

//Birthday Cake Candles
function birthdayCakeCandles(candles) {
    // Write your code here
    // for(let i = 0; i < candles.length; i++){
        
    // }
    candles.sort((a, b) => b - a);
    let filter = (candles.filter(i => i ==3 ))
    return filter.length
}