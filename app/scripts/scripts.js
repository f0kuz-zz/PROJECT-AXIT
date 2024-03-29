// (function () {
    "use strict";

// HAMBURGER MENU
    $('.hamburger').on('click', function() {
        $('.menu').slideToggle();
    });

    $('.menu').on('click', function () {
        if(this.style.display == 'block') {
            $('.menu').slideToggle();
        }
    });

// FEATURE PRICING ANIMATION
    $('.anim-price1').hover(
        function () {
            $('.recmnd1').addClass('anim-recomend');
        },
        function () {
            $('.recmnd1').removeClass('anim-recomend');
        }
    );
    $('.anim-price2').hover(
        function () {
            $('.recmnd2').addClass('anim-recomend');
        },
        function () {
            $('.recmnd2').removeClass('anim-recomend');
        }
    );
    $('.anim-price3').hover(
        function () {
            $('.recmnd3').addClass('anim-recomend');
        },
        function () {
            $('.recmnd3').removeClass('anim-recomend');
        }
    );

// HEADER FORM VALIDATION
    var formHeader = document.querySelector('.header-form'),
        username = document.forms['hform']['username'],
        email = document.forms['hform']['email'],
        password = document.forms['hform']['password'],

        usernameError = document.querySelector('#username-error'),
        emailError = document.querySelector('#email-error'),
        passwordError = document.querySelector('#password-error');

    formHeader.addEventListener('submit', Validate, false);
    username.addEventListener('blur', nameVerify, true);
    email.addEventListener('blur', emailVerify, true);
    password.addEventListener('blur', passwordVerify, true);

    function Validate(e) {
        e.preventDefault();
        if(username.value == '') {
            usernameError.textContent = '* Podaj imię';
            username.focus();
            return void 0;
        }
        if(email.value == '') {
            emailError.textContent = "* Podaj poprawny adres e-mail";
            email.focus();
            return void 0;
        }
        if(password.value == '') {
            passwordError.textContent = "* Podaj hasło";
            password.focus();
            return void 0;
        }
    }

    function nameVerify() {
        if(username.value != '') {
            usernameError.innerHTML = '';
            return true;
        }
    }

    function emailVerify() {
        if(email.value != '') {
            emailError.innerHTML = '';
            return true;
        }
    }

    function passwordVerify() {
        if(password.value != '') {
            passwordError.innerHTML = '';
            return true;
        }
    }

// AJAX FORM
    var xhr = new XMLHttpRequest(),
        data = new FormData();

    xhr.open('POST', 'ajax.php', true);

    xhr.onreadystatechange = function (e) {
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.response);
        }
    };

    data.append('contactName', '');
    data.append('contactEmail', '');
    data.append('contactSubject', '');
    data.append('contactMessage', '');

// TAB SHOWING EFFECTS

// See Me...
    const tab1 = document.querySelector('.tab1'),
        tab2 = document.querySelector('.tab2'),
        tab3 = document.querySelector('.tab3'),
        modal = document.querySelector('.modal'),
        closeModalIco = document.querySelector('.close-modal span');

    function showModalVideo() {
        if(modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
        }
    }

    function closeModalVideo() {
        if(!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }

    tab1.addEventListener('click', showModalVideo, false);
    closeModalIco.addEventListener('click', closeModalVideo, false);

// Maybe me?
// Click it! Click!

// SCROLL TO TOP BUTTON

    function createScrollTopButton() {
        var scrollTopBtn = document.createElement('button');
        scrollTopBtn.classList.add('scroll-top-btn', 'hidden');
        scrollTopBtn.textContent = 'GO UP';

        document.body.appendChild(scrollTopBtn);

        return scrollTopBtn;
    }

    var scrollTopBtn = createScrollTopButton();

    function showScrollTopButton() {
        if(document.body.scrollTop > 200) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    }

    function scrollToTop(e) {
        if(document.body.scrollTop > 0) {
            window.scrollBy(0, -10);
            setTimeout(scrollToTop, 5);
        }
    }

    window.addEventListener('scroll', showScrollTopButton, false);
    scrollTopBtn.addEventListener('click', scrollToTop, false);
// })();

