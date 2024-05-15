import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { marcas } from "../interfaces/marca";
@Injectable({
  providedIn: 'root'

})

export class productservice {
  private myAppUrl: string;
  private myApiUrl: string;





  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/marcas/'


  }
  getListMarcas(): Observable<marcas[]> {
    return this.http.get<marcas[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  saveMarca(marcas: marcas): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, marcas);
  }
  deleteMarca(MarcaID: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${MarcaID}`)
  }

  searchMarca(searchTerm: string): Observable<marcas[]> {
    return this.http.get<marcas[]>(`${this.myApiUrl}search?term=${searchTerm}`);
  }
  getMarca(id: number): Observable<marcas>{
    return this.http.get<marcas>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  

  updateMarca(MarcaID: number, marca:marcas): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${MarcaID}`,marca);
  }

}