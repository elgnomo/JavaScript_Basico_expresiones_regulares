var expresion1 = /[01]/; //Normal
var expresion2 = /[^01]/; //Negacion
const EVALUAR2 = '10101002100110001'; //true
//const EVALUAR = "02-octubre-1968"; //false
console.log(expresion1.test(EVALUAR2));
console.log(expresion2.test(EVALUAR2));

document.getElementById("expresion1").innerHTML = `La expresion que usamos es ${expresion2}`;
document.getElementById("test").innerHTML = `El parrafo a evaluar es: ${EVALUAR2}`;
document.getElementById("ejemplo_expresion").innerHTML = expresion2.test(EVALUAR2);