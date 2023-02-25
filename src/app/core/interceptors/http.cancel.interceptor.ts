import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, takeUntil } from 'rxjs';
import { ActivationEnd, NavigationStart, Router } from '@angular/router';
import { HttpCancelService } from '../services/http-cancel.service';
import { CrudService } from '../services/crud.service';

@Injectable()
export class HttpCancelInterceptor implements HttpInterceptor {

  constructor(private router: Router, private httpCancelService : HttpCancelService,private crudService:CrudService) {
    
    router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
        // Cancel pending calls
        this.httpCancelService.cancelPendingRequests();
        this.crudService.buttonSending.next(false);
      }
    })
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()))
  }
}
