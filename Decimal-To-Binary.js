let N = 7;
if (N === 0) {
    console.log(0);
} else if (N > 0) {
    let bin = [1];
    let temp;
    temp = Math.log2(N);
    temp = Math.floor(temp);
    for (let i = 0; i < temp; i += 1) {
        bin.push(0);
    }
    temp = Math.pow(2, temp);
    N -= temp;
    let j = 0;
    do {
        if (N !== 0 && N > 1) {
            temp = Math.log2(N);
            temp = Math.floor(temp);
            bin[bin.length - 1 - temp] = 1;
            N -= Math.pow(2, temp);
        } else if (N === 1) {
            bin.pop();
            bin.push(1);
            j += 1;
        } else {
            j += 1;
        }
    } while (j < 1);
    console.log(bin.join(''));
}


//------------  drugo legit reshenie  ------------//


// let decimalNumber = 7;

// let binaryNumber = '';
// let remainder;

// do {
//     remainder = Math.floor(decimalNumber % 2);
//     decimalNumber = Math.floor(decimalNumber / 2);
//     binaryNumber = remainder.toString() + binaryNumber;
// } while (decimalNumber > 0);
// console.log(binaryNumber);