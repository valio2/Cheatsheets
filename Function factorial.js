let n = 3;
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

var x = factorial(19),
	y = factorial(17),
	z = factorial(2);

var combinations = x/(y*z);
console.log(combinations);
