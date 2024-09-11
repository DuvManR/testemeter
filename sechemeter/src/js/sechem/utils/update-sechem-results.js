// ~~~~~~~~~~~~~~~~~~~~~ \\
// Update Sechem Results \\
// ~~~~~~~~~~~~~~~~~~~~~ \\

import getUniSechemTreshold from "./handle-google-sheet.js";
import { displayResults } from "../../general-methods.js";
import {
	fillAllInputs,
	happyLog,
	happyLogWithoutSechem,
	invalidInputs,
	noTresholdYet,
	sadLog,
	sechemResultsID,
	tooLowBagrut,
	tooLowPsycho,
    yearOption,
} from "../sechem-config.js";

var currentYear = await getUniSechemTreshold(yearOption);

export const displayFillAllInputs = function () {
	displayResults(sechemResultsID, fillAllInputs);
};

export const displayInvalidInputs = function () {
	displayResults(sechemResultsID, invalidInputs);
};

export const displayTooLowBagrut = function () {
	displayResults(sechemResultsID, tooLowBagrut);
};

export const displayTooLowPsycho = function () {
	displayResults(sechemResultsID, tooLowPsycho);
};

export const displayNoTresholdYet = function (sechem) {
	displayResults(sechemResultsID, noTresholdYet.format(sechem));
};

export const displayHappyLog = function (sechem) {
	displayResults(sechemResultsID, happyLog.format(sechem, currentYear));
};

export const displayHappyLogWithoutSechem = function () {
	displayResults(sechemResultsID, happyLogWithoutSechem.format(currentYear));
};

export const displaySadLog = function (sechem) {
	displayResults(sechemResultsID, sadLog.format(sechem, currentYear));
};
