

document.getElementById("contact-form").onchange = function(){

    nameValid = inputNameValidation();

    emailValid = inputEmailValidation();

    messageValid = textAreaValidation();

    if (nameValid && emailValid && messageValid){

        btnBehavior(true);
    } else {
        
        btnBehavior(false);
    }

}

function errorName(){
    nameValid = inputNameValidation();
    
    inputNameField = document.getElementById("nome");
    iconNameError = document.getElementById("nome-error-icon");
    errorMessageContent = document.getElementById("nome-error-alert");

    if (nameValid) {

        hidingErrorMessage(errorMessageContent, iconNameError);
    } else {
        pushingAsideError(inputNameField, errorMessageContent, iconNameError);
    }
}

function errorEmail(){
    emailValid = inputEmailValidation();

    inputEmailField = document.getElementById("email");
    iconEmailError = document.getElementById("email-error-icon");
    errorMessageContent = document.getElementById("email-error-alert");

    if (emailValid) {
    
        hidingErrorMessage(errorMessageContent, iconEmailError);
    } else {

        pushingAsideError(inputEmailField, errorMessageContent, iconEmailError);
    } 
}

function errorMessage(){
    messageValid = textAreaValidation();

    textAreaField = document.getElementById("mensagem");
    iconMessageError = document.getElementById("mensagem-error-icon");
    errorMessageContent = document.getElementById("mensagem-error-alert");

    if (messageValid) {
    
        hidingErrorMessage(errorMessageContent, iconMessageError);
    } else {

        pushingAsideError(textAreaField, errorMessageContent, iconMessageError);
    } 
}

// Pushing aside and Hiding error messages

function pushingAsideError(field, errorContent, icon){

    fieldWidth = field.offsetWidth;
    marginLeftContent =  fieldWidth + 36;
    marginLeftIcon = fieldWidth - 36;

    errorContent.style.marginLeft = marginLeftContent + "px";
    errorContent.style.visibility = "visible";

    icon.style.marginLeft = marginLeftIcon + "px";
    icon.style.visibility = "visible";
}

function hidingErrorMessage(errorContent, icon){

    errorContent.style.visibility = "hidden";
    icon.style.visibility = "hidden";
}

// Validating fields

function inputNameValidation(){

    var valid = false;

    var regularExp = /^([a-z]+\s)+[a-z]+$/i;

    inputNameField = document.getElementById("nome");

    if (regularExp.test(inputNameField.value) && (inputNameField.value.length >= 7)){

        valid = true;

        return valid;
    }

    return valid;
}

function inputEmailValidation(){
    var valid = false;

    var regularExp = /^[a-z0-9]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;

    inputEmailField = document.getElementById("email");

    if (regularExp.test(inputEmailField.value)){

        valid = true;

        return valid;
    }

    return valid;
}

function textAreaValidation(){
    var valid = false;

    var regularExp = /^([a-z0-9]+\s){3,}[a-z]+$/i;

    textAreaField = document.getElementById("mensagem");

    if(regularExp.test(textAreaField.value) && (textAreaField.value.length >= 20)){

        valid = true;

        return valid;
    }

    return valid;
}

// button behavior
function btnBehavior(permission){

    if(permission){

        var button = document.getElementById("enviar-btn");
        button.disabled = false;
        button.classList.remove("enviar-btn-disabled");
    } else {

        var button = document.getElementById("enviar-btn");
        button.disabled = true;
        button.classList.add("enviar-btn-disabled");
    }
}

function successMessage(){
    successMessage = document.getElementById("success-message");
    successMessage.visibility = "visible";
}

// document.getElementById("contact-form").addEventListener("submit", (ev) => {
//     successMessage = document.getElementById("success-message");
//     successMessage.visibility = "visible";

//     ev.preventDefault();
// });
