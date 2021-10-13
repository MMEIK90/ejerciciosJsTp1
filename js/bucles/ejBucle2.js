//2

let nota = prompt("Ingrese la nota (del 0 al 10): ");
 switch (nota){
    case  "0","1","2":
       alert ( "Muy deficiente, su nota es: " + nota);
       break;
   case "3","4":
       alert ("Insuficiente, su nota es: " + nota );
       break;
   case "5","6":
       alert ("Suficiente, su nota es: " + nota );
       break;
   case "7":
       alert ("Bien, su nota es: " + nota );
       break;
   case "8","9":
       alert ("Notable , su nota es: " + nota );
       break;
   case "10":
       alert ("Sobresaliente, su nota es: " + nota );
       break;
   default: 
       alert ("Ingrese un numero valido");
 } 