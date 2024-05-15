import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { categorias } from "../interfaces/categoria";
@Injectable({
  providedIn: 'root'

})

export class productservice {
  private myAppUrl: string;
  private myApiUrl: string;





  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/categorias/'


  }
  getListCategorias(): Observable<categorias[]> {
    return this.http.get<categorias[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  saveCategoria(categorias: categorias): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, categorias);
  }
  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  searchCategorias(searchTerm: string): Observable<categorias[]> {
    return this.http.get<categorias[]>(`${this.myApiUrl}search?term=${searchTerm}`);
  }
  getCategoria(id: number): Observable<categorias>{
    return this.http.get<categorias>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  

  updateCategoria(id: number, categoria:categorias): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,categoria);
  }

}