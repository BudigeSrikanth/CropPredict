import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessService } from '../../shared/services/business.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-crop-recommend',
  templateUrl: './crop-recommend.component.html',
  styleUrls: ['./crop-recommend.component.css']
})
export class CropRecommendComponent implements OnInit {
  cropRecForm: FormGroup;
  csvContent: any;
  convertedArray: Array<any> = [];
  properties: any = '';
  cropDataArray = [];
  cropResult: string = undefined;

  constructor(
    private fb: FormBuilder, 
    private businessService: BusinessService,
    private alertService: AlertService,
    ) {
    this.cropRecForm = this.fb.group({
      nitrogen: ['', Validators.required],
      phosporus:  ['', Validators.required],
      potassium: ['', Validators.required],
      temperature: ['', Validators.required],
      humidity: ['', Validators.required],
      ph: ['', Validators.required],
      rainfall: ['', Validators.required]
    });
   this.cropDataArray = this.businessService.getCropData();
   }

  ngOnInit() {
  }

  get f(){
    return this.cropRecForm.controls;
  }

  onSubmit(){
   if(this.cropRecForm.invalid){
    this.cropRecForm.markAllAsTouched();
    return;
   }
   const formData = this.cropRecForm.value;
   let itemResult;
   let isInvalid = true;
   this.cropDataArray.forEach((item) => {
    if((+item.N >= formData.nitrogen) && (+item.P >= formData.phosporus) && (+item.K >= formData.potassium) && (+item.temperature >= formData.temperature) && (+item.humidity >= formData.humidity) && (+item.ph >= formData.ph)&& (+item.rainfall >= formData.rainfall)){
        itemResult = item.label;
    } else{
      isInvalid = false;
    }
   });
   if(!isInvalid){
     this.cropResult = itemResult;
   } else{
    this.alertService.error(['Please Enter Valid Data']);
   }
  }
}
