window.addEventListener("load",inicio,true); //iniiciar 

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){//llama al id "mensaje",y pone mayusculas con "ketup"
        this.value = this.value.toUpperCase();// cumple la orden con ese valor y lo trasforma imediatamente con : "toUpperCase"
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  // Llama al boto con id "cifrar" 
        let texto = document.getElementById("mensaje").value;//crea variable "texto" para que ingrese el mensaje 
        let desplazamiento = document.getElementById("desplazamiento").value; //crea variable "desplazamiento" para ingresar numero de esacio por corre"              
        document.getElementById("mensaje2").value = cifrar2(texto, desplazamiento);// enlzamos id "mensaje2" con las variables para luego darles una formula, y que apraezaca en nuestra html
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){ // Llama al boto con id "descifrar"  
        let texto = document.getElementById("mensaje").value;//crea variable "texto" para que ingrese el mensaje 
        let desplazamiento = document.getElementById("desplazamiento").value;   //crea variable "desplazamiento" para ingresar numero de esacio por corre"                            
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);// enlzamos id "mensaje2" con las variables para luego darles una formula, y que apraezaca en nuestra html
    },true);
}

function cifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; //Si en el texto no se ha ingrsado ningun caracter, la devolucion sera lo mismo  " "
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Creamos variable para luego procesarla (con las letras en mayuscula)
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26; //Aplicamos formula: 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]); //devolver texto contando desde el primer hasta el ultimo carcter  
}

function descifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; //Si en el texto no se ha ingrsado ningun caracter, la devolucion sera lo mismo  " "
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';// Creamos variable para luego procesarla (con las letras en mayuscula)
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 - 26) % 26;  //Aplicamos formula: 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);//devolver texto contando desde el primer hasta el ultimo carcter  
}

function cifrar2(texto, desplazamiento) { // es para quitar los espacio, numeros, y simbolos, numero negativos atmbien
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(texto[i])!=-1) //no cuente los espacios , si los ahy se les resta -1 al  length
            { 
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i]; //   no cuente los numeros, ni los simbolos, si los ahy se les resta -1 al  length
        }
    }
    return resultado;
}

