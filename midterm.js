





const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const province = document.getElementById("province");
const postalcode = document.getElementById("postalcode");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const age = document.getElementById("age");


//var validatedSuccessfully = true;


function setUpPage() {
    checkInputs();
    createSubmitOrderEventListener();
}
var inputs = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener("blur", checkInputs, false);
    element.addEventListener('input', checkInputs, false);
});

function checkInputs() {
    console.log("checkInput called");
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const provinceValue = province.value.trim();
    const postalcodeValue = postalcode.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const ageValue = age.value.trim();


    if (firstnameValue === "") {
        setErrorFor(firstname, "firstname cannot be blank");
        validatedSuccessfully = false;
    }
    else {
        setSuccessFor(firstname);
    }

    if (lastnameValue === "") {
        setErrorFor(lastname, "lastname cannot be blank");

    }
    else {
        setSuccessFor(lastname);
    }
    if (addressValue === "") {
        setErrorFor(address, "address cannot be blank");

    }
    else {
        setSuccessFor(address);
    }
    if (cityValue === "") {
        setErrorFor(city, "city cannot be blank");

    }
    else {
        setSuccessFor(city);
    }

    emailValidation(emailValue);
    proviceValidation(provinceValue);
    postalcodeValidation(postalcodeValue);
    passwordValidation(passwordValue, password2Value);
    ageValidation(ageValue);
}



function emailValidation(emailValue) {
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");

    }
    else if (!validateEmail(emailValue)) {
        setErrorFor(email, " Email field must contain the @ and . characters");

    }
    else {
        setSuccessFor(email);
    }
}
function postalcodeValidation(postalcodeValue) {
    if (postalcodeValue === "") {
        setErrorFor(postalcode, "Postal code cannot be blank");
    }
    else if (!validatePostalcode(postalcodeValue)) {
        setErrorFor(postalcode, " postal code has to be in the a0a0a0 format");
    }
    else {
        setSuccessFor(postalcode);
    }
}
function proviceValidation(provinceValue) {
    if (provinceValue === "") {
        setErrorFor(province, "Province cannot be blank");
    }
    else if (!validateProvince(provinceValue)) {
        setErrorFor(province, "Province is not valid. Should be one of (QC, ON, MN, SK, BC)");
    }
    else {
        setSuccessFor(province);
    }
}
function passwordValidation(passwordValue, password2Value) {
    if (passwordValue === "") {
        setErrorFor(password, "password cannot be blank");

    }
    else if (!validatePassword(passwordValue)) {
        setErrorFor(password, "Passwords must have 6 characters at least one digit and one upper-case");
    }
    else {
        setSuccessFor(password);
    }
    if (password2Value === "") {
        setErrorFor(password2, "Repeat password cannot be blank");
    }
    else if (password2Value !== passwordValue) {
        setErrorFor(password2, "passwords does not match");
    }
    else {
        setSuccessFor(password2);
    }
}


function ageValidation(ageValue) {
    if (ageValue === "") {
        setErrorFor(age, "age cannot be blank");

    }
    else if (ageValue < 18) {
        setErrorFor(age, "you are not eligialbe if your age is under 18");
    }
    else {
        setSuccessFor(age);

    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerHTML = message;
    formControl.className = "form-control error";
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function validateEmail(emailValue) {
    var regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    var isEmail = regEx.test(emailValue);
    console.log(isEmail ? "It's an email" : "Not an email");
    return isEmail;
}


function validateProvince(provinceValue) {
    var regEx = /^(ON|QC|MN|SK|AB|BC)$/i;
    var isProvince = regEx.test(provinceValue);
    return isProvince;
}

function validatePostalcode(postalcodeValue) {
    var regEx = /^[A-Z]\d[A-Z]\d[A-Z]\d$/i;
    var isPostalcode = regEx.test(postalcodeValue);
    return isPostalcode;
}

function validatePassword(passwordValue) {
    var regEx = /^(?=.*\d)(?=.*[A-Z]).{6,}.*$/;
    var isPassword = regEx.test(passwordValue);
    return isPassword;
}

function submitOrder(firstnameValue, lastnameValue, passwordValue, password2Value, provinceValue, postalcodeValue, emailValue, addressValue, cityValue, ageValue) {
    var successResult = document.getElementById("successResult");
    var validationResult = document.getElementById("validationResult");

    if (firstnameValue == "" || lastnameValue == "" || passwordValue == "" || password2Value == "" || provinceValue == "" || postalcodeValue == "" || emailValue == "" || addressValue == "" || cityValue == "" || ageValue == "") {

        validationResult.innerHTML = "Your order can not be submitted. Please check the validation result.";
        successResult.innerHTML = "";
    }
    else {
        successResult.innerHTML = "Your order is successfully submitted!";
        validationResult.innerHTML = "";
    }
}

function createSubmitOrderEventListener() {
    var placeOrder = document.getElementById("placeOrder");
    if (placeOrder.addEventListener) {
        placeOrder.addEventListener("click", submitOrder, false);
    }
    else if (placeOrder.attachEvent) {
        placeOrder.attachEvent("onclick", submitOrder);
    }
}

window.addEventListener("load", setUpPage, false);

// <!-- // ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$ : Email-->
// <!-- ^[A-Z]\d[A-Z]\d[A-Z]\d$ : postalCode -->
// <!-- ^(?=.*\d)(?=.*[A-Z]).{6,}.*$ :  password -->
