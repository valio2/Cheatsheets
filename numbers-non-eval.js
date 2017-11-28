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
	"decrease",
	"print",
	"frontadd 1",
	"print",
	"backadd 3",
	"print",
	"reverse",
	"print",
	"end"
];

let Commands = {
	set: function set(n) {
		x = n | 0;
		console.log(x);
	},

	print: function print() {
		console.log(x);
	},

	frontadd: function frontadd(n) {
		x = x.toString();
		n = n.toString();
		x = n.concat(x);
	},

	frontremove: function frontremove() {
		x = x.toString();
		x = x.substr(1);
	},

	backadd: function backadd(n) {
		x = x.toString();
		n = n.toString();
		x = x.concat(n);
	},

	backremove: function backremove() {
		x = x.toString();
		x = x.slice(0, -1);
	},

	reverse: function reverse() {
		x = x.toString();
		var split = x.split("");
		var reverse = split.reverse();
		var join = reverse.join("");
		x = join;
	},

	end: function end(){
		return;
	},

	decrease: function decrease(){
		return;
	}
}

for ( let command of args){
	let tempArr = command.split(" ");
	let [comm, o] = tempArr;
	Commands[comm](o);
	// Commands.comm(o);       //-> ne raboti ??
}
