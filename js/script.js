const burgerMenu = document.querySelector('.burger-menu')
const displaySideMenu = document.querySelector('.side-menu')


burgerMenu.addEventListener('click', () => {
    displaySideMenu.classList.toggle('active')
    // burger animation
    burgerMenu.classList.toggle('toggle')
})



