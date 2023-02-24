import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css']
})
export class FormButtonsComponent implements OnInit {
  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() save = new EventEmitter();
  @Input() isModal:boolean = false;
  @Input() hasNoGrid:boolean = false;

  @Input()
  submitTex:string="Submit";
  @Input()
  CancleTex:string="Cancel";
  @Input()
  DeleteTex:string="Delete";
  @Input()
  localSaveText:string="Save"


  @Input()
  Canclebtn:boolean=true;
  @Input()
  Submitbtn:boolean=true;
  @Input()
  Deletebtn:boolean=false;
  @Input()
  localSave:boolean=false;

  constructor(private location: Location,private router:Router) { }

  ngOnInit(): void {
  }
onClick(){
  this.submit.emit();
}
onCancel(){
  this.isModal ? this.cancel.emit() : this.hasNoGrid ? this.router.navigateByUrl('') : this.location.back();  
}
onDelete(){
  this.delete.emit();
}
onSave(){
  this.save.emit();
  console.log("event emeted")
}
}
