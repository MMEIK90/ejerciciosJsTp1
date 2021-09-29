//9
let frase = prompt("Escribe una frase");
let nfrase = frase.length;
for (let i = 0 ; i < frase.length ; i++){
    if(frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u" || frase.substr(i,1) === "A" || frase.substr(i,1) === "E" || frase.substr(i,1) === "I" || frase.substr(i,1) === "O" || frase.substr(i,1) === "U")
document.write(" " + frase.substr(i, (1)) );
 }