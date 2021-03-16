const header = document.querySelector('[data-header]');
const headerScrollValue = 25;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerScrollValue) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});
