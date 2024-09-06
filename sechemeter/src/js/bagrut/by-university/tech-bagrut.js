// ~~~~~~~~~~~ \\
// TECH Bagrut \\
// ~~~~~~~~~~~ \\

import { techBigBonusSubjects, mizrafTechSubjects } from "../bagrut-config.js";
import {
	extractTableRowsById,
	extractBagrutTableRowData,
} from "../bagrut-table-parser.js";
import { isFiveUnitsMath } from "../bagrut-general-rules.js";

// Gets TECH's row's data and returns the appropriate bonus cell value accordingly
const getTechBonus = function (subject, units, grade, selectedExamType) {
	if (grade < 60) {
		return 0; // Eligible for bonus ONLY for grade above 60
	} else if (
		subject != "היסטוריה" &&
		selectedExamType == "עבודה" &&
		units >= 5
	) {
		return 20; // Gemer
	} else if (
		subject == "מתמטיקה" &&
		selectedExamType == "בחינה" &&
		units >= 5
	) {
		checkMizrafSubjects(); // Math && 5 units
		return 30;
	} else if (mizrafTechSubjects.includes(subject) && units >= 5) {
		return checkMizrafSubjects(); // Mizraf Subject && 5 units
	} else if (techBigBonusSubjects.includes(subject) && units >= 5) {
		return 25; // High bonus subject && 5 units
	} else if (units >= 5) {
		return 20; // Regular subject && 5 units
	} else if (units == 4) {
		return 10; // Regular subject && 4 units
	}
	return 0; // No bonus subject
};

// In Technion, a combination of 5-units-math & two 5-units-mizraf-subjects, grants a special bonus of 30 for each
export const checkMizrafSubjects = function () {
	// Collects all bagrut-table-rows
	const rows = extractTableRowsById("#bagrut-table-body");

	// Iterates over bagrut-table-rows, and sorts out potential Mizraf Subjects
	let relevantMizrafRows = [],
		isMath = false;
	rows.forEach((row) => {
		// Extracts data out of the given row (subject, units, grade, examType & bonus)
		let subjectText, units, grade, examType, bonus;
		[subjectText, units, grade, examType, bonus] =
			extractBagrutTableRowData(row);

		// Checks if current row's data represents a 5-units math exam
		isMath = isFiveUnitsMath(subjectText, examType, units, grade, isMath);

		// Checks if current row's data represents a Mizraf Subject. If so, appends its data to relevantMizrafRows array.
		if (isMizrafSubject(subjectText, examType, units, grade)) {
			relevantMizrafRows.push({
				row: row,
				subject: subjectText,
				grade: parseInt(grade),
			});
		}
	});

	// Sorts the relevant rows by grade, descending
	relevantMizrafRows.sort((a, b) => b.grade - a.grade);

	// Checks if there's a valid Mizraf combo.
	// If so, sets bonus of 30 to the top two subjects & 25 to the others.
	// Otherwise, sets bonus of 25 to the Mizraf Subjects
	if (isValidMizrafCombo(isMath, relevantMizrafRows.length)) {
		relevantMizrafRows.slice(0, 2).forEach((item) => {
			item.row.cells[4].textContent = 30;
		});
		relevantMizrafRows.slice(2).forEach((item) => {
			item.row.cells[4].textContent = 25;
		});
	} else {
		relevantMizrafRows.forEach((item) => {
			item.row.cells[4].textContent = 25;
		});
	}
};

// Gets a row's data and checks if its a 5-units Mizraf subject exam
function isMizrafSubject(subjectText, examType, units, grade) {
	return (
		mizrafTechSubjects.includes(subjectText) &&
		examType === "בחינה" &&
		units == 5 &&
		grade >= 60
	);
}

// Checks if there's a valid mizraf combo (5-units math exam & two or more Mizraf subjects)
function isValidMizrafCombo(isMath, mizrafSubjectNum) {
	return isMath && mizrafSubjectNum >= 2;
}

export default getTechBonus;
