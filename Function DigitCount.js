var number = 1203;

var digitCount = 0;

number = Math.abs(number);

do{
	number = number / 10;
	digitCount += 1;
}while(number >= 1);

console.log(digitCount);