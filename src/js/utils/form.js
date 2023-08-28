


export const initForm = () => {
	const form = document.querySelector('form.contact-form');



	if (form) {
		const requiredFields = form.querySelectorAll('.required');
		let inputTel = document.querySelector('input[type="tel"]');
		let inputMask = new Inputmask('+380 (99) 999-99-99');
		inputMask.mask(inputTel)
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			let countErrors = 0;

			requiredFields.forEach((field) => {
				if (field.name == 'email') {
					if (!validateEmail(field.value)) {
						field.parentNode.classList.add('error')
						countErrors++
					} else {
						field.parentNode.classList.remove('error')
					}
				} else if (field.name == 'phone') {
					if (field.value.length < 10) {
						field.parentNode.classList.add('error')
						countErrors++
					} else {
						field.parentNode.classList.remove('error')
					}
				} else {
					if (field.value.length < 3) {
						field.parentNode.classList.add('error')
						countErrors++
					} else {
						field.parentNode.classList.remove('error')
					}
				}
			});



			if (countErrors > 0) {
				setTimeout(() => {
					requiredFields.forEach((field) => field.parentNode.classList.remove('error'));
				}, 3000)

				return false;
			}


			// ajax send
		});
	}
}


const validateEmail = (email) => {
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
