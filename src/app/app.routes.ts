import { Routes } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';
import ProductosComponent from './components/productos/productos.component';
import { CategoriasMarcasComponent } from './components/categorias-marcas/categorias-marcas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
<<<<<<< HEAD
import { DetallventaComponent } from './components/venta/detallventa/detallventa.component';
=======
import { DetallventaComponent } from './components/productos/detallventa/detallventa.component';
>>>>>>> 63c742afb1bf43bd307171ada19daf1701cca903



export const routes: Routes = [
    {
<<<<<<< HEAD
        path:'',loadChildren:()=>import('./components/inicio-sesion/inicio-sesion.routes').then(m=>m.AUTH_ROUTES)
=======
        path:'', loadChildren:()=>import('./components/inicio-sesion/inicio-sesion.routes').then(m=>m.AUTH_ROUTES)
>>>>>>> 63c742afb1bf43bd307171ada19daf1701cca903
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
