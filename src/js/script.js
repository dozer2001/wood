
document.addEventListener('DOMContentLoaded', ()=>{
    $('.slider__big').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        fade: false,
        focusOnSelect:true,
        asNavFor:'.slider'
    });
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1,
        focusOnSelect:true,
        asNavFor:'.slider__big'
    });
    $('.slider__potolok').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        fade: false,
    });

    $('.slider__works').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        fade: false,
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



    function modal() {
        let popup = document.querySelector('.popup-design'),
            button = document.querySelector('.pulse'),
            closeOne = document.querySelector('.popup-design'),
            mainform = document.querySelector('.main-form');

        button.addEventListener('click', function (event) {
            popup.style.display = 'block';
        });

        closeOne.addEventListener('click', function (event) {

            if (event.target.className == 'popup-design' || event.target.className == 'popup-close') {
                popup.style.display = 'none';
                document.querySelector('body').style.overflowY = 'auto';
            }
        });

    }
    modal()
});

// $("#submit").click(function() {
//     var name = $('input[name=fio]').val();
//     var tel = $('input[name=tel]').val();
//     var otpravka = true;
//     if(name==""){
//         otpravka = false;
//     }
//     if(tel==""){
//         otpravka = false;
//     }
//     if(otpravka)
//     {
//
//         dannie = {'polz_name':name, 'polz_tel':tel};
//         $.post('senda.php', dannie, function(otvet){
//             rezultat = '<div style="color:#D80018;">'+otvet.text+'</div>';
//             $("#form_result").hide().html(rezultat).slideDown();
//         }, 'json');
//     }
// });
function sendForm() {
    let statusMessage = document.createElement('div'),
        phone = document.getElementsByName('phone'),
        message = document.getElementsByName('message'),
        msg = {
            loading: 'loading..',
            ready: 'Message sent',
            error: 'error'
        };


    function SendForm(elem) {
        let form = document.querySelector(`${elem}`),
            popup = document.querySelector('.popup-design'),
            input = form.getElementsByTagName('input');

        form.addEventListener('keypress', function (event) {
            if (event.target.name === 'phone') {
                if (event.which != 43 && ( event.which < 48 || event.which > 57 || event.target.value.length == 10)) {
                    event.preventDefault();
                }
            }
            if (event.target.name === 'message' || event.target.name === 'name') {
                if (event.keyCode > 1040 && event.keyCode < 1120) {
                } else {
                    event.preventDefault();
                }
            }
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let inputs = form.querySelectorAll("input");
            let obj = {};
            let formData = new FormData(form);

            for( let i = 0; i < inputs.length; i++){
                console.log(obj[inputs[i].placeholder]);
                obj[inputs[i].placeholder] =  inputs[i].value
            }

            console.log(obj);


            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    JSON.stringify(obj)
                    request.open('POST', 'functions/send.php');
                    request.setRequestHeader('Content-Type', 'application/json');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();

                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };

                    request.send(obj);
                });
            }// End PostData
            function clearInput() {

                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                setTimeout(() => statusMessage.innerHTML = '', 5000)
            }
            function close() {
                setTimeout(()=>{
                    popup.style.display = 'none';
                    document.querySelector('body').style.overflowY = 'auto';
                }, 1000);

            }
            function then() {
                popup.style.display = 'none';
                document.querySelector('body').style.overflowY = 'auto';
            }

            postData(FormData)
                .then(() => {
                    statusMessage.innerHTML = msg.loading
                })
                .then(() => {
                    statusMessage.innerHTML = msg.ready

                })
                .catch(() => {
                    statusMessage.innerHTML = msg.error
                })
                .then(clearInput)
                .then( close);
        });
    }

    SendForm('.formOne');
}
sendForm();