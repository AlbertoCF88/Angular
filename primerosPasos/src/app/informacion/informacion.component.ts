import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params}from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  arrayMulti: Array<Object>;
  libroClick: any;
  libroId: number;

  constructor(private rutausuario: ActivatedRoute) { 
    
     this.arrayMulti = [
       {id:'1', titulo: 'Bajo hielo', autor: 'Robert'},
       {id:'2', titulo: 'Dime quien soy', autor: 'Julia'},
       {id:'3', titulo: 'Sin cordura', autor: 'Javier'},
     ]   
      
    }
  ngOnInit(): void {
    this.rutausuario.params.subscribe(params => {
      this.libroId = params ['libroId']
      this.libroClick = this.libroBuscador();
    })
  }
  flitroId(libro){
    return libro.id == this;
  }

  libroBuscador(){
    return this.arrayMulti.filter (this.flitroId, this.libroId)[0];
  }
}
