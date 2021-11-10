const messages = {
    required: "This field is required",
    invalidEmail: "Invalid email address",
    passwordPattern: "Password must have at least one uppercase character",
    agree: "You must agree with Terms and Privacy Policy",
    length(min, max) {
        return `Must be between ${min} and ${max} characters`
    }
}

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const agreeElement = document.getElementById("agree");
const btnSubmitElement = document.getElementById("btnSubmit");
const formElement = document.getElementById("form");

function checkValidityOutline(e) {
    if (e.target.checkValidity())
        e.target.classList.remove('invalid');
    else
        e.target.classList.add('invalid');
}

function checkInput(e) {
    if (e.target.checkValidity())
        e.target.setCustomValidity("");

    // toggle invalid class
    if (e.target.validity.valid)
        e.target.classList.remove('invalid');
    else
        e.target.classList.add('invalid');

    // check validity of all form's elements
    // it can be used to disable the button if validation fails
    /*if (nameElement.validity.valid && emailElement.validity.valid
        && passwordElement.validity.valid && agreeElement.validity.valid)
        btnSubmitElement.disabled = false;
    else
        btnSubmitElement.disabled = true;*/
}

/* VALIDATING NAME */
nameElement.addEventListener('input', checkInput);
nameElement.addEventListener('focus', checkValidityOutline);
nameElement.addEventListener('focusout', checkValidityOutline);
nameElement.addEventListener('invalid', () => {
    const e = nameElement;

    if (e.validity.valueMissing)
        e.setCustomValidity(messages.required);
    else if (e.validity.tooShort || e.validity.tooLong)
        e.setCustomValidity(messages.length(e.minLength, e.maxLength));
    else
        e.setCustomValidity("");
});

/* VALIDATING EMAIL */
emailElement.addEventListener('input', checkInput);
emailElement.addEventListener('focus', checkValidityOutline);
emailElement.addEventListener('focusout', checkValidityOutline);
emailElement.addEventListener('invalid', () => {
    const e = emailElement;

    if (e.validity.valueMissing)
        e.setCustomValidity(messages.required);
    else if (e.validity.typeMismatch)
        e.setCustomValidity(messages.invalidEmail);
    else
        e.setCustomValidity("");
});

/* VALIDATING PASSWORD */
passwordElement.addEventListener('input', checkInput);
passwordElement.addEventListener('focus', checkValidityOutline);
passwordElement.addEventListener('focusout', checkValidityOutline);
passwordElement.addEventListener('invalid', () => {
    const e = passwordElement;

    if (e.validity.valueMissing)
        e.setCustomValidity(messages.required);
    else if (e.validity.patternMismatch)
        e.setCustomValidity(messages.passwordPattern);
    else if (e.validity.tooShort || e.validity.tooLong)
        e.setCustomValidity(messages.length(e.minLength, e.maxLength))
    else
        e.setCustomValidity("");
});

/* VALIDATING CHECKBOX */
agreeElement.addEventListener('input', checkInput);
agreeElement.addEventListener('invalid', () => {
    const e = agreeElement;
    if (e.validity.valueMissing)
        e.setCustomValidity(messages.agree);
    else
        e.setCustomValidity("");
})

formElement.addEventListener('submit', e => {
    e.preventDefault();

    console.log('Submiting data:', {
        name: nameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    });
}, true);