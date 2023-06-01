var boutonValider = document.querySelector('button');
boutonValider.addEventListener('click', register);



function register(e) {
    e.preventDefault;
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

    const user = {
        email: email.value,
        password: password.value

    };
    if (local != null) {
        var local = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem("user", JSON.stringify(user));
        local.push('user');
        window.location.href = 'dashbord.html';

    }
}
