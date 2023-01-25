
function toggleMenu() {
    let nav_content = document.getElementsByClassName('nav_content');

    nav_content[0].classList.toggle('active');
    console.log(nav_content[0].firstElementChild.firstElementChild.classList.toggle('active'));


}