import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';

export interface UserModel {
  id: number,
  username: string,
  email: string,
  password: string
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  userRegisterData: any = [];
  @Output() signUpTab = new EventEmitter<number>();
  
  constructor(
    private fb: FormBuilder,
    private toaster: ToastService
    ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    if (localStorage.getItem(`user_register_data`)) {
      return JSON.parse(
        localStorage.getItem(`user_register_data`),
      ) as UserModel[];
    }
    return [];
  }

  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    let userExistedData = [];
    if (localStorage.getItem(`user_register_data`)) {
      userExistedData = JSON.parse(
        localStorage.getItem(`user_register_data`),
      ) as UserModel[];
    }
    let id =  userExistedData.length + 1;
    const userData = {
      id:  id,
      ...this.userForm.value
    }
   this.userRegisterData.push(userData);
   localStorage.setItem('user_register_data', JSON.stringify(this.userRegisterData));
   this.userForm.reset();
   this.toaster.show('User Register Successfully', {
    classname: 'bg-success text-light',
    delay: 2000,
  });
  this.stopLoading();
  }

  stopLoading() {
    setTimeout(() => {
     this.signUpTab.emit(3);
    }, 1000);
  }
}
