const solve = (args) => {
	const prices = {};

	for (let i = 0; i < args.length; i++) {
		const line = args[i];
		let matched = false;
		line.replace(/\s*(\w+(?:\s*\w+)?)\s*(\d+(?:\.\d+)?)/, function(whole, product, price) {
			prices[product] = price;
			matched = true;
		});

		if (matched) continue;

		if (/(\d*\s*[^\W\d]+)(\,.+)?/.test(line.trim())) {
			let sum = 0;
			const list = line.split(',');
			// console.log(list);
			for (let j = 0; j < list.length; j++) {
				const item = list[j];
				item.replace(/\s*(?:(\d+)\s+)?(\w+(?:\s*\w+)?)/, function(whole, count, product) {
					// console.log(product);
					sum += (count || 1) * prices[product];
				});
			}
			console.log(sum.toFixed(2));
		}
	}

	// console.log(prices);
};

let args = [
	'5',
	'milk 1.2',
	'orange juice 2.9',
	'icecream 2',
	'cake 5.1',
	'beer 1.2',
	'5',
	'2 beer, 3 orange juice',
	'milk, cake',
	'icecream, 2 cake',
	'icecream, icecream, 3 icecream',
	'5 orange juice, 3 orange juice, orange juice, orange juice',
];
solve(args);