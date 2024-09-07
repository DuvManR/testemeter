// ~~~~~~~~~~~ \\
// HUJI Bagrut \\
// ~~~~~~~~~~~ \\

import { hujiBigBonusSubjects } from "../bagrut-config.js";
import {
	isFailureGrade,
	isFiveUnitsMath,
	isFiveUnitsSubject,
	isFourUnitsSubject,
	isFiveUnitsBonusSubject,
	isFourUnitsBonusSubject
} from "../bagrut-general-rules.js";

// Gets HUJI's row's data and returns the appropriate bonus cell value accordingly
const getHujiBonus = function (subject, units, grade, selectedExamType) {
	if (isFailureGrade(grade)) {
		return 0;
	} else if (isFiveUnitsMath(subject, units, selectedExamType)) {
		return 35;
	} else if (isFiveUnitsBonusSubject(subject, units, hujiBigBonusSubjects)) {
		return 25;
	} else if (isFourUnitsBonusSubject(subject, units, hujiBigBonusSubjects)) {
		return 15;
	} else if (isFiveUnitsSubject(units)) {
		return 20;
	} else if (isFourUnitsSubject(units)) {
		return 10;
	}
	return 0; // No bonus subject
};

export default getHujiBonus;
