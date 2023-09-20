const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
modal.classList.add('modal_active');
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalStatus=true';
})


function getCookie() {
    const pairs = document.cookie.split('; ');
    console.log(pairs);
    const cookie = pairs.find(p => p.startsWith('modalStatus'))
    if (cookie) {
         modal.classList.remove('modal_active');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    getCookie();
})