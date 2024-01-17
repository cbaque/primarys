import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaPage } from './venta.page';
import { VentaClienteComponent } from './venta-cliente/venta-cliente.component';
import { VentaProductoComponent } from './venta-producto/venta-producto.component';
import { VentaNetaComponent } from './venta-neta/venta-neta.component';

const routes: Routes = [
  {
    path: '',
    component: VentaPage,
    children : [
      {
        path: '',
        redirectTo: 'clientes',
        pathMatch: 'full'
      },
      {
        path: 'clientes',
        component : VentaClienteComponent
      },
      {
        path: 'productos',
        component : VentaProductoComponent
      },
      {
        path: 'neta',
        component : VentaNetaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaPageRoutingModule {}
