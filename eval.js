var myCode = 'console.log("Howdy?");';						//eval approach
eval(myCode);


var myCode = 'console.log("executable-code");';				//non-eval approach
 var myFucn = new Function(myCode);
 myFucn();
