const menuOpen = document.querySelector('.js-menu-open'),
	menuClose = document.querySelector('.js-menu-close'),
	nav = document.querySelector('.js-nav');

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

function toggleMenu() {
	menuOpen.classList.toggle('hide');
	menuClose.classList.toggle('hide');
	nav.classList.toggle('hide');
}
