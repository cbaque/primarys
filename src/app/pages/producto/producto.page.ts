import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NuevoPrdComponent } from './nuevo-prd/nuevo-prd.component';
import { EditarPrdComponent } from './editar-prd/editar-prd.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  _productos = [
    {
      "name" : "AB0001 :: APRILINE AGELINE"
    },
    {
      "name" : "7640173910015 :: APRILINE HAIRLINE"
    },
    {
      "name" : "ASL001 :: APRILINE SKINLINE"
    },    
  ]
  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async nuevoProducto() {

    const modal = await this.modalCtrl.create({
      component: NuevoPrdComponent,
      backdropDismiss: false
    });
    
    modal.present();

  }

  async editarProducto() {
    const modal = await this.modalCtrl.create({
      component: EditarPrdComponent,
      backdropDismiss: false
    });
    
    modal.present();
  }

  async eliminarProducto() {
    const alert = await this.alertController.create({
      header: 'Eliminar Producto',
      subHeader: '',
      message: 'Esta seguro de Eliminar el Producto AB0001 :: APRILINE AGELINE?',
      buttons: ['Si, Eliminar']
    });

    await alert.present();
  }

}
