import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-venta-checkout',
  templateUrl: './venta-checkout.component.html',
  styleUrls: ['./venta-checkout.component.scss'],
})
export class VentaCheckoutComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  regresar() {
    return this.modalCtrl.dismiss();
  }

}
