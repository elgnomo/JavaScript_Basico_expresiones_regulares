var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;
//{1,2} uno minimo dos maximo
//{4} siempre4
//\d{1,2}:\d{2,}/ para la hora
var expresion2 = /\d{1,2}-\d{1,2}-\d{4}\d{1,2}:\d{2,}/;
const EVALUAR = '27-06-2007 11:45'

document.getElementById("expresion1").innerHTML = `La expresion que usamos es + ${expresion1}`;
document.getElementById("test1").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion1").innerHTML = expresion1.test(EVALUAR);


document.getElementById("expresion2").innerHTML = `La expresion que usamos es + ${expresion2}`;
document.getElementById("test2").innerHTML = `El parrafo a evaluar es: ${EVALUAR}`;
document.getElementById("ejemplo_expresion2").innerHTML = expresion2.test(EVALUAR);