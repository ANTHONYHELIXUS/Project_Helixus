import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { productos } from "../interfaces/products";
@Injectable({
    providedIn:'root'

})

export class ProductService{
    private myAppUrl: string;
    private myApiUrl: string;

    constructor(private http: HttpClient){
        this.myAppUrl= environment.endpoint;
        this.myApiUrl=''
    }
    getListProductos(): Observable<productos[]>{
       return this.http.get<productos[]>(`${this.myAppUrl}${this.myApiUrl}`);
    }
}