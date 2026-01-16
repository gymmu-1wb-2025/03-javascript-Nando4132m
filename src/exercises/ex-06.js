const mynumber = Number(process.argv[2]);
const remainder = mynumber % 3;

console.log(`Deine Zahl ist ${mynumber}`);

if (remainder === 0) {
	console.log(`${mynumber} ist durch 3 teilbar.`);
} else {
	console.log(`${mynumber} ist nicht durch 3 teilbar.`);
}
// console.log(`Der Rest von ${mynumber} geteilt durch 3 ist ${remainder}`);
