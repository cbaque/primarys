import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  _usuarios = [
    {
      "name" : "Pepe Perez"
    },
    {
      "name" : "Juan Carlos P."
    },
    {
      "name" : "Karla Paredes."
    },    
  ]
  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async nuevoUsuario() {

    const modal = await this.modalCtrl.create({
      component: NuevoComponent,
      backdropDismiss: false
    });
    
    modal.present();

  }

  async editar() {
    const modal = await this.modalCtrl.create({
      component: EditarComponent,
      backdropDismiss: false
    });
    
    modal.present();
  }

  async eliminar() {
    const alert = await this.alertController.create({
      header: 'Eliminar Usuario',
      subHeader: '',
      message: 'Esta seguro de Eliminar el usuario Pepe Perez?',
      buttons: ['Si, Eliminar']
    });

    await alert.present();
  }

}
