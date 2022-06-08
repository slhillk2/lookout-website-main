const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.side-menu .nav-links')

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    // burger animation
    burgerMenu.classList.toggle('toggle')
})




