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
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
    }
    if ((!email.value) || (!email.value.includes('@'))) {
        divEmail.innerHTML = '<b>L\'adresse est obligatoire ou invalide.</b>';
        divEmail.style.color = 'red';
    }
    else {
        divEmail.innerHTML = '';
    }
    if (!password.value) {
        divPassword.innerHTML = '<b>Le mot de passe est obligatoire.</b>';
        divPassword.style.color = 'red';
    }
    else {
        divPassword.innerHTML = '';
    }
    if ((!confirmPassword.value) || (confirmPassword.value != password.value)) {
        divConfirmPassword.innerHTML = '<b>La confirmation est obligatoire ou bien la confirmation est invalide.</b>';
        divConfirmPassword.style.color = 'red';
    }
    else {
        divConfirmPassword.innerHTML = '';
    }

    //alert(firstName);
}
