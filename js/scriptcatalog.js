var linkbuy = document.querySelector(".buy");
  var popup3 = document.querySelector(".modal-cart");
  var close3 = popup3.querySelector(".modal-cart-close");
	
linkbuy.addEventListener("click", function (evt3) {
evt3.preventDefault();
popup3.classList.add("modal-show");	
  });
close3.addEventListener("click", function (evt3) {
    evt3.preventDefault();
    popup3.classList.remove("modal-show");
  });

var buttons = document.querySelectorAll(".buy");

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e.target.innerHTML);
        popup3.classList.add("modal-show");
     });
}
	
