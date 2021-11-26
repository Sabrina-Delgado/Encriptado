/*window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true); //Mayusculas
    
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("mensaje2").value = cifrar2(texto, desplazamiento);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    },true);
}
 
function cifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'A1B!C2D_E3F0G=H4I<>J5K*L6M-N7O%89P/Q!R&S;T,U+V¿W)X(Y?Z¡';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 55 + 55) %55; 
    return texto.replace(/[A-¡]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 55]);
}

function descifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'A1B!C2D_E3F0G=H4I<>J5K*L6M-N7O%89P/Q!R&S;T,U+V¿W)X(Y?Z¡';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 55 - 55) % 55; 
    return texto.replace(/[A-¡]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 55]);
}

function cifrar2(texto, desplazamiento) {
    let resultado='';
    let letras = 'A1B!C2D_E3F0G=H4I<>J5K*L6M-N7O%89P/Q!R&S;T,U+V¿W)X(Y?Z¡';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 55 + 55) % 55; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(texto[i])!=-1)
            { 
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(texto[i])+desplazamiento) % 55);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i]; // Números, espacios, símbolos... 
        }
    }
    return resultado;
}

//tambien se intento:

function cifrarcodigo(texto, desplazamiento) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = '1234567890+*-";,?¡=)(/&%#:';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26; 
    return texto.replace(/[1-:]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
}

function descifrarcodigo(texto, desplazamiento) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = '1234567890+*-";,?¡=)(/&%#:';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 - 26) % 26; 
    return texto.replace(/[1-:]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
}*/
