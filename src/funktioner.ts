// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
	if (Number.isInteger(pris)) {
		return `${pris} kr`;
	}
	return `${pris.toFixed(2).replace('.', ',')} kr`;
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
export function momsDel(pris: number): number {
	let moms = (pris * 0.12) / 1.12;
	if (!Number.isInteger(moms)) {
		moms = Number(moms.toFixed(2));
	}
	return moms;
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
	return pris - pris * (procent / 100);
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
	let open: boolean = false;
	if (
		(veckodag === 'lördag' || veckodag === 'söndag') &&
		klockslag >= 9 &&
		klockslag < 16
	) {
		open = true;
	} else if (
		!(veckodag === 'lördag' || veckodag === 'söndag') &&
		klockslag >= 7 &&
		klockslag < 18
	) {
		open = true;
	}
	return open;
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
	let sum = 0;
	for (const n of tal) {
		sum += n;
	}
	//* alt...
	// sum = tal.reduce((acc, curr) => acc + curr, 0);
	return sum;
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
	if (tal.length === 0) {
		return 0;
	}
	let avg = 0;
	for (const n of tal) {
		avg += n;
	}
	avg /= tal.length;
	return avg;
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
	let max = tal[0];
	for (const n of tal) {
		max = n > max ? n : max;
	}
	return max;
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
	let textSum = '';
	while (antal > 0) {
		textSum += text;
		antal--;
	}
	return textSum;
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
	const summaPerVara = formateraPris(antal * pris);
	const rad = `${antal} x ${namn}: ${summaPerVara}`;
	return rad;
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => n * 2; // kan skrivas med implicit return också

export const ärJämnt = (n: number): boolean => {
	return n % 2 === 0;
};
//* Skillnad på vanlig funktionsdeklaration:
//* Hoisting: vanlig funktion kan köras i koden innan den deklareras,
//* pilfunktion behöver deklareras först, precis som variabler.
//* Scope med this-keyword: en pilfunktion ärver this.[variabeln] från kringliggande scopet, 
//* t.ex. i klasser och callback-funktioner.

