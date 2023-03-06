import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductSectionComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
