// ~~~~~~~~~~~~~ \\
// Bagrut Config \\
// ~~~~~~~~~~~~~ \\

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

// Bagrut Results Theme Color
export const defaultColor = "#f9f9f9";
export const invalidUnitsNumColor = "#ffcccc";
export const validUnitsNumColor = "#D1FFBD";

// Bagrut Average Constants
export const examTypeGemer = "עבודה";
export const examTypeExam = "בחינה";
export const math = "מתמטיקה";
export const english = "אנגלית";
export const history = "היסטוריה";
export const minBonusGrade = 60;
export const minUnitsNum = 20;
export const minTechUnitsNum = 21;
export const fiveUnits = 5;
export const fourUnits = 4;
export const noBonus = 0;
export const thirtyFiveBonus = 35;
export const thirtyBonus = 30;
export const twentyFiveBonus = 25;
export const twentyBonus = 20;
export const fifteenBonus = 15;
export const twelvePlusHalfBonus = 12.5;
export const tenBonus = 10;
export const minMizrafSubjects = 2;
export const noAverage = 0;
export const unitsMinVal = 1;
export const unitsMaxVal = 10;
export const gradeMinVal = 0;
export const gradeMaxVal = 100;

// Bagrut Table Style Constants
export const bagrutRowBgColor = "#ADD8E6";
export const boldText = "bold";
export const normalText = "normal";
export const bagrutTableBorderStyle = "2px solid #004080";

// Universities
export const defaultUni = "default-uni";
export const TAU = "TAU";
export const HUJI = "HUJI";
export const TECH = "TECH";
export const BGU = "BGU";
export const BIU = "BIU";

// Elements IDs, Classes, Names & Selector Queries
export const deleteButtonClass = "delete-button";
export const bagrutSelectID = "bagrut-universities";
export const bagrutLogoImageID = "bagrut-logo-image";
export const bagrutResultsID = "bagrut-result";
export const extendedBagrutTableBodyID = "#bagrut-table-body";
export const bagrutTableBodyID = "bagrut-table-body";
export const addRowButtonID = "add-row-button";
export const bagrutTableSelectorQuery = ".bagrut-table";
export const unitsName = "units";
export const gradeName = "grade";
export const subjectName = "subject";
export const examTypeName = "examType";
export const bonusName = "bonus";
export const deleteName = "delete";

// Dict Constants
export const funcKey = "func";

// Titles, Outputs & Sentences Constants
export const deleteButtonTitle = "לחץ למחיקת מקצוע מחישוב הממוצע";
export const bagrutResultText =
	'סה"כ יח"ל בחישוב: {0}/{1} | ממוצע בגרות מיטבי: {2}';
export const deleteButtonText = "X";
