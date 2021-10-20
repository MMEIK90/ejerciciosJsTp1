/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/ 


let auto = {
    color:'Rojo',
    marca: 'toyota',
    año: '2018',
    modelo: 'etios',
    encendido: true,
  
}
let claves = Object.keys(auto);
for(let posicion = 0; posicion < claves.length; posicion++){
    document.write("<br>"+ claves[posicion]+ ": " + auto[claves[posicion]] );
}



