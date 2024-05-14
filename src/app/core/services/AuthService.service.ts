import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { user } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private myAppUrl: string;
    private myApiUrl: string;





  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/user/'


  }

   
  
    login(usuario: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}/login`, { usuario, password });
    }
  
    logout(): Observable<any> {
      return this.http.post<any>(`${this.myApiUrl}/logout`, {});
    }
}
