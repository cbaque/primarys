import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m=>m.DashboardPageModule)
      },
      {
        path: 'cliente',
        loadChildren: () => import('../cliente/cliente.module').then(m=>m.ClientePageModule)
      },
      {
        path: 'venta',
        loadChildren: () => import('../venta/venta.module').then(m=>m.VentaPageModule)
      },      
    ]
  },
  {
    path: '',
    redirectTo: '/menu/dashboard',
    pathMatch: 'full'
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
