import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then(m=>m.UsuarioPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then(m=>m.ProductoPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then(m=>m.ClientePageModule)
  }
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
