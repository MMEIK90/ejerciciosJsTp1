// nombre, apellido, dni, fechaNacimiento, email, telefono
// una clase es una plantilla
class Persona{
    // el metodo constructor es el primero que se ejecuta cuando creo un objeto
    constructor(parametroNombre, parametroApellido, parametroDNI, parametroFechaNacimiento, parametroEmail, parametroTel){
        // crear las propiedades del objeto
        this.nombre = parametroNombre;
        this.apellido = parametroApellido;
        this.dni = parametroDNI;
        this.fechaNacimiento = parametroFechaNacimiento;
        this.email = parametroEmail;
        this.telefono = parametroTel;
    }

    // agregar los metodos
    mostrarDatos(){
        // document.write('<h5>Persona: ' + this.nombre + '</h5><br>Nombre: '+this.nombre+'<br>Apellido: '+ this.apellido)
        document.write(`<h5>Persona: ${this.nombre}</h5>
        <br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Fecha de Nacimiento: ${this.fechaNacimiento}
        <br>Telefono: ${this.telefono}`);
    }

    // agregar las propiedades conmutadas get y set
    // get mostrar una propiedad del objeto
    get mostrarNombre(){
        return this.nombre;
    }

    get mostrarApellido(){
        return this.apellido;
    }
    // set modificar una propiedad del objeto
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set modificarApellido(nuevoApellido){
        this.apellido = nuevoApellido;
    }

}
// regular o no, curso, comision, legajo, notas, cuotas al dia
class Alumno extends Persona {
    constructor(parametroNombre, parametroApellido, parametroDNI, parametroFechaNacimiento, parametroEmail, parametroTel, parametroCurso, parametroComision, parametroCuotasAlDia){
        // ejecutar el constructor de la clase persona
        super(parametroNombre, parametroApellido, parametroDNI, parametroFechaNacimiento, parametroEmail, parametroTel);
        this.curso = parametroCurso;
        this.comision = parametroComision;
        this.cuotaAlDia = parametroCuotasAlDia;
    }
    get mostrarComision (){
        return this.comision;
    }
    mostrarDatos(){
        document.write(`<h5>Persona: ${this.nombre}</h5>
        <br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Email: ${this.email}
        <br>Curso: ${this.curso}
        <br>Comision: ${this.comision}`);

    }
}

// crear o instanciar un objeto usando la clase
let victor = new Persona('Victor', 'Ignacio', 39888777, '21/04/91', 'vignacio@gmail.com', 3814252525);

// usar los metodos del objeto
victor.mostrarDatos();

let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese un apellido');
let dni = prompt('Ingrese un dni');
let fechaNacimiento = prompt('Ingrese una fecha de Nacimiento');
let email = prompt('Ingrese un email');
let tel = prompt('Ingrese un Telefono');

// let naty = new Persona(nombre, apellido, dni, fechaNacimiento, email, tel)

// naty.mostrarDatos();

// modificar una propiedad de un objeto
// naty.modificarNombre = 'Rocio';

// naty.mostrarDatos();

// console.log(naty.mostrarNombre);

document.write('<br>'+victor.mostrarNombre +' '+ victor.mostrarApellido)

let mariano = new Alumno ("Mariano","Meik",34186608,"10-02-1990","Meik@gmail.com",3815642520,"fullstack","19i",true);
    mariano.mostrarDatos();