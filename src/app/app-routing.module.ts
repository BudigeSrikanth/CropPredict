import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './pages/top-bar/top-bar.component';

const routes: Routes = [
  { path: 'home', component: TopBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
