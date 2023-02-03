
function toggleMenu() {
    let nav_content = document.getElementsByClassName('nav_content');

    nav_content[0].classList.toggle('active');
    console.log(nav_content[0].firstElementChild.firstElementChild.classList.toggle('active'));
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        toggleMenu();
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        toggleMenu();
    }
});

