import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';


@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {

  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter();
  @Input()
  private _product!: Product;
  public get product(): Product {
    return this._product;
  }
  public set product(value: Product) {
    this._product = value;
  }
  private _matricula!: string;
  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }
  private disable!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';

  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product);
  }
  isDisabled() {
    return !!this.disable;
  }

}
