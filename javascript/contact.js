function errorMessages(){

    if (inputNameValidation){

        inputNameField = document.getElementById("nome");
        errorMessageContent = document.getElementById("nome-error-alert");

        pushingAsideDiv(inputNameField, errorMessageContent);
    }
   
    if (inputEmailValidation){

        inputEmailField = document.getElementById("email");
        errorMessageContent = document.getElementById("email-error-alert");

        pushingAsideDiv(inputEmailField, errorMessageContent);
    }
    
    if (textAreaValidation){

        textAreaField = document.getElementById("mensagem");
        errorMessageContent = document.getElementById("mensagem-error-alert");

        pushingAsideDiv(textAreaField, errorMessageContent);
    }

    // if(inputNameValidation && inputEmailValidation %% textAreaValidation){
    //     successMessage = document.getElementById("success-message");
    //     successMessage.style.visibility = visible;
    // }
}

function pushingAsideDiv(field, errorContent){

    fieldWidth = field.offsetWidth;
    console.log("fieldWidth: " + fieldWidth);

    marginLeft =  fieldWidth + 32;

    errorContent.style.marginLeft = marginLeft + "px";
    errorContent.style.visibility = "visible";
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