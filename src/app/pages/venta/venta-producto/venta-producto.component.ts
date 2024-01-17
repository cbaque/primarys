import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-producto',
  templateUrl: './venta-producto.component.html',
  styleUrls: ['./venta-producto.component.scss'],
})
export class VentaProductoComponent  implements OnInit {

  _productos = [
    {
      "name" : "AB0001 :: APRILINE AGELINE"
    },
    {
      "name" : "7640173910015 :: APRILINE HAIRLINE"
    },
    {
      "name" : "ASL001 :: APRILINE SKINLINE"
    },    
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  venta() {
    this.router.navigate([`/menu/venta/neta`]);
  }

}
