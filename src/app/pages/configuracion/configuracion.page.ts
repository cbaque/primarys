import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate([`/login`]);
  }

  gotoUsuarios() {
    this.navCtrl.navigateForward(`/usuario`);
  }

  gotoProductos() {
    this.navCtrl.navigateForward(`/producto`);
  }

  gotoClientes() {
    this.navCtrl.navigateForward(`/cliente`);
  }
}
