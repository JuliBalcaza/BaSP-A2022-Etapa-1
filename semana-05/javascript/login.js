window.onload = function (){
    //taking input elements from the dom//
    var emailField = document.getElementById('email-field');
    var passwordField = document.getElementById('password-field');
    var btnLogin = document.getElementById('login-button');

    //taking p elements from the dom//
    var pElementEmail = document.getElementById('error-p-email');
    var pElementPassword = document.getElementById('error-p-password');

    //creating p variables//
    var emailPara= document.createElement('p');
    var passwordPara= document.createElement('p');

    //creating variables to compare boolean values//
    var emailValue = false;
    var passwordValue = false;

    //functions to set//
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

    //declaring empty field//
    function empty(inputField) {
        if(inputField.value === ''){
            return true;
        }else{
            return false;
        }
    }

    //validating email//
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    function validateEmail(){
        if (emailExpression.test(emailField.value)){
            return true;
        }else{
            return false;
        }
    }

    //validating password numbers and letters//
    function validateNumbers(){
        var numbers = (passwordField.value.split(''));
        for(var i=0; i<numbers.length; i++){
            if (numbers[i].toUpperCase() == numbers[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    function validateLetters(){
        var letters = (passwordField.value.split(''));
        for(var i=0; i<letters.length; i++){
            if (letters[i].toUpperCase() != letters[i].toLowerCase()){
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

    //ONBLUR//

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
        }else if(!validateNumbers(passwordField) || !validateLetters(passwordField)){
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

    //ONFOCUS//
    emailField.onfocus = function(){
        emailField.classList.remove('input-error', 'input-success');
        emailPara.innerHTML = '';
    }

    passwordField.onfocus = function(){
        passwordField.classList.remove('input-error', 'input-success');
        passwordPara.innerHTML = '';
    }

    //alerts//
    btnLogin.onclick = function(event){
        event.preventDefault();
        if(nameValue && passwordValue){
            alert(' Hello!' +
            '\n' + 'Your Email: ' + emailField.value +
            '\n' + 'Your Password: ' + passwordField.value +
            '\n' + 'Welcome!');
        }else{
            alert('Some field is empty or contains error, please check your information');
        }
    }
}
