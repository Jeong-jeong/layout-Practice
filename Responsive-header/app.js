'use strict';

const body = document.body;
const menu = body.querySelector('.menu_btn');
const sub = body.querySelector('.sub_menu');

menu.addEventListener('click', function() {
	sub.classList.toggle('toggle');
});