var boutonValider = document.querySelector('button');
boutonValider.addEventListener('click', register);



function register(e) {
    e.preventDefault;
    var firstName = document.getElementById('nom');
    var lastName = document.getElementById('prenom');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var formValid = true;

    if (!firstName.value) {

        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
        formValid = false;
    }
    else {
        firstName.classList.remove('is-invalid')
        firstName.classList.add('is-valid')
    }
    if (!lastName.value) {
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
        formValid = false;

    }
    else {
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
    if ((!email.value) || (!email.value.includes('@'))) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        formValid = false;

    }
    else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    if (!password.value) {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        formValid = false;

    }
    else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    if ((!confirmPassword.value) || (confirmPassword.value != password.value)) {
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
        formValid = false;

    }
    else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }

    var user = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };
    if (formValid) {
        var local = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem("user", JSON.stringify(user));
        local.push('user');
        window.location.href = 'login.html';

    }

}



