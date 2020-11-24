import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
 //parte global
  colorLocal: string;
  constructor() { }
   //parte que se inicia antes de ser ejecutado 
  ngOnInit(): void {
    //parte que se ejecuta una vez iniciado
  }
  generarRandom(): string{//varible tipo string que guarda un color aleatorio
    return Math.floor(Math.random()*16777215).toString(16);
  }

  colorHex():String{//muestra el color hexadecimal
    this.colorLocal = '#' + this.generarRandom();
    return this.colorLocal;
  }
}
