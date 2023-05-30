var boutonValider = document.querySelector('button');
boutonValider.addEventListener('click', register);



function register() {
    var firstName = document.getElementById('form2Example1').value;
    var lastName = document.getElementById('form2Example2').value;
    var email = document.getElementById('form2Example3').value;
    var password = document.getElementById('form2Example4').value;
    var confirmPassword = document.getElementById('form2Example5').value;

    var divFirstName = document.getElementById('divFirstName');
    var divLastName = document.getElementById('divLastName');
    var divEmail = document.getElementById('divEmail');
    var divPassword = document.getElementById('divPassword');
    var divConfirmPassword = document.getElementById('divConfirmPassword');

    if (!firstName) {
        divFirstName.innerHTML = '<b>Le nom est obligatoire.</b>';
        divFirstName.style.color = 'red';
    }
    else {
        divFirstName.innerHTML = '';
    }
    if (!lastName) {
        divLastName.innerHTML = '<b>Le prénom est obligatoire.</b>';
        divLastName.style.color = 'red';
    }
    else {
        divLastName.innerHTML = '';
    }
    if ((!email) || (!email.includes('@'))) {
        divEmail.innerHTML = '<b>L\'adresse est obligatoire ou invalide.</b>';
        divEmail.style.color = 'red';
    }
    else {
        divEmail.innerHTML = '';
    }
    if (!password) {
        divPassword.innerHTML = '<b>Le mot de passe est obligatoire.</b>';
        divPassword.style.color = 'red';
    }
    else {
        divPassword.innerHTML = '';
    }
    if ((!confirmPassword) || (confirmPassword != password)) {
        divConfirmPassword.innerHTML = '<b>La confirmation est obligatoire ou bien la confirmation est invalide.</b>';
        divConfirmPassword.style.color = 'red';
    }
    else {
        divConfirmPassword.innerHTML = '';
    }

    //alert(firstName);
}
