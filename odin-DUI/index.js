document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

	let currentDropdown;
	if (isDropdownButton) {
		currentDropdown = e.target.closest("[data-dropdown]");
		currentDropdown.classList.toggle("active");
	}

	document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove("active");
	});
});

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1;
		const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

		const activeSlide = slides.querySelector("[data-active]");
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;

		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = "true";
		delete activeSlide.dataset.active;
	});
});

const email = document.getElementById("email");

email.addEventListener("input", () => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity("Iam expecting an email address!");
	} else {
		email.setCustomValidity("");
	}
});

const username = document.getElementById("user-name");
const useremail = document.getElementById("user-email");
const zipCode = document.getElementById("zip-code");
const pw = document.getElementById("user-password").value;

username.addEventListener("input", () => {
	if (username.validity.patternMismatch) {
		username.setCustomValidity("Only Strings allowed");
	} else {
		username.setCustomValidity("");
	}
});

useremail.addEventListener("input", () => {
	if (useremail.validity.typeMismatch) {
		useremail.setCustomValidity("Please enter a valid email");
	} else {
		useremail.setCustomValidity("");
	}
});

zipCode.addEventListener("input", () => {
	if (zipCode.validity.patternMismatch) {
		zipCode.setCustomValidity("Valid Postal code please");
	} else {
		zipCode.setCustomValidity("");
	}
});

pw.addEventListener("input", () => {
	if (pw.validity.tooShort || pw.validity.tooLong) {
		pw.setCustomValidity("invalid password");
	} else {
		pw.setCustomValidity("");
	}
});
