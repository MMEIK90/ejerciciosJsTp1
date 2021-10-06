let filas = parseInt(prompt("Ingrese numero de filas"));
let columnas = parseInt(prompt("Ingrese numero de columnas"));
let dato = filas * columnas;
let resultado = dato;


document.write("<table border>");

// creo el bucle que va a manejar las filas tr
for(let indiceFila = 0; indiceFila < filas ; indiceFila++){

document.write("<tr>")

//creo el bucle q va a manejar las celdas td

for(let indiceColumna = 0; indiceColumna < columnas ; indiceColumna++){
    document.write("<td> "+resultado--+" </td>")
}

document.write("</tr>")
}

document.write("</table>")
