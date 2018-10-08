// var expresion1 = /\d+/.exec('Del año 1984')

// console.log(expresion1);

// console.log("Hasta 1994".match(/\d+/))

"use strict"
var expresionConsole1 = /\d+/.exec('Del año 1968');
console.log("expresionConsole1: ", expresionConsole1);
var expresion1 = /\d+/;
const EVALUAR1 = 'Del año 1968'

var expresion2 = /\d+/;
const EVALUAR2 = 'Del año 1968'
//const EVALUAR = 'Hasta 1986".match(/\d+/)'


document.getElementById("expresion1").innerHTML = `La expresion que usamos es ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar usando exec es: ${EVALUAR1}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.exec(EVALUAR1);


document.getElementById("expresion2").innerHTML = `La expresion que usamos es ${expresion2}`;
document.getElementById("test2").innerHTML = `El parrafo a evaluar usando match es: ${EVALUAR2}`;
document.getElementById("ejemplo_expresion2").innerHTML = EVALUAR2.match(expresion2);