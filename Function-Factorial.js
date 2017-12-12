const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const x = factorial(19);
const y = factorial(17);
const z = factorial(2);

const combinations = x / (y * z);
console.log(combinations);
console.log(factorial(11));



