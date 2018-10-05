var expresionMas = /\d+/; //+ significa que un patron se va arepatir una o mas veces
var expresionMultiplicacion = /\d*/; //* puede repetirse una o mas veces pero que no este presente
const EVALUAR = '1212'; //true
//  +   *



document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresionMas}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresionMas.test(EVALUAR);


document.getElementById("expresion2").innerHTML = `La expresion que usamos es * ${expresionMultiplicacion}`;
document.getElementById("test2").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion2").innerHTML = expresionMultiplicacion.test(EVALUAR);