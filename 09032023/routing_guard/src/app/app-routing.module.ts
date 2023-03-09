import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'admin',
  loadChildren:()=>import('./Modules/admin/admin.module').then((m) => m.AdminModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
