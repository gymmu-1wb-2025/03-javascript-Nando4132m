const mynumber = Number(process.argv[2]);
const remainder = mynumber % Number(process.argv[3]);
const divider = Number(process.argv[3]);
console.log(`Deine Zahl ist ${mynumber}`);

if (remainder === 0) {
	console.log(`${mynumber} ist durch ${divider} teilbar.`);
} else {
	console.log(`${mynumber} ist nicht durch ${divider} teilbar.`);
}
