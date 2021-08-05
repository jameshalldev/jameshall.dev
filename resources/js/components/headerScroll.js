const body = document.querySelector('[data-body]');
const header = document.querySelector('[data-header]');
const headerScrollValue = 1;

window.addEventListener('scroll', () => {
    scrollFunc();
});

let scrollFunc = () => {
    if (window.pageYOffset > headerScrollValue) {
        body.classList.add('body--scrolled');
        header.classList.add('header--scrolled');
    } else {
        body.classList.remove('body--scrolled');
        header.classList.remove('header--scrolled');
    }
}

scrollFunc();