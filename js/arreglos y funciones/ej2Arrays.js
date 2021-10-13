/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let i = 0
let ciudades = []; 

        do {
            let ciudad = [prompt("ingrese una ciudad")];
            document.write(ciudad + ",");
            ciudades.push(ciudad);  
         } while (confirm("Desea seguir?") );
         document.write ("<br>" + ciudades.length);
         document.write ("<br>" + ciudades[0]);
         document.write ("<br>" + ciudades[2]);
         document.write ("<br>" + ciudades[ciudades.length-1]);
         ciudades.push('Paris');
         document.write ("<br>" + ciudades[1]);
         ciudades.splice(1,0,'Barcelona');
         document.write ("<br>" + ciudades[ciudades.length-1]);
         document.write ("<br>" + ciudades[1]);
         

   
         

