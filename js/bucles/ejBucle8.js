//8
let i = parseInt(prompt("Ingrese un numero menor o igual a 50"))
if(i <= 50) { 
    for ( t = 1; t <= i; t++){
        for ( r = 1; r <= t; r++){
            document.write(r);            
        }                    
        document.write("<br>") 
    }
} else {
    document.write( i + " no es menor o igual a 50, vuelva a intentarlo")
}