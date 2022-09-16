console.log('EXERCISE 2: STRINGS');
/*a. Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('2.a:');
var firstStringA= 'onomatopoeia';
console.log(firstStringA.toUpperCase());
/*b. Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando el 
resultado en una nueva variable (utilizar substring).*/
console.log('2.b:');
var firstStringB= 'onomatopoeia';
var resultB= firstStringB.substring(0,5);
console.log(resultB);
/*c. Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/
console.log('2.c:');
var firstStringC= 'onomatopoeia';
var resultC= firstStringC.substring(9);
console.log(resultC);
/*d. Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las 
demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('2.d:');
var firstStringD= 'onomatopoeia';
var resultD= firstStringD.substring(0,1).toUpperCase() 
+ firstStringD.substring(1).toLowerCase();
console.log(resultD);
/*e.Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio 
en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('2.e:');
var firstStringE= 'hello world';
var resultE= firstStringE.indexOf(' ');
console.log(resultE);
/*f.Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de 
los ejercicios anteriores para generar un nuevo string que tenga la 
primera letra de ambas palabras en mayúscula y las demás letras en 
minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).*/
console.log('2.f:');
var firstStringF= 'electrocoagulation onomatopoeia';
var resultF= firstStringF.substring(0,1).toUpperCase()
+ firstStringF.substring(1, firstStringF.indexOf(' ')).toLowerCase()
+ firstStringF.substring(firstStringF.indexOf(' '), 
firstStringF.indexOf('nomatopoeia')).toUpperCase()
+ firstStringF.substring(firstStringF.indexOf('nomatopoeia'));
console.log(resultF);
