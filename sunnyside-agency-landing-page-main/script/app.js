let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu-links');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('toggle');
});