import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  showModal: boolean;//html boton
  isDisabled: boolean;//colocar en el html para descartivar boton

  constructor() { 
    this.isDisabled = true;//por defecto boton apagado
  }

  ngOnInit(): void {
  }

}
