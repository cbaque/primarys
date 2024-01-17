import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  currentDate: Date;

  constructor(
    private router: Router,
  ) { 
    this.currentDate = new Date();
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate([`/menu/dashboard`]);
  }

}
