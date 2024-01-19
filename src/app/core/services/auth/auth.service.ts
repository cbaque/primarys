import { Injectable } from '@angular/core';
import { EnvService } from '../env/env.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<string>;
  
  constructor(
    private DataServ: EnvService,
  ) { 
    let token: string | null =  localStorage.getItem('token');

    this.currentUserSubject = new BehaviorSubject<string>(
      JSON.parse( token == null ? '' : token )
    );
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  public post( data: any ) {
    return this.DataServ.postQuery<any>(`auth`, data);
  }
}
