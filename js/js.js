var failCounter = 0;

/*if (prompt("q") == "ja") {
	if (prompt("q2") == "ja") {
		if (prompt("q3") == "ja") {
			if (prompt("q4") == "ja") {
				if (prompt("q5") == "ja") {
					if (prompt("q6") == "ja") {

					}else{console.log(failCounter++)}
				}else{console.log(failCounter++)}
			}else{console.log(failCounter++)}
		}else{console.log(failCounter++)}
	}else{console.log(failCounter++)}
}else{console.log(failCounter++)}


for (failCounter = 0; failCounter == 3; failCounter++) {
    if (failCounter === 3) { break; }
    text += "The number is " + failCounter + "<br>";
} */

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