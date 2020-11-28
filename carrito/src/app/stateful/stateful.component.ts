import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';

@Component({
 selector: 'app-stateful',
 templateUrl: './stateful.component.html',
 styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

 shopModel: Shop = new Shop();
 boughtItems: Array<Product>;

 constructor() {
   this.boughtItems = [];
  }

 ngOnInit(): void {
 }

 clickItem(_curso: Product) {
   this.boughtItems.push(_curso);
 }
 cursoMatriculado(_event: Product){
   this.clickItem(_event);//viene del html y a suvez del stateless
 }

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
 //el método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
 /*
La función reductora recibe cuatro argumentos:

Acumulador (acc)
Valor Actual (cur)
Índice Actual (idx)
Array (src)
El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

Sintaxis
arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])*/

 finalPrice() {
   if (this.boughtItems) {//array con todos los elementos esto se ejecuta solo si this.boughtItems tiene algo que mostar
   return this.boughtItems.reduce(//devuleveme el precio de cada producto mas la suma de cada producto seleccionado
     (prev: number, item: Product) => {
       return prev + item.price;
      }, 0//valor inicial 0
  );
 }
}
}
