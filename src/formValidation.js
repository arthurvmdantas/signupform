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
const formElement = document.getElementById("form");

// remove custom error
function removeError(e) {
    if (e.target.checkValidity())
        e.target.setCustomValidity("");
}

/* VALIDATING NAME */
nameElement.addEventListener('input', removeError);
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
emailElement.addEventListener('input', removeError);
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
passwordElement.addEventListener('input', removeError);
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
agreeElement.addEventListener('invalid', () => {
    const e = agreeElement;
    e.setCustomValidity(messages.agree);
})

formElement.addEventListener('submit', e => {
    e.preventDefault();

    console.log('Submiting data:', {
        name: nameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    });
}, true);