import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  activeTab = 1;
  isUserLoggedIn: boolean = false;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
    if(!this.isUserLoggedIn){
      this.activeTab = 1;
    }else{
      this.activeTab = 6;
    }
  }
  setActiveTab(tab: number) {
    this.isLoading$.next(true);
    this.stopLoading();
   this.activeTab = tab;
   if(this.activeTab === 8){
    this.isUserLoggedIn = false;
    this.activeTab = 3;
  }
  }

  stopLoading() {
    setTimeout(() => {
      this.isLoading$.next(false);
    }, 500);
  }

  changeSignUpTab(tab){
   this.activeTab = tab;
   this.isUserLoggedIn = false;
  }

  changeLoginTab(tab){
    this.isUserLoggedIn = true;
    this.activeTab = tab;
  }

}
