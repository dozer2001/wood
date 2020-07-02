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


    let menu = document.querySelector('.submenu'),
        allLi = menu.getElementsByTagName('li'),
        sec = document.querySelectorAll('section'),
        portfolio = document.getElementsByClassName('portfolio-block'),
        vagonka = document.querySelector('.vagonka'),
        vag = document.getElementById('vagonka'),
        girl = document.getElementsByClassName('girl'),
        chef = document.getElementsByClassName('chef'),
        guy = document.getElementsByClassName('guy'),
        portfolioNo = document.querySelector('.portfolio-no');
    // menu.addEventListener('click', function (event) {
    //     for (let i = 0; i < sec.length; i++) {
    //         if (event.target.innerText == vag.innerText) {
    //             console.log(vagonka);
    //             vagonka.style.display = 'block';
    //             console.log(vagonka);
    //
    //         }
    //     }
    //
    // });

    let accordionHeading = document.getElementsByClassName('accordion-heading'),
        accordionBlock = document.getElementsByClassName('accordion-block');

    for (let i = 0; i < accordionHeading.length; i++) {
        console.log(1);
        accordionHeading[i].addEventListener('click', () => {
            for (let i = 0; i < accordionHeading.length; i++) {
                accordionBlock[i].style.display = 'none';
                accordionBlock[i].classList.remove('show');
                console.log(1);

            }
            accordionBlock[i].classList.toggle("show");

        });
        accordionBlock[i].style.display = 'none';
    }
