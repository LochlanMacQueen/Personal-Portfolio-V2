const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});
// Close when link is clicked

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    });
});