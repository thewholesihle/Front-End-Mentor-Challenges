let shareButton = document.querySelectorAll('.share-button');
let shareSection = document.querySelector('.share-section');

for (button of shareButton) {
    button.addEventListener('click', () => {
        shareSection.classList.toggle('toggle');
    });
}
