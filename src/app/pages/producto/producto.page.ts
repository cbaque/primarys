import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  _productos = [
    {
      "name" : "AB0001 :: APRILINE AGELINE	"
    },
    {
      "name" : "7640173910015 :: APRILINE HAIRLINE"
    },
    {
      "name" : "ASL001 :: APRILINE SKINLINE"
    },    
  ]
  constructor() { }

  ngOnInit() {
  }

}
