window.addEventListener('resize', errorMessages);

function errorMessages(){

    var permission = false;

    permission = inputNameValidation();

    permission = inputEmailValidation();

    permission = textAreaValidation(); 
      
    // if (permission) {
    //     // all fields valid at this point
    //     successMessage = document.getElementById("success-message");
    //     successMessage.style.visibility = "visible";
    // }

    return permission;
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
    iconNameError = document.getElementById("nome-error-icon");
    errorMessageContent = document.getElementById("nome-error-alert");

    if (regularExp.test(inputNameField.value) && (inputNameField.value.length >= 7)){

        valid = true;

        hidingErrorMessage(errorMessageContent, iconNameError);

        return valid;
    }

    pushingAsideError(inputNameField, errorMessageContent, iconNameError);

    return valid;
}

function inputEmailValidation(){
    var valid = false;

    var regularExp = /^[a-z0-9]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i;

    inputEmailField = document.getElementById("email");
    iconEmailError = document.getElementById("email-error-icon");
    errorMessageContent = document.getElementById("email-error-alert");

    if (regularExp.test(inputEmailField.value)){

        valid = true;

        hidingErrorMessage(errorMessageContent, iconEmailError);
        return valid;
    }

    pushingAsideError(inputEmailField, errorMessageContent, iconEmailError);

    return valid;
}

function textAreaValidation(){
    var valid = false;

    var regularExp = /^([a-z0-9]+\s){3,}[a-z]+$/i;

    textAreaField = document.getElementById("mensagem");
    iconMessageError = document.getElementById("mensagem-error-icon");
    errorMessageContent = document.getElementById("mensagem-error-alert");

    if(regularExp.test(textAreaField.value) && (textAreaField.value.length >= 20)){

        valid = true;

        hidingErrorMessage(errorMessageContent, iconMessageError);
        return valid;
    }
    
    pushingAsideError(textAreaField, errorMessageContent, iconMessageError);

    return valid;
}