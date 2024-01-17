import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
