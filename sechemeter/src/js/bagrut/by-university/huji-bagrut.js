// ~~~~~~~~~~~ \\
// HUJI Bagrut \\
// ~~~~~~~~~~~ \\

import { hujiBigBonusSubjects } from "../bagrut-config.js";

// Gets HUJI's row's data and returns the appropriate bonus cell value accordingly
const getHujiBonus = function(subject, units, grade, selectedExamType) {
	if (grade < 60) {
		return 0; // Eligible for bonus ONLY for grade above 60
	} else if (
		subject == "מתמטיקה" &&
		selectedExamType == "בחינה" &&
		units >= 5
	) {
		return 35; // Math && 5 units
	} else if (hujiBigBonusSubjects.includes(subject) && units >= 5) {
		return 25; // High bonus subject && 5 units
	} else if (hujiBigBonusSubjects.includes(subject) && units == 4) {
		return 15; // High bonus subject && 4 units
	} else if (units >= 5) {
		return 20; // Regular subject && 5 units
	} else if (units == 4) {
		return 10; // Regular subject && 4 units
	}
	return 0; // No bonus subject
}

export default getHujiBonus;
