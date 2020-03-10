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

// Event Listiners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "Username Invalid");
    } else {
        showSuccess(username, "Username available");
    }
})