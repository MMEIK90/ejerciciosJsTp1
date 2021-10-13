//7
let i = parseInt(prompt("Ingrese un numero menor o igual a 50"));
if(i <= 50) { 
    for ( t = i; t >= 1; t--){
        for ( r = 0; r < t; r++){
            document.write(t);  
        }
     document.write("<br>") 
    }


} else {
    document.write( i + " no es menor o igual a 50, vuelva a intentarlo")
}