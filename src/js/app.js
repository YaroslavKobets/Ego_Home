import { initHeader } from './header.js'
import { initSpoiler } from './libraries/spoilers.js'
import { initCatalog } from './pages/catalog.js'
import { initHome } from './pages/home.js'
import { initProductPage } from './pages/product.js'
import { initForm } from './utils/form.js'
import { initLazyLoad } from './utils/lazyLoad.js'

initLazyLoad()
initForm()
AOS.init({
	once: true,
	duration: 800,
	delay: 300,
	offset: 120,
	anchorPlacement: 'center-bottom',
})

const showMore = document.querySelector('.more-btn')
const showMoreFiles = document.querySelector('.catalog__conten-text > p')
if (showMore) {
	if (showMoreFiles.clientHeight < 73) {
		showMore.remove()
	} else {
		showMore.addEventListener('click', function (e) {
			showMore.classList.toggle('active')
			showMoreFiles.style.maxHeight = showMoreFiles.scrollHeight + 'px'
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initHeader()
	initHome()
	initProductPage()
	initSpoiler()
	initCatalog()
})
