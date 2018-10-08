"use strict"

var expresion2 = /\d/g;

console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));
console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));
expresion2.lastIndex = 0;
console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));

var expresion1 = /\d/g;
const EVALUAR1 = 'Pedí 4 tacos y 1 agua';


// document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
// document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
// document.getElementById("ejemplo_expresion1").innerHTML = EVALUAR.search(expresion1);