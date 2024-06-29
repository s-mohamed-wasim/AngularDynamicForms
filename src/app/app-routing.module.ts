import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

const routes: Routes = [
  {path:'register',component:UserRegisterFormComponent},
  {path:'login',component:UserLoginFormComponent},
  {path:'admin',component:AdminFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
