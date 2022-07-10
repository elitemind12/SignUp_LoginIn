const Email = document.getElementById('Email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('Confirm');

Email.addEventListener('input', (e) => {
    const EmailValue = Email.value;
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailSpan = document.getElementById('errorEmail');

    if (EmailValue.match(emailFormat)) {
        emailSpan.innerText = 'Valid Email Address';
        emailSpan.classList.add('success');
    } else {
        emailSpan.innerText = 'Invalid Email Address';
        emailSpan.classList.add('danger');
    }
});

Password.addEventListener('input', () => {
    const passValue = Password.value;
    const passSpan = document.getElementById('errorPass');
    const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (passValue.match(passFormat)) {
        passSpan.innerText = 'Valid Password';
        passSpan.classList.add('success');
    } else {
        passSpan.innerText = 'Invalid Password';
        passSpan.classList.add('danger');
    }
});

ConfirmPassword.addEventListener('input', () => {
    const passValue = Password.value;
    const confirmValue = ConfirmPassword.value;
    const confirmSpan = document.getElementById('errorConfirm');

    if (confirmValue.match(passValue)) {
        confirmSpan.innerText = 'password Confirm';
        confirmSpan.classList.add('success');
    } else {
        confirmSpan.innerText = 'password not match';
        confirmSpan.classList.add('danger');
    }
})