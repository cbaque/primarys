import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorLoginService } from 'src/app/core/helpers/validator-login.service';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  currentDate: Date;
  authForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public validator: ValidatorLoginService,
    public dataSrv: AuthService
  ) { 
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.authForm = this.createForm();
  }

  createForm(): FormGroup<any> {
    return this.fb.group({
      business: [ '0993384053001', [ Validators.required, Validators.pattern('^[0-9,$]*$'), Validators.minLength(10), Validators.maxLength(13) ] ],
      email:['admin@primarys.soft', [Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      password: [ 'admin', [ Validators.required ] ],
    });
  }

  login() {
    this.loading = true;
    this.dataSrv.post( this.authForm.value )
    .subscribe( 
      ( res ) =>  { 
        this.loading = false;
        // this.nativeStorage.setItem('user', res);
        // localStorage.setItem('token', JSON.stringify(res.token));
        // this.dataSrv.currentUserSubject.next(res.token);
        this.router.navigate([`/menu/dashboard`]);
        // this.smsSrv.isLogout.next(false);
      },
      ( error ) => {
        // this.smsSrv.openError( error );
        this.loading = false;
      }
    );
  }

}
