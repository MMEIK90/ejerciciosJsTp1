
class Persona {
   
    constructor (nombre, edad, DNI, sexo , peso,  altura, anioDeNacimiento){
   
     this.nombre = nombre;
     this.edad = edad;
     this.DNI = DNI;
     this.sexo = sexo;
     this.peso = peso;
     this.altura = altura;
     this.anioDeNacimiento = anioDeNacimiento ;

    }
      mostrarGeneracion  () {
        if(this.anioDeNacimiento > 1930 && this.anioDeNacimiento <=1948){
            document.write( "Generacion: Silent");
        } else if (this.anioDeNacimiento > 1948 && this.anioDeNacimiento <=1968){
            document.write( "Generacion: Baby Boom");
        } else if (this.anioDeNacimiento > 1968 && this.anioDeNacimiento <=1980){
            document.write( "Generacion: X");
        } else if (this.anioDeNacimiento > 1980 && this.anioDeNacimiento <=1994){
            document.write( "Generacion: Y");
        } else if (this.anioDeNacimiento > 1994 && this.anioDeNacimiento <=2010){
            document.write( "Generacion: Z");
        } else {
            document.write( "Otra Generacion");
        }
}
    mayorDeEdad(){
        if(this.edad >= 18){
            document.write("Es Mayor de edad");
        } else {
            document.write("Es menor de edad");
        }
    }
    imprimeDatos(){
        return (` <h5>Persona: ${this.nombre}</h5> 
        <br>Nombre: ${this.nombre}
        <br>Edad: ${this.edad}
        <br>DNI: ${this.DNI}
        <br>Sexo: ${this.sexo}
        <br>Peso: ${this.peso}
        <br>Altura: ${this.altura} 
        <br>Año de Nacimiento: ${this.anioDeNacimiento}`); 
    }
    generaDNI(){
        return parseInt(Math.random()*99999999);
    }
        
    
}
let mariano =new Persona("Mariano", 31 ,34186608 , "M", 86, 1.78, 1990);

document.write("<br>"+mariano.mayorDeEdad());
document.write("<br>"+mariano.mostrarGeneracion());
document.write(mariano.imprimeDatos());
document.write("<br>"+ "DNI nuevo: "+mariano.generaDNI());