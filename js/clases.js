// nombre, apellido, fecha de nacimiento, dni, email , telefono
class Persona {
    // metodo constructor es el primero que se ejecuta cuando creo un objeto usando esta clase
    constructor (parametroNombre, parametroApellido,parametroFechadenacimiento, parametroDni, parametroEmail,parametroTelefono){
    // crear propiedades del objeto
     this.nombre = parametroNombre;
     this.apellido = parametroApellido;
     this.fechadenacimiento = parametroFechadenacimiento;
     this.dni = parametroDni;
     this.email = parametroEmail;
     this.telefono = parametroTelefono;

    }
    // agregar los metodos
        mostrarDatos  () {
        /*document.write("<h5>Persona: "+ this.nombre 
        + "</h5><br>Nombre: " + this.nombre +"<br>Apellido: " + this.apellido  );*/
        document.write (`<h5>Persona: ${this.nombre}</h5>
        Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Fecha de nacimiento: ${this.fechadenacimiento}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Telefono: ${this.telefono} `);
    }
}

// crear o instanciar una clase
let Mariano = new Persona ("Mariano", "Meik","10/02/1990" , 34186608, "meik_90@hotmail.com", 3815642520 );

// usar los metodos 
Mariano.mostrarDatos();

let Naty =  new Persona ("Natalia", "Acevedo", "", 333333333,"natyacvedo@gmail.com", 1111111);

Naty.mostrarDatos();