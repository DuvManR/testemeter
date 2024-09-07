// ~~~~~~~~~~~~~~~ \\
// Mobile Handling \\
// ~~~~~~~~~~~~~~~ \\

// Checks if the application is running on a mobile device
export const isMobile = function() {
	return /Mobi|Android/i.test(navigator.userAgent);
}

// In some mobiles there seem to be strange borders between table rows, that appear/disappear while zooming
// This function solves the problem, by resetting the table's borders.
export const adjustTableForMobile = function() {
	const table = document.querySelector(".bagrut-table");
	if (table) {
		table.style.border = "none"; // Temporarily removes borders
		table.style.width = "100%"; // Resets width
		setTimeout(() => {
			table.style.border = "2px solid #004080"; // Reapplies borders
		}, 0); // Applies immediately after removing borders
	}
}

// Initializes Lottie animation
var animation = lottie.loadAnimation({
	container: document.getElementById("lottie-animation"), // The DOM element where the animation will be added
	renderer: "svg", // Renders the animation as SVG
	loop: true, // Loops the animation
	autoplay: true, // Autoplays the animation
	path: "../src/json/rotate-phone.json", // Lottie-animation .config file
});

// Rotate-Phone close button functionality
document.getElementById("close-button").addEventListener("click", function () {
	document.getElementById("rotate-message").style.display = "none";
});

export default animation;
