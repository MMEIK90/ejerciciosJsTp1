// 5
do{
    let numero = prompt("Introduce un numero de DNI (sin puntos"); 
        if (Number(numero) == numero) { 
              numero = Number (numero);
          
    if(numero > 0 && numero < 99999999) {
    
        resultado = numero % 23;
        
    switch (resultado){
        case 0: 
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: T ");
           break;
        case 1: 
           document.write(  "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: R ");
           break;
        case 2:        
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: W ");
           break;
        case 3:        
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: A ");
           break;
        case 4:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  G ");
           break;
        case 5:        
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: M ");
           break;
        case 6:        
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: Y ");
           break;
        case 7:        
           document.write(  "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: F ");
           break;
        case 8:       
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: P ");
           break;
        case 9:        
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  D ");
           break;
        case 10:
           document.write(  "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  X ");
           break;
        case 11:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: B ");
           break;
        case 12:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: N ");
           break;
        case 13:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: J ");
           break;
        case 14:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  Z ");
           break;
        case 15:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  S ");
           break;
        case 16:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: Q ");
           break;
        case 17:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  V ");
           break;
        case 18:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  H ");
           break;
        case 19:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  L ");
           break;
        case 20:
           document.write(  "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es: C ");
           break;
        case 21:
           document.write( "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  K ");
           break;
        case 22:
           document.write(  "<br>"+"el  dni ingresado es: "+ numero + ", y su valor en letra  es:  E ");
           break;
        default :
            if (numero != Number(numero)    ) {
            alert(numero + " No es un numero");
        }
    } 
    }
    } 
    }while (confirm("desea continuar?"));