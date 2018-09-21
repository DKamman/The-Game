var failCounter = 0;

if (prompt("q") != "ja") {
	addFailure();
}
if (prompt("q2") != "ja") {
	addFailure();
}
if (prompt("q2") != "ja") {
	addFailure();
}
if (prompt("q3") != "ja") {
	addFailure();
}
if (prompt("q4") != "ja") {
	addFailure();
}
if (prompt("q5") != "ja") {
	addFailure();
}


function addFailure(){
	console.log(failCounter++);
	if (failCounter == 3) {
		alert("loser");
		throw new Error("Game Over!");
	}
}