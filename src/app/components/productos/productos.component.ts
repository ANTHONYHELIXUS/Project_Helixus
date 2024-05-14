// Importaciones de módulos y clases necesarias
import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { productservice } from '../../core/services/product.service';
import { products } from '../../core/interfaces/products';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  // Selector del componente
  selector: 'app-productos',
  // Propiedad que indica si el componente es independiente
  standalone: true,
  // Importaciones de módulos adicionales
  imports: [CommonModule, ReactiveFormsModule],
  // Plantilla HTML del componente
  templateUrl: './productos.component.html',
  // Estilos del componente
  styleUrl: './productos.component.css',
})
// Definición de la clase del componente
export default class ProductosComponent implements OnInit {
  // Declaración de propiedades de la clase
  form: FormGroup;
  searchTerm: string = '';
  id: number;
  operacion: string = 'Agregar';
  ListProductos: products[] = [];
  router: any;

  // Inyección del servicio de productos mediante inyección de dependencias
  private _productservice = inject(productservice);

  // Constructor del componente
  getListProductos() {
    this._productservice.getListProductos().subscribe((data) => {
      this.ListProductos = data;
    });
  }
  constructor(private fb: FormBuilder, private aRouter: ActivatedRoute,) {
    // Inicialización del formulario y definición de validadores para cada campo
    this.form = this.fb.group({
      Barcode: ['', Validators.required],
      CategoriaID: [null, Validators.required],
      MarcaID: [null, Validators.required],
      Nombre: ['', Validators.required],
      Medida: ['', Validators.required],
      Stock: [null, Validators.required],
      Pcosto: [null, Validators.required],
      Pventa: [null, Validators.required],
    });
    
    // Llamada a la función para obtener la lista de productos
    this.getListProductos();
    // Obtención del ID desde la ruta
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Verifica si el ID es distinto de 0 para determinar la operación
    if (this.id !== 0) {
      this.operacion = 'Editar';
      console.log('ID seleccionado para editar:', this.id);
      // Llama a la función para obtener el producto
      this.getProduct(this.id);
    } else {
      console.log('ID es null, se ha seleccionado Nuevo');
    }
  }

  // Función para obtener la lista de productos
  

  // Función para obtener un producto por su ID
  getProduct(id:number){
    this._productservice.getProduct(id).subscribe((data:products)=>{
      this.form.patchValue({
        Barcode:data.Barcode ,
        CategoriaID:data.CategoriaID,
        MarcaID:data.MarcaID,
        Nombre:data.Nombre,
        Pcosto:data.Pcosto,
        Pventa:data.Pventa,
        Medida:data.Medida
      })
    })
  }

  // Función para agregar o actualizar un producto
  addProductos() {
    const product: products = {
        Barcode: this.form.value.Barcode,
        Nombre: this.form.value.Nombre,
        CategoriaID: this.form.value.CategoriaID,
        MarcaID: this.form.value.MarcaID,
        Medida: this.form.value.Medida,
        Stock: this.form.value.Stock,
        Pcosto: this.form.value.Pcosto,
        Pventa: this.form.value.Pventa,
    };

    // Verifica si la operación es editar o agregar
    if (this.operacion === 'Editar') {
        // Si estamos editando, asignamos el ID del producto
        product.id = this.id;

        // Llama al servicio para actualizar el producto
        this._productservice.updateProduct(this.id, product).subscribe(() => {
            this.getListProductos();
            this.clearInput();
        });
    } else {
        // Si estamos agregando, llamamos al servicio para guardar el nuevo producto
        this._productservice.saveProduct(product).subscribe(() => {
            this.getListProductos();
            this.clearInput();
        });
    }
}


  // Función para limpiar los campos del formulario
  clearInput() {
    this.form.controls['Barcode'].setValue('');
    this.form.controls['Nombre'].setValue('');
    this.form.controls['CategoriaID'].setValue('');
    this.form.controls['MarcaID'].setValue('');
    this.form.controls['Medida'].setValue('');
    this.form.controls['Stock'].setValue('');
    this.form.controls['Pcosto'].setValue('');
    this.form.controls['Pventa'].setValue('');
  }

  // Función para eliminar un producto
  deleteProduct(id: number) {
    this._productservice.deleteProduct(id).subscribe(() => {
      this.getListProductos();
    })
  }
}
