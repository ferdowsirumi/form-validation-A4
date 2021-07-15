

window.addEventListener("load", setUpPage, false);

function setUpPage() {
    createInputFieldsEventListener();
    checkInputs();
    createRegisterAccountEventListener();
    createClearFormEventListener();
}


function checkInputs() {
    console.log("checkInput called");
    let form = document.getElementById("form");
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");
    let province = document.getElementById("province");
    let postalcode = document.getElementById("postalcode");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let age = document.getElementById("age");

    let firstnameValue = firstname.value.trim();
    let lastnameValue = lastname.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();
    let provinceValue = province.value.trim();
    let postalcodeValue = postalcode.value.trim();
    let emailValue = email.value.trim();
    let addressValue = address.value.trim();
    let cityValue = city.value.trim();
    let ageValue = age.value.trim();


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

function createRegisterAccountEventListener() {
    var btnRegisterAccount = document.getElementById("btnRegisterAccount");
    if (btnRegisterAccount.addEventListener) {
        btnRegisterAccount.addEventListener("click", submitOrder, false);
    }
    else if (btnRegisterAccount.attachEvent) {
        btnRegisterAccount.attachEvent("onclick", submitOrder);
    }
}
function createClearFormEventListener() {
    var btnClear = document.getElementById("btnClear");
    if (btnClear.addEventListener) {
        btnClear.addEventListener("click", clearForm, false);
    }
    else if (btnClear.attachEvent) {
        btnClear.attachEvent("onclick", clearForm);
    }
}

function createInputFieldsEventListener() {
    var inputs = document.querySelectorAll("input");
    inputs.forEach(element => {

        if (element.addEventListener) {
            element.addEventListener("blur", checkInputs, false);
            element.addEventListener('input', checkInputs, false);
        }
        else if (element.attachEvent) {
            element.attachEvent("blur", checkInputs);
            element.attachEvent('input', checkInputs);
        }

    });
}

function clearForm() {
    var registerForm = document.getElementById("registerForm");

    if (registerForm != null) {
        confirm("Are you sure to clear the form?");

        registerForm.reset();
    }
   // preventDefault();
    return false;
}




// <!-- // ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$ : Email-->
// <!-- ^[A-Z]\d[A-Z]\d[A-Z]\d$ : postalCode -->
// <!-- ^(?=.*\d)(?=.*[A-Z]).{6,}.*$ :  password -->
