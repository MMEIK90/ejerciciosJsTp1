/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
 nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/


class Producto {
   
    constructor (parametroCodigo, parametroNombre, parametroPrecio){
   
     this.codigo = parametroCodigo;
     this.nombre = parametroNombre;
     this.precio = parametroPrecio;

    }
      mostrarDatos  () {
     
        document.write (` <h5>-Producto-</h5> Codigo: ${this.codigo}
        <br>nombre: ${this.nombre} 
        <br>Precio: ${this.precio} `);
    }
    get imprimeDatos(){
        return ("<br>El producto Codigo: "+this.codigo+", Nombre: "+this.nombre+", Precio: $"+ this.precio); 
    }
}
let Productos = [];
let coca = new Producto ("C001" , "Coca cola 1/2L", "$" +150);

let agua =  new Producto ("C002" , "Agua villavicencio 1L","$" +100);

let gatorade =  new Producto ("C003" , "Gatorade manzana 500ml","$" +80);

Productos.push(coca);
Productos.push(agua);
Productos.push(gatorade);

for(let i = 0; i < Productos.length ; i++){
    document.write( "<br>" + Productos[i].imprimeDatos);
}