import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private api_url = environment.api_url;
  public buttonSending = new BehaviorSubject<boolean>(false);

  constructor(public http:HttpClient,public toast:ToastrService) { }

  get(endpoint:string,params?:any):Observable<any>{
    return this.http.get(this.api_url + endpoint,{params: params}).pipe(
      catchError((error=>{
       
        this.getErrorMessage(error);
       return throwError(()=>error);
      }))
    )
  }

  post(endpoint:string, body: Object):Observable<any>{
    return this.http.post(this.api_url + endpoint, body).pipe(
      catchError((error=>{
        this.buttonSending.next(false);
       
        this.getErrorMessage(error);
       return throwError(()=>error);
      }))
    )
  }
  put(endpoint:string, body: Object,params?:any):Observable<any>{
    return this.http.put(this.api_url + endpoint, body,{params:params}).pipe(
      catchError((error=>{
        this.buttonSending.next(false);
       
        this.getErrorMessage(error);
       return throwError(()=>error);
      }))
    )
  }
  delete(endpoint:string,params?:any,body?:any):Observable<any>{
    return this.http.delete(this.api_url + endpoint,{params:params,body:body}).pipe(
        catchError((error=>{
      
          this.getErrorMessage(error);
         return throwError(()=>error);
        }))
      )
  }



  private getErrorMessage(error:HttpErrorResponse){

    let errorMessage = error.error?.Message ?? error.error?.message;
      
    switch(error.status){
        
        case 400:{
          return this.toast.error(`Bad Request :${errorMessage}`,error.status.toString())
        }
        case 401:{
          return this.toast.error(`Unauthorized :${errorMessage}`,error.status.toString())
        }
        case 403:{
          return this.toast.error(`Access Denied :${errorMessage}`,error.status.toString())
        }
        case 405:{
          return this.toast.error(`Method Not Allowed`,error.status.toString())
        }
        case 500:{
          return this.toast.error(`Internal Server Error`,error.status.toString())
        }
        case 404:{
          return this.toast.error(`Page Not Found :${errorMessage}`,error.status.toString())
        }
       default:{
        return this.toast.error('Unknown Error');
       }
      }
    }
  

  }
   