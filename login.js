const username = document.getElementById('user');
const password = document.getElementById('pass');
const errorUsername = document.getElementById('errorUser');
const errorPassword = document.getElementById('errorPass');
username.addEventListener('input', function(e) {
    const uservalue = username.value;
    if (uservalue.length < 15) {
        errorUsername.innerText = 'Username should be longer!!';
        errorUsername.style.color = '#E83957ff';
    } else {
        errorUsername.innerText = 'Good Username!!!';
        errorUsername.style.color = 'green';
    }
    errorUsername.style.marginBottom = '-0.5em';
});
password.addEventListener('input', function() {
    const passvalue = password.value;
    const values = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (passvalue.match(values)) {
        errorPassword.innerText = 'Strong Password!!!';
        errorPassword.style.color = 'green';
    } else {
        errorPassword.innerText = 'Weak Password!!!';
        errorPassword.style.color = '#E83957ff';
    }
    errorPassword.style.marginTop = '0.5em';
});