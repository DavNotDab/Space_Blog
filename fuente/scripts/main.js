
// Toggle Menu
const menuBtn = document.querySelector('.menu-btn');
const nav_content = document.querySelector('.nav_content');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav_content.classList.add('active');
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        nav_content.classList.remove('active');
        menuOpen = false;
    }
});

