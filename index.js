// Portfolio js

// translate.js
import i18Obj from './translate.js';

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
}
function closeMenu(event) {
    hamburger.classList.remove('open');
    navList.classList.remove('open');
}
hamburger.addEventListener('click', toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// Change theme
const changeThemeButton = document.querySelector('.theme-icon');
changeThemeButton.addEventListener('click', () => document.querySelector('body').classList.toggle('light-theme'));

// Change portfolio images
const portfolioBtns = document.querySelectorAll('.portfolio-buttons>.button');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const buttonActiveClass = 'button-active';

portfolioBtns.forEach((el) => el.addEventListener('click', changePortfolioImages));

function changePortfolioImages(e) {
    portfolioBtns.forEach((el) => el.classList.contains(buttonActiveClass) ? el.classList.remove(buttonActiveClass) : false);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${e.target.dataset.season}/${index + 1}.jpg`);
    e.target.classList.add(buttonActiveClass);
}

// Translate
const langBtns = document.querySelectorAll('[data-lang]');
const translateElements = document.querySelectorAll('[data-i18n]');
const currentLangClass = 'current-lang';

langBtns.forEach(el=>el.addEventListener('click', getTranslate));

function getTranslate(e) {
    if (!e.target.classList.contains(currentLangClass)) {

        const lang = i18Obj[e.target.dataset.lang];
        document.querySelector('body').classList.toggle('ru');
        langBtns.forEach(el=>el.classList.toggle(currentLangClass));
        translateElements.forEach(el=>{
            el.textContent = lang[el.dataset.i18n];
            if (el.placeholder) {
                el.placeholder = lang[el.dataset.i18n];
                el.textContent = '';
              }
            // console.log(el);
        })
        // console.log(    e.target);
    }
}
