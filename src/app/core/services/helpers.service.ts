
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
   
  constructor(private crudService:CrudService) { }
  scrollToTheError(formGroup: FormGroup){
    for(let control in formGroup.controls){
      if(formGroup.controls[control].errors){
        document.querySelector(`#${control}`).scrollIntoView();
         break;
      }
  }

}
async  getBase64ImageFromUrl(imageUrl) {
  console.log('image',imageUrl)
  var res = await fetch(imageUrl);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader  = new FileReader();
    reader.addEventListener("load", function () {
        resolve(reader.result);
    }, false);

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  })
}




 }

