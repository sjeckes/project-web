/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var section = document.querySelector('header > ul');
var section2 = document.querySelector('header');
var filterUp = document.querySelector('.zoeken');
var mainUp = document.querySelector('main');
var onderwerpenUp = document.querySelector('.onderwerpen');
var buttonMenu = document.querySelector('.menu');
var buttonFilter = document.querySelector('.sliders');
var dropMenu = document.querySelector('.pushbutton');
var loginDown = document.querySelector('.pulllogin');

var showMenu = function () {
	section.classList.toggle('header-active');
    section2.classList.toggle('headerbg-active');
};

var filterMenu = function () {
    filterUp.classList.toggle('filter-pull');
    mainUp.classList.toggle('filter-pull');
    onderwerpenUp.classList.toggle('filter-pull');
};

var pushMenu = function () {
    loginDown.classList.toggle('droplogin');
};


buttonFilter.addEventListener('click', filterMenu);
buttonMenu.addEventListener('click', showMenu);
dropMenu.addEventListener('click', pushMenu);

