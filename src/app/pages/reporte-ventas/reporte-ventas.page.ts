import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.page.html',
  styleUrls: ['./reporte-ventas.page.scss'],
})
export class ReporteVentasPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async opciones() {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones de Filtro',
      buttons: [
        {
          text: 'Por fecha',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Por usuario',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Por Cliente',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();


  }

}
