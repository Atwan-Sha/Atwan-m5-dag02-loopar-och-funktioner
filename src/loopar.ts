// Dag 2, del 1: Loopar. Resultatet syns i Console (F12).

// UPPGIFT 1: skriv ut talen 1 till 10, ett per rad, med en for-loop.
console.log('loop 1');
for (let i = 1; i <= 10; i++) {
	console.log(i);
}
// UPPGIFT 2: skriv ut talen 10 till 1 (nedräkning) med en while-loop.
//            Skriv "Kaffe!" efter 1.
console.log('loop 2');
let i = 10;
while (i >= 1) {
	console.log(i);
	i === 1 && console.log('Kaffe!');
	i--;
}
// UPPGIFT 3: gör samma sak som uppgift 1, men skriv bara ut jämna tal.
//            Tips: n % 2 === 0
console.log('loop 3');
for (let i = 1; i <= 10; i++) {
	i % 2 === 0 && console.log(i);
}
// UPPGIFT 4: här är kaféets prislista. Skriv ut ett kvitto med en for...of-loop:
//            "Kardemummabulle: 35 kr" osv, och sist "Summa: ... kr".
console.log('loop 4');
const prislista: number[] = [35, 32, 59, 45];
const namnlista: string[] = [
	'Kardemummabulle',
	'Bryggkaffe',
	'Ostmacka',
	'Latte',
];
let summa = 0;
for (const [index, namn] of namnlista.entries()) {
	console.log(`${namn}: ${prislista[index]} kr`);
	summa += prislista[index];
}
//* alt...
// let index = 0;
// for (const namn of namnlista) {
// 	console.log(`${namn}: ${prislista[index]} kr`);
// 	summa += prislista[index];
//   index++
// }
console.log(`Summa: ${summa} kr`);

// UPPGIFT 5 (utmaning): skriv ut en multiplikationstabell för 3:ans tabell,
//            "3 x 1 = 3" till "3 x 10 = 30".
console.log('loop 5');
for (let i = 1; i <= 10; i++) {
	console.log(`3 x ${i} = ${3 * i}`);
}
