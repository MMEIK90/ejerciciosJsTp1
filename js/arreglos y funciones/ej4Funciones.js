
function parOimpar(numero){
    if (numero % 2 === 0){
        return "El numero es Par";
    } else {
        return "El numero es Impar";
      
    }
}
let numero = parseInt(prompt("Ingrese un numero"));
document.write("<br>" + parOimpar(numero));

