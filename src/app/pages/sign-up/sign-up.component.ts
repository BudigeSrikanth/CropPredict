import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';

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
  }

  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    const userRegisterDataString = localStorage.getItem('user_register_data') as string;
    this.userRegisterData = JSON.parse(userRegisterDataString)
    let id =  this.userRegisterData.length + 1;
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
