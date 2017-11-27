function change(amount, coins){
	var combinations = [];
	for (j=0; j <= amount; j++){
	   combinations.push(0);
	}

	combinations[0] = 1;

	for (var j in coins){
		var coin = coins[j];
		for(var i = 1; i < combinations.length; i++){
			if(i >= coin){
				combinations[i] += combinations[i - coin]; 
			}
		}
	}
	console.log(combinations[amount]);
}

function printAmount(arr){
	for(var j = 0; j< arr.length; j++){
		console.log(arr[j] + " ");
	}
}


change(12, [1, 2, 5]);