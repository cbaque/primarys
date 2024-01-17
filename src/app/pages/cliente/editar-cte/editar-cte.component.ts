import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-cte',
  templateUrl: './editar-cte.component.html',
  styleUrls: ['./editar-cte.component.scss'],
})
export class EditarCteComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  cancelar() {

    return this.modalCtrl.dismiss();

  }

}
