import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessService } from '../../shared/services/business.service';
import { UserModel } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  @Output() loginTab = new EventEmitter<number>();
  constructor(
    private fb: FormBuilder,
    // public modal: NgbActiveModal,
    ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  
  }

  get f(){
    return this.loginForm.controls;
  }
  
  onSignIn(){
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }
  const {username, password} = this.loginForm.value;
  let userExistedData = [];
  if (localStorage.getItem(`user_register_data`)) {
    userExistedData = JSON.parse(
      localStorage.getItem(`user_register_data`),
    ) as UserModel[];
  }
    let errorMessage: Set<string> = new Set<string>();
    let matchFound = false;

    if (userExistedData.length > 0) {
      userExistedData.forEach((item: any) => {
        if (item.username === username && item.password === password) {
          matchFound = true;
        }
      });

      if (!matchFound) {
        errorMessage.add('Username and Password Not Matched');
        if(errorMessage.size  > 0){
          alert([...errorMessage].join('\n'));
        }
      } else{
        this.loginTab.emit(6);
      }
   }
  }
}
