import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductSectionComponent } from './products/product-section/product-section.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:'products-category/:category',
    component:ProductSectionComponent
  },
  { 
    path:'products-category',
    component:ProductSectionComponent
  },{
    path:'product/:id',
    component:ProductDetailsComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
