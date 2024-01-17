import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-prd',
  templateUrl: './nuevo-prd.component.html',
  styleUrls: ['./nuevo-prd.component.scss'],
})
export class NuevoPrdComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancelar() {

    return this.modalCtrl.dismiss();

  }

}
