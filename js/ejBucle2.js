//2

let nota = prompt("Ingrese la nota (del 0 al 10): ");
if ( 0 <= nota && nota <= 2 ){
    alert ( "Muy deficiente, su nota es: " + nota)
} else if ( 2 < nota && nota <= 4 ){
    alert ("Insuficiente, su nota es: " + nota ) 
 } else if ( 4 < nota && nota <= 6 ){
    alert ("Suficiente, su nota es: " + nota )
 } else if ( 6 < nota && nota <= 7 ){
    alert ("Bien, su nota es: " + nota )
 } else if ( 7 < nota && nota <= 9 ){
    alert ("Notable , su nota es: " + nota )
 } else if ( 9 < nota && nota <= 10 ){
    alert ("Sobresaliente, su nota es: " + nota )
 } else {
     alert ("Ingrese un numero valido")      
 }