
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
    password = document.forms['hform']['password'];

var usernameError = document.querySelector('#username-error'),
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
  data = FormData();

xhr.open('POST', 'ajax.php', true);

xhr.onreadystatechange(function (e) {
  if(this.readyState == 4 && this.statusCode == 200) {
    console.log(e);
  }
});

data.append()

xhr.send();


// TAB SHOWING TAB EFFECTS
const tab1 = document.querySelector('.tab1'),
      tab2 = document.querySelector('.tab2'),
      tab3 = document.querySelector('.tab3');


