import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model'; 
//se vincula con shop.model.ts y product.ts

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

shopModel: Shop = new Shop();// llama a la importacion de shop en una variable
boughtItems: Array<Product>; // array de los productos que viene de la importacion de products


  constructor() { 
    this.boughtItems=[];
   
  }

  ngOnInit(): void { }

    clickItem(_curso){//click en compra el html
    this.boughtItems.push(_curso);//meteme el contenido del curso en otro sitio definido en el html
    }

}
