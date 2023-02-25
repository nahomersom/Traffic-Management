import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';
import { HelpersService } from 'src/app/core/services/helpers.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  id: number;
  accidentForm: FormGroup;
  formSubmitted: boolean = false;
  @Input() isModal:boolean = false;
  @Output() onCancelModal = new EventEmitter();
  @Output() onSubmitModal = new EventEmitter();
  public fields: Object = { text: 'text', iconCss: 'Class', value: 'value' };
  public Regionfields: Object = { text: 'value', value: 'value' };
  data: {}[] = [];
  public lookupField: Object = { text: 'value',value:'value'}
  isSending:boolean = false;
  constructor(

    private fb: FormBuilder,
    public crudService:CrudService,
    public helpersService:HelpersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.accidentForm = fb.group({
      trafficOfficerId: ['', Validators.required],
      typeLookupId: ['', Validators.required],
      date: ['', Validators.required],
      numberOfLossOfLife: ['', Validators.required],
      numberOfMinorInjury: ['', Validators.required],
      numberOfMajorInjury: ['', Validators.required],
      numberOfLossOfProperty: ['', Validators.required],
      lossOfPropertyInMoney: ['', Validators.required],
      descriptionObj: ['', Validators.required],
      address:fb.group({
        specificAddress:['',Validators.required],
        regionAddressId:['', Validators.required],
        houseNumber:['', Validators.required],
        longitude:['', Validators.required],
        latitude:['', Validators.required],
      
      },
      )
  });
    
  }

  ngOnInit(): void {
    if (this.id != undefined) {
      this.isSending = true;
      // this.spinner.show();
      // this.crudService.get(`Port/${this.id}`).subscribe((res) => {
      //   res.state = !!res.state;
      //   this.isSending = false;
      //   this.AccidentForm.patchValue(res);
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
    this.crudService.loadDropDownData('lookup/region', 'region');
  }
  get State(): FormControl {
    return this.accidentForm.get('state') as FormControl;
  }

  onPortCreated(){
    this.onSubmitModal.emit();
    this.accidentForm.reset()
  }
  
  onCancel(){
    this.onCancelModal.emit();
  }
  onSubmit() {
  //   if (this.AccidentForm.valid) {
  //     this.formSubmitted = true;
  //     !this.id ? this.AccidentForm.removeControl('id') : null;
  //     this.crudService.submit(
  //       { endpoint: this.id ? 'Port' : 'Port', payload: this.AccidentForm.value ,isModal:this.isModal},
  //       this.id ?? null,false,this.onPortCreated.bind(this)
  //     );
  //   } else {
  //     this.formSubmitted = true;
  //     this.helpersService.scrollToTheError(this.AccidentForm);
  //   }
  // }
    
}
}
