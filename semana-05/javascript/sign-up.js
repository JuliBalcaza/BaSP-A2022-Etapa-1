window.onload = function (){
    //taking input elements from the dom//
    var nameField = document.getElementById('input-name');
    var surnameField = document.getElementById('input-surname');
    var identityField = document.getElementById('input-id');
    var dateField = document.getElementById('input-date');
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

    //validating year from date of birth//
    function validateYearsDate(){
        var splitDate = dateField.value.split('-');
        var year = splitDate[0];
        var currentYear = new Date().getFullYear();
        console.log(currentYear);
        if(year > (currentYear - 18)){
            return true;
        }else{
            return false;
        }
    }

    //var changeDate = dateContent.split('-').reverse().join('-');

    //validating number and length from phone//
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
            if (letters[i].toUpperCase() != letters[i].toLowerCase()){
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

    //validating address letters, blank space and numbers//
    function validateAddressFirstLetter(addressField){
        var blankSpace = addressField.value.indexOf(" ");
        var letterAddress = addressField.value.substring(0, blankSpace);
        if (!validateLettersAddress(letterAddress)){
            return true;
        }else{
            return false;
        }
    }

    function validateSpace(addressField){
        if (addressField.value.indexOf(" ") >= 0){
            return true;
        }else{
            return false;
        }
    }

    function validateAddressHasNumber(addressField){
        var blankSpace = addressField.value.indexOf(" ");
        var numberAddress = addressField.value.substring(blankSpace +1, addressField.value.length);
        if (validateNumbersAddress.test(numberAddress)){
            return true;
        } else {
            return false;
        }
    }
    //length address
    function validateLengthAddress(addressField) {
        if (addressField.value.length >=5){
            return true;
        } else {
            return false;
        }
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

    //validating numbers and length from zip code//
    function validateNumberZip(){
        var numbers = (zipCodeField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase() && (zipCodeField.value.length == 4 || zipCodeField.value.length == 5)){
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

    //validating numbers from password//
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

    //adding onblur date of birth//
    dateField.onblur = function validateInputDate(){
        if(empty(dateField)){
            dateField.classList.add('input-error');
        }else if(validateYearsDate(dateField)){
            dateField.classList.add('input-error');
            pElementDate.appendChild(datePara);
            datePara.classList.add('paragraph-error');
            datePara.innerHTML = 'Yoy must be 18 or older'
        }else{
            dateField.classList.add('input-success');
        }
    }

    //adding on blur phone//
    phoneField.onblur = function validateInputPhone(){
        if(empty(phoneField)){
            phoneField.classList.add('input-error');
        }else if(!validateNumbersPhone(phoneField)){
            phoneField.classList.add('input-error');
            pElementPhone.appendChild(phonePara);
            phonePara.classList.add('paragraph-error');
            phonePara.innerHTML = 'This field must contain only numbers, 10 or more'
        }else{
            phoneField.classList.add('input-success');
        }
    }

    //adding onblur address//
    addressField.onblur = function validateInputAddress(){
        if(empty(addressField)){
            addressField.classList.add('input-error');
        }else if(validateAddressFirstLetter(addressField)){
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must start with a letter';
        }else if(!validateSpace(addressField)){
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must contain a blank space';
        }else if(!validateAddressHasNumber(addressField)){
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must contain numbers after blank space';
        }else if(!validateLengthAddress) {
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must have 5 characters or more';
        }else{
            addressField.classList.add('input-success');
        }
    }

    //adding on blur locality//
    localityField.onblur = function validateInputLocality(){
        if(empty(localityField)){
            localityField.classList.add('input-error');
        }else if(!validateLettersLocality(localityField)){
            localityField.classList.add('input-error');
            pElementLocality.appendChild(localityPara);
            localityPara.classList.add('paragraph-error');
            localityPara.innerHTML = 'This field must contain 3 letters or more'
        }else if(validateNumbersLocality(localityField)){
            localityField.classList.add('input-error');
            pElementLocality.appendChild(localityPara);
            localityPara.classList.add('paragraph-error');
            localityPara.innerHTML = 'This field only accepts letters';
        }
        else{
            localityField.classList.add('input-success');
        }
    }

    //adding onblur zip code//
    zipCodeField.onblur = function validateInputZip(){
        if(empty(zipCodeField)){
            zipCodeField.classList.add('input-error');
        }else if(!validateNumberZip(zipCodeField)){
            zipCodeField.classList.add('input-error');
            pElementZip.appendChild(zipPara);
            zipPara.classList.add('paragraph-error');
            zipPara.innerHTML = 'This field must contain only numbers'
        }else{
            zipCodeField.classList.add('input-success');
        }
    }

    //adding onblur email//
    emailField.onblur = function validateInputEmail(){
        if(empty(emailField)){
            emailField.classList.add('input-error');
        }else if(!validateEmail(emailField)){
            emailField.classList.add('input-error');
            pElementEmail.appendChild(emailPara);
            emailPara.classList.add('paragraph-error');
            emailPara.innerHTML = 'Enter a valid e-mail address';
        }else{
            emailField.classList.add('input-success');
        }
    }

    //adding onblur password//
    passwordField.onblur = function validateInputPassword(){
        if(empty(passwordField)){
            passwordField.classList.add('input-error');
        }else if(!validateNumberPassword(passwordField) || !validateLettersPassword(passwordField)){
            passwordField.classList.add('input-error');
            pElementPassword.appendChild(passwordPara);
            passwordPara.classList.add('paragraph-error');
            passwordPara.innerHTML = 'Your password must contain letters and numbers';
        }else if(!validateLengthPassword(passwordField)){
            passwordField.classList.add('input-error');
            pElementPassword.appendChild(passwordPara);
            passwordPara.classList.add('paragraph-error');
            passwordPara.innerHTML = 'Your password must contain 8 characters or more';
        }else{
            passwordField.classList.add('input-success');
        }
    }

    //adding onblur repeat//
    repeatPasswordField.onblur = function validateInputRepeat(){
        if(empty(repeatPasswordField)){
            repeatPasswordField.classList.add('input-error');
        }else if(!validateRepeatPassword(passwordField, repeatPasswordField)){
            repeatPasswordField.classList.add('input-error');
            pElementRepeat.appendChild(repeatPara);
            repeatPara.classList.add('paragraph-error');
            repeatPara.innerHTML = 'Please make sure your passwords match';
        }else{
            repeatPasswordField.classList.add('input-success');
        }
    }
    //ONFOCUS//

}