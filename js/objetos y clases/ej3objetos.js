/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
 mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/


 class Rectangulo {
    // metodo constructor es el primero que se ejecuta cuando creo un objeto usando esta clase
    constructor (parametroAlto, parametroAncho){
    // crear propiedades del objeto
     this.alto = parametroAlto;
     this.ancho = parametroAncho;

    }
      mostrarDatos  () {
     
        document.write (` <h5>-Rectangulo-</h5> Alto: ${this.alto}
        <br>Ancho: ${this.ancho}
        <br>El perimetro es: ${this.alto * 2 + this.ancho * 2} 
        <br>El area es: ${this.alto * this.ancho} `);
    }
}

let rectangulo1 = new Rectangulo (2 , 4 );

rectangulo1.mostrarDatos();

let rectangulo2 =  new Rectangulo (13 , 16);

rectangulo2.mostrarDatos();