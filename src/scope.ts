const kafe = 'Kardemumma';

function visaNamn() {
	const recept = 'hemligt';
	console.log(kafe); // gissning: Kardemumma
	console.log(recept); // gissning: hemligt
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
	räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: 2

function lokal() {
	let räknare = 100;
	räknare++;
	return räknare;
}
console.log(lokal()); // gissning: 101
console.log(räknare); // gissning: undefined
// korrekt: 2 - lokal variabel med samma namn skapas inuti funktionen, ej samma som originalvariabeln

// Ta bort kommentaren på nästa rad och läs felet:
//! console.log(recept); // gissning: undefined (ts: Error: Cannot find name 'recept')
// korrekt: scope.ts:28 Uncaught ReferenceError: recept is not defined at scope.ts:28:13
// koden kraschar i runtime, fortsätter ej köras nedan

for (let i = 0; i < 3; i++) {
	console.log('varv', i);
}
// Ta bort kommentaren på nästa rad och läs felet:
//! console.log(i); // gissning: undefined (ts: Error: Cannot find name 'i')
// korrekt: samma här om man låter koden fortsätta köras: Uncaught ReferenceError efter loopen körts

//* Fyll i med egna ord:
// - En variabel som skapas inuti en funktion kan ej ses utanför funktionen.
// - En funktion kan se variabler som ligger utanför den.
// - `let i` i en for-loop lever inuti loopen