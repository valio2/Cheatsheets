solve = (function(){
	var x;
	var commands = {};


	// Known / Defined commands
	commands["set"] = function(n) {
		x = ""+n;
	};
	commands["front-add"] = function(d) {
		x = ""+d+x;
	};
	commands["front-remove"] = function() {
		x = x.substring(1);
	};
	commands["back-add"] = function(d) {
		x = ""+x+d;
	};
	commands["back-remove"] = function() {
		x = x.slice(0,-1);
	};
	commands["reverse"] = function() {
		x = x.split("").reverse().join("");
	};
	commands["print"] = function() {
		console.log(x);
	};
	commands["end"] = function() {
		return true;
	};
	

	// Bonus command
	commands["decrease"] = function() {
		x = ""+(x-1);
	};


	// Helper dispatch function
	var execute = function(line) {
		var parts = line.trim().split(/\s+/);

		var cmd = commands[parts[0]];
		console.log(cmd);
		if (!cmd) {
			console.error("Undefined command '"+parts[0]+"'!");
			return;
		}

		return cmd.apply(this, parts.slice(1));
	};

	
	// Actual "solve(args)" function
	return function(args) {
		for (var i=0; i<args.length; i++)
			if (execute(args[i]))
				break;

		return x;
	}
}());


var args = [
	"set 2",
	"print",
	"front-add 1",
	"print",
	"back-add 2",
	"print",
	"front-remove",
	"print",
	"set 4",
	"print",
	"decrease",
	"print",
	"front-add 1",
	"print",
	"back-add 3",
	"print",
	"reverse",
	"print",
	"end"
]
solve(args)