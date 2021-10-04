//9

for (x = 1; x <= 50 ; x++ ){

    document.write(x);
    if(x % 4 == 0){
        document.write (" (Múltiplo de 4)");
    }  if(x % 9 == 0){
        document.write (" (Múltiplo de 9)");
    }
    document.write("<br>")
    if (x % 5 == 0) {
        document.write ("<hr>")
    }
}