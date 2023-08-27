document.addEventListener("DOMContentLoaded", function() {
	const frameTime = 16; // 60FPS
	const transitionDuration = 300; // milliseconds
	let currentPublicSlide = 0;
	const publicSlides = document.querySelectorAll('.work-public__image-slideshow .slide');
	const publicPrevButton = document.querySelector('.prev[data-target="publicSlideshow"]');
	const publicNextButton = document.querySelector('.next[data-target="publicSlideshow"]');
	let currentApartmentSlide = 0;
	const apartmentSlides = document.querySelectorAll('.work-apartment__image-slideshow .slide');
	const apartmentPrevButton = document.querySelector('.prev[data-target="apartmentSlideshow"]');
	const apartmentNextButton = document.querySelector('.next[data-target="apartmentSlideshow"]');

	function animate(from, to, duration, update) {
		let startTime = null;

		function step(timestamp) {
			if (startTime === null) startTime = timestamp;
			let progress = Math.min((timestamp - startTime) / duration, 1);
			update(from + (to - from) * progress);
			if (progress < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	function updateSlides(slides, currentSlide) {
		slides.forEach((slide, index) => {
			if (index === currentSlide) {
				slide.classList.add("active");
				animate(0, 1, transitionDuration, function(val) {
					slide.style.opacity = val;
				});
			} else {
				slide.classList.remove("active");
				animate(1, 0, transitionDuration, function(val) {
					slide.style.opacity = val;
				});
			}
		});
	}
	publicPrevButton.addEventListener('click', function() {
		currentPublicSlide = (currentPublicSlide > 0) ? currentPublicSlide - 1 : publicSlides.length - 1;
		updateSlides(publicSlides, currentPublicSlide);
	});
	publicNextButton.addEventListener('click', function() {
		currentPublicSlide = (currentPublicSlide + 1) % publicSlides.length;
		updateSlides(publicSlides, currentPublicSlide);
	});
	apartmentPrevButton.addEventListener('click', function() {
		currentApartmentSlide = (currentApartmentSlide > 0) ? currentApartmentSlide - 1 : apartmentSlides.length - 1;
		updateSlides(apartmentSlides, currentApartmentSlide);
	});
	apartmentNextButton.addEventListener('click', function() {
		currentApartmentSlide = (currentApartmentSlide + 1) % apartmentSlides.length;
		updateSlides(apartmentSlides, currentApartmentSlide);
	});
	// 初期表示
	updateSlides(publicSlides, currentPublicSlide);
	updateSlides(apartmentSlides, currentApartmentSlide);
});



// ページが完全に読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
	// ハンバーガーメニューとナビゲーションメニュー、閉じるボタンの要素を取得
	const hamburgerMenu = document.getElementById('mobile-header__hamburger-menu');
	const mobileNav = document.getElementById('mobile-header__nav');
	const closeButton = document.getElementById('mobile-header__close-button');

	// 要素が正しく取得できた場合のみ、以下の処理を行う
	if (hamburgerMenu && mobileNav && closeButton) {
	  // ハンバーガーメニューがクリックされたら、ナビゲーションを表示
	  hamburgerMenu.addEventListener('click', function() {
		mobileNav.style.display = 'flex';
	  });

	  // 閉じるボタンがクリックされたら、ナビゲーションを非表示
	  closeButton.addEventListener('click', function() {
		mobileNav.style.display = 'none';
	  });
	}
  });



