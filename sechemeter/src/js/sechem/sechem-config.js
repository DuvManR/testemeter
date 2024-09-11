// ~~~~~~~~~~~~~ \\
// SECHEM Config \\
// ~~~~~~~~~~~~~ \\

// Google Sheet Constants
const sheetId = "1xfx0e4HlG92-7cuKgm0iOmhsdOF3hxoM0J0A-Q0nEH4"; // Google Sheet ID
const apiKey = "AIzaSyC-4w3esBd3WrUWG3PCwxmaaO-2qrsaIEk"; // Google API key
const range =
	"%D7%A1%D7%9B%D7%9E%D7%99%D7%9D%20-%20%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%99%2F%D7%A1%D7%95%D7%A4%D7%99%20%D7%91%D7%9C%D7%91%D7%93"; // Range to check
export const googleSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
export const noDataSheetCell = "-";
export const sheetYearlyDictTemplate = {
	YEAR: "",
	data: {
		HUJI: { FIRST: "", FINAL: "" },
		TAU: { FIRST: "", FINAL: "" },
		TECH: { FIRST: "", FINAL: "" },
		BIU: { FINAL: "" },
	},
};
export const yearOption = "Year";
export const uniTresholdOption = "Uni-Treshold";
export const tresholdsOption = "Tresholds";

// Sheet Iterations Constants
const uniNum = 4;
export const uniCellNum = 4;
export const iterByUniNum = uniNum * uniCellNum - 1;
export const firstCol = 0;
export const techYearColIndex = 8; // As TECH has the longest year column

// HTTP Constants
export const httpPost = "POST";
export const httpContentType = "Content-type";
export const httpApplicationJson = "application/json";
export const httpOk = 200;
export const httpForbidden = 403;
export const httpReadyState = 4;

export const httpTauUrl = "https://go.tau.ac.il/graphql";
export const httpTauHeaders = { "Content-type": httpApplicationJson };
export const httpTauDataJSON = {
	operationName: "getLastScore",
	variables: {
		scoresData: {
			prog: "calctziun",
			out: "json",
			reali10: 1,
			psicho: 200,
			bagrut: 0,
		},
	},
	query: "query getLastScore($scoresData: JSON!) {\n  getLastScore(scoresData: $scoresData) {\n    body\n    __typename\n  }\n}\n",
};
export const httpTauHatama = "hatama";
export const httpTauData = "data";
export const httpTauGetLastScore = "getLastScore";
export const httpTauBody = "body";
export const httpTauHatamaRefua = "hatama_refua";

export const httpBguUrl =
	"https://corsproxy.io/?https://bgu4u.bgu.ac.il/pls/rgwp/!rg.acc_SubmitSekem";
export const httpBguHeaders = {
	"Content-type": "application/x-www-form-urlencoded",
};
export const httpBguData =
	"rn_include_mitsraf=0&rn_year={0}&on_bagrut_average={1}&on_psychometry={2}&on_final_sekem=";
export const httpBguOnFinalSekem = "on_final_sekem";

// Sechem Constants
export const undefinedUni = "undefined";
export const minPsycho = 200;
export const maxPsycho = 800;
export const minBagrut = 0;
export const minMorkam = 150;
export const maxMorkam = 250;

export const tauMinPsycho = 700;
export const tauMinBagrut = 40;
export const hujiMinPsycho = 700;
export const hujiMinBagrut = 6;
export const hujiMinCognitive = 16.0;
export const hujiMaxCognitive = 30.0;
export const techMinPsycho = 200;
export const techMinBagrut = 0;
export const bguMinPsycho = 680;
export const bguMinBagrut = 0;
export const bguFirstSechemTreshold = 735;
export const biuMinPsycho = 680;
export const biuMinBagrut = 101;
export const biuFirstSechemTreshold = 0;

// Universities Constants
export const tauFirst = "TAU-FIRST";
export const tauFinal = "TAU-FINAL";
export const hujiFirst = "HUJI-FIRST";
export const hujiFinal = "HUJI-FINAL";
export const techFirst = "TECH-FIRST";
export const techFinal = "TECH-FINAL";
export const bguFirst = "BGU-FIRST";
export const bguFinal = "BGU-FINAL";
export const biuFirst = "BIU-FIRST";
export const biuFinal = "BIU-FINAL";

// Elements IDs, Classes & names
export const sechemResultsID = "sechem-results";

// Style Constants

// Titles, Outputs & Sentences Constants
export const sechemHTTPError =
	"נראה שמשהו השתבש... תדווחו ל <a href=mailto:refuah.israel2@gmail.com>refuah.israel2@gmail.com</a>";
export const fillAllInputs = "יש למלא את כלל השדות הקיימים ❗";
export const invalidInputs = "חלק מהערכים שהזנת אינם חוקיים ❗";
export const tooLowBagrut = "ציון הבגרות שלך נמוך מהמינימום הנדרש לחוג 😥";
export const tooLowPsycho = "ציון הפסיכומטרי שלך נמוך מהמינימום הנדרש לחוג 😥";

export const noTresholdYet =
	"❔ סכם: {0} | טרם נקבע סף מינימלי לחוג זה השנה ❔";
export const sadLog =
	"😥 סכם: {0} | נמוך מהסף המינימלי הדרוש לחוג זה לשנת {1} 😥";
export const happyLog =
	"🎉 סכם: {0} | עובר סף מינימלי הדרוש לחוג זה לשנת {1} 🎉";
export const happyLogWithoutSechem =
	"🎉 עובר סף מינימלי הדרוש לחוג זה לשנת {0} 🎉";
