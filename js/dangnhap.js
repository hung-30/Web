const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue == "") {
        emailError.textContent = "Vui lòng nhập email.";
        emailInput.focus();
        return;
    }

    if (!isValidEmail(emailValue)) {
        emailError.textContent = "Email không đúng định dạng.";
        emailInput.focus();
        return;
    }

    emailError.textContent = "";
    alert("Email hợp lệ. Bạn có thể đăng nhập.");
});
