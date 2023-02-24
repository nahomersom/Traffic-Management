import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  id: number;
  PortForm: FormGroup;
  formSubmitted: boolean = false;
  @Input() isModal:boolean = false;
  @Output() onCancelModal = new EventEmitter();
  @Output() onSubmitModal = new EventEmitter();
  public fields: Object = { text: 'text', iconCss: 'Class', value: 'value' };
  public Regionfields: Object = { text: 'value', value: 'value' };
  data: {}[] = [];
  isSending:boolean = false;
  constructor(

    private fb: FormBuilder,

    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.PortForm = fb.group({
      portNumber: ['', Validators.required],
      _country: ['', Validators.required],
      region: ['', Validators.required],
      vollume: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.id != undefined) {
      this.isSending = true;
      // this.spinner.show();
      // this.crudService.get(`Port/${this.id}`).subscribe((res) => {
      //   res.state = !!res.state;
      //   this.isSending = false;
      //   this.PortForm.patchValue(res);
      // },
      // (error)=>{this.isSending = false}
      // )
    }

    // country.forEach((ele) => {
    //   this.data.push({
    //     Class: `fi fi-${ele.Code.toLowerCase()}`,
    //     text: ele.Name,
    //     value: ele.Code,
    //   });
    // });
    // this.crudService.loadDropDownData('lookup/region', 'region');
  }
  get State(): FormControl {
    return this.PortForm.get('state') as FormControl;
  }

  onPortCreated(){
    this.onSubmitModal.emit();
    this.PortForm.reset()
  }
  
  onCancel(){
    this.onCancelModal.emit();
  }
  onSubmit() {
  //   if (this.PortForm.valid) {
  //     this.formSubmitted = true;
  //     !this.id ? this.PortForm.removeControl('id') : null;
  //     this.crudService.submit(
  //       { endpoint: this.id ? 'Port' : 'Port', payload: this.PortForm.value ,isModal:this.isModal},
  //       this.id ?? null,false,this.onPortCreated.bind(this)
  //     );
  //   } else {
  //     this.formSubmitted = true;
  //     this.helpersService.scrollToTheError(this.PortForm);
  //   }
  // }
    
}
}
