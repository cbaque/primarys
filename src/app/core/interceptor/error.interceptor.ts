import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);

    return next.handle(request).pipe(
      catchError((err) => {
        // console.log('NONE', err)
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          // this.authenticationService.logout();
          // location.reload();
        }

        if (err.status === 500) {
          console.log('----',err.error.message)
          // this.mensajeSrv.isLoading.next( false );
          // snackBar.open(err.error.message, '', { duration: 6000, panelClass: 'snackbar-danger' });
        }        

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
