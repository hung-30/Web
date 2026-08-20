const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const displayNameInput = document.getElementById("display-name");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const displayNameError = document.getElementById("display-name-error");
const formError = document.getElementById("form-error");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function clearErrors() {
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    displayNameError.textContent = "";
    formError.textContent = "";
}

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;
    const displayNameValue = displayNameInput.value.trim();

    if (
        emailValue === "" &&
        passwordValue === "" &&
        confirmPasswordValue === "" &&
        displayNameValue === ""
    ) {
        formError.textContent = "Vui lòng nhập đầy đủ thông tin.";
        emailInput.focus();
        return;
    }

    let hasError = false;

    if (emailValue === "") {
        emailError.textContent = "Vui lòng nhập email.";
        hasError = true;
    } else if (!isValidEmail(emailValue)) {
        emailError.textContent = "Email không đúng định dạng.";
        hasError = true;
    }

    if (passwordValue === "") {
        passwordError.textContent = "Vui lòng nhập mật khẩu.";
        hasError = true;
    } else if (passwordValue.length < 6) {
        passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
        hasError = true;
    }

    if (confirmPasswordValue === "") {
        confirmPasswordError.textContent = "Vui lòng nhập lại mật khẩu.";
        hasError = true;
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = "Mật khẩu nhập lại không khớp.";
        hasError = true;
    }

    if (displayNameValue === "") {
        displayNameError.textContent = "Vui lòng nhập tên hiển thị.";
        hasError = true;
    }

    if (hasError) {
        if (emailValue === "") {
            emailInput.focus();
        } else if (passwordValue === "") {
            passwordInput.focus();
        } else if (confirmPasswordValue === "") {
            confirmPasswordInput.focus();
        } else if (displayNameValue === "") {
            displayNameInput.focus();
        } else if (!isValidEmail(emailValue)) {
            emailInput.focus();
        } else if (passwordValue.length < 6) {
            passwordInput.focus();
        } else if (confirmPasswordValue !== passwordValue) {
            confirmPasswordInput.focus();
        }
        return;
    }

    alert("Đăng ký thành công!");
});
