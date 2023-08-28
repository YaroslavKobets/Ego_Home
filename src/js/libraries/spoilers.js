export const initSpoiler = () => {
	const accordion = document.querySelectorAll('.accordion__item');

	accordion.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open')
			if (self.classList.contains('open')) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = null;

			}
		})
	})
};