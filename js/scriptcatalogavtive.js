    var openCart = document.querySelectorAll(".buy");
    var popupCart = document.querySelector(".modal-cart");
    var closeCart = document.querySelector(".modal-cart-close-btn");
    var submitCart = popupCart.querySelector(".modal-cart-btn");
    var countBtn = document.querySelector(".basket");
    var counter = countBtn.querySelector(".count");

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