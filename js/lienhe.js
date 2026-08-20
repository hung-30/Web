const contactForm = document.getElementById("contact-form");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const formError = document.getElementById("form-error");
const fullnameError = document.getElementById("fullname-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhone(phone) {
    const phonePattern = /^(0|\+84)[0-9]{8,10}$/;
    return phonePattern.test(phone.replace(/\s/g, ""));
}

function clearErrors() {
    formError.textContent = "";
    fullnameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const fullnameValue = fullnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const subjectValue = subjectInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (
        fullnameValue === "" &&
        emailValue === "" &&
        phoneValue === "" &&
        subjectValue === "" &&
        messageValue === ""
    ) {
        formError.textContent = "Vui lòng nhập đầy đủ thông tin.";
        fullnameInput.focus();
        return;
    }

    let hasError = false;

    if (fullnameValue === "") {
        fullnameError.textContent = "Vui lòng nhập họ và tên.";
        hasError = true;
    }

    if (emailValue === "") {
        emailError.textContent = "Vui lòng nhập email.";
        hasError = true;
    } else if (!isValidEmail(emailValue)) {
        emailError.textContent = "Email không đúng định dạng.";
        hasError = true;
    }

    if (phoneValue === "") {
        phoneError.textContent = "Vui lòng nhập số điện thoại.";
        hasError = true;
    } else if (!isValidPhone(phoneValue)) {
        phoneError.textContent = "Số điện thoại không hợp lệ.";
        hasError = true;
    }

    if (subjectValue === "") {
        subjectError.textContent = "Vui lòng nhập tiêu đề.";
        hasError = true;
    }

    if (messageValue === "") {
        messageError.textContent = "Vui lòng nhập nội dung.";
        hasError = true;
    }

    if (hasError) {
        if (fullnameValue === "") {
            fullnameInput.focus();
        } else if (emailValue === "") {
            emailInput.focus();
        } else if (phoneValue === "") {
            phoneInput.focus();
        } else if (subjectValue === "") {
            subjectInput.focus();
        } else if (messageValue === "") {
            messageInput.focus();
        } else if (!isValidEmail(emailValue)) {
            emailInput.focus();
        } else if (!isValidPhone(phoneValue)) {
            phoneInput.focus();
        }
        return;
    }

    alert("Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.");
    contactForm.reset();
});
