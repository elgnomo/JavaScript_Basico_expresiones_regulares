"use strict"
var expresion1 = /pollo|res|pescado/;
const EVALUAR = 'El cliente pidió tacos'


document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.test(EVALUAR);