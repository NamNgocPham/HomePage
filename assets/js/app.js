const toggleBtn = document.querySelector('.nav__link');

const menuMobile = document.querySelector('.nav__mobile');

const closeNav = document.querySelector('.nav__close--link')

toggleBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
})

closeNav.addEventListener('click', () => {
  menuMobile.classList.remove("active")
})