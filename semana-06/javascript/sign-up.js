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

    //taking p elements from the dom//
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

    //creating variables to compare boolean values//
    var nameValue= false;
    var surnameValue= false;
    var identityValue= false;
    var dateValue= false;
    var phoneValue= false;
    var addressValue= false;
    var localityValue= false;
    var zipValue= false;
    var emailValue= false;
    var passwordValue= false;
    var repeatValue= false;

    //functions to set//
    function nameT(){
        nameValue= true;
    }

    function nameF(){
        nameValue= false;
    }

    function surnameT(){
        surnameValue= true;
    }

    function surnameF(){
        surnameValue= false;
    }

    function identityT(){
        identityValue= true;
    }

    function identityF(){
        identityValue= false;
    }

    function dateT(){
        dateValue= true;
    }

    function dateF(){
        dateValue= false;
    }

    function phoneT(){
        phoneValue= true;
    }

    function phoneF(){
        phoneValue= false;
    }

    function addressT(){
        addressValue= true;
    }

    function addressF(){
        addressValue= false;
    }

    function localityT(){
        localityValue= true;
    }

    function localityF(){
        localityValue= false;
    }

    function zipT(){
        zipValue= true;
    }

    function zipF(){
        zipValue= false;
    }

    function emailT(){
        emailValue= true;
    }

    function emailF(){
        emailValue= false;
    }

    function passwordT(){
        passwordValue= true;
    }

    function passwordF(){
        passwordValue= false;
    }

    function repeatT(){
        repeatValue= true;
    }

    function repeatF(){
        repeatValue= false;
    }

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

    //creating p variables//
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
        if (validateNumbersAddress(numberAddress)){
            console.log('tiene numero');
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

    //ONBLUR//
    //adding onblur name//
    nameField.onblur = function validateInputName(){
        if(empty(nameField)){
            nameField.classList.add('input-error');
            nameF();
        }else if(!validateLettersName(nameField)){
            nameField.classList.add('input-error');
            pElementName.appendChild(namePara);
            namePara.classList.add('paragraph-error');
            namePara.innerHTML = 'This field must contain 3 letters or more'
            nameF();
        }else if(validateNumbersName(nameField)){
            nameField.classList.add('input-error');
            pElementName.appendChild(namePara);
            namePara.classList.add('paragraph-error');
            namePara.innerHTML = 'This field only accepts letters';
            nameF();
        }
        else{
            nameField.classList.add('input-success');
            nameT();
        }
    }

    //adding onblur surname//
    surnameField.onblur = function validateInputSurname(){
        if(empty(surnameField)){
            surnameField.classList.add('input-error');
            surnameF();
        }else if(!validateLettersSurname(surnameField)){
            surnameField.classList.add('input-error');
            pElementSurname.appendChild(surnamePara);
            surnamePara.classList.add('paragraph-error');
            surnamePara.innerHTML = 'This field must contain 3 letters or more'
            surnameF();
        }else if(validateNumbersSurname(surnameField)){
            surnameField.classList.add('input-error');
            pElementSurname.appendChild(surnamePara);
            surnamePara.classList.add('paragraph-error');
            surnamePara.innerHTML = 'This field only accepts letters';
            surnameF();
        }
        else{
            surnameField.classList.add('input-success');
            surnameT();
        }
    }

    //adding onblur id//
    identityField.onblur = function validateInputIdentity(){
        if(empty(identityField)){
            identityField.classList.add('input-error');
            identityF();
        }else if(!validateNumbersIdentity(identityField)){
            identityField.classList.add('input-error');
            pElementIdentity.appendChild(identityPara);
            identityPara.classList.add('paragraph-error');
            identityPara.innerHTML = 'This field must contain only numbers, 7 or more'
            identityF();
        }else{
            identityField.classList.add('input-success');
            identityT();
        }
    }

    //adding onblur date of birth//
    dateField.onblur = function validateInputDate(){
        if(empty(dateField)){
            dateField.classList.add('input-error');
            dateF();
        }else if(validateYearsDate(dateField)){
            dateField.classList.add('input-error');
            pElementDate.appendChild(datePara);
            datePara.classList.add('paragraph-error');
            datePara.innerHTML = 'You must be 18 or older';
            dateF();
        }else{
            dateField.classList.add('input-success');
            dateT();
        }
    }

    //adding on blur phone//
    phoneField.onblur = function validateInputPhone(){
        if(empty(phoneField)){
            phoneField.classList.add('input-error');
            phoneF();
        }else if(!validateNumbersPhone(phoneField)){
            phoneField.classList.add('input-error');
            pElementPhone.appendChild(phonePara);
            phonePara.classList.add('paragraph-error');
            phonePara.innerHTML = 'This field must contain only 10 numbers'
            phoneF();
        }else{
            phoneField.classList.add('input-success');
            phoneT();
        }
    }

    //adding onblur address//
    addressField.onblur = function validateInputAddress(){
        if(empty(addressField)){
            addressField.classList.add('input-error');
            addressF();
        }else if(validateAddressFirstLetter(addressField)){
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must start with a letter';
            addressF();
        }else if(!validateSpace(addressField)){
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must contain a blank space';
            addressF();
        }else if(!validateAddressHasNumber(addressField)){
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must contain numbers after blank space';
            addressF();
        }else if(!validateLengthAddress) {
            addressField.classList.add('input-error');
            pElementAddress.appendChild(addressPara);
            addressPara.classList.add('paragraph-error');
            addressPara.innerHTML = 'Your address must have 5 characters or more';
            addressF();
        }else{
            addressField.classList.add('input-success');
            addressT();
        }
    }

    //adding on blur locality//
    localityField.onblur = function validateInputLocality(){
        if(empty(localityField)){
            localityField.classList.add('input-error');
            localityF();
        }else if(!validateLettersLocality(localityField)){
            localityField.classList.add('input-error');
            pElementLocality.appendChild(localityPara);
            localityPara.classList.add('paragraph-error');
            localityPara.innerHTML = 'This field must contain 3 letters or more'
            localityF();
        }else if(validateNumbersLocality(localityField)){
            localityField.classList.add('input-error');
            pElementLocality.appendChild(localityPara);
            localityPara.classList.add('paragraph-error');
            localityPara.innerHTML = 'This field only accepts letters';
            localityF();
        }
        else{
            localityField.classList.add('input-success');
            localityT();
        }
    }

    //adding onblur zip code//
    zipCodeField.onblur = function validateInputZip(){
        if(empty(zipCodeField)){
            zipCodeField.classList.add('input-error');
            zipF();
        }else if(!validateNumberZip(zipCodeField)){
            zipCodeField.classList.add('input-error');
            pElementZip.appendChild(zipPara);
            zipPara.classList.add('paragraph-error');
            zipPara.innerHTML = 'This field must contain only numbers'
            zipF();
        }else{
            zipCodeField.classList.add('input-success');
            zipT();
        }
    }

    //adding onblur email//
    emailField.onblur = function validateInputEmail(){
        if(empty(emailField)){
            emailField.classList.add('input-error');
            emailF();
        }else if(!validateEmail(emailField)){
            emailField.classList.add('input-error');
            pElementEmail.appendChild(emailPara);
            emailPara.classList.add('paragraph-error');
            emailPara.innerHTML = 'Enter a valid e-mail address';
            emailF();
        }else{
            emailField.classList.add('input-success');
            emailT();
        }
    }

    //adding onblur password//
    passwordField.onblur = function validateInputPassword(){
        if(empty(passwordField)){
            passwordField.classList.add('input-error');
            passwordF();
        }else if(!validateNumberPassword(passwordField) || !validateLettersPassword(passwordField)){
            passwordField.classList.add('input-error');
            pElementPassword.appendChild(passwordPara);
            passwordPara.classList.add('paragraph-error');
            passwordPara.innerHTML = 'Your password must contain letters and numbers';
            passwordF();
        }else if(!validateLengthPassword(passwordField)){
            passwordField.classList.add('input-error');
            pElementPassword.appendChild(passwordPara);
            passwordPara.classList.add('paragraph-error');
            passwordPara.innerHTML = 'Your password must contain 8 characters or more';
            passwordF();
        }else{
            passwordField.classList.add('input-success');
            passwordT();
        }
    }

    //adding onblur repeat//
    repeatPasswordField.onblur = function validateInputRepeat(){
        if(empty(repeatPasswordField)){
            repeatPasswordField.classList.add('input-error');
            repeatF();
        }else if(!validateRepeatPassword(passwordField, repeatPasswordField)){
            repeatPasswordField.classList.add('input-error');
            pElementRepeat.appendChild(repeatPara);
            repeatPara.classList.add('paragraph-error');
            repeatPara.innerHTML = 'Please make sure your passwords match';
            repeatF();
        }else{
            repeatPasswordField.classList.add('input-success');
            repeatT();
        }
    }

    //ONFOCUS//
    nameField.onfocus = function(){
        nameField.classList.remove('input-error', 'input-success');
        namePara.innerHTML = '';
    }

    surnameField.onfocus = function(){
        surnameField.classList.remove('input-error', 'input-success');
        surnamePara.innerHTML = '';
    }

    identityField.onfocus = function(){
        identityField.classList.remove('input-error', 'input-success');
        identityPara.innerHTML = '';
    }

    dateField.onfocus = function(){
        dateField.classList.remove('input-error', 'input-success');
        datePara.innerHTML = '';
    }

    phoneField.onfocus = function(){
        phoneField.classList.remove('input-error', 'input-success');
        phonePara.innerHTML = '';
    }

    addressField.onfocus = function(){
        addressField.classList.remove('input-error', 'input-success');
        addressPara.innerHTML = '';
    }

    localityField.onfocus = function(){
        localityField.classList.remove('input-error', 'input-success');
        localityPara.innerHTML = '';
    }

    zipCodeField.onfocus = function(){
        zipCodeField.classList.remove('input-error', 'input-success');
        zipPara.innerHTML = '';
    }

    emailField.onfocus = function(){
        emailField.classList.remove('input-error', 'input-success');
        emailPara.innerHTML = '';
    }

    passwordField.onfocus = function(){
        passwordField.classList.remove('input-error', 'input-success');
        passwordPara.innerHTML = '';
    }

    repeatPasswordField.onfocus = function(){
        repeatPasswordField.classList.remove('input-error', 'input-success');
        repeatPara.innerHTML = '';
    }

    //ALERTS//
    btnCreate.onclick = function(event){
        event.preventDefault();
        if(nameValue && surnameValue &&
        identityValue && dateValue &&
        phoneValue && addressValue &&
        localityValue && zipValue &&
        emailValue && passwordValue && repeatValue){
            alert(' Hello!' +
            '\n' + 'Your Email: ' + emailField.value +
            '\n' + 'Password: ' + passwordField.value +
            '\n' + 'Surname: ' + surnameField.value +
            '\n' + 'ID: ' + identityField.value +
            '\n' + 'Phone: ' + phoneField.value +
            '\n' + 'Address: ' + addressField.value +
            '\n' + 'Locality: ' + localityField.value +
            '\n' + 'Zip code: ' + zipCodeField.value +
            '\n' + 'Email: ' + emailField.value +
            '\n' + 'Password: ' + passwordField.value +
            '\n' + 'Confirm Password: ' + repeatPasswordField.value);
        }else{
            alert('Some field is empty or contains error, please check your information');
        }
    }
}
