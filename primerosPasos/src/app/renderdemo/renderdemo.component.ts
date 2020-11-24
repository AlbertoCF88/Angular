import { Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-renderdemo',
  templateUrl: './renderdemo.component.html',
  styleUrls: ['./renderdemo.component.css']
})
export class RenderdemoComponent implements OnInit {

alumnos: Array<Object>
clearElement: HTMLElement; // variable de un elemento DOM
nuevoElemento: any;
nuevoBoton: any;
  nuevoBoto: any;

constructor(private ren: Renderer2) { 
  this.alumnos = [
    {nombre: "David", id: 1},
    {nombre: "Danile", id: 2},
    {nombre: "Jose", id: 3},
    {nombre: "Tamara", id: 4}
  ]

}

  ngOnInit(): void {
  }

  /*Es muy sencillo manipular directamente elementos del DOM en Angular
  tienes la clase Renderer2
  con ren. accedes al doom y addclass le cambias la clase
  */
 //cuando le damos click entra el activemetodo
 activeMetodo(elemen: HTMLElement){/*coge el parametro del html elementoDOM*/
  
  if(this.clearElement){//si la variable clear tiene registrado un elemto entra el if
    this.ren.removeClass(this.clearElement, 'miClase');//borra la clase
  }
  
  // if(this.nuevoElemento){
  //   this.ren.removeChild(this.nuevoElemento,'span');
  // }
  this.nuevoElemento = this.ren.createElement('span');/*en la varible nuevo elemento creame un span*/
      this.nuevoBoton = this.ren.createElement('button');
      
      this.ren.setProperty(this.nuevoElemento, 'innerHTML', '&#10004');//&#10004 simbolo del tick
      this.ren.setProperty(this.nuevoBoton, 'innerHTML', 'Matricular');
      
  this.ren.listen(this.nuevoBoton, 'click', (event) => 
      {
        alert("Matriculado");
        this.ren.removeChild(elemen, this.nuevoBoton);  
      }); 

  this.ren.listen(this.nuevoElemento, 'click', (event) => 
      {
      
        this.ren.removeChild(elemen, this.nuevoElemento);  
      }); 
 
 
      
      this.ren.appendChild(elemen, this.nuevoElemento);  
      this.ren.appendChild(elemen, this.nuevoBoton);  
      
      
      this.ren.setAttribute(elemen, 'data-select', 'true');//añadir atributo, anadir data-select a true, ir a CSS
      this.ren.addClass (elemen, 'miClase') ;//click entra el elemento y cambia clase
      this.clearElement = elemen;//variable queda registrado que tiene un elemento
      //importante el orden , si pones lo ultimo el if no funciona
    }
    
}
