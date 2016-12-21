
    // HAMBURGER MENU
    $('.hamburger-click').on('click', function() {
        $('.menu').slideToggle();
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
    var username = document.forms['hform']['username'],
        email = document.forms['hform']['email'],
        password = document.forms['hform']['password'];

    var usernameError = document.querySelector('#username-error'),
        emailError = document.querySelector('#email-error'),
        passwordError = document.querySelector('#password-error');

    username.addEventListener('blur', nameVerify, true);
    email.addEventListener('blur', emailVerify, true);
    password.addEventListener('blur', passwordVerify, true);

    function Validate() {
        if(username.value == '') {
            usernameError.textContent = '* Podaj imię';
            username.focus();
            return false;
        }
        if(email.value == '') {
            emailError.textContent = "* Podaj poprawny adres e-mail";
            email.focus();
            return false;
        }
        if(password.value == '') {
            passwordError.textContent = "* Podaj hasło";
            password.focus();
            return false;
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
