//var expresion1 = /[0123456789]/;
var expresion1 = /\d\d-\d\d-\d\d\d\d/;
const EVALUAR = "02-10-1968"; //true
//const EVALUAR = "02-octubre-1968"; //false
console.log(expresion1.test(EVALUAR));

document.getElementById("expresion1").innerHTML = `La expresion que usamos es ${expresion1}`;
document.getElementById("test").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion").innerHTML = expresion1.test(EVALUAR);

//29-06-2007

/**
 * ¿Qué sucede si en lugar de yo mandar el "10" de la fecha,
    envío la palabra "Oct" o la palabra "Octuvre", por ejemplo? 
    ¿Qué sucederá cuando realizamos me sale un "false"? ¿Por qué? 
    Porque, en este caso, ya el patrón no coincide. Sí, coincide a los primeros, 
    pero aquí ya se rompe. Así entonces, podemos nosotros generar nuestras propias 
    evaluaciones dependiendo de lo que vayamos a utilizar.
    Si tú quieres utilizar evaluaciones para números, para letras, etc, vas a poder 
    mezclarlas directamente cuando defines la expresión o tu expresión regular.
 */