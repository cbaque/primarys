import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NuevoCteComponent } from './nuevo-cte/nuevo-cte.component';
import { EditarCteComponent } from './editar-cte/editar-cte.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  _clientes = [
    {
      "name" : "0991317009 :: VERONICA JEANETH OÑA SERRANO"
    },
    {
      "name" : "0987213826 :: MARIA BUENAÑO FARIÑO	"
    },
    {
      "name" : "0982549131 :: JORGE MAURICIO VELASQUEZ REYES	"
    },    
  ]

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async nuevoCliente() {

    const modal = await this.modalCtrl.create({
      component: NuevoCteComponent,
      backdropDismiss: false
    });
    
    modal.present();

  }

  async editarCliente() {
    const modal = await this.modalCtrl.create({
      component: EditarCteComponent,
      backdropDismiss: false
    });
    
    modal.present();
  }

  async eliminarCliente() {
    const alert = await this.alertController.create({
      header: 'Eliminar Cliente',
      subHeader: '',
      message: 'Esta seguro de Eliminar el Cliente 0991317009 :: VERONICA JEANETH OÑA SERRANO?',
      buttons: ['Si, Eliminar']
    });

    await alert.present();
  }

}
