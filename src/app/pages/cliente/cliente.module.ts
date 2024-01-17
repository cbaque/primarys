import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePageRoutingModule } from './cliente-routing.module';

import { ClientePage } from './cliente.page';
import { NuevoCteComponent } from './nuevo-cte/nuevo-cte.component';
import { EditarCteComponent } from './editar-cte/editar-cte.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePageRoutingModule
  ],
  declarations: [
    ClientePage,
    NuevoCteComponent,
    EditarCteComponent
  ]
})
export class ClientePageModule {}
