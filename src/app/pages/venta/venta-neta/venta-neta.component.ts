import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VentaCheckoutComponent } from '../venta-checkout/venta-checkout.component';

@Component({
  selector: 'app-venta-neta',
  templateUrl: './venta-neta.component.html',
  styleUrls: ['./venta-neta.component.scss'],
})
export class VentaNetaComponent  implements OnInit {

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {}

  async checkout() {
    const modal = await this.modalCtrl.create({
      component: VentaCheckoutComponent,
      backdropDismiss: true
    });
    
    modal.present();
  }

}
