import Swiper from 'swiper/bundle'

const initProductSlider = () => {
	const sliderMain = document.querySelector('.produnct-information__slider-main')
	const sliderGallery = document.querySelector('.produnct-information__slider-gallery')

	if (sliderGallery && sliderMain) {

		const swiperGalleryTop = new Swiper(sliderMain, {
			slidesPerView: 1,
			speed: 700,
			loopedSlides: 10,
			navigation: {
				nextEl: '.nav-arrow--next',
				prevEl: '.nav-arrow--prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
				},

			},

		})
		const swiperGalleryThumbs = new Swiper(sliderGallery, {
			slidesPerView: 3,
			speed: 700,
			loopedSlides: 10,
			spaceBetween: 20,
			centeredSlides: true,
			slideToClickedSlide: true
		})
		swiperGalleryTop.controller.control = swiperGalleryThumbs;
		swiperGalleryThumbs.controller.control = swiperGalleryTop;

		let slides = sliderMain.querySelectorAll('.swiper-slide')
		if (slides.length < 2) {
			document.querySelector('.nav-arrow').remove()
			document.querySelector('.nav-arrow').remove()
			document.querySelector('.produnct-information__slider-gallery').remove()
		}

	}

}

const initProductTabs = () => {
	const tabs = document.querySelector('.tabs')
	if (tabs) {
		document.querySelectorAll('.tabs__triggers-item').forEach((item) => {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				const id = e.target.getAttribute('href').replace('#', '')

				document.querySelectorAll('.tabs__triggers-item').forEach((child) => {
					child.classList.remove('active');
				});
				document.querySelectorAll('.tabs__content-item').forEach((child) => {
					child.classList.remove('active');
				});

				item.classList.add('active');
				document.getElementById(id).classList.add('active')
			})
		})
		document.querySelector('.tabs__triggers-item').click();
	}

}

const initPopup = () => {
	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll(".lock-padding");

	let unlock = true;

	const timeout = 800;

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			});
		}
	}
	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(curentPopup) {
		if (curentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener("click", function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock) {
				bodyUnLock();
			}
		}
	}

	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = lockPaddingValue;
			}
		}
		body.style.paddingRight = lockPaddingValue;
		body.classList.add('lock');

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	function bodyUnLock() {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index];
					el.style.paddingRight = '0px';
				}
			}
			body.style.paddingRight = '0px';
			body.classList.remove('lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	(function () {
		if (!Element.prototype.closest) {
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		if (!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();
}

const initVideo = () => {
	function findVideos() {
		let videos = document.querySelectorAll('.product-characteristics__video');

		for (let i = 0; i < videos.length; i++) {
			setupVideo(videos[i]);
		}
	}

	function setupVideo(video) {
		let link = video.querySelector('.product-characteristics__video-link');
		let media = video.querySelector('.product-characteristics__video-media');
		let button = video.querySelector('.product-characteristics__video-btn');
		let id = parseMediaURL(media);

		video.addEventListener('click', () => {
			let iframe = createIframe(id);

			link.remove();
			button.remove();
			video.appendChild(iframe);
		});

		link.removeAttribute('href');
		video.classList.add('product-characteristics__video--enabled');
	}

	function parseMediaURL(media) {
		let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
		let url = media.src;
		let match = url.match(regexp);

		return match[1];
	}

	function createIframe(id) {
		let iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('src', generateURL(id));
		iframe.classList.add('video__media');

		return iframe;
	}

	function generateURL(id) {
		let query = '?rel=0&showinfo=0&autoplay=1';

		return 'https://www.youtube.com/embed/' + id + query;
	}

	findVideos();
}
export const initProductPage = () => {

	initProductSlider()
	initProductTabs()
	initVideo()
	initPopup()
}