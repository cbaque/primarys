import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorLoginService {

  constructor() { }

  validationMessages = {
    business: [
      { type: 'required', message: 'RUC de empresa obligatorio' },
      { type: 'pattern', message: 'Digite solo números' },
      { type: 'minlength', message: 'Mínimo 10 dígitos' },
      { type: 'maxlength', message: 'Máximo 13 dígitos' },
    ],
    password: [
      { type: 'required', message: 'Password es obligatorio.' },
    ],        
    email: [
      { type: 'required', message: 'Email es obligatorio.' },
      { type: 'pattern', message: 'Email incorrecto' },
    ],                  
  };


}
