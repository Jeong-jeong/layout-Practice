'use strict';

const body = document.body;
const dropdownToggle = body.querySelector('.dropdown-toggle');
const dropdownMenu = body.querySelector('.dropdown-menu');
const buttonValue = body.querySelectorAll('.dropdown-option'); 
const nextButton = body.querySelector('.next-button');


dropdownToggle.addEventListener('click', toggle);
dropdownToggle.addEventListener('blur', removeShow); // blur 개념이해!


function toggle () {
	dropdownMenu.classList.toggle('show');
}

function removeShow () {
	dropdownMenu.classList.remove('show');
}

// for (let i = 0; i < buttonValue.length; i++) {
// 	buttonValue[i].addEventListener('click', function() {
// 		dropdownToggle.innerText = buttonValue[i].innerText;
// 		dropdownToggle.classList.add('selected');
// 		dropdownMenu.classList.remove('show');
// 		nextButton.disabled = false;
// 	});
// }

// for Each를 적극적으로 사용하자!
// UI UX를 계속 생각하면서 코드를 짜자!
buttonValue.forEach(function (btns) {
	
	btns.addEventListener('click', function(e) {
		const btnLabel = e.currentTarget.innerText;
		dropdownToggle.innerText = btnLabel;
		dropdownToggle.classList.add('selected');
		nextButton.disabled = false;
	})
});






