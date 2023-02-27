import { PostService } from './post.service';
import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { tap, catchError ,of} from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {


  constructor(private toastr: ToastrService,private service:PostService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = '123456';
    const cloned =  request.clone({
      headers: request.headers.set('Authorization', `Token ${token}`),
      withCredentials: true
    });
    console.log(request)
    return next.handle(cloned).pipe(
      tap((evt:any) => {
        console.log(evt);
        this.toastr.success('success',evt.status);
        this.service.isLoading.next(true);
      }),
      catchError ((err: any) => {
        if (err instanceof HttpErrorResponse) {
        this.toastr.error('failed',(err.status).toString());
        }
        return of(err);
      }),
      finalize(()=>{
        this.service.isLoading.next(false)
      })
    );;
  }
}
