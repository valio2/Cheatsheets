var args = [
	"set 2",
	"print",
	"frontadd 1",
	"print",
	"backadd 2",
	"print",
	"frontremove",
	"print",
	"set 4",
	"print",
	//"decrease",
	"print",
	"frontadd 1",
	"print",
	"backadd 3",
	"print",
	"reverse",
	"print",
	//"end"
];

function set(n) {
	x = n | 0;
}

function print() {
	console.log(x);
}

function frontadd(n) {
	x = x.toString();
	n = n.toString();
	x = n.concat(x);
}

function frontremove() {
	x = x.toString();
	x = x.substr(1);
}

function backadd(n) {
	x = x.toString();
	n = n.toString();
	x = x.concat(n);
}

function backremove() {
	x = x.toString();
	x = x.slice(0, -1);
}

function reverse() {
	// var arr = [x];
	// arr.reverse();
	// console.log(arr);
	x = x.toString();
	var split = x.split("");
	var reverse = split.reverse();
	var join = reverse.join("");
	x = join;
}

var p = [];
for (i = 0; i < args.length; i++) {
	var m = args[i].split(" ");
	for (j = 0; j < m.length; j++) {
		p = m.slice(0, 1) + "(" + m.slice(1) + ");";
	}
	eval(p);
}