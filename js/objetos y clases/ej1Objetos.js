/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/ 


let auto = {
    color:'Rojo',
    marca: 'toyota',
    año: '2018',
    modelo: 'etios',
    encendido: true,
  encender: function () {
      this.encendido= true;
      document.write("<br>El auto esta encendido")
      
  },
  apagar : function () {
      this.encendido= false;
      document.write("<br>El auto esta apagado")
      
  }

}
let claves = Object.keys(auto);
for(let posicion = 0; posicion < claves.length-3; posicion++){
    document.write("<br>"+ claves[posicion]+ ": " + auto[claves[posicion]] );
}
auto.apagar();
auto.encender();



