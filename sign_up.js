const Email = document.getElementById('Email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('Confirm');

Email.addEventListener('input', (e) => {
    const EmailValue = Email.value;
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailSpan = document.getElementById('errorEmail');
    emailSpan.classList.add('error');

    if (EmailValue.match(emailFormat)) {
        emailSpan.innerText = 'Valid Email Address';
        emailSpan.classList.add('success');
        return true;
    } else {
        emailSpan.innerText = 'Invalid Email Address';
        emailSpan.classList.add('danger');
        return false;
    }
})