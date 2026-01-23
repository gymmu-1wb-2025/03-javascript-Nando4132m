const numbers = [-2, -1, 0, 1, 2];
const results = [];

for (let i = 0; i < numbers.length; i++) {
	const x = numbers[i];
	const result = 4 * x - 1;
	console.log(`Für x = ${x} ist das Ergebnis ${result}`);
	results.push(result);
}
console.log("Alle Ergebnisse:", results);
