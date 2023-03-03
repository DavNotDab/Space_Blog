
// Toggle Menu
const menuBtn = document.querySelector('.menu-btn');
const nav_content = document.querySelector('.nav-content');
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

function randomPath() {
    let random = Math.floor(Math.random() * 4) + 1;
    switch (random) {
        case 1:
            window.location.href = "../pages/blog.html";
            break;
        case 2:
            window.location.href = "../pages/news.html";
            break;
        case 3:
            window.location.href = "../pages/gallery.html";
            break;
        case 4:
            window.location.href = "../pages/about.html";
            break;
        default:
            window.location.href = "../index.html#blog";
    }
}