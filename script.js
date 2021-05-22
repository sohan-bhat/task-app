const mobileBtn = document.getElementById("mobile-cta")
const nav = document.querySelector('nav')
const mobileBtnExit = document.getElementById("mobile-exit")
const colorSwitch = document.getElementById('input-color-switch')

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})