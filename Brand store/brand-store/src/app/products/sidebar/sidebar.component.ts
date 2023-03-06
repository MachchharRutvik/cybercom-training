import { Component } from '@angular/core';
import { ProductService } from 'src/app/products.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  products: any[] = [];

  countMen:number=0;
  countWomen:number=0;
  countAccessories:number=0;

 constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.countMen = this.productService.getProductByCategory('men').length;
    this.countWomen = this.productService.getProductByCategory('women').length;
    this.countAccessories = this.productService.getProductByCategory('accessories').length;

  }


}
