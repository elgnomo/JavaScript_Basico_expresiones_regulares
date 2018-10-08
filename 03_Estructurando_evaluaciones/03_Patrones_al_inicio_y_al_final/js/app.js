"use strict"
// ^ Inicio
// $ Fin
//[^] Negacion

var expresionInicio = /^Any/;
var expresionFin = /JavaScript$/;
var expIniciFin = /^Any|JavaScript$/;

const EVALUAR = 'Any app that can be imagined can be made in JavaScript';


document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresionInicio}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresionInicio.test(EVALUAR);

document.getElementById("expresion2").innerHTML = `La expresion que usamos es + ${expresionFin}`;
document.getElementById("test2").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion2").innerHTML = expresionFin.test(EVALUAR);

document.getElementById("expresion3").innerHTML = `La expresion que usamos es + ${expIniciFin}`;
document.getElementById("test3").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion3").innerHTML = expIniciFin.test(EVALUAR);