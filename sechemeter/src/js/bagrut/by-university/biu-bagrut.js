// ~~~~~~~~~~ \\
// BIU Bagrut \\
// ~~~~~~~~~~ \\

import { biuBigBonusSubjects } from "../bagrut-config.js";
import {
	isFailureGrade,
	isFiveUnitsMath,
	isFiveUnitsSubject,
	isFourUnitsSubject,
	isFiveUnitsBonusSubject,
	isFourUnitsBonusSubject,
	isGemer,
	isFourUnitsMath,
} from "../bagrut-general-rules.js";

// Gets BIU's row's data and returns the appropriate bonus cell value accordingly
const getBiuBonus = function (subject, units, grade, selectedExamType) {
	if (isFailureGrade(grade)) {
		return 0;
	} else if (isGemer(selectedExamType, units)) {
		return 20;
	} else if (isFiveUnitsMath(subject, units)) {
		return 35;
	} else if (isFourUnitsMath(subject, units)) {
		return 15;
	} else if (isFiveUnitsBonusSubject(subject, units, biuBigBonusSubjects)) {
		return 25;
	} else if (isFourUnitsBonusSubject(subject, units, biuBigBonusSubjects)) {
		return 12.5;
	} else if (isFiveUnitsSubject(units)) {
		return 20;
	} else if (isFourUnitsSubject(units)) {
		return 10;
	}
	return 0; // No bonus subject
};
export default getBiuBonus;
