import { Component, OnInit } from '@angular/core';
import { LibroclikedService } from '../librocliked.service';
import {HttpClient, HttpResponse} from '@angular/common/http'; //para la lista jason



@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

 verAutor: string;
 cargando: boolean;
  // biblioteca: Array<Object>;
  // arrayMulti: Array<Object>;
  errorHttp: boolean;
  libros: any; //ya no es un array ahora es una direccion Json
  
  constructor(private http: HttpClient ,  public Librocliked: LibroclikedService ){



    //esta lista es llamda desde Json
    // this.biblioteca = ["libro 1","Libro 2", "Libro 3"];
    
    /*  this.arrayMulti = [ //esta lista es llamda desde Json
       {id:'1', titulo: 'Bajo hielo', autor: 'Robert'},
       {id:'2', titulo: 'Dime quien soy', autor: 'Julia'},
       {id:'3', titulo: 'Sin cordura', autor: 'Javier'},
     ]    */
      
  }
  cargarLista(){//metedo get espera una http (jason) y con subscribe espera a tener el dato
    this.http.get('assets/lista-libros.json').subscribe(
      (respuesta: Response) => {this.libros= respuesta;this.cargando = false;},
      (respuesta: Response)=> {this.errorHttp = true;}
      );
  }

  //_libro la barrabaja es opcional y representa que viene llamado desde el html
// mostrarAutor(_libro){
//   const verAutor = `Escrito por: ${_libro.autor}`;
//   alert(verAutor)

// }

  ngOnInit(): void {
    this.cargando = true;
    this.cargarLista();//cuando cargo el componente inicia la cargaLista
  }
  //agragarLibro html
  agregarLibro(_libroVisto){
    this.Librocliked.libroVisto(_libroVisto)//librovisto de librocliked service
  }

}
