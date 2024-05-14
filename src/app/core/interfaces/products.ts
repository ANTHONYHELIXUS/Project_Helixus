import { DecimalPipe } from "@angular/common";

export interface products{
    

    id?:number;
    Barcode?: string;
    CategoriaID?: number;
    MarcaID?: number;
    Nombre?: string;
    Medida?: string;
    Stock?: string;
    Pcosto?:number;
    Pventa?:number;
    Subtotal?:number;


}