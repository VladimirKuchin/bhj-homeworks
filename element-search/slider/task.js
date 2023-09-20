let sliderArrowPrev = document.querySelector('.slider__arrow_prev');
let sliderArrowNext = document.querySelector('.slider__arrow_next');
let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let counter = 0;
let sliderShow = function (index) {
    for (let i = 1; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('slider__item_active');
    }
    sliderItems[index].classList.add('slider__item_active');
}

let nextSlide = () => {
    counter++;
    if (counter >= sliderItems.length) {
        counter = 0;
    }
    sliderShow(counter);
}

let prevSlide = () => {
    counter--;
    if (counter < 0) {
        counter = sliderItems.length;
    }
    sliderShow(counter);
}

sliderArrowNext.onclick = nextSlide;
sliderArrowPrev.onclick = prevSlide;