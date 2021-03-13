'use strict';

const body = document.body;
const dropdownToggle = body.querySelector('.dropdown-toggle');
const dropdownMenu = body.querySelector('.dropdown-menu');
const buttonValue = body.querySelectorAll('.dropdown-option'); 
const nextButton = body.querySelector('.next-button');


dropdownToggle.addEventListener('click', toggle);

function toggle () {
	dropdownMenu.classList.toggle('show');
}

for (let i = 0; i < buttonValue.length; i++) {
	buttonValue[i].addEventListener('click', function() {
		dropdownToggle.innerText = buttonValue[i].innerText;
		dropdownToggle.classList.add('selected');
		dropdownMenu.classList.remove('show');
		nextButton.disabled = false;
	});
}




