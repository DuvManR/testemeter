// ~~~~~~~~~~~~~~~~~~~ \\
// Create Bagrut Table \\
// ~~~~~~~~~~~~~~~~~~~ \\

import { defaultTableSubjects } from "./bagrut-config.js";
import { getSelectedOption } from "../general-methods.js";
import updateAvg from "./bagrut-avg-calc.js";
import { checkMizrafSubjects } from "./by-university/tech-bagrut.js";

// Creates a new bagrut-table-row (subject-cell -> units-cell -> grade-cell -> examType-cell -> delete-cell)
export const createBagrutRow = function (
	subject = "",
	units = 5,
	bonus = 0,
	isNewRow = false
) {
	// Creates a new HTML TR element
	const row = document.createElement("tr");

	// Adds new cells to the row
	row.addTableCell("subject", subject, isNewRow);
	row.addTableCell("units", units, isNewRow);
	row.addTableCell("grade", "", isNewRow);
	row.addTableCell("examType", "", isNewRow);
	row.addTableCell("bonus", bonus, isNewRow);
	row.addTableCell("delete", "X", isNewRow);

	return row;
};

// Creates a new table-cell based on the given cellType
HTMLTableRowElement.prototype.addTableCell = function (
	cellType,
	cellText,
	isNewRow = false
) {
	// Creates a new HTML TD element
	const cell = document.createElement("td");

	// Switch to cell creation defined by cellType
	switch (cellType) {
		case "subject": //Subject Cell
			if (isNewRow) {
				let subjectInput = createTableInput(
					"text",
					"subject",
					cellText,
					[{ event: "input", func: updateAvg }]
				);
				cell.appendChild(subjectInput);
			} else {
				cell.textContent = cellText;
			}
			break;

		case "units": //Units Cell
			let unitsInput = createTableInput("number", "units", cellText, [
				{
					event: "input",
					func: handleTableInputMinAndMax,
					vars: { minVal: 1, maxVal: 10 },
				},
				{ event: "keydown", func: handleTableInput },
			]);
			cell.appendChild(unitsInput);
			break;

		case "grade": //Grade Cell
			let gradeInput = createTableInput("number", "grade", cellText, [
				{
					event: "input",
					func: handleTableInputMinAndMax,
					vars: { minVal: 0, maxVal: 100 },
				},
				{ event: "keydown", func: handleTableInput },
			]);
			cell.appendChild(gradeInput);
			break;

		case "examType": //ExamType Cell
			let examTypeSelect = createTableSelect();
			cell.appendChild(examTypeSelect);
			break;

		case "bonus": // Bonus Cell
			cell.textContent = cellText;
			break;

		case "delete": // DeleteRow Cell
			if (isNewRow) {
				let deleteButton = createTableButton(
					cellText,
					"לחץ למחיקת מקצוע מחישוב הממוצע",
					this
				);
				cell.appendChild(deleteButton);
			}
			break;
	}

	// Adds the newly created cell to the row
	this.appendChild(cell);
};

// Creates a bagrut-table-input element, by the given type, name, value and assigned functions
function createTableInput(
	inputType,
	inputName,
	inputValue,
	eventListenerFuncArr
) {
	// Creates a new input element, defined by the given variables
	let tableInput = document.createElement("input");
	tableInput.type = inputType;
	tableInput.name = inputName;
	tableInput.value = inputValue;
	tableInput.className = "table-input";

	// Iterates through the functions that need to be assigned to the input, and adds an EventListener for each
	eventListenerFuncArr.forEach((currentFuncDict) => {
		if (inputName === "subject") {
			tableInput.addEventListener(currentFuncDict.event, () => {
				currentFuncDict["func"]();
			});
		} else {
			if (currentFuncDict.event === "input") {
				tableInput.addEventListener(currentFuncDict.event, function () {
					currentFuncDict["func"](currentFuncDict.vars, this);
				});
			} else {
				tableInput.addEventListener(
					currentFuncDict.event,
					function (e) {
						currentFuncDict["func"](e);
					}
				);
			}
		}
	});

	return tableInput;
}

// Gets an Input Element required min & max values.
// This function is assigned to an INPUT EVENT
// It ensures no value can be written out of the given ragne
function handleTableInputMinAndMax(varsDict, tableInput) {
	// Gets min & max values
	let minVal = varsDict.minVal;
	let maxVal = varsDict.maxVal;

	// Removes any none digit char
	tableInput.value = tableInput.value.replace(/\D/g, "");
	let val = parseInt(tableInput.value, 10);

	// Ensures no  value can be written out of the given range
	if (isNaN(val)) {
		tableInput.value = "";
	} else if (val < minVal) {
		tableInput.value = minVal;
	}
	if (val > maxVal) {
		tableInput.value = maxVal;
	}

	// On INPUT EVENT, updates the bagrut-average
	updateAvg();
}

// Specified which keys are ok to be pressed on Input's Keydown Event
function handleTableInput(e) {
	// Allowed specific control keys, shortcuts, and page navigation keys
	const allowedKeys = [
		"Backspace",
		"Delete",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown",
		"Tab",
		"Enter",
		"Escape",
		"F5",
		"F6",
		"F7",
		"F8",
		"F9",
		"F10",
		"F11",
		"F12",
	];
	const ctrlShortcuts = [
		"KeyA",
		"KeyC",
		"KeyV",
		"KeyX",
		"KeyR",
		"Minus",
		"Equal",
	];

	// Checks if the pressed key is included in the arrays above or if it is a digit
	if (
		allowedKeys.includes(e.key) ||
		(ctrlShortcuts.includes(e.code) && e.ctrlKey) ||
		/^[0-9]$/.test(e.key)
	) {
		return; // Allows these keys
	}
	e.preventDefault(); // Prevents any other keys
}

// Creates a bagrut-table-select element
function createTableSelect() {
	// Creates a new select element
	let examTypeSelect = document.createElement("select");
	examTypeSelect.className = "table-select";

	// Creates select options
	let testOption = createSelectOption("בחינה", true);
	let gemerOption = createSelectOption("עבודה", false);
	examTypeSelect.appendChild(testOption);
	examTypeSelect.appendChild(gemerOption);

	// Assigns updateAvg() function on select change, for updating the bagrut-average
	examTypeSelect.addEventListener("change", () => {
		updateAvg();
	});

	return examTypeSelect;
}

// Creates a new Select Element option, by the value and selected-status
function createSelectOption(value, isSelected) {
	let option = document.createElement("option");
	option.value = value;
	option.textContent = value;
	option.selected = isSelected; // true if selected

	return option;
}

// Create a new bagrut-table-button element, by the given text, title and assigned parent-row-deletion function
function createTableButton(buttonText, buttonTitle, row) {
	// Creates a new button element, based on the given variables
	let tableButton = document.createElement("button");
	tableButton.textContent = buttonText;
	tableButton.className = "delete-button";
	tableButton.title = buttonTitle;

	// When buttin is clicked, removes the row it is based on
	tableButton.onclick = function () {
		row.remove();

		// If the current university is Technion, MizrafSubjects() must be checked
		let selectedOption = getSelectedOption("bagrut-universities");
		if (selectedOption === "TECH") {
			checkMizrafSubjects();
		}

		// Updates bagrut-average after the changes caused by current row removal
		updateAvg();
	};

	return tableButton;
}

// Reference to the bagrut-table-body
const bagrutTableBody = document.getElementById("bagrut-table-body");

// Populates bagrut-table with initial rows
defaultTableSubjects.forEach((item) => {
	const row = createBagrutRow(item.subject, item.units, item.bonus);
	bagrutTableBody.appendChild(row);
});

export default bagrutTableBody;
