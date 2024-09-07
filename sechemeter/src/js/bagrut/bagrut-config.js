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
export const techMandatorySubjects = [...mandatorySubjects, "ספרות", 'תנ"ך'];

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

// Max Bagrut Average by University
export const maxUniversitiesBagrutAverage = {
	TAU: 117,
	HUJI: 127,
	TECH: 119,
	BGU: 120,
	BIU: 126,
};

// Univesity Logo Images
export const defaultUniLogo = "../src/img/default-uni.png";
export const tauLogo = "../src/img/tau.png";
export const hujiLogo = "../src/img/huji.png";
export const techLogo = "../src/img/tech.png";
export const bguLogo = "../src/img/bgu.png";
export const biuiLogo = "../src/img/biu.png";

// Bagrut Results Theme Color
export const defaultColor = "#f9f9f9";
export const invalidUnitsNumColor = "#ffcccc";
export const validUnitsNumColor = "#D1FFBD";

// Bagrut Average Constants
export const minBonusGrade = 60;
export const minUnitsNum = 20;
export const minTechUnitsNum = 21;