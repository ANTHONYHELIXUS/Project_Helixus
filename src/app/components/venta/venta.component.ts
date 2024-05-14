import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { productservice } from '../../core/services/product.service';
import { products } from '../../core/interfaces/products';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SunatService } from '../../core/services/sunat.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    
  ],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css',
})
export class VentaComponent implements OnInit {
  ListProductos: products[] = [];
  ListVenta: products[] = [];
  rucInfo: any = true;
  numeroRucdni: string = '';
  rucdni: any = true;
  selectedQuantity: number = 0;
  abrirDes: boolean = false;
  cantidadSeleccionada!: number;
  cantidad: number = 0;
  Subtotal: number = 0;
  numerodni: string = '';
  searchTerm: string = '';  
  

  constructor(private sSunat: SunatService,
    private http: HttpClient) {
     }

  

  private _productservice = inject(productservice);

  router: any;
  product: any;
  filteredproducts: products[] = [];
  ngOnInit(): void {
    this.getListProductos();

  }
  @HostListener('document:click', ['$event'])
  addlisten(e: MouseEvent) {
    let opcion = document.querySelector('#inputlist');

    var event = e.target as Node;

    if (!opcion || !opcion.contains(event)) {
      this.abrirDes = false;
      // this.notidicacion= true
    }
  }

  getListProductos() {
    this._productservice.getListProductos().subscribe((data) => {
      this.ListProductos = data;
      console.log(data);
    });
  }

  filtrarProductos() {
    this.filteredproducts = this.ListProductos.filter((producto) => {
      // Aquí puedes definir la lógica de filtrado según tu necesidad

      return this.product.Nombre.toLowerCase().includes(
        this.searchTerm.toLowerCase()
      );
    });

    this.abrirDes = true; // Mostrar el desplegable al filtrar
  }

  onSearch() {
    if (this.searchTerm.trim() !== '') {
      this._productservice.searchProduct(this.searchTerm).subscribe((data) => {
        this.ListProductos = data;
      });
    }
  }
  selectProduct(product: products, event: any) {
    // Aquí puedes realizar alguna acción cuando el usuario selecciona un producto
    // this.ListVenta.push(product);
    console.log('se seleccionao ', product);
    console.log(event);
    this.addProductToVenta(product);
    this.updateSubtotal(product);
    //pon en la vista
  }
  abrirDesplegable() {
    this.abrirDes = true;
    console.log('abrio');
  }
  addProductToVenta(product: products) {
    this.ListVenta.push(product);

  }

  // Método para eliminar un producto seleccionado
  removeSelectedProduct(index: number) {
    this.ListVenta.splice(index, 1);

  }

  updateSubtotal(product: any) {
    // Verificar que la cantidad y el precio de venta sean números válidos

    // Calcular el subtotal multiplicando la cantidad por el precio de venta
    product.Subtotal = this.selectedQuantity * product.Pventa;


  }


  // buscarRUC() {
  // const token = '960868e5f3ebfe26dbf7f3131d624e29538c54b371004ea90c5c67ebef6bdc6e'; // Coloca aquí tu token de autorización

  //const headers = new HttpHeaders({
  //  'Authorization': `Bearer ${token}`
  //});

  // url = `https://apisperu.net/api/ruc/${this.numeroRuc}`;

  // this.http.get<any>(url, { headers }).subscribe(
  // (Response) => {
  // this.rucInfo = Response.data;
  //console.log(Response.data); // Muestra la respuesta en la consola
  // Aquí puedes asignar la respuesta a una variable de tu componente si lo necesitas
  //  },
  //  (error) => {
  //    console.error(error); // Maneja cualquier error que pueda ocurrir
  //  }
  //);
  //}


  buscar() {
    if (this.numeroRucdni) {
      if (this.numeroRucdni.length === 8) {
        this.buscarDNI();
      } else if (this.numeroRucdni.length === 11) {
        this.buscarRUC();
      } else {
        console.error("El número ingresado no tiene la longitud adecuada para ser un DNI o un RUC.");
      }
    } else {
      console.error("No se ha ingresado ningún número de DNI o RUC.");
    }
  }

  buscarDNI() {
    const tokens = "960868e5f3ebfe26dbf7f3131d624e29538c54b371004ea90c5c67ebef6bdc6e"; // Coloca aquí tu token de autorización
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokens}`,

    });

    const url = `https://apisperu.net/api/dni/${this.numeroRucdni}`;
    this.http.get<any>(url, { headers }).subscribe(
      (_Response) => {
        this.rucdni = _Response.data
        console.log(_Response.data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buscarRUC() {
    const tokens = "960868e5f3ebfe26dbf7f3131d624e29538c54b371004ea90c5c67ebef6bdc6e"; // Coloca aquí tu token de autorización
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokens}`
    });

    const url = `https://apisperu.net/api/ruc/${this.numeroRucdni}`;

    this.http.get<any>(url, { headers }).subscribe(
      (Response) => {
        this.rucInfo = Response.data;
        console.log(Response.data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  


}





