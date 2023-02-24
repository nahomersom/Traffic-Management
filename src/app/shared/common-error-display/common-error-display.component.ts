import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-error-display',
  templateUrl: './common-error-display.component.html',
  styleUrls: ['./common-error-display.component.css']
})
export class CommonErrorDisplayComponent implements OnInit {
  @Input() error:any;
  errorMessage:string;
  constructor() { 
   

  }

  ngOnInit(): void {

}

}
