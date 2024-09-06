// ~~~~~~~~~ \\
// Constants \\
// ~~~~~~~~~ \\

// Default stats of mandatory subjects for bagrut-table creation
export const defaultTableSubjects = [
	{ subject: 'תנ"ך', units: 2, bonus: 0 },
	{ subject: "ספרות", units: 2, bonus: 0 },
	{ subject: "עברית", units: 2, bonus: 0 },
	{ subject: "אנגלית", units: 5, bonus: 0 },
	{ subject: "היסטוריה", units: 2, bonus: 0 },
	{ subject: "אזרחות", units: 2, bonus: 0 },
	{ subject: "מתמטיקה", units: 5, bonus: 0 },
];

// All the mandatory subjects for average calculations.
export const mandatorySubjects = [
	"עברית",
	"אנגלית",
	"היסטוריה",
	"אזרחות",
	"מתמטיקה",
];

// Ivrit Kasha Safa
const physics = ["פיזיקה", "פיסיקה"];
const compSci = ["מדעי המחשב", "מחשבים", "מדמח", 'מדמ"ח'];
const toshba = ['תושב"ע', "תושבע", 'תורה שבע"פ', "תורה שבעל פה"];

// Science & technology subjects
const sciSubjects = [...physics, ...["ביולוגיה", "כימיה"]];
const techSubjects = [
	...compSci,
	...[
		"בקרת מכונות",
		"אלקטרוניקה ומחשבים",
		"אלקטרוניקה",
		"מדעי ההנדסה",
		"ביוטכנולוגיה",
		"מערכות ביוטכנולוגיה",
		"יישומי ביוטכנולוגיה",
	],
];

// Mizraf subject - for Technion average calculations
export const mizrafTechSubjects = [...sciSubjects, ...techSubjects];

// Subjects with a very high bonus score (25+ for 5 units)
const generalBigBonusSubjects = [
	...sciSubjects,
	...["אנגלית", "היסטוריה", "ספרות", 'תנ"ך'],
];
export const tauBigBonusSubjects = [...generalBigBonusSubjects];
export const hujiBigBonusSubjects = [
	...generalBigBonusSubjects,
	...compSci,
	...["מחשבת ישראל", "ערבית", "אזרחות", "מתמטיקה"],
];
export const techBigBonusSubjects = [
	...generalBigBonusSubjects,
	...techSubjects,
	...["ערבית"],
];
export const bguBigBonusSubjects = [...generalBigBonusSubjects, ...compSci];
export const biuBigBonusSubjects = [
	...generalBigBonusSubjects,
	...compSci,
	...toshba,
	...["תלמוד", "מחשבת ישראל", "אזרחות"],
];

export const maxUniversitiesBagrutAverage = {
	TAU: 117,
	HUJI: 127,
	TECH: 119,
	BGU: 120,
	BIU: 126,
};
