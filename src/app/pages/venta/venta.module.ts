import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaPageRoutingModule } from './venta-routing.module';

import { VentaPage } from './venta.page';
import { SharedModule } from '../../shared/shared.module';
import { VentaClienteComponent } from './venta-cliente/venta-cliente.component';
import { VentaProductoComponent } from './venta-producto/venta-producto.component';
import { VentaNetaComponent } from './venta-neta/venta-neta.component';
import { VentaCheckoutComponent } from './venta-checkout/venta-checkout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaPageRoutingModule,
    SharedModule
  ],
  declarations: [
    VentaPage,
    VentaClienteComponent,
    VentaProductoComponent,
    VentaNetaComponent,
    VentaCheckoutComponent
  ]
})
export class VentaPageModule {}
