import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { products } from "../interfaces/products";
@Injectable({
  providedIn: 'root'

})

export class productservice {
  private myAppUrl: string;
  private myApiUrl: string;





  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/'


  }
  getListProductos(): Observable<products[]> {
    return this.http.get<products[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  saveProduct(products: products): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, products);
  }
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  searchProduct(searchTerm: string): Observable<products[]> {
    return this.http.get<products[]>(`${this.myApiUrl}search?term=${searchTerm}`);
  }
  getProduct(id: number): Observable<products>{
    return this.http.get<products>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  

  updateProduct(id: number, product:products): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,product);
  }

}