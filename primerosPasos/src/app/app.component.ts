import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primerosPasos';
  condicion: boolean;
 
  


  so:string ="escribe aquí" ;
  
  color:string;

  biblioteca: Array<Object>;
  arrayMulti: Array<Object>;
  
  constructor(){
    this.biblioteca = ["libro 1","Libro 2", "Libro 3"];
    
     this.arrayMulti = [
       {id:'1', Titulo: 'Bajo hielo', autor: 'Robert'},
       {id:'2', Titulo: 'Dime quien soy', autor: 'Julia'},
       {id:'3', Titulo: 'Sin cordura', autor: 'Javier'},
     ]   
      
  }
  //_libro la barrabaja es opcional y representa que viene llamado desde el html
mostrarAutor(_libro){
  const verAutor = `Escrito por: ${_libro.autor}`;
  alert(verAutor)

}



}
