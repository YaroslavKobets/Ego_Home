
// import smoothscroll from 'smoothscroll-polyfill'


function initHeaderNav() {
	const iconMenu = document.querySelector('.mob-menu__icon');
	if (iconMenu) {
		const menuBody = document.querySelector('.mob-menu__body');
		iconMenu.addEventListener('click', function (e) {
			document.body.classList.toggle('lock')
			iconMenu.classList.toggle('open')
			menuBody.classList.toggle('open')
		})
	}
}

function initSeachForm() {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('open')
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form.open')) {
			document.querySelector('.search-form').classList.remove('open')

		}
	}
}
function initLang() {
	const accordion = document.querySelectorAll('.lang');

	accordion.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.lang__current');
			const content = self.querySelector('.lang__list');

			self.classList.toggle('open')
			if (self.classList.contains('open')) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = null;

			}
		})
	})
};

export const initHeader = () => {
	// smoothscroll.polyfill();

	initHeaderNav();
	initSeachForm()
	initLang()
}
