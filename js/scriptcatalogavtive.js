var openCart = document.querySelectorAll(".buy");
var tobookmark = document.querySelectorAll(".product-bookmark");
var popupCart = document.querySelector(".modal-cart");
var closeCart = document.querySelector(".modal-cart-close-btn");
var submitCart = popupCart.querySelector(".modal-cart-btn");
var countBtn = document.querySelector(".basket");
var countbookmark = document.querySelector(".bookmark")
var counter = countBtn.querySelector(".count");
var counterbookmark = countbookmark.querySelector(".bookmarkspan");

for (var i = 0; i < openCart.length; i++) {
	openCart[i].addEventListener("click", function (event) {
		event.preventDefault();
		popupCart.classList.add("modal-show");
		countBtn.classList.add("active");
		var count = Number(counter.innerHTML);
		counter.innerHTML = count += 1;
	});
}
submitCart.addEventListener("click", function (event) {
	event.preventDefault();
	popupCart.classList.remove("modal-show");
});
closeCart.addEventListener("click", function (event) {
	event.preventDefault();
	popupCart.classList.remove("modal-show");
});

for (var j = 0; j < tobookmark.length; j++) {
	tobookmark[j].addEventListener("click", function (e) {
		e.preventDefault();
		countbookmark.classList.add("active");
		var countb = Number(counterbookmark.innerHTML);
		counterbookmark.innerHTML = countb += 1;
	});
}