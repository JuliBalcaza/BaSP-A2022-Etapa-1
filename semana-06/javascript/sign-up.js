window.onload = function (){
    //taking input elements from the dom//
    var nameField = document.getElementById('input-name');
    var surnameField = document.getElementById('input-surname');
    var identityField = document.getElementById('input-id');
    var dateField = document.getElementById('input-date');
    var correctDate;
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

    //requesting server//
    function requestServer(){
		var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name='
            + nameField.value
            + '&lastName=' + surnameField.value
            + '&dni=' + identityField.value
            + '&dob=' + correctDate
            + '&phone=' + phoneField.value
			+ '&address=' + addressField.value
			+ '&city=' + localityField.value
			+ '&zip=' + zipCodeField.value
			+ '&email=' + emailField.value
			+ '&password=' + passwordField.value;

		fetch(url)
        .then(function (res){
			return res.json();
		})
		.then(function (data){
            if (data.success === true){
                setLocalData(data);
                alert('Successful request: '
                + data.msg
                + 'Name: ' + data.data.name
                + 'Surname: ' + data.data.lastName
                + '\nID: ' + data.data.dni
                + 'Date of Birth: ' + data.data.dob
                + '\nPhone Number: ' + data.data.phone
                + 'Address: ' + data.data.address
                + '\nLocality: ' + data.data.city
                + 'Zip Code: ' + data.data.zip
                + '\nEmail: ' + data.data.email
                + 'Password: ' + data.data.password);
            }else{
                alert(
                    'Something went wrong, please check your information: ' + data.msg
                    + '\nName: ' + data.data.name
                    + 'Surname: ' + data.data.lastName
                    + '\nID: ' + data.data.dni
                    + 'Date of Birth: ' + data.data.dob
                    + '\nPhone Number: ' + data.data.phone
                    + 'Address: ' + data.data.address
                    + '\nLocality: ' + data.data.city
                    + 'Zip Code: ' + data.data.zip
                    + '\nEmail: ' + data.data.email
                    + 'Password: ' + data.data.password
                );
            }
        })
        .catch(function (err) {
            alert('Fail ' + err);
        });
	}

    //setting data for saving on local storage//
    function setLocalData(data){
        localStorage.setItem('nameData', data.data.name);
		localStorage.setItem('surnameData', data.data.lastName);
		localStorage.setItem('idData', data.data.dni);
		localStorage.setItem('dateData', data.data.dob);
		localStorage.setItem('phoneData', data.data.phone);
		localStorage.setItem('addressData', data.data.address);
		localStorage.setItem('localityData', data.city);
		localStorage.setItem('zipData', data.data.zip);
		localStorage.setItem('emailData', data.data.email);
		localStorage.setItem('passwordData', data.data.password);
    }

    function saveFormLocalData() {
		nameField.value = localStorage.getItem('nameData');
		surnameField.value = localStorage.getItem('surnameData');
		identityField.value = localStorage.getItem('idData');
		phoneField.value = localStorage.getItem('phoneData');
		addressField.value = localStorage.getItem('addressData');
		localityField.value = localStorage.getItem('localityData');
		zipCodeField.value = localStorage.getItem('zipData');
		emailField.value = localStorage.getItem('emailData');
		passwordField.value = localStorage.getItem('passwordData');
		repeatPasswordField.value = localStorage.getItem('passwordData');
	}

    saveFormLocalData();

    //declaring empty field//
    function empty(inputField) {
        if(inputField.value === ''){
            return true;
        }else{
            return false;
        }
    }

    //validating name//
    function validateLettersName(){
        var letters = (nameField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && nameField.value.length >3){
                return true;
            }
        }
        return false;
    }

    function validateNumbersName(){
        var numbers = (nameField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    nameField.onblur = function validateInputName(){
        if(empty(nameField)){
            nameField.classList.add('input-error');
        }else if(!validateLettersName(nameField)){
            nameField.classList.add('input-error');
            pElementName.appendChild(namePara);
            namePara.classList.add('paragraph-error');
            namePara.innerHTML = 'This field must contain 3 letters or more';
        }else if(validateNumbersName(nameField)){
            nameField.classList.add('input-error');
            pElementName.appendChild(namePara);
            namePara.classList.add('paragraph-error');
            namePara.innerHTML = 'This field only accepts letters';
        }
        else{
            nameField.classList.add('input-success');
            return nameValue= true;
        }
    }

    nameField.onfocus = function(){
        nameField.classList.remove('input-error', 'input-success');
        namePara.innerHTML = '';
    }

    //validating surname//
    function validateLettersSurname(){
        var letters = (surnameField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && surnameField.value.length >3){
                return true;
            }
        }
        return false;
    }

    function validateNumbersSurname(){
        var numbers = (surnameField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

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
            return surnameValue = true;
        }
    }

    surnameField.onfocus = function(){
        surnameField.classList.remove('input-error', 'input-success');
        surnamePara.innerHTML = '';
    }

    //validating identity//
    function validateNumbersIdentity(){
        var numbers = (identityField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase() && identityField.value.length >=7){
                return true;
            }
        }
        return false;
    }

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
            return identityValue = true;
        }
    }

    identityField.onfocus = function(){
        identityField.classList.remove('input-error', 'input-success');
        identityPara.innerHTML = '';
    }

    //validating date of birth//
    function validateYearsDate(){
        var splitDate = dateField.value.split('-');
        var year = splitDate[0];
        var currentYear = new Date().getFullYear();
        if(year > (currentYear - 18)){
            return true;
        }else{
            return false;
        }
    }

    dateField.onblur = function validateInputDate(){
        if(empty(dateField)){
            dateField.classList.add('input-error');
        }else if(validateYearsDate(dateField)){
            dateField.classList.add('input-error');
            pElementDate.appendChild(datePara);
            datePara.classList.add('paragraph-error');
            datePara.innerHTML = 'You must be 18 or older';
        }else{
            dateField.classList.add('input-success');
            var splitDate = dateField.value.split('-');
            correctDate = splitDate[1] + '/' + splitDate [2] + '/' + splitDate[0];
            console.log(correctDate);
            return dateValue = true;
        }
    }

    dateField.onfocus = function(){
        dateField.classList.remove('input-error', 'input-success');
        datePara.innerHTML = '';
    }

    //validating phone//
    function validateNumbersPhone(){
        var numbers = (phoneField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase() && phoneField.value.length ==10){
                return true;
            }
        }
        return false;
    }

    phoneField.onblur = function validateInputPhone(){
        if(empty(phoneField)){
            phoneField.classList.add('input-error');
        }else if(!validateNumbersPhone(phoneField)){
            phoneField.classList.add('input-error');
            pElementPhone.appendChild(phonePara);
            phonePara.classList.add('paragraph-error');
            phonePara.innerHTML = 'This field must contain only 10 numbers'
        }else{
            phoneField.classList.add('input-success');
            return phoneValue = true;
        }
    }

    phoneField.onfocus = function(){
        phoneField.classList.remove('input-error', 'input-success');
        phonePara.innerHTML = '';
    }

    //validating address//
    function validateLettersAddress(){
        var letters = (addressField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    function validateNumbersAddress(){
        var numbers = (addressField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    function validateAddressFirstLetter(addressField){
        var blankSpace = addressField.value.indexOf(' ');
        var letterAddress = addressField.value.substring(0, blankSpace);
        if (!validateLettersAddress(letterAddress)){
            return true;
        }else{
            return false;
        }
    }

    function validateSpace(addressField){
        if (addressField.value.indexOf(' ') >= 0){
            return true;
        }else{
            return false;
        }
    }

    function validateAddressHasNumber(addressField){
        var blankSpace = addressField.value.indexOf(' ');
        var numberAddress = addressField.value.substring(blankSpace +1, addressField.value.length);
        if (validateNumbersAddress(numberAddress)){
            return true;
        } else {
            return false;
        }
    }

    function validateLengthAddress(addressField) {
        if (addressField.value.length >=5){
            return true;
        } else {
            return false;
        }
    }

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
            return addressValue = true;
        }
    }

    addressField.onfocus = function(){
        addressField.classList.remove('input-error', 'input-success');
        addressPara.innerHTML = '';
    }

    //validating locality//
    function validateLettersLocality(){
        var letters = (localityField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase() && localityField.value.length >3){
                return true;
            }
        }
        return false;
    }

    function validateNumbersLocality(){
        var numbers = (localityField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

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
            return localityValue = true;
        }
    }

    localityField.onfocus = function(){
        localityField.classList.remove('input-error', 'input-success');
        localityPara.innerHTML = '';
    }

    //validating zip code//
    function validateNumberZip(){
        var numbers = (zipCodeField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()
            && (zipCodeField.value.length == 4|| zipCodeField.value.length == 5)){
                return true;
            }
        }
        return false;
    }

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
            return zipValue = true;
        }
    }

    zipCodeField.onfocus = function(){
        zipCodeField.classList.remove('input-error', 'input-success');
        zipPara.innerHTML = '';
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
            return emailValue = true;
        }
    }

    emailField.onfocus = function(){
        emailField.classList.remove('input-error', 'input-success');
        emailPara.innerHTML = '';
    }

    //validating password//
    function validateNumberPassword(){
        var numbers = (passwordField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    function validateLengthPassword(passwordField) {
        if (passwordField.value.length >=8){
            return true;
        } else {
            return false;
        }
    }

    function validateLettersPassword(){
        var letters = (passwordField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

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
            return passwordValue = true;
        }
    }

    passwordField.onfocus = function(){
        passwordField.classList.remove('input-error', 'input-success');
        passwordPara.innerHTML = '';
    }

    //validating password repeat//
    function validateRepeatPassword(passwordField, repeatPasswordField) {
        if (passwordField.value == repeatPasswordField.value) {
            return true;
        } else {
            return false;
        }
    }

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
            return repeatValue = true;
        }
    }

    repeatPasswordField.onfocus = function(){
        repeatPasswordField.classList.remove('input-error', 'input-success');
        repeatPara.innerHTML = '';
    }

    //alerts//
    btnCreate.onclick = function(event){
        event.preventDefault();
        if(nameValue && surnameValue &&
        identityValue && dateValue &&
        phoneValue && addressValue &&
        localityValue  && zipValue &&
        emailValue && passwordValue && repeatValue){
           requestServer();
        }else{
            alert('Some field is empty or contains error, please check your information');
        }
    }
}
