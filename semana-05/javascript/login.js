window.onload = function (){
    //taking elements from the dom//
    var inputField = document.querySelectorAll('input');
    var emailField = document.getElementById('email-field');
    var passwordField = document.getElementById('password-field');

    //validating email field//
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    function validateEmail(){
        if (emailExpression.test(emailField.value)){
            return true;
        }else{
            return false;
        }
    }

    //declaring empty field//
    function empty(inputField) {
        if(inputField.value == ""){
            return true;
        }else{
            return false;
        }
    }

    //validating password field//
    var numbers ='0123456789';
    var letters ='abcdefghijklmnñopqrstuvwxyz';

    //validating numbers from password//
    function validateNumbers(passwordField){
        for(i=0; i<passwordField.value.length; i++){
           if (numbers.indexOf(passwordField.value.charAt(i), 0)!=-1){
            console.log(passwordField.value);
            return true;
            }
        }
        return false;
    }

    //validating letters from password//
    function validateLetters(passwordField){
        passwordField.value =passwordField.value.toLowerCase();
        for(i=0; i<passwordField.value.length; i++){
            if (letters.indexOf(passwordField.value.charAt(i), 0)!=-1){
                console.log(passwordField.value);
                return true;
            }
        }
        return false;
    }

    //validating email//
    emailField.onblur = function validateInputEmail(){
        if(empty(emailField)){
            emailField.classList.add('input-error');
        }else if(!validateEmail(emailField)){
            emailField.classList.add('input-error');
        }else{
            emailField.classList.add('input-success');
        }
    }

    //validating password//
    passwordField.onblur = function validateInputPassword(){
        if(empty(passwordField)){
            passwordField.classList.add('input-error');
        }else if(!validateNumbers(passwordField) || !validateLetters(passwordField)){
            passwordField.classList.add('input-error');
        }else{
            passwordField.classList.add('input-success');
        }
    }

    //focus email//
    emailField.onfocus = function(){
        emailField.classList.remove('input-error');
        emailField.classList.remove('input-success');
    }

    //focus password//
    passwordField.onfocus = function(){
        passwordField.classList.remove('input-error');
        passwordField.classList.remove('input-success');
    }
}