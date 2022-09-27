window.onload = function (){
    //taking input elements from the dom//
    var nameField = document.getElementById('input-name');
    var surnameField = document.getElementById('input-surname');
    var identityField = document.getElementById('input-id');
    var dateBirth = document.getElementById('input-date');
    var phoneField = document.getElementById('input-phone');
    var addressField = document.getElementById('input-address');
    var localityField = document.getElementById('input-locality');
    var zipCodeField = document.getElementById('input-zip');
    var emailField = document.getElementById('input-email');
    var passwordField = document.getElementById('input-password');
    var repeatPasswordField = document.getElementById('input-repeat');
    var btnCreate = document.getElementById('create-button');

    //taking p elements form the dom//
    var pElementName= document.getElementById('element-p-name');
    var pElementSurname= document.getElementById('element-p-surname');
    var pElementIdentity= document.getElementById('element-p-id');
    var pElementDate= document.getElementById('element-p-date');
    var pElementPhone= document.getElementById('element-p-phone');
    var pElementAddress= document.getElementById('element-p-address');
    var pElementLocality= document.getElementById('element-p-locality');
    var pElementZip= document.getElementById('element-p-zip');
    var pElementEmail= document.getElementById('element-p-email');
    var pElementPassword= document.getElementById('element-p-password');
    var pElementRepeat= document.getElementById('element-p-repeat');

    //declaring error messages//
    var errorName= 'You must add your name';
    var errorSurname= 'You must add your surname';
    var errorIdentity= 'You must add your ID';
    var errorDate= 'You must add your date of birth';
    var errorPhone= 'You must add your phone number';
    var errorAddress= 'You must add your address';
    var errorLocality= 'You must add your locality';
    var errorZip= 'You must add your zip code';
    var errorEmail= 'You must add your email';
    var errorPassword= 'You must add a password';
    var errorRepeat= 'You must repeat the password';

    //creating p elements//
    var namePara= document.createElement('p');
    var surnamePara= document.createElement('p');
    var identityPara= document.createElement('p');
    var datePara= document.createElement('p');
    var phonePara= document.createElement('p');
    var addressPara= document.createElement('p');
    var localityPara= document.createElement('p');
    var zipPara= document.createElement('p');
    var emailPara= document.createElement('p');
    var passwordPara= document.createElement('p');
    var repeatPara= document.createElement('p');

    //declaring empty field//
    function empty(inputField) {
        if(inputField.value === ""){
            return true;
        }else{
            return false;
        }
    }

    //validating letters and length from name//
    function validateLettersName(){
        var letters = (nameField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && nameField.value.length >3){
                return true;
            }
        }
        return false;
    }

    //validating letters and length from surname//
    function validateLettersSurname(){
        var letters = (surnameField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && surnameField.value.length >3){
                return true;
            }
        }
        return false;
    }

    //validating letters and length from locality//
    function validateLettersLocality(){
        var letters = (localityField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && localityField.value.length >3){
                return true;
            }
        }
        return false;
    }

    //validating numbers from name//
    function validateNumbersName(){
        var numbers = (nameField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    //validating numbers from surname//
    function validateNumbersSurname(){
        var numbers = (surnameField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    //validating numbers from locality//
    function validateNumbersLocality(){
        var numbers = (localityField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    //validating numbers and length from identity//
    function validateNumbersIdentity(){
        var numbers = (identityField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase() && identityField.value.length >=7){
                return true;
            }
        }
        return false;
    }

    //validate number and length from phone//
    function validateNumbersPhone(){
        var numbers = (phoneField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase() && phoneField.value.length ==10){
                return true;
            }
        }
        return false;
    }

    //validating letters and length from address//
    function validateLettersAddress(){
        var letters = (addressField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && addressField.value.length >=5){
                return true;
            }
        }
        return false;
    }

    //validating numbers from address//
    function validateNumbersAddress(){
        var numbers = (addressField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }


    //validating address letters, space and numbers//
    function validateSpace(addressField){
        if (addressField.value.indexOf(" ") >= 0){
            return true;
        }else{
            return false;
        }
    }

    function validateAddressLetterSpace(addressField){
        var blankSpace = addressField.value.indexOf(" ");
        var letterAddress = addressField.value.substring(0, blankSpace);
        if (validateLettersAddress.test(letterAddress)){
            return true;
        }else{
            return false;
        }
    }

    function validateAddressFirstNumber(addressField){
        var blankSpace = addressField.value.indexOf(" ");
        var numberAddress = addressField.value.substring(blankSpace +1, addressField.value.length);
        if (validateNumbersAddress.test(numberAddress)){
            return true;
        } else {
            return false;
        }
    }

    //validating numbers and length from zip code//
    function validateNumberZip(){
        var numbers = (zipCodeField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase() && (zipCodeField.value.length == 4 || zipCodeField.value.length == 4)){
                return true;
            }
        }
        return false;
    }

    //validating email//
    function validateEmail(){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (emailExpression.test(emailField.value)){
            return true;
        }else{
            return false;
        }
    }

    //validating numbers and length from password//
    function validateNumberPassword(){
        var numbers = (passwordField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    //validating length from password//
    function validateLengthPassword(passwordField) {
        if (passwordField.value.length >=8){
            return true;
        } else {
            return false;
        }
    }

    //validating letters from password//
    function validateLettersPassword(){
        var letters = (passwordField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    //validating password repeat//
    function validateRepeatPassword(passwordField, repeatPasswordField) {
        if (passwordField.value == repeatPasswordField.value) {
            return true;
        } else {
            return false;
        }
    }

    //adding onblur name//
    nameField.onblur = function validateInputName(){
        if(empty(nameField)){
            nameField.classList.add('input-error');
        }else if(!validateLettersName(nameField)){
            nameField.classList.add('input-error');
            pElementName.appendChild(namePara);
            namePara.classList.add('paragraph-error');
            namePara.innerHTML = 'This field must contain 3 letters or more'
        }else if(validateNumbersName(nameField)){
            nameField.classList.add('input-error');
            pElementName.appendChild(namePara);
            namePara.classList.add('paragraph-error');
            namePara.innerHTML = 'This field only accepts letters';
        }
        else{
            nameField.classList.add('input-success');
        }
    }

    //adding onblur surname//
    surnameField.onblur = function validateInputSurname(){
        if(empty(surnameField)){
            surnameField.classList.add('input-error');
        }else if(!validateLettersSurname(surnameField)){
            surnameField.classList.add('input-error');
            pElementSurname.appendChild(surnamePara);
            surnamePara.classList.add('paragraph-error');
            surnamePara.innerHTML = 'This field must contain 3 letters or more'
        }else if(validateNumbersSurname(surnameField)){
            surnameField.classList.add('input-error');
            pElementSurname.appendChild(surnamePara);
            surnamePara.classList.add('paragraph-error');
            surnamePara.innerHTML = 'This field only accepts letters';
        }
        else{
            surnameField.classList.add('input-success');
        }
    }

    //adding onblur id//
    identityField.onblur = function validateInputIdentity(){
        if(empty(identityField)){
            identityField.classList.add('input-error');
        }else if(!validateNumbersIdentity(identityField)){
            identityField.classList.add('input-error');
            pElementIdentity.appendChild(identityPara);
            identityPara.classList.add('paragraph-error');
            identityPara.innerHTML = 'This field must contain only numbers, 7 or more'
        }else{
            identityField.classList.add('input-success');
        }
    }

}