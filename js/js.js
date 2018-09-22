//Deze var houd de hoeveelheid fout beantwoorde vragen bij
var failCounter = 0;

if (prompt("q") != "ja") {
	addFailure();
}
if (prompt("q2") != "ja") {
	addFailure();
}
if (prompt("q4") != "ja") {
	addFailure();
}
if (prompt("q5") != "ja") {
	addFailure();
}
if (prompt("q6") != "ja") {
	addFailure();
}
if (prompt("q7") != "ja") {
	addFailure();
}
if (prompt("q8") != "ja") {
	addFailure();
}
if (prompt("q9") != "ja") {
	addFailure();
}
if (prompt("q10") != "ja") {
	addFailure();
}
if (prompt("q11") != "ja") {
	addFailure();
}
if (prompt("q12") != "ja") {
	addFailure();
}
if (prompt("q13") != "ja") {
	addFailure();
}
if (prompt("q14") != "ja") {
	addFailure();
}
if (prompt("q15") != "ja") {
	addFailure();
}

//Deze function gaat elke keer het nummer van de failcounter na, na elk fout beantwoorde vraag. 
//Waarbij als die gelijk is aan 3, ben je Game Over en breekt die zichzelf uit de function doormiddel van de throw error.
function addFailure(){
	console.log(failCounter++);
	if (failCounter == 3) {
		alert("GAME OVER!\nJe hebt teveel vragen fout beantwoord.\nVervers de pagina om het opnieuw te proberen.");
		throw new Error("Game Over!");
	}
}