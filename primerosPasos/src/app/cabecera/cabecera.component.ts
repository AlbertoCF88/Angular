import { Component, OnInit } from '@angular/core';
import { LibroclikedService } from '../librocliked.service';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  condicion:boolean;
  constructor(public librosVistos: LibroclikedService) {

   }
  
  ngOnInit(): void {
  }

}
