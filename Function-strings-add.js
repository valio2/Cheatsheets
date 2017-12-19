const add = (a, b, c) => {
    if (+a === 0 && +b === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    c = c.split('').reverse();
    const result = [];

    for (let i = 0;
        (a[i] >= 0) || (b[i] >= 0) || (c[i] >= 0); i += 1) {
        const sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0) + (parseInt(c[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
};

const x = '29';
const y = '49';
const z = '35';

console.log(add(x, y, z));