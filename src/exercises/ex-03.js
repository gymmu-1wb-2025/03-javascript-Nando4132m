const myname = process.argv[2];
// Die Funktion Number() wandelt den String in eine Zahl um //
const myage = Number(process.argv[3]);
const maturAge = myage + 4;

// Ausgabe der Begrüssung und des Alters bei der Matur//
console.log(`Hallo ${myname}, mein Alter ist ${myage}!`);
console.log(`Bei der Matur in 4 Jahren werde ich ${maturAge} Jahre alt sein!`);
