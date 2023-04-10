const slider = document.querySelector('#slider')
//console.log(slider);//
//console.log(slider.children);//
const sliderItems = Array.from(slider.children);

const buttonNext = document.querySelector('#buttonNext')
const buttonPast = document.querySelector('#buttonPast')

sliderItems.forEach(function (slide, index) {
    console.log(slide);

   

    if (index !== 0) {
        slide.classList.add('hidden')
    }

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');


    slide.addEventListener('click', function () {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex =0;
        } else {
            nextSlideIndex = index + 1
        }

        // console.log(+slide.dataset.index + 1);
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');   
    })
});

buttonNext.onclick = function () {
    console.log('Next');

    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;
    if (currentSlideIndex + 1 === sliderItems.length) {
        nextSlideIndex =0;
    } else {
        nextSlideIndex = currentSlideIndex + 1
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
    
};

buttonPast.onclick = function () {
    console.log('Past');

    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    let nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = sliderItems.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1
    }
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
    
};
