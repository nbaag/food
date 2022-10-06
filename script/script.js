const button = document.querySelector('.hamburger')
const menu = document.querySelector('.adaptive-menu')

button.addEventListener('click', function () {
  menu.classList.toggle('isActive')
})
