import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { products } from "../interfaces/products";
@Injectable({
    providedIn:'root'

})

export class reniecService{

    private apiUrl = '/api/v2/reniec/dni';
    private token = 'apis-token-8536.Q6DSA9GJRDDeFmmBcvhiNJFU99ihWfpI';
  
    
  constructor(private http: HttpClient) { }

  getDniData(numerodni: string): Observable<any> {
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.token}`
    });

    const url = `${this.apiUrl}?numero${numerodni}`;
    return this.http.get<any>(url, { headers });
  }

    }
  

