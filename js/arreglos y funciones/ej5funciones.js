/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
 sólo por minúsculas o por una mezcla de ambas.*/

 function mayusculaOminuscula(texto){
    if(texto == texto .toUpperCase()){
        return "La cadena de texto ingresada esta escrita toda con mayusculas";
    }else if(texto == texto .toLowerCase()){
        return "La cadena de texto ingresada esta escrita toda con minusculas";
    }else{
        return "La cadena de texto ingresasa esta escrita con mayusculas y con minusculas";
    }
}
let texto =prompt("Ingrese el texto que desee");

document.write(mayusculaOminuscula(texto));