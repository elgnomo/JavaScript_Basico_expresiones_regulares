// var mensaje = 'El cliente pidió sushi y comió su sushi, sushi, sushi, sushi';

// console.log(mensaje.replace(/i/g, 'o'));

"use strict"
var expresion1 = "El cliente pidió sushi y comió su sushi, sushi, sushi, sushi";
const EVALUAR = "/i/g, 'o'"


document.getElementById("expresion1").innerHTML = `La expresion que usamos es ${expresion1}`;
document.getElementById("test1").innerHTML = `Elementos ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.replace(/i/g, 'o');
/**
 * nosotros tenemos un modificador y dicho modificador es la letra "g", la cual vamos a agregar directamente en el patrón.

 */