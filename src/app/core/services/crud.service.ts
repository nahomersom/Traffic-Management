import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { DynamicListComponent } from 'src/app/featured/dynamic-list/dynamic-list.component';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class CrudService extends ApiService{
  dropDownData = {};

  constructor(  http: HttpClient, 
    private router:Router,
    private location: Location, 
    private _sanitize:DomSanitizer
    ) {
    super(http)
  }


  async submit({endpoint,payload,isModal=false},id?,hasNoGrid = false,callback?:Function){
    
    
    this.buttonSending.next(true);
    if(id){
      
      if(typeof id !== 'boolean') payload.id = id;
      
      this.put(endpoint,payload).subscribe({
      
        next:(res)=>{
          this.buttonSending.next(false);
          
          if(res.status){
              // this.toast.success(res.message,'Success')
         
                !isModal ? this.location.back() : hasNoGrid ? this.router.navigateByUrl('') : callback();
              
          }else{
                // this.toast.info(res.message,'Info')
                !isModal ? this.location.back() :  hasNoGrid ? this.router.navigateByUrl('') :callback();
          }
          
        }, 
   
        }
      )
    }else{
   
       this.post(endpoint,payload).subscribe({
        next:(res)=>{
          this.buttonSending.next(false);
          if(res.status){
        
              // this.toast.success(res.message,'Success')
              !isModal ? this.location.back() : hasNoGrid ? this.router.navigateByUrl('') : callback();
            
          }else{
                // this.toast.info(res.message,'Info')
                !isModal ? this.location.back() :  hasNoGrid ? this.router.navigateByUrl('') :callback();
          }
          
        }, 
   
        }
      )
    }
    
  }

  deleteRow(endpoint: any, com: DynamicListComponent,body): any {
   
    this.delete(endpoint,null,body).subscribe({
      next:(res)=>{
        
        if (res) {
         
          com.feedGrid(com.dataApiUrl);
          // this.toast.success(res.message, 'Success');
          com.ejDialog.hide();

        } 
     
      },
      error:(err)=>{
        com.ejDialog.hide();
      }

    })
  

}


loadDropDownData(url,type){
  
  this.get(url).subscribe((res)=>{
   this.dropDownData[type] = res;

  })
}

getImageById(url,id){
  let image = environment.api_url + url + id +`?time=${new Date()}`;
  return image;
}
}
