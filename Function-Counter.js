var numbers = [1, 2, 3, 8, 4, 19];

var counter = 0;

var sum = 0;

while (counter < numbers.length) {
	sum += numbers[counter];
	counter += 1;
}

console.log(sum);