import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclikedService {




  libros: Array<Object>;


  constructor() {
    this.libros = [];//primero vacio que se llene segun se vaya clicando
   }
   libroVisto(libroVisto: Object){
     this.libros.push(libroVisto)//mete dentro de la array

   }
   verListado(){
     if (this.libros.length>0){ //cuando libros sea mayor a 0 entra, devulve libros
       return this.libros;
     }else{
       return false;//al principio no retorna nada (no tiene nada que decir)
     }
   }
}
