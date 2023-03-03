import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponentComponent } from './no-page-component/no-page-component.component';
import { UserContentComponent } from './user-content/user-content.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:UserContentComponent,
    path:'user/users/:id'
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:NoPageComponentComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
