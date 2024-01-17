import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteVentasPageRoutingModule } from './reporte-ventas-routing.module';

import { ReporteVentasPage } from './reporte-ventas.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteVentasPageRoutingModule,
    SharedModule
  ],
  declarations: [ReporteVentasPage]
})
export class ReporteVentasPageModule {}
