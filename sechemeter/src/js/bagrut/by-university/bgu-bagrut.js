// ~~~~~~~~~~ \\
// BGU Bagrut \\
// ~~~~~~~~~~ \\

import { bguBigBonusSubjects } from "../bagrut-config.js";
import {
	isFailureGrade,
	isFiveUnitsMath,
	isFiveUnitsSubject,
	isFourUnitsSubject,
	isFiveUnitsBonusSubject,
	isGemer,
	isFourUnitsMath,
	isFourUnitsEnglish,
} from "../bagrut-general-rules.js";

// Gets BGU's row's data and returns the appropriate bonus cell value accordingly
const getBguBonus = function (subject, units, grade, selectedExamType) {
	if (isFailureGrade(grade)) {
		return 0;
	} else if (isGemer(selectedExamType, units)) {
		return 20;
	} else if (isFiveUnitsMath(subject, units)) {
		return 35;
	} else if (isFourUnitsMath(subject, units)) {
		return 20;
	} else if (isFiveUnitsBonusSubject(subject, units, bguBigBonusSubjects)) {
		return 25;
	} else if (isFourUnitsEnglish(subject, units)) {
		return 15;
	} else if (isFiveUnitsSubject(units)) {
		return 20;
	} else if (isFourUnitsSubject(units)) {
		return 10;
	}
	return 0; // No bonus subject
};

export default getBguBonus;
