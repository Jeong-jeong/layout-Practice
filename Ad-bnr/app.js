const body = document.body;
const greeting = body.querySelector('.greeting');
const mario = body.querySelector('.mario');
const bnr = body.querySelector('.bnr_wrap');
const btn = bnr.querySelector('button');

mario.addEventListener('click', () => {
	body.style.overflow = 'hidden';
	bye (),
	popup();
})

function bye () {
	greeting.classList.add('bye');
	setTimeout(function afterOpacity() {
	}, 500);
}

function popup () {
	bnr.classList.add('hi');
}

