import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-prd',
  templateUrl: './editar-prd.component.html',
  styleUrls: ['./editar-prd.component.scss'],
})
export class EditarPrdComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancelar() {

    return this.modalCtrl.dismiss();

  }
}
