import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private userSrv: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.userSrv.currentUserValue;
    if (token) {
      request = request.clone({
        setHeaders: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    }
    
    return next.handle(request);
  }
}
