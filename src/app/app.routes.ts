import { Routes } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';
import { ProductosComponent } from './components/productos/productos.component';


export const routes: Routes = [

{path:'venta',component: VentaComponent},
{path:'producto',component: ProductosComponent},


];
