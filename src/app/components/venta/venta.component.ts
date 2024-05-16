import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { productservice } from '../../core/services/product.service';
import { products } from '../../core/interfaces/products';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { reniecService } from '../../core/services/reniec.service';
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

  constructor(private sSunat: reniecService, private http: HttpClient) {}

  // Inyección de servicios
  private _productservice = inject(productservice);
  private _reniec = inject(reniecService);

  router: any;
  product: any;
  filteredproducts: products[] = [];
  ngOnInit(): void {
    this.getListProductos();
  }

  // Listener para detectar clics en el documento
  @HostListener('document:click', ['$event'])
  addlisten(e: MouseEvent) {
    let opcion = document.querySelector('#inputlist');

    var event = e.target as Node;

    if (!opcion || !opcion.contains(event)) {
      this.abrirDes = false;
    }
  }

  // Método para obtener la lista de productos desde el servicio
  getListProductos() {
    this._productservice.getListProductos().subscribe((data) => {
      this.ListProductos = data;
      console.log(data);
    });
  }

  // Método para filtrar los productos según el término de búsqueda
  filtrarProductos() {
    this.filteredproducts = this.ListProductos.filter((producto) => {
      return this.product.Nombre.toLowerCase().includes(
        this.searchTerm.toLowerCase()
      );
    });

    this.abrirDes = true;
  }

  // Método para realizar la búsqueda de productos
  onSearch() {
    if (this.searchTerm.trim() !== '') {
      this._productservice.searchProduct(this.searchTerm).subscribe((data) => {
        this.ListProductos = data;
      });
    }
  }

  // Método para seleccionar un producto de la lista
  selectProduct(product: products, event: any) {
    console.log('se seleccionao ', product);
    console.log(event);
    this.addProductToVenta(product);
    this.updateSubtotal(product);
  }
  abrirDesplegable() {
    this.abrirDes = true;
    console.log('abrio');
  }
  addProductToVenta(product: products) {
    this.ListVenta.push(product);
  }

  removeSelectedProduct(index: number) {
    this.ListVenta.splice(index, 1);
  }

  updateSubtotal(product: any) {
    product.Subtotal = this.selectedQuantity * product.Pventa;
  }

  // Método para buscar un DNI o RUC
  buscar() {
    if (this.numeroRucdni) {
      if (this.numeroRucdni.length === 8) {
        this.buscarDNI();
      } else if (this.numeroRucdni.length === 11) {
        this.buscarRUC();
      } else {
        console.error(
          'El número ingresado no tiene la longitud adecuada para ser un DNI o un RUC.'
        );
      }
    } else {
      console.error('No se ha ingresado ningún número de DNI o RUC.');
    }
  }

  // Método para buscar un DNI usando el servicio de RENIEC
  buscarDNI() {
    if (this.numeroRucdni) {
      this._reniec.getDniData(this.numeroRucdni).subscribe(
        (data: any) => {
          this.rucdni = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  // Método para buscar un RUC usando una API externa
  buscarRUC() {
    const tokens =
      '960868e5f3ebfe26dbf7f3131d624e29538c54b371004ea90c5c67ebef6bdc6e'; // Coloca aquí tu token de autorización
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokens}`,
    });

    const url = `https://apisperu.net/api/ruc/${this.numeroRucdni}`;

    this.http.get<any>(url, { headers }).subscribe(
      (Response) => {
        this.rucInfo = Response.data;
        console.log(Response.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
