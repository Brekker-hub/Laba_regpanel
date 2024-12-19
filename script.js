const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const showPassword = document.getElementById("showPassword");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateFirstName() {
    const regex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/;
    if (!firstName.value) {
        firstNameError.textContent = "Поле обов'язкове для заповнення.";
    } else if (!regex.test(firstName.value)) {
        firstNameError.textContent = "Допускаються лише українські чи англійські літери.";
    } else if (firstName.value[0] !== firstName.value[0].toUpperCase()) {
        firstNameError.textContent = "Має починатися з великої літери.";
    } else {
        firstNameError.textContent = "";
    }
}

function validateLastName() {
    const regex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/;
    if (!lastName.value) {
        lastNameError.textContent = "Поле обов'язкове для заповнення.";
    } else if (!regex.test(lastName.value)) {
        lastNameError.textContent = "Допускаються лише українські чи англійські літери.";
    } else if (lastName.value[0] !== lastName.value[0].toUpperCase()) {
        lastNameError.textContent = "Має починатися з великої літери.";
    } else {
        lastNameError.textContent = "";
    }
}

function validateEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value) {
        emailError.textContent = "Поле обов'язкове для заповнення.";
    } else if (!regex.test(email.value)) {
        emailError.textContent = "Невірний формат e-mail.";
    } else {
        emailError.textContent = "";
    }
}

function validatePassword() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!password.value) {
        passwordError.textContent = "Поле обов'язкове для заповнення.";
    } else if (!regex.test(password.value)) {
        passwordError.textContent = "Пароль має містити хоча б одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ.";
    } else {
        passwordError.textContent = "";
    }
}

function enableSubmitButton() {
    if (firstNameError.textContent === "" && lastNameError.textContent === "" && emailError.textContent === "" && passwordError.textContent === "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

firstName.addEventListener("input", () => { validateFirstName(); enableSubmitButton(); });
lastName.addEventListener("input", () => { validateLastName(); enableSubmitButton(); });
email.addEventListener("input", () => { validateEmail(); enableSubmitButton(); });
password.addEventListener("input", () => { validatePassword(); enableSubmitButton(); });

showPassword.addEventListener("change", () => {
    password.type = showPassword.checked ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert(`Ім'я: ${firstName.value}\nПрізвище: ${lastName.value}\nЕлектронна пошта: ${email.value}`);
});
