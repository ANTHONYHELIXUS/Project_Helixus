import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { productos } from '../../interfaces/products';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor],
  
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  ListProducts: productos[]=[];

  constructor(private _productService: ProductService){}
  ngOnInit(): void{
    this.getListProductos
  }

  getListProductos(){
    this._productService.getListProductos().subscribe((data)=>{

    }
    )
  }

}
