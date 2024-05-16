import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { clientes } from "../interfaces/cliente";
@Injectable({
  providedIn: 'root'

})

export class productservice {
  private myAppUrl: string;
  private myApiUrl: string;





  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clientes/'


  }
  getListClientes(): Observable<clientes[]> {
    return this.http.get<clientes[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  saveCliente(clientes: clientes): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, clientes);
  }
  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  searchCliente(searchTerm: string): Observable<clientes[]> {
    return this.http.get<clientes[]>(`${this.myApiUrl}search?term=${searchTerm}`);
  }
  getCliente(id: number): Observable<clientes>{
    return this.http.get<clientes>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  

  updateCliente(id: number, cliente:clientes): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,cliente);
  }

}