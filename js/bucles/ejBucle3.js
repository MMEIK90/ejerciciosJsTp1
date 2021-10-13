//3
let cadena = "";
    do {
       let Mensaje = prompt("Introduce un Mensaje");
      if (cadena == "") {
      cadena = cadena + Mensaje;
   } else {
       
       cadena = cadena + "-" + Mensaje;
   }
} while (confirm("Desea seguir?"));

document.write(cadena);