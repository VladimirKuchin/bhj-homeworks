let menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach((item) => {
    item.onclick = function () {
        let parentMenuLink = item.closest('.menu__item');
        let menuSub = parentMenuLink.querySelector('.menu_sub');
        if (menuSub) {
            menuSub.classList.toggle('menu_active');
            return false;
        } else {
            return null;
        }    
    };            
});