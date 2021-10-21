/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y
 volver a mostrar la descripción del estado de la cuenta.*/
 

 class Persona {
   
     constructor (parametroTitular,parametroSaldo){
     this.nombre = parametroTitular;
     this.saldo = parametroSaldo;
     this.saldo=0;    
    }
        acreditar  (dinero) {
            this.saldo  = this.saldo + dinero;
            document.write("<br>" + this.nombre +" ,Usted ha depositado: " + dinero + " pesos")
            
    }
        debitar  (dinero) {
        this.saldo = this.saldo -  dinero;
        document.write("<br>" + this.nombre +" ,Usted ha retirado: " + dinero + " pesos ")
    }
        resumen(){
        document.write("<br> " + this.nombre +" ,el saldo de su cuenta es: " + this.saldo + " pesos");
    }
}
let Alex = new Persona ("Alex",0 );

Alex.debitar(100);
Alex.acreditar(1000);
Alex.resumen();
Alex.acreditar(1567);



