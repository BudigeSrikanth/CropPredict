import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    ErrorDialogComponent,
    SuccessDialogComponent
  ],
  exports: [
    ErrorDialogComponent,
    SuccessDialogComponent
  ]
})
export class SharedModule { }
