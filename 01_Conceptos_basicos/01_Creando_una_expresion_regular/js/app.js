'use strict'
var expresion1 = new RegExp('abc');

var expresion2 = /abc/;

var parrafo = /text1 \/n texto2 /;

/*
    "var parrafo = /text1 \/n texto2 /" Cuando se está trabajando con expresiones regulares 
    muy cortas, esta es una gran opción.
    Si trabajas con expresiones regulares ya bastante amplias, 
    entonces utilizar el objeto "RegExp" es la opción para que te puedas salir mucho más
    sencillo y no sufras tanto en el momento de estar escribiendo tu código. 
    De esta manera, ya tenemos identificadas las dos formas con las cuales podemos 
    crear y utilizar una expresión regular en Java Script.
*/