

function initFilter() {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('catalog__btn-filter')) {
			document.querySelector('.catalog__filter').classList.toggle('active')
			document.querySelector('.catalog__btn-filter').classList.toggle('active')
		} else if (!targetElement.closest('.catalog__filter') && document.querySelector('.catalog__filter.active')) {
			document.querySelector('.catalog__filter').classList.remove('active')
			document.querySelector('.catalog__btn-filter').classList.remove('active')

		}
	}
}

export const initCatalog = () => {
	initFilter()
}