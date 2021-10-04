//4
let suma = 0;
  do {
    let numero = prompt("Introduce un numero"); 
    if (Number(numero) == numero) { 
          numero = Number (numero);
          suma = suma + numero;
      } 
      else {
        if (numero != Number(numero)    ) {
        alert(numero + " No es un numero");
    }
}        
  } while (confirm("desea continuar?"));
  document.write(suma);