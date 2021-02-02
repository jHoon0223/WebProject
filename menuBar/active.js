const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.member');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});