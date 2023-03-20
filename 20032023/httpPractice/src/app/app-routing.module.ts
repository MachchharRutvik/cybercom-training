import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"users",
    pathMatch:"full"
  },{
  path:"users",
  component:AddUserComponent
},
{
  path:"user-list/users/:id",
  component:AddUserComponent
},
{
  path:"user-list",
  component:UserListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
