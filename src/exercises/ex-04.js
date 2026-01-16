const gewicht = Number(process.argv[2]);
const hoehe = Number(process.argv[3]);
const hoeheInMetern = hoehe / 100;
const bmi = gewicht / (hoeheInMetern * hoeheInMetern);

console.log(`BMI: ${bmi}`);
