"use strict"
var expresion1 = /Woo+(hoo+)+/i;
/**
 * Después de esto, si yo utilizo paréntesis, aquí es donde viene la parte de agrupado de mis expresiones o lo que se le va a conocer como subexpresiones.
 */
const EVALUAR = 'Wooohooohooohooohoooooooohooohooohooohooohooo'


document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.test(EVALUAR); //
//Woohooooooo!

//console.log(expresion1.test('Wooohooohooohooohoooooooohooohooohooohooohooo'));