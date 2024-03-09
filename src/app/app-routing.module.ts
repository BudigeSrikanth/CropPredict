import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { AboutComponent } from './pages/about/about.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: TopBarComponent, children:[{ path: 'register', component: SignUpComponent },] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LogInComponent },
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
