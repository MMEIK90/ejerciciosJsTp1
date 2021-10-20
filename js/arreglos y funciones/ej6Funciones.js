/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/

const perimetro =  (base ,altura )=>{
  
    return base * 2 + altura * 2;
}
let base = parseInt(prompt("Ingrese la base del rectangulo"));
let altura = parseInt(prompt("Ingrese la altura del rectangulo"));
document.write("El perimetro del rectangulo es; "+ perimetro (base ,altura ));

