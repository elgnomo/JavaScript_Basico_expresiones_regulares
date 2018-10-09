$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿El correo es válido?', isValidEmail());
    }

    var isValidEmail = function () {
        var email = document.getElementById('email');
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
    }

});

/*
Para comenzar, lo primero que haremos es definir al inicio de nuestra cadena de caracteres cualquier tipo de letra. Si recordamos, nosotros podemos ocupar "\W" para definir cualquier letra o número. Entonces a partir de aquí comenzamos y puede existir una o más repeticiones. Después de esto, podemos tener un agrupado. Con este agrupado, vamos a establecer si vamos a ocupar algún tipo de carácter. Por ejemplo, si yo quiero establecer un conjunto, vamos a poner aquí "\.", si quiero trabajar con el punto, "\+" si es un símbolo de más.
Recuerden. Podemos tener distintos tipos de correo electrónico. Por ejemplo, mi nombre, símbolo de más, mi apellido. Varía dependiendo del proveedor. Así que de todos modos vamos a evaluarlo. O incluso, puede ser un guión. En todo caso, este es un grupo que puede aplicar para cualquiera. Es decir, el correo electrónico puede incluir cualquiera de estos símbolos. Y después de esto, un símbolo de interrogación, que significa que cualquiera de estos símbolos pueden o no estar presentes en la cadena.
Después de esto, vamos a agregar que también puede o no existir cualquier tipo de carácter una o más veces. Con esto ya tengo una parte definida y simplemente como lo tengo agrupado en una subexpresión, vamos a indicar que puede o no estar, es decir, puede aplicar 0 o puede aplicar una o más veces. Con esto ya tenemos compuesta la primer parte del correo electrónico. Ahora viene la segunda, para la cual hay que ser muy específicos. En este caso es la letra "@", que es la parte, obviamente, donde se traza la mitad del correo electrónico.
A esto después vamos a continuar con una subexpresión porque vamos a comenzar a evaluar el dominio. Y para evaluar el dominio podemos encontrar varias cosas. Primero que podemos estar haciendo uso de un conjunto donde encontremos un punto o podamos también encontrar un guión. Y esto puede o no estar presente. Seguido de esto también podemos encontrar cualquier carácter que pueda estar presente una o más veces. Y obviamente, como todo esto yo lo puedo definir dentro de un conjunto, vamos a establecerlo hasta acá, entonces voy a establecer que se repitan 0 o "n" cantidad de veces.
Y ahora, solamente me hace falta la última expresión o el último bloque que es el final del dominio. Es decir, si es ".com", ".net", etc. Entonces vamos a recordar que esos comienzan con un punto. Y después del punto, recordemos que podemos tener cualquier letra o número, en este caso identificado por la letra "W" y vamos a definir un rango. Originalmente puede ser de tres, pero han estado cambiando los nombres de dominio, y las extensiones, etc.
Entonces podemos dejar algún estándar donde vaya de dos a cuatro, porque si recordamos, hay algunos dominios como por ejemplo ".co", o tenemos algunos dominios largos, como ".info", entonces con esto podemos hacer esta evaluación. Y quiere decir que aquí al final, después de que nosotros tenemos ya esta expresión lista, podemos indicar que puede aparecer una o más veces, porque recordemos que en algunos casos, podemos tener correos como ".com.mx". Ahora una vez que ya tenemos expresado esto, simplemente vamos a indicar que este dominio va existir al final de toda cadena.
*/