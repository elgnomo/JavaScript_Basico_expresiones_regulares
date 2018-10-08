"use strict"
var expresion1 = /Hola Mundo/i;
const EVALUAR = 'Hola mundo'


document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.test(EVALUAR);
//console.log(expresion1.test('Hola mundo'));

/**
 * Aquí es donde entra mi operador y este operador es la letra "i". Con este operador, simplemente estamos activando y diciéndole a la expresión regular que no va a ser sensible a mayúsculas y minúsculas.
 */