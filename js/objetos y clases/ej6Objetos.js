class Libro {
   
    constructor ( titulo, isbn , autor, paginas ){
     this.titulo = titulo;
     this.isbn = isbn;
     this.autor = autor;
     this.paginas = paginas;
    }
    get obtNumeroDePaginas(){
        return this.numeroDePaginas;
    }
mostrarLibros(){
    document.write ("<br>" + " El libro " + this.titulo + " con ISBN numero " 
    + this.isbn + " creado por el autor " + this.autor + " tiene " + this.paginas + " paginas");
}

}

let libro1 = new Libro ("Padre Rico, Padre Pobre", 12345, "Robert Kiyosaki, Sharon Lechter" , 207 );

libro1.mostrarLibros();

let libro2 =  new Libro ("Debajo del Agua", 6789 ,"Martin Lousteau", 331);

libro2.mostrarLibros();





