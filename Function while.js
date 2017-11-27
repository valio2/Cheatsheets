var n = 123;
var sum = 0;
var operands = 'The sum 123';

while(n > 0) {
	sum += n;
	n -= 1;
	operands +=  n;
}

 console.log(operands + ' = ' + sum );