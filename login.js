var boutonValider = document.querySelector('button');
boutonValider.addEventListener('click', register);



function register() {
    var email = document.getElementById('form2Example1');
    var password = document.getElementById('form2Example2');

    if ((!email.value) || (!email.value.includes('@'))) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');

    }
    else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    if (!password.value) {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');

    }
    else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
}
