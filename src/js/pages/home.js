import Swiper from 'swiper/bundle'

const initHomeSlider = () => {
	const slider = document.querySelector('.home-slider-swiper')

	if (slider) {
		const swiper = new Swiper(slider, {
			slidesPerView: 1,
			speed: 700,
			navigation: {
				nextEl: '.nav-arrow--next',
				prevEl: '.nav-arrow--prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		})
		let slides = slider.querySelectorAll('.swiper-slide')
		if (slides.length < 2) {
			slider.querySelector('.nav-arrow').remove()
			slider.querySelector('.nav-arrow').remove()
			slider.querySelector('.swiper-pagination').remove()
		}
	}

}

const initCarouselGoodsSlider = () => {
	const slider = document.querySelectorAll('.carousel-goods-swiper')

	slider.forEach(element => {
		if (element) {
			const swiper = new Swiper(element, {
				loop: true,
				speed: 700,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1.2,
						spaceBetween: 30,
					},
					390: {
						slidesPerView: 1.5,
						spaceBetween: 30,
					},
					640: {
						slidesPerView: 2.5,
						spaceBetween: 25,
					},
					1081: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
				navigation: {
					nextEl: '.nav-arrow--next',
					prevEl: '.nav-arrow--prev',
				},
			})
		}
	});

}

const initInstagramSlider = () => {
	const slider = document.querySelector('.home-instagram-swiper')

	if (slider) {
		const swiper = new Swiper(slider, {
			loop: true,
			speed: 700,
			grabCursor: true,

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 15,
				},
				390: {
					slidesPerView: 2,
					spaceBetween: 25,
				},
				1081: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		})
	}
}

export const initHome = () => {

	initHomeSlider()
	initCarouselGoodsSlider()
	initInstagramSlider()

}
