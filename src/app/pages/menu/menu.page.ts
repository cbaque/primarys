import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu = [
    {
      "name" : "Dashboard",
      "link" : "dashboard",
      "icon" : "stats-chart",
      "selected" : "true"
    },
    {
      "name" : "Ventas",
      "link" : "venta",
      "icon" : "trending-up",
      "selected" : "false"
    },
    {
      "name" : "Reporte V.",
      "link" : "reporte-ventas",
      "icon" : "clipboard",
      "selected" : "false"
    },      
    {
      "name" : "Configuración",
      "link" : "configuracion",
      "icon" : "settings",
      "selected" : "false"
    },    
  ]

  constructor() { }

  ngOnInit() {
  }

}
