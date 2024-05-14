import { Routes } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';
import ProductosComponent from './components/productos/productos.component';
import { CategoriasMarcasComponent } from './components/categorias-marcas/categorias-marcas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { DetallventaComponent } from './components/productos/detallventa/detallventa.component';



export const routes: Routes = [
    {
        path:'', loadChildren:()=>import('./components/inicio-sesion/inicio-sesion.routes').then(m=>m.AUTH_ROUTES)
    },
    {
        path:'Venta', loadChildren:()=>import('./components/venta/venta.routes').then(m=>m.VENTA_ROUTES)
    },{
        path:'Pedidos', loadChildren:()=>import('./components/inicio-sesion/inicio-sesion.routes').then(m=>m.AUTH_ROUTES)
    },
    {
        path:'Gestion', loadChildren:()=>import('./components/inicio-sesion/inicio-sesion.routes').then(m=>m.AUTH_ROUTES)
    },
{path:'venta',component: VentaComponent},
{path:'producto',component: ProductosComponent},
{path:'categorias_marcas',component: CategoriasMarcasComponent},
{path:'clientes',component: ClientesComponent},
{path:'iniciosesion',component: InicioSesionComponent},
{path:'detalleventa',component: DetallventaComponent}




];
