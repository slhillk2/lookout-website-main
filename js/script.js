// Burger menu =========================

const burgerMenu = document.querySelector('.burger-menu')
const displaySideMenu = document.querySelector('.side-menu')


burgerMenu.addEventListener('click', () => {
    displaySideMenu.classList.toggle('active')
    // burger animation
    burgerMenu.classList.toggle('toggle')
})


// Sub menu accordions ====================

const toggleSubMenu = document.querySelectorAll('.submenu-btn')

toggleSubMenu.forEach(toggle => {
    toggle.addEventListener('click', () => {
        removeActiveClasses()
        toggle.classList.toggle('active')
        toggle.nextElementSibling.classList.toggle('active')
    })  
});


function removeActiveClasses() {
    toggleSubMenu.forEach(toggle => {
        toggle.classList.remove('active')
        toggle.nextElementSibling.classList.remove('active')
    });
}
