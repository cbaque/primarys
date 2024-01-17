import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-cte',
  templateUrl: './nuevo-cte.component.html',
  styleUrls: ['./nuevo-cte.component.scss'],
})
export class NuevoCteComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancelar() {

    return this.modalCtrl.dismiss();

  }

}
