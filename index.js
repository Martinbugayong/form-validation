const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error outline and message
function showError(input, message) {
    const formFields = input.parentElement;
    formFields.className = 'form-fields error';
    const small = formFields.querySelector('small');
    small.innerText = message;
}

// Show success outline and message
function showSuccess(input, message) {
    const formFields = input.parentElement;
    formFields.className = 'form-fields success';
    const small = formFields.querySelector('small');
    small.innerText = message;
}

// is email valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listiners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "Invalid Username");
    } else {
        showSuccess(username, "Username Available");
    }

    if (email.value === '') {
        showError(email, "Invalid Email");
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email, "Valid email");
    }

    if (password.value === '') {
        showError(password, "Invalid password");
    } else {
        showSuccess(password, "Valid Password");
    }

    if (password2.value === password.value) {
        showSuccess(password2, "Passwords match");
    } else {
        showError(password2, "Passwords do not match");
    }
});