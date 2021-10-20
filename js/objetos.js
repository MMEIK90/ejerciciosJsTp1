// let email = 'pablodominguez@gmail.com';
// let password = 'A1234$567';
// let domicilio = 'datos del domicilio';
// let localidad = 't4000';
// let telefono = 3814534634;
// let dni = 35666777;

// crear un objeto con notacion literal
let usuarioPablo = {
    // propiedades -> clave: valor
    email:'pablodominguez@gmail.com',
    password: 'A1234$567',
    domicilio: 'datos del domicilio',
    localidad: 't4000',
    telefono: 3814534634,
    dni: 35666777,
    estado: true,
    // metodos
    login : function(){

    },
    logout: function(){
        
    }
}

// mostrar un objeto
console.log(usuarioPablo);

// mostrar cada propiedad del objeto - forma 1
document.write('Email: '+ usuarioPablo.email);
document.write('<br>localidad: '+ usuarioPablo.localidad);
document.write("<br>DNI: " + usuarioPablo.dni);

// mostrar cada propiedad del objeto - forma 2
document.write('<br>Telefono: '+ usuarioPablo['telefono'] );

// cargar una propiedad nueva dentro de un objeto
usuarioPablo.nivel = 1;
document.write('<br>Nivel de usuario: '+ usuarioPablo.nivel);

//modifico una propiedad del objeto
usuarioPablo.dni = 34186608;

// queremos mostrar todas las claves del objeto

let claves = Object.keys(usuarioPablo);
for(let posicion = 0; posicion < claves.length; posicion++){
    document.write("<br>"+ claves[posicion]+ ": " + usuarioPablo[claves[posicion]] );

}

//usar los metodos del objeto

usuarioPablo.login();
usuarioPablo.logout();
