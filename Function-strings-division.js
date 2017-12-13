const divide = (a, b) => {
    a = a.split('');
    b = Number(b);
    let temp = 0;
    let quotient = [];

    for (let i = 0; i < a.length; i += 1) {
        temp = temp + a[i];
        quotient.push(Math.floor(Number(temp) / b));
        temp = Number(temp) % b;
        // console.log(temp, quotient);
    }
    quotient = quotient.join('');
    // console.log(typeof quotient);

    return quotient;
};