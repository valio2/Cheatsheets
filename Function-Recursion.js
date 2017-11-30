var coins = [1, 2];

function combo(amount, currentCoin){

	if( amount === 0){
		return 1;
	}

	if( amount < 0){
		return 0;
	}

	var nCombos = 0;
	for (var coin = currentCoin; coin < coins.length; coin++){
		nCombos += combo(amount - coins[coin], coin);
	}

	return nCombos;
}


combo(4, 0);