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


var Menu = {

    el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
                function(event) {
                    Menu.activateMenu(event);
                    event.preventDefault();
                }
            );
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
};

Menu.init();

//Burger mune
document.getElementById("menu").onclick = function() {open()};

function open() {
    document.getElementById("sidebar").classList.toggle("show");
}
// Burger mune End