import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { WelComeComponent } from './pages/wel-come/wel-come.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CropRecommendComponent } from './pages/crop-recommend/crop-recommend.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { LogInComponent } from './pages/log-in/log-in.component';


@NgModule({
  declarations: [					
    AppComponent,
      TopBarComponent,
      WelComeComponent,
      LogInComponent,
      SignUpComponent,
      AboutComponent,
      CropRecommendComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule ,
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
