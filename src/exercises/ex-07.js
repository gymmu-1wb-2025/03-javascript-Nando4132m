const mynumber = Number(process.argv[2]);
const mydivider = Number(process.argv[3]);
const remainder = mynumber % mydivider;
const divider = mydivider;
console.log(`Deine Zahl ist ${mynumber}`);

if (remainder === 0) {
	console.log(`${mynumber} ist durch ${divider} teilbar.`);
} else {
	console.log(`${mynumber} ist nicht durch ${divider} teilbar.`);
}
