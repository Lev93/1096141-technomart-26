var slides = document.querySelectorAll('.slider-item'),
	nextBtn = document.querySelector('.slider-control-button.is-next'),
	backBtn = document.querySelector('.slider-control-button.is-back'),
	bulits = document.querySelector('.slider-bulits');

var currentSlide = 0,
	slideCount = slides.length;

var sliderAction = function (currentSlide, nextSlide) {
	slides[currentSlide].classList.remove('is-active');
	slides[nextSlide].classList.add('is-active');
	bulitButtons[currentSlide].classList.remove('is-active');
	bulitButtons[nextSlide].classList.add('is-active');
};

var bulit = '';
for (var i = 0; i < slideCount; i++) {
	bulit += '<li class="slider-bulit"><button class="slider-bulit-button ' + (i === currentSlide ? 'is-active' : '') + '" type="button" data-index="' + i + '"><span class="visually-hidden">' + i + '</span></button></li>';
}
bulits.innerHTML = bulit;

var bulitButtons = bulits.querySelectorAll('.slider-bulit-button');
for (var i = 0; i < slideCount; i++) {
	bulitButtons[i].addEventListener('click', function (e) {
		var nextSlide = Number(e.target.getAttribute('data-index'));
		sliderAction(currentSlide, nextSlide);
		currentSlide = nextSlide;
	});
}

nextBtn.addEventListener('click', function () {
	var nextSlide = currentSlide + 1;
	if (nextSlide >= slideCount) {
		nextSlide = 0;
	}
	sliderAction(currentSlide, nextSlide);
	currentSlide = nextSlide;
});
backBtn.addEventListener('click', function () {
	var backSlide = currentSlide - 1;
	if (backSlide < 0) {
		backSlide = slideCount - 1;
	}
	sliderAction(currentSlide, backSlide);
	currentSlide = backSlide;
});