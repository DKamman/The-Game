//Deze var houd de hoeveelheid fout beantwoorde vragen bij
var failCounter = 0;

//Het probleem wat ik heb aangekaart op itslearning heb ik nog proberen op te lossen met de && operator zoals hieronder.
//Maar het maakte geen verschil.
if (prompt("Waar is Captain America zijn schild van gemaakt?") != "Vibranium" && "vibranium") {
	addFailure();
}
if (prompt("Wat is de naam van de tweede Avengers film?") != "Age of Ultron" || "age of ultron" || "Age Of Ultron") {
	addFailure();
}
if (prompt("Wat is de superhelden naam van Sam Wilson?") != "Falcon" || "The Falcon" || "the falcon" || "falcon") {
	addFailure();
}
if (prompt("Hoe heet Iron Man zijn vriendin?") != "Virgina Potts" || "Pepper" || "pepper" || "Pepper Potts" || "pepper potts" || "virginia pepper potts") {
	addFailure();
}
if (prompt("Wat is de groet van Hydra?") != "Hail Hydra" || "hail hydra" || "hail Hydra") {
	addFailure();
}
if (prompt("Wie zegt: 'I will bath the starways in your blood.'?") != "Thanos" || "thanos") {
	addFailure();
}
if (prompt("Wat is Spiderman zijn echte naam?") != "Peter Parker" || "peter parker" || "Peter parker" || "peter Parker") {
	addFailure();
} 
if (prompt("Hoe heet de planeer waar Thor op gestrand is in Thor: Ragnarok?") != "Sakaar" || "sakaar") {
	addFailure();
}
if (prompt("Wat is The Winter Soldier zijn volledige, echte, naam?") != "James Buchanan Barns") {
	addFailure();
}
if (prompt("Welk ras is Thanos?") != "Titan" || "titan") {
	addFailure();
}
if (prompt("Wat is de voornaam van Star-Lord zijn moeder?") != "Meredith" || "meredith") {
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