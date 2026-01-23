const bodyheight = Number(process.argv[2]);
const talentScore = 243 - bodyheight;

if (talentScore < 50) {
	console.log("Du hast sehr viel Potential.");
} else if (50 <= talentScore && talentScore < 60) {
	console.log("Du must dringend an deiner Sprungkraft arbeiten.");
} else if (60 <= talentScore && talentScore < 70) {
	console.log(
		"Wenn du schnell bist, kannst du dir die Libero-Position überlegen.",
	);
} else if (70 <= talentScore) {
	console.log("Du wirst im Volleyball nicht glücklich werden!");
}
