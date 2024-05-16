import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class reniecService {
  private apiUrl = '/api/v2/reniec/dni';
  private token = 'apis-token-8536.Q6DSA9GJRDDeFmmBcvhiNJFU99ihWfpI';

  // Constructor que inyecta el servicio HttpClient de Angular
  constructor(private http: HttpClient) {}

  // Método para obtener datos de un DNI desde el API de RENIEC
  getDniData(numerodni: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    // Construye la URL final para la solicitud HTTP, añadiendo el número de DNI como parámetro

    const url = `${this.apiUrl}?numero=${numerodni}`;
    // Realiza una solicitud GET al API usando HttpClient, pasando la URL y los encabezados
    return this.http.get<any>(url, { headers });
  }
}
