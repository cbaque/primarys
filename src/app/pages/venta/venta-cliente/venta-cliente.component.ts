import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-cliente',
  templateUrl: './venta-cliente.component.html',
  styleUrls: ['./venta-cliente.component.scss'],
})
export class VentaClienteComponent  implements OnInit {

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
    private router: Router,
  ) { }

  ngOnInit() {}

  productos() {

    this.router.navigate([`/menu/venta/productos`]);

  }

}
