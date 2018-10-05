//Podemos trabajar cpn rangos
//var expresion1 = /[0123456789]/;
//var expresion1 = /[0-9]/;
var expresion1 = /[0-9a-zA-Z]/;
const EVALUAR = "Sucedió en 1968";
console.log(expresion1.test('Sucedió en 1985'));

document.getElementById("expresion1").innerHTML = `La expresion que usamos es ${expresion1}`;
document.getElementById("test").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion").innerHTML = expresion1.test(EVALUAR);