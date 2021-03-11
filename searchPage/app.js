

// 사용자가 이름을 입력했을 때 value를 받아서 .active에 .str에 ${value} 표시
// .menu_btn이 active 됨.
// .menu_btn이 active되면 .active에 .hi가 붙음

const body = document.body;
const menu_btn = body.querySelector('.menu_btn');
const active = body.querySelector('.active');
const form = body.querySelector('form');
const input = body.querySelector('.inp_search');
const userName = body.querySelector('.str');
const title = body.querySelector('.title');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (userName.textContent) {
		
	}
	popUp();
	userName.textContent = input.value;
	input.value = '';
});

function popUp() {
	active.classList.add('hi');
}

function close() {
	active.classList.remove('hi');
}

menu_btn.addEventListener('click', () => {
	close();
});



