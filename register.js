var boutonValider = document.querySelector('button');
boutonValider.addEventListener('click', register);



function register() {
    var firstName = document.getElementById('form2Example1');
    var lastName = document.getElementById('form2Example2');
    var email = document.getElementById('form2Example3');
    var password = document.getElementById('form2Example4');
    var confirmPassword = document.getElementById('form2Example5');



    if (!firstName.value) {

        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
    }
    else {
        firstName.classList.remove('is-invalid')
        firstName.classList.add('is-valid')
    }
    if (!lastName.value) {
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');

    }
    else {
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
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
    if ((!confirmPassword.value) || (confirmPassword.value != password.value)) {
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');

    }
    else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }

    //alert(firstName);
}
