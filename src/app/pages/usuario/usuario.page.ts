import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  _usuarios = [
    {
      "name" : "Pepe Perez"
    },
    {
      "name" : "Juan Carlos P."
    },
    {
      "name" : "Karla Paredes."
    },    
  ]
  constructor() { }

  ngOnInit() {
  }

}
