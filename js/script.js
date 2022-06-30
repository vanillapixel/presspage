const menuButton = document.querySelector(".menu-icon");
const navbar = document.querySelector("nav");
const navBackdrop = document.querySelector(".nav-backdrop");
const lightDarkModeButton = document.querySelector(".light-dark-mode-wrapper");

menuButton.addEventListener("click", toggleMenu);
navBackdrop.addEventListener("click", toggleMenu);

lightDarkModeButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
	document.body.classList.toggle("dark-mode");
}
function toggleMenu() {
	navbar.classList.toggle("nav--open");
	const scrollPosition = window.scrollY;

	if (navbar.classList.contains("nav--open")) {
		document.body.style.position = "fixed";
		document.body.style.top = `-${scrollPosition}px`;
		return;
	}

	// Stores the scrolled position
	const scrollY = document.body.style.top;

	document.body.style.position = "";
	document.body.style.top = "";

	// When the menu is closed, the window is scrolled at the position when the menu was opened

	window.scrollTo(0, parseInt(scrollY || "0") * -1);
}
