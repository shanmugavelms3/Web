const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const file = document.getElementById("file");
const local = document.getElementById("local");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();

});
function validateInput() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    const fileval = file.value.trim();
    const localval = local.value.trim();
    const phoneval = phone.value.trim();
    if (usernameval === "") {
        setError(username, '!Enter name');
    }
    else {
        setSuccess(username);
    };
    if (emailval === "") {
        setError(email, "!Enter your Email")
    }
    else {
        setSuccess(email)
    };
    if (passwordval === "") {
        setError(password, "!Enter your Qualification")
    }
    else {
        setSuccess(password)
    }
    if (cpasswordval === "") {
        setError(cpassword, "!Enter your Experience")
    }
    else {
        setSuccess(cpassword)
    }
    if (fileval === "") {
        setError(file, "Choose your File")
    }
    else {
        setSuccess(file)
    }
    if (localval === "") {
        setError(local, "Enter your Location")
    }
    else {
        setSuccess(local)
    }
    if (phoneval === "") {
        setError(phone, "Enter your PhoneNumber")
    }
    else if (phoneval.length < 10) {
        setError(phone, "Invalid PhoneNumber")
    }
    else {
        setSuccess(phone)
    }



}
function setError(element, message) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error");

    errorElement.innerText = message;
    inputgroup.classList.add('errorval')
    inputgroup.classList.remove('successval')

}
function setSuccess(element) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error");

    errorElement.innerText = "";
    inputgroup.classList.add('successval')
    inputgroup.classList.remove('errorval')


}