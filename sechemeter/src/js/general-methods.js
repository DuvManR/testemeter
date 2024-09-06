// ~~~~~~~~~~~~~~~ \\
// General Methods \\
// ~~~~~~~~~~~~~~~ \\

// Gets the SELECT-ELEMENT-ID and returns the selected value
export const getSelectedOption = function(selectElementId) {
	return document.getElementById(selectElementId).value;
}