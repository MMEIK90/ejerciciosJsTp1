// 5
do{
    let numero = prompt("Introduce un numero de DNI (sin puntos"); 
        if (Number(numero) == numero) { 
              numero = Number (numero);
          
    if(numero > 0 && numero < 99999999) {
    
        resultado = numero % 23;
        
    switch (resultado){
        case 0: 
           document.write( " el valor en letra del numero de DNI ingresado es: T ");
           break;
        case 1: 
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: R ");
           break;
        case 2:        
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: W ");
           break;
        case 3:        
           document.write("<br>" +" el valor en letra del numero de DNI ingresado es: A ");
           break;
        case 4:
           document.write("<br>" +" el valor en letra del numero de DNI ingresado es: G ");
           break;
        case 5:        
           document.write("<br>" +" el valor en letra del numero de DNI ingresado es: M ");
           break;
        case 6:        
           document.write("<br>" +" el valor en letra del numero de DNI ingresado es: Y ");
           break;
        case 7:        
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: F ");
           break;
        case 8:       
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: P ");
           break;
        case 9:        
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: D ");
           break;
        case 10:
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: X ");
           break;
        case 11:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: B ");
           break;
        case 12:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: N ");
           break;
        case 13:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: J ");
           break;
        case 14:
           document.write("<br>" +" el valor en letra del numero de DNI ingresado es: Z ");
           break;
        case 15:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: S ");
           break;
        case 16:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: Q ");
           break;
        case 17:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: V ");
           break;
        case 18:
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: H ");
           break;
        case 19:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: L ");
           break;
        case 20:
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: C ");
           break;
        case 21:
           document.write("<br>" + " el valor en letra del numero de DNI ingresado es: K ");
           break;
        case 22:
           document.write( "<br>" +" el valor en letra del numero de DNI ingresado es: E ");
           break;
        default :
            if (numero != Number(numero)    ) {
            alert(numero + " No es un numero");
        }
    } 
    }
    } 
    }while (confirm("desea continuar?"));