import { Injectable } from '@angular/core';
import { EnvService } from '../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private DataServ: EnvService,
  ) { }

  public post( data: any ) {
    return this.DataServ.postQuery<any>(`auth`, data);
  }
}
