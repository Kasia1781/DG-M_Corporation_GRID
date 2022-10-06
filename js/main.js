const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger-box');

const allNavItems = document.querySelectorAll('.nav__link');
const navBtnSpin = document.querySelector('.hamburger--spin');

const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	navBtnSpin.classList.toggle('is-active');
	// navBtnBars.classList.toggle('is-active')

	allNavItems.forEach((link) => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			navBtnSpin.classList.remove('is-active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleCurrenYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrenYear();
navBtn.addEventListener('click', handleNav);
