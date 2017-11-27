var arr = [16, 17, 18];


arr.push("Tail");						//dobavq neshto v kraq na masiva
console.log(arr);

arr.unshift('Head');					//dobavq neshto v nachaloto na masiva
console.log(arr);



var tail = arr.pop('');					//maha neshto ot kraq na masiva
console.log(arr);
console.log(tail);


var tail = arr.shift('');				//maha neshto ot nachaloto na masiva
console.log(arr);
console.log(tail);

//-----------------------------------------------------------------------------//

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.splice(7, 0, "John");				//vkarva neshto v masiva
console.log(arr2);

var result2 = arr2.splice(5, 2);		//iztriva neshto ot masivaw
console.log(arr2);
console.log(result2);					//splice vrushta i rezultat - izrqzanite stoinosti ot masiva

arr2.splice(-3, 2);						//zapochvva da broi indexite otzad napred
console.log(arr2);						// [].splice(startIndex, deleteCount, item1, item2)

console.log(arr2.indexOf(1, 2));		//indexOf(chisloto koeto tursim, sled koi index da pochne da go tursi)
										// ne raboti s obekti
console.log(Array.isArray(arr2));		//proverqvame dali dadena promenliva e masiv
console.log(!!arr2.length);				//proverqvame dali dadena promenliva e ArrayLike

//-----------------------------------------------------------------------------//

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];		//vrushta izbranite elementi ot masiv
var citrus = fruits.slice(1, 3);									//results = Orange, Lemon	//NE-vkluchitelno



//----------------------------------------------------------------------------//

console.log(arr.join(", "));
			// arr.split("xx--xx");

console.log(arr.indexOf(16, 2));

console.log(arr.includes(17));		//proverqva dali elementa prisustva v masiva - vrustha true/false

arr.sort();							//podrejda chisla ot nai-malko kum nai-golqmo
									//podrejda stringove po azbuchen red

console.log(arr2.concat(arr));		//concat ne promenq nito edin ot masivite
var obedinenie = [].concat(arr, arr2);

// destructuring assignments -----------------------------------------------//
//spread

const arr3 = [1, 2, 3, 4, -1, 3];			//spread operator
console.log(Math.min(...arr3));
arr3.push(...[1, 2, 3, 4, ]);

const copy = [...arr3];						// kopirane na masiv sus spread operatora
//const copy = Array.from(arr3);
//const copy = arr3.slice();
//const copy = arr3.slice(0);
	

//rest									
let [first, second, ...others] = arr3;
console.log(first);
console.log(second);
console.log(others);


let a = 5;				
let b = 6;				// razmenq stoinostite 
[a, b] = [b, a];

