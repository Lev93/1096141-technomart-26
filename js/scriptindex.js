var link = document.querySelector(".redbutton-2");
var popup = document.querySelector(".window-message");
var close = popup.querySelector(".window-message-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector(".contact-form");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	evt.preventDefault();
});
form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".map-big");
var mapClose = mapPopup.querySelector(".window-message-close");
mapLink.addEventListener("click", function (evt2) {
	evt2.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt2) {
	evt2.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt2) {
	if (evt2.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt2.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
});