import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserLoginInterceptor implements HttpInterceptor {

  constructor(private toster:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authentic = localStorage.getItem('token');
    if(authentic)
      {
        request = request.clone({
          setHeaders:({
            Authorization:`Bearer ${authentic}`
          })
        });
      }
    return next.handle(request).pipe(
      catchError(error =>{
        if(error)
        {
          debugger
          switch(error.status){
            case 401:
             this.toster.error(error.status,'Unauthorized User',{closeButton:true})
              break;
            case 500:
              this.toster.error(error.status,'Internal server Error',{closeButton:true})
              break;
            default:
              break;
          }
        }
        return throwError(()=>error)
      })
    );
  }
}
