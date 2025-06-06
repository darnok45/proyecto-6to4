import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/home/inicio/inicio.component';
import { FormularioComponent } from './paginas/contacto/formulario/formulario.component';
import { OfertasComponent } from './paginas/ofertas/ofertas/ofertas.component';
import { ProductosComponent } from './paginas/productos/productos/productos.component';

import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { CompraComponent } from './paginas/compra/compra.component';


export const routes: Routes = [

    {path:'', redirectTo: '/inicio',pathMatch: 'full'},

    {path:'inicio',component:InicioComponent},

    {path:'contacto',component:FormularioComponent},

    {path:'ofertas',component:OfertasComponent},

    {path:'productos',component:ProductosComponent},

    {path:'carrito',component:CarritoComponent},

    {path:'compra',component:CompraComponent}
];
