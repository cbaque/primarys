import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import { NuevoPrdComponent } from './nuevo-prd/nuevo-prd.component';
import { EditarPrdComponent } from './editar-prd/editar-prd.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoPageRoutingModule
  ],
  declarations: [
    ProductoPage,
    NuevoPrdComponent,
    EditarPrdComponent
  ]
})
export class ProductoPageModule {}
