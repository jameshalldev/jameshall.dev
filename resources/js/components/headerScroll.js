const header = document.querySelector('[data-header]');
const headerScrollValue = 1;

window.addEventListener('scroll', () => {
    scrollFunc();
});

let scrollFunc = () => {
    if (window.pageYOffset > headerScrollValue) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

scrollFunc();