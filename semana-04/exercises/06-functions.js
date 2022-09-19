console.log('EXERCISE 6: FUNCTIONS');
/*a. Crear una función suma que reciba dos valores numéricos y retorne 
el resultado. Ejecutar la función y guardar el resultado en una variable, 
mostrando el valor de dicha variable en la consola del navegador.*/
console.log('6.a:');
var auxiliar1= 2;
var auxiliar2= 15;
var result;
function additionA(num1, num2){
   return num1 + num2;
}
result = additionA(auxiliar1, auxiliar2);
console.log(result);
/*b. A la función suma anterior, agregarle una validación para 
controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar una alerta aclarando que uno de los 
parámetros tiene error y retornar el valor NaN como resultado.*/
console.log('6.b:');
function additionB(val1, val2){
    if(typeof val1 !== 'number' || typeof val2 !== 'number'){
        alert('One parameter has an error');
        return NaN;
    } else {
        return val1 + val2;
    }
}
/*c. Aparte, crear una función validate Integer que 
reciba un número como parámetro y devuelva verdadero 
si es un número entero.*/
console.log('6.c:');
function validateInteger(num){
    return Number.isInteger(num);
}
/*d. A la función suma del ejercicio 6b) agregarle 
una llamada a la función del ejercicio 6c. 
y que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y 
retornar el número convertido a entero (redondeado).*/
console.log('6.d:');
function additionD(val1, val2) {
    if(typeof val1 !== 'number' || typeof val2 !== 'number'){
        alert('One parameter has an error')
        return NaN;
    }else if (validateInteger(val1)=== false) {
        return 'Error decimal number:' + (Math.round(val1));
    }else if (validateInteger(val2) === false){
        return 'Error decimal number:' + (Math.round(val2));
    }else {
        return val1 + val2;
    }
}
console.log(additionD(auxiliar1, auxiliar2));
/*e.Convertir la validación del ejercicio 6d) en una función 
separada y llamarla dentro de la función suma probando que 
todo siga funcionando igual.*/
console.log('6.e:');
function validateAndRound(num){
    if (Number.isInteger(num) === true){
        return true;
    }else{
        return false;
    }
}
console.log(validateAndRound(0.8, 9));
function sumaE(val1, val2){
    if (validateAndRound(val1) === false) {
        return 'Error decimal number:' + (Math.round(val1));
    }else if(validateAndRound(val2) === false){
        return 'Error decimal number:' + (Math.round(val2));
    }else {
        return val1 + val2;
    }
}
console.log(sumaE(auxiliar1, auxiliar2));