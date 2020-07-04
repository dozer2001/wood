$('.slider__big').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    fade: false,
    asNavFor:'.slider'
});
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    asNavFor:'.slider__big'
});





    let accordionHeading = document.getElementsByClassName('accordion-heading'),
        accordionBlock = document.getElementsByClassName('accordion-block');

    for (let i = 0; i < accordionHeading.length; i++) {
        accordionHeading[i].addEventListener('click', () => {
            accordionBlock[i].classList.toggle("show");
        });
        accordionBlock[i].style.display = 'none';
    }
