function isPrime(n){
	var divisor = 2;
	var sqrtn = Math.sqrt(n);
	while(divisor <= sqrtn) {

		if(n % divisor === 0){
			return false;
		}

		divisor += 1;
	}

	return true;
}

console.log(isPrime(1000000033));