//ejercicios del 1 al 11
//1
alert("un mensaje");


//2
document.write( "Hello world" );


//3
let numero1 = 3;
let numero2 = 5;
document.write("<br> El resultado de la suma es " + (numero1 + numero2));


//4
usuario = prompt("Ingrese Nombre de Usuario");
document.write("<br> Hola " + usuario);


//5
numero5 = parseInt( prompt ("<BR> Ingrese un numero"));
numero6 = parseInt( prompt ("<BR> Ingrese un segundo numero"));
document.write ("<br> la suma es " + (numero5 + numero6));


//6
let numero3 = parseInt(prompt("ingrese un numero"));
let numero4 = parseInt(prompt("ingrese otro numero"));
if (numero3 > numero4){
    document.write("El numero mayor es " + numero3);
} 
else if (numero3 < numero4) {
    document.write("El numero mayor es " + numero4);
} 
else   
    document.write("Los numeros son iguales");


//7
let numero7 = parseInt(prompt("ingrese un numero"));
let numero8 = parseInt(prompt("ingrese un segundo numero"));
let numero9 = parseInt(prompt("ingrese un tercer numero"));
if (numero7 > numero8 && numero7 > numero9){
    document.write("El numero mayor es " + numero7);
    
} else if (numero7 > numero8 && numero7 < numero9) {
    document.write("El numero mayor es " + numero9);
} else if (numero7 == numero8 && numero7 == numero9) {
    document.write("Los numeros son iguales");
} 
else   
    document.write("El numero mayor es " + numero8);    


//8
let numero10 = parseInt(prompt("Ingrese un numero"));
if (numero10 % 2 == 0) {
    document.write("El numero ingresado es divisible en 2")
} else {
    document.write ("El numero ingresado no es divisible en 2")
} 


//9
let frase = prompt("Escribe una frase");
let nfrase = frase.length;
for (let i = 0 ; i < frase.length ; i++){
    if(frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i" || frase.substr(i,1) === "o" || frase.substr(i,1) === "u" || frase.substr(i,1) === "A" || frase.substr(i,1) === "E" || frase.substr(i,1) === "I" || frase.substr(i,1) === "O" || frase.substr(i,1) === "U")
document.write(" " + frase.substr(i, (1)) );
 }


//10
let numero11 = parseInt(prompt("Ingrese un numero"));
if (numero11 % 2 === 0 || numero11 % 3 === 0 || numero11 % 5 === 0 || numero11 % 7 === 0) {
    document.write("El numero ingresado es divisible en 2 , 3 , 5 o 7")
} else  {
    document.write ("El numero ingresado NO es divisible en 2 , 3 , 5 ni 7")}


//11
let numero12 = parseInt(prompt("Ingrese un numero"));
if (numero12 % 2 === 0 && numero12 % 3 !== 0 && numero12 % 5 !== 0 && numero12 % 7 !== 0) {
    document.write("El numero ingresado es divisible en 2 ")
} else if(numero12 % 2 === 0 && numero12 % 3 === 0 && numero12 % 5 !== 0 && numero12 % 7 !== 0) {
    document.write ("El numero ingresado es divisible en 2 y en 3")}
    else if(numero12 % 2 === 0 && numero12 % 3 === 0 && numero12 % 5 === 0 && numero12 % 7 !== 0) {
        document.write ("El numero ingresado es divisible en 2, 3 y en 5")}
        else if(numero12 % 2 === 0 && numero12 % 3 !== 0 && numero12 % 5 === 0 && numero12 % 7 !== 0) {
            document.write ("El numero ingresado es divisible en 2 y en 5")}
            else if(numero12 % 2 === 0 && numero12 % 3 !== 0 && numero12 % 5 !== 0 && numero12 % 7 === 0) {
                document.write ("El numero ingresado es divisible en 2 y en 7")}
                else if(numero12 % 2 === 0 && numero12 % 3 !== 0 && numero12 % 5 === 0 && numero12 % 7 === 0) {
                    document.write ("El numero ingresado es divisible en 2, 5  y en 7")}
                    else if(numero12 % 2 === 0 && numero12 % 3 === 0 && numero12 % 5 !== 0 && numero12 % 7 === 0) {
                        document.write ("El numero ingresado es divisible en 2, 3 y en 7")}
                        else if(numero12 % 2 === 0 && numero12 % 3 === 0 && numero12 % 5 === 0 && numero12 % 7 === 0) {
                            document.write ("El numero ingresado es divisible en 2, 3 , 5 y en 7")}
                            else if(numero12 % 2 !== 0 && numero12 % 3 === 0 && numero12 % 5 !== 0 && numero12 % 7 !== 0) {
                                document.write ("El numero ingresado es divisible  en 3")}
                                else if(numero12 % 2 !== 0 && numero12 % 3 === 0 && numero12 % 5 === 0 && numero12 % 7 !== 0) {
                                    document.write ("El numero ingresado es divisible en 3 y en 5")}
                                    else if(numero12 % 2 !== 0 && numero12 % 3 === 0 && numero12 % 5 === 0 && numero12 % 7 === 0) {
                                       document.write ("El numero ingresado es divisible en 3 , 5 y en 7")}
                                       else if(numero12 % 2 !== 0 && numero12 % 3 !== 0 && numero12 % 5 === 0 && numero12 % 7 !== 0) {
                                          document.write ("El numero ingresado es divisible en 5")}
                                          else if(numero12 % 2 !== 0 && numero12 % 3 !== 0 && numero12 % 5 === 0 && numero12 % 7 === 0) {
                                             document.write ("El numero ingresado es divisible en 5 y en 7")}
                                           else if(numero12 % 2 !== 0 && numero12 % 3 !== 0 && numero12 % 5 !== 0 && numero12 % 7 === 0) {
                                               document.write ("El numero ingresado es divisible en 7")}
                                               else {document.write ("El numero ingresado NO es divisible en 2 , 3 , 5 ni 7") }
                
 
