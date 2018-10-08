// var expresion1 = /\bcat\b/;

// console.log(expresion1.test("cat"));

"use strict"
var expresion1 = /\bcat\b/;
const EVALUAR = 'cat'


document.getElementById("expresion1").innerHTML = `La expresion que usamos es ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion").innerHTML = expresion1.test(EVALUAR);