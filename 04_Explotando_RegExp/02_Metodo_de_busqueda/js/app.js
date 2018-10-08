"use strict"
var expresion1 = /\W/;
const EVALUAR = 'Estahistoriacontinuara'
//  \W  Cualquier carácter que no sea alfanumérico
//  \S Cualquier carácter que no sea un espacio en blanco



document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = EVALUAR.search(expresion1);