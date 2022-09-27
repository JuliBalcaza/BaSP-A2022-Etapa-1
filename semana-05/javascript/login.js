window.onload = function (){
    //taking elements from the dom//
    var inputField = document.querySelectorAll('input');
    var emailField = document.getElementById('email-field');
    var passwordField = document.getElementById('password-field');
    var btnLogin = document.getElementById('login-button');

    //creating error messages//
    var emailErrorParagraph = document.getElementById('error-p-email');
    var paragraphEmail = document.createElement('p');
    var passwordErrorParagraph = document.getElementById('error-p-password');
    var paragraphPassword = document.createElement('p');
    emailErrorParagraph.appendChild(paragraphEmail);
    passwordErrorParagraph.appendChild(paragraphPassword);

    //declaring empty field//
    function empty(inputField) {
        if(inputField.value === ""){
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

    //validating email field//
    emailField.onblur = function validateInputEmail(){
        if(empty(emailField)){
            emailField.classList.add('input-error');
        }else if(!validateEmail(emailField)){
            emailField.classList.add('input-error');
            paragraphEmail.classList.add('paragraph-error');
            paragraphEmail.innerHTML = 'Enter a valid e-mail address';
        }else{
            emailField.classList.add('input-success');
        }
    }

    //validating password//
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

    //validating password field//
    passwordField.onblur = function validateInputPassword(){
        if(empty(passwordField)){
            passwordField.classList.add('input-error');
        }else if(!validateNumbers(passwordField) || !validateLetters(passwordField)){
            passwordField.classList.add('input-error');
            paragraphPassword.classList.add('paragraph-error');
            paragraphPassword.innerHTML = 'Your password must contain letters and numbers';
        }else{
            passwordField.classList.add('input-success');
        }
    }

    //removing error messages//
    emailField.onfocus = function(){
        emailField.classList.remove('input-error');
        emailField.classList.remove('input-success');
        paragraphEmail.innerHTML = '';
    }

    passwordField.onfocus = function(){
        passwordField.classList.remove('input-error');
        passwordField.classList.remove('input-success');
        paragraphPassword.innerHTML = '';
    }

    //alerts//
    btnLogin.onclick = function(event){
        event.preventDefault();
        if(!validateEmail(emailField)){
            alert('Invalid Email');
        }else if((!validateNumbers(passwordField) || !validateLetters(passwordField))){
            alert('Invalid Password');
        }else{
            alert('Your Email: ' + emailField.value + '\n' + 'Your Password: ' + passwordField.value + '\n' + 'Confirm?');
        }
    }
}
