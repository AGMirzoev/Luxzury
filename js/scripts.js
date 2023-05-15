//==========Facilities==========
const swiperFacilities = new Swiper(".facilities__slider", {
	slidesPerView: 2,
	spaceBetween: 50,
	speed: 1000,
	loop: true,
	navigation: {
		prevEl: ".facilities__button-prev",
		nextEl: ".facilities__button-next",
	},
});

let tabs = document.querySelector(".tabs__list");
let facilitiesSlider = document.querySelectorAll(".facilities__sliders-block ");

tabs.addEventListener("click", function (e) {
	if (e.target.classList.contains("tabs__item")) {
		this.querySelectorAll(".tabs__item").forEach((item) =>
			item.classList.remove("active")
		);
		e.target.classList.add("active");
	}

	facilitiesSlider.forEach((slider) => slider.classList.remove("show"));
	let tabIndex = e.target.dataset.tab;
	let thisSwiper = document.querySelector(tabIndex);
	thisSwiper.classList.add("show");
});

//==========Reviews==========
const swiperReviews = new Swiper(".reviews__swiper", {
	loop: true,
	speed: 1000,
	navigation: {
		prevEl: ".reviews__button-prev",
		nextEl: ".reviews__button-next",
	},
});
