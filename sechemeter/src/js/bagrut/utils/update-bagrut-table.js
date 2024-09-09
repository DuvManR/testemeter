// ~~~~~~~~~~~~~~~~~~~ \\
// Update Bagrut Table \\
// ~~~~~~~~~~~~~~~~~~~ \\

import {
	BGU,
	BIU,
	HUJI,
	TAU,
	TECH,
	addRowButtonID,
	bagrutLogoImageID,
	bagrutResultText,
	bagrutResultsID,
	bagrutSelectID,
	defaultUni,
	fiveUnits,
	maxUniversitiesBagrutAverage,
	noAverage,
	noBonus,
} from "../bagrut-config.js";
import updateAvg from "./bagrut-avg-calc.js";
import { isInvalidBagrutUnitsNum } from "./bagrut-general-rules.js";
import { checkMizrafSubjects } from "../by-university/tech-bagrut.js";
import bagrutTableBody, { createBagrutRow } from "./create-bagrut-table.js";
import { isMobile, adjustTableForMobile } from "./handle-mobile-rotation.js";
import { roundDigits, updateImage } from "../../general-methods.js";
import {
	defaultUniLogo,
	tauLogo,
	hujiLogo,
	techLogo,
	bguLogo,
	biuiLogo,
	clickEvent,
} from "../../general-config.js";
import {
	defaultColor,
	invalidUnitsNumColor,
	validUnitsNumColor,
} from "../bagrut-config.js";

// Updates university logo when switching from one university to another
document.getElementById(bagrutSelectID).onchange = function () {
	// Gets the selected option value
	let selectedUniversity = this.value;

	// Updates university logo when switching from one university to another
	switch (selectedUniversity) {
		case TAU:
			updateImage(bagrutLogoImageID, tauLogo);
			break;
		case HUJI:
			updateImage(bagrutLogoImageID, hujiLogo);
			break;
		case TECH:
			updateImage(bagrutLogoImageID, techLogo);
			checkMizrafSubjects();
			break;
		case BGU:
			updateImage(bagrutLogoImageID, bguLogo);
			break;
		case BIU:
			updateImage(bagrutLogoImageID, biuiLogo);
			break;
		default:
			updateImage(bagrutLogoImageID, defaultUniLogo);
	}

	// On CHANGE EVENT of select-universities element, updates the bagrut-average accordingly
	updateAvg();
};

// Gets the calculated bagrut-average, number of calculated units, total number of units and current university & displays the appropriate bagrut-average
export function displayAvg(
	avg,
	unitsNum,
	totalUnitsNum,
	deltaUnits,
	university
) {
	// Gets current university's max bagrut-average
	let maxUniAvg = maxUniversitiesBagrutAverage[university];

	// Removes units added only for calculation purposes (etc. TECH's 5/4-units math)
	let realUnitsNum = unitsNum - deltaUnits;

	// No row was filled - bagrut-average = 0
	let resultsDiv = document.getElementById(bagrutResultsID);
	if (!avg || isNaN(avg)) {
		displayResults(
			bagrutResultsID,
			bagrutResultText.format(realUnitsNum, totalUnitsNum, noAverage)
		);
	}

	// Checks if current bagrut-average is bigger than university's max bagrut-average
	// If so, sets it as the max allowed value
	else if (avg > maxUniAvg) {
		displayResults(
			bagrutResultsID,
			bagrutResultText.format(realUnitsNum, totalUnitsNum, maxUniAvg)
		);
	} else {
		// HUJI & TECH represent the average as ONE digit after the decimal point
		// TAU, BGU & BIU represent the average as TWO digits after the decimal point
		if (university == HUJI || university == TECH) {
			avg = roundDigits(avg, 1);
		}
		displayResults(
			bagrutResultsID,
			bagrutResultText.format(realUnitsNum, totalUnitsNum, avg)
		);
	}

	// Sets the background color of bagrut-results-div
	setBagrutResultsDivColor(totalUnitsNum, resultsDiv, university);
}

// Sets bagrut-table-row's style based on whether it was calcaulated in average or not
HTMLTableRowElement.prototype.setRowStyle = function (
	fontWeight,
	backgroundColor
) {
	this.style.fontWeight = fontWeight; // Bolds\Unbolds Rows's Text
	this.style.backgroundColor = backgroundColor; // Row's Background Color
};

// Sets the background color of bagrut-results-div (empty => default gray color, 20- => red theme, 20+ => green theme)
function setBagrutResultsDivColor(totalUnitsNum, resultsDiv, university) {
	if (!totalUnitsNum || university == defaultUni) {
		resultsDiv.style.backgroundColor = defaultColor; // default gray color
	} else if (isInvalidBagrutUnitsNum(totalUnitsNum, university)) {
		resultsDiv.style.backgroundColor = invalidUnitsNumColor; // red theme
	} else {
		resultsDiv.style.backgroundColor = validUnitsNumColor; // green theme
	}
}

// Adds a CLICK event-listener to the add-row-button button
document.getElementById(addRowButtonID).addEventListener(clickEvent, () => {
	// Creates a new bagrut-table-row
	const newRow = createBagrutRow("", fiveUnits, noBonus, true);
	bagrutTableBody.appendChild(newRow);

	// Fixes a strange bug in mobiles, in which strange borders seem to appear between table rows,
	// that appear/disappear while zooming
	if (isMobile()) {
		adjustTableForMobile();
	}
});
