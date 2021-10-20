//funcion para mostrar los elementos del arreglo
function mostrarArreglo(titulo) {
    document.write("<h5>"+titulo+"</h5>");
  
    for (let posicion = 0; posicion < series.length; posicion++) {
      document.write("<br>" + series[posicion]);
    }
  }
  // crear o declaramos un arreglo
  let series = [
    "friends",
    "games of thrones",
    "Black Mirror",
    "Castlevania",
    10,
    true,
  ];
  // crear una arreglo vacio
  let temporadas = [];
  // mostrar un elemento de una posicion particular del arreglo
  document.write(series[2]);
  console.log(series.length);
  // mostrar todos los elementos de un arreglo con un bucle
  mostrarArreglo('Mostrar todos los elementos de un arreglo con un bucle');
  
  // agregar un elemento al final del arreglo
  series.push("jojo bizarre adventure");
  mostrarArreglo('Agregar un elemento al final del arreglo');
  
  // agregar un elemento en una posicion particular
  series.splice(1, 0, "Death note ♥️"); //splice(posicion del elemento, cantidad de elementos a borrar, elemento que quiero agregar)
  mostrarArreglo('Agregar un elemento en la posicion 1 del arreglo');
  
  // borrar un elemento de una posicion particular
  // series.splice(5); //desde la posicion 5 en adelante todos los elementos
  series.splice(6, 1); //desde la posicion 6 en adelante la cantidad de elementos que indicamos en el segundo parametro
  mostrarArreglo('Eliminar un elemento de una posicion particular del arreglo');
  
  // modificar un valor de una posicion particular
  series[5] = "Evangelion";
  mostrarArreglo('Modificar un elemento');