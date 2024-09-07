// ~~~~~~~~~~~ \\
// TECH Bagrut \\
// ~~~~~~~~~~~ \\

import { techBigBonusSubjects, mizrafTechSubjects } from "../bagrut-config.js";
import {
	extractTableRowsById,
	extractBagrutTableRowData,
} from "../bagrut-table-parser.js";
import {
	isFailureGrade,
	isFiveUnitsMath,
	isFiveUnitsSubject,
	isFourUnitsSubject,
	isFiveUnitsBonusSubject,
	isGemer,
} from "../bagrut-general-rules.js";

// Gets TECH's row's data and returns the appropriate bonus cell value accordingly
const getTechBonus = function (subject, units, grade, selectedExamType) {
	if (isFailureGrade(grade)) {
		return 0;
	} else if (subject != "היסטוריה" && isGemer(selectedExamType, units)) {
		return 20;
	} else if (isFiveUnitsMath(subject, units)) {
		checkMizrafSubjects();
		return 30;
	} else if (isMizrafSubject(subject, units)) {
		return checkMizrafSubjects();
	} else if (isFiveUnitsBonusSubject(subject, units, techBigBonusSubjects)) {
		return 25;
	} else if (isFiveUnitsSubject(units)) {
		return 20;
	} else if (isFourUnitsSubject(units)) {
		return 10;
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
		isMath = isFiveUnitsMath(subjectText, units, examType, grade, isMath);

		// Checks if current row's data represents a Mizraf Subject. If so, appends its data to relevantMizrafRows array.
		if (isMizrafSubject(subjectText, units, examType, grade)) {
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
function isMizrafSubject(subjectText, units, examType = "בחינה", grade = 60) {
	return (
		mizrafTechSubjects.includes(subjectText) &&
		units == 5 &&
		examType == "בחינה" &&
		grade >= 60
	);
}

// Checks if there's a valid mizraf combo (5-units math exam & two or more Mizraf subjects)
function isValidMizrafCombo(isMath, mizrafSubjectNum) {
	return isMath && mizrafSubjectNum >= 2;
}

export default getTechBonus;
