function errorMessages(){

    if (inputNameValidation){

        inputNameField = document.getElementById("nome");
        iconNameError = document.getElementById("nome-error-icon");
        errorMessageContent = document.getElementById("nome-error-alert");

        pushingAsideDiv(inputNameField, errorMessageContent);
        pushingAsideIcon(inputNameField, iconNameError);
    }
   
    if (inputEmailValidation){

        inputEmailField = document.getElementById("email");
        iconEmailError = document.getElementById("email-error-icon");
        errorMessageContent = document.getElementById("email-error-alert");

        pushingAsideDiv(inputEmailField, errorMessageContent);
        pushingAsideIcon(inputEmailField, iconEmailError);
    }
    
    if (textAreaValidation){

        textAreaField = document.getElementById("mensagem");
        iconMessageError = document.getElementById("mensagem-error-icon");
        errorMessageContent = document.getElementById("mensagem-error-alert");

        pushingAsideDiv(textAreaField, errorMessageContent);
        pushingAsideIcon(textAreaField, iconMessageError);
    }

    // if(inputNameValidation && inputEmailValidation %% textAreaValidation){
    //     successMessage = document.getElementById("success-message");
    //     successMessage.style.visibility = visible;
    // }
}

function pushingAsideDiv(field, errorContent){

    fieldWidth = field.offsetWidth;
    console.log("fieldWidth: " + fieldWidth);

    marginLeft =  fieldWidth + 36;

    errorContent.style.marginLeft = marginLeft + "px";
    errorContent.style.visibility = "visible";
}

function pushingAsideIcon(field, icon){
    fieldWidth = field.offsetWidth;
    console.log("fieldWidth: " + fieldWidth);

    marginLeft =  fieldWidth - 36;

    icon.style.marginLeft = marginLeft + "px";
    icon.style.visibility = "visible";
}

function inputNameValidation(){

    return true;
}

function inputEmailValidation(){

    return true;
}

function textAreaValidation(){

    return true;
}