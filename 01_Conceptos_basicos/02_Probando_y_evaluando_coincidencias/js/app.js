'use strict'
var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef'));

var expresion2 = /Hola Mundo/;
console.log(expresion2.test('El primer programa es Hola Mundo'));

/*
    Para evaluar usamos la funcion test, ambién es case sensitive, 
    es decir que él es sensible a mayúsculas y minúsculas, lo cual me 
    agrega nuevos elementos para poder evaluar mis expresiones regulares.
    Primero debes de definir cual es el patrón que tú quieres ubicar y 
    después mandas el lugar en donde quieres ubicar ese patrón. 
    Si sigues estos pasos vas a poder lograr realizar esas evaluaciones.
*/