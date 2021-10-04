// 5
do{
    let numero = prompt("Introduce un numero de DNI (sin puntos"); 
        if (Number(numero) == numero) { 
              numero = Number (numero);
          } 
    if(numero > 0 && numero < 99999999) {
    
        resultado = numero % 23;
        
        if (resultado === 0){
            document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: T ")
        } else if (resultado === 1){
            document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: R ")
    } else if (resultado === 2){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: W ")
    } else if (resultado === 3){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: A ")
    } else if (resultado === 4){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: G ")
    } else if (resultado === 5){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: M ")
    } else if (resultado === 6){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: Y ")
    } else if (resultado === 7){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: F ")
    } else if (resultado === 8){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: P ")
    } else if (resultado === 9){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: D ")
    } else if (resultado === 10){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: X ")
    } else if (resultado === 11){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: B ")
    } else if (resultado === 12){
        document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: N ")
    } else if (resultado === 13){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: J ")
    } else if (resultado === 14){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: Z ")
    } else if (resultado === 15){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: S ")
    } else if (resultado === 16){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: Q ")
    } else if (resultado === 17){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: V ")
    } else if (resultado === 18){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: H ")
    } else if (resultado === 19){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: L ")
    } else if (resultado === 20){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: C ")
    } else if (resultado === 21){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: K ")
    } else if (resultado === 22){
    document.write("<br>"+ numero + " el valor en letra del numero de DNI ingresado es: E ")
    } 
    }
     else  {
        if (numero != Number(numero)    ) {
        alert(numero + " No es un numero");
    }
    }
    } while (confirm("desea continuar?"));