// ~~~~~~~~~~~~~~~~~~~~ \\
// Bagrut General Rules \\
// ~~~~~~~~~~~~~~~~~~~~ \\

import { mandatorySubjects } from "./bagrut-config.js";

// Gets a row's data and checks if its a 5-units math exam
export const isFiveUnitsMath  = function(subjectText, examType, units, grade, isMath=false) {
	if (
		subjectText == "מתמטיקה" &&
		examType == "בחינה" &&
		(units < 5 || grade < 60)
	) {
		return false;
	} else if (
		subjectText == "מתמטיקה" &&
		examType == "בחינה" &&
		units >= 5 &&
		grade >= 60
	) {
		return true;
	}
	return isMath;
}

// Gets a subject and checks if it's an additional subject (regarding calculation scope), according to the given university scheme
export const isAdditionalCalcSubject = function(subject, university) {
	return (
		(!mandatorySubjects.includes(subject) && university != "TECH") ||
		(![...mandatorySubjects, "ספרות", 'תנ"ך'].includes(subject) &&
			university == "TECH")
	);
}

// Gets a subject and checks if it's an additional subject (regarding calculation scope), according to the given university scheme
// If so, checks if its grade+bonus improves the current bagrut-average
export const shouldIncludeInAvg = function(subject, university, grade, bonus, currentAverage) {
	if (isAdditionalCalcSubject(subject, university)) {
		const gain = grade + bonus;
		if (gain > currentAverage) {
			return true;
		}
	}
	return false;
}

// Checks if the bagrut certificate has an invalid number of units (less than 20)
export const isInvalidBagrutUnitsNum = function(unitsNum, university) {
	return (unitsNum < 20 && university !== 'TECH') || (unitsNum < 21 && university === 'TECH');
}