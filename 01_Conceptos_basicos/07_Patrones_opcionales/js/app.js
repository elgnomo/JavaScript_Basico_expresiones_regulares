var expresion1 = /Hola mun?do/;
var expresion2 = /Hola mundo/;
const EVALUAR = 'Hola mudo'

document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.test(EVALUAR);


document.getElementById("expresion2").innerHTML = `La expresion que usamos es + ${expresion2}`;
document.getElementById("test2").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion2").innerHTML = expresion2.test(EVALUAR);
/*
 * Porque puede ser que exista o no esta letra acorde a la opción que nosotros estamos
 * estableciendo en nuestra expresión regular. Así también podemos tener un control
 * sobre elementos importantes y elementos no tan importantes en las expresiones 
 * que deseemos evaluar.
 */