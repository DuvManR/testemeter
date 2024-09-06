// ~~~~~~~~~~ \\
// BIU Bagrut \\
// ~~~~~~~~~~ \\

import { biuBigBonusSubjects } from "../bagrut-config.js";

// Gets BIU's row's data and returns the appropriate bonus cell value accordingly
const getBiuBonus = function(subject, units, grade, selectedExamType) {
	if (grade < 60) {
		return 0; // Eligible for bonus ONLY for grade above 60
	} else if (selectedExamType == "עבודה" && units >= 5) {
		return 20; // Gemer
	} else if (subject == "מתמטיקה" && units >= 5) {
		return 35; // Math && 5 units
	} else if (subject == "מתמטיקה" && units == 4) {
		return 15; // Math && 4 units
	} else if (biuBigBonusSubjects.includes(subject) && units >= 5) {
		return 25; // High bonus subject && 5 units
	} else if (biuBigBonusSubjects.includes(subject) && units == 4) {
		return 12.5; // High bonus subject && 4 units
	} else if (units >= 5) {
		return 20; // Regular subject && 5 units
	} else if (units == 4) {
		return 10; // Regular subject && 4 units
	}
	return 0; // No bonus subject
}
export default getBiuBonus;
