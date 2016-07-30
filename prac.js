// var charCodeRange = {
// 	start: 65,
// 	end: 90
// }
// var stackLetters = "";
// for (var cc = charCodeRange.start; cc <= charCodeRange.end; cc++) {
// 	stackLetters = stackLetters + String.fromCharCode(cc);
// }
var stackLetters = "";
for (var cc = 65; cc <= 90; cc++) {
	stackLetters = stackLetters + String.fromCharCode(cc);
}
console.log(stackLetters);
var letterDisplay = "";
for (var i = 0; i < stackLetters.length; i++) {
	letterDisplay = letterDisplay + stackLetters[i];
	console.log(letterDisplay);
}
var logicLetterDisplay = "";
for (var i = 0; i < stackLetters.length; i++) {
	logicLetterDisplay = logicLetterDisplay + stackLetters[i];
	if((i+1)%5 === 0) {
		logicLetterDisplay = logicLetterDisplay + " ";
	}
	console.log(logicLetterDisplay);
}