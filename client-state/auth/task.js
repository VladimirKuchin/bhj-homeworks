const signin = document.querySelector('.signin');
const signinForm = document.querySelector('#signin__form');
const welcome = document.querySelector('.welcome');
const userIdText = document.getElementById('user_id');
const exitBtn = document.querySelector('#exit__btn')

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.response.success) {
            const userId = xhr.response.user_id;
            localStorage.setItem('userId', userId);
            welcomeUser(userId);
        } else {
            alert('Неверный логин/пароль');
        }
    }
    xhr.send(formData);
    signinForm.reset();
})

function welcomeUser(userId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userIdText.textContent = userId;
}
window.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        welcomeUser(userId);
    }
})
exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('userId');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
})