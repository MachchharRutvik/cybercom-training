import { Injectable } from "@angular/core";


export interface Product{
  id:number,
  name:string,
  gender:string,
  accessory:boolean,
  price:number,
  description:string,
  available:boolean,
  colors:string[],
  src:string
};

@Injectable(
  {
    providedIn:'root'
  }
)

export class ProductService{
  private products:Product[]=[
    {
      id: 1,
      name: 'Men\'s Black Leather Jacket',
      gender: 'men',
      accessory: false,
      price: 149.99,
      description: 'A sleek and stylish black leather jacket for men.',
      available: true,
      colors: ['black'],
      src:"assets/dummy.jpg"
    },
    {
      id: 2,
      name: 'Women\'s Red High Heels',
      gender: 'women',
      accessory: true,
      price: 79.99,
      description: 'A pair of beautiful red high heels for women.',
      available: false,
      colors: ['red'],
      src:"assets/dummy.jpg"
    },
    {
      id: 3,
      name: 'Unisex Sports Watch',
      gender: 'unisex',
      accessory: true,
      price: 49.99,
      description: 'A versatile sports watch for both men and women.',
      available: true,
      colors: ['black', 'white', 'red'],
      src:"assets/dummy.jpg"
    },
    {
      id: 4,
      name: 'Women\'s Denim Shorts',
      gender: 'women',
      accessory: false,
      price: 29.99,
      description: 'A pair of comfortable and stylish denim shorts for women.',
      available: true,
      colors: ['blue'],
      src:"assets/dummy.jpg"
    },
    {
      id: 5,
      name: 'Men\'s Plaid Shirt',
      gender: 'men',
      accessory: false,
      price: 39.99,
      description: 'A classic plaid shirt for men.',
      available: false,
      colors: ['red', 'blue'],
      src:"assets/dummy.jpg"
    },
    {
      id: 6,
      name: 'Women\'s Black Leather Handbag',
      gender: 'women',
      accessory: true,
      price: 99.99,
      description: 'A stylish and spacious black leather handbag for women.',
      available: true,
      colors: ['black'],
      src:"assets/dummy.jpg"
    },
    {
      id: 7,
      name: 'Unisex Aviator Sunglasses',
      gender: 'unisex',
      accessory: true,
      price: 19.99,
      description: 'A classic pair of aviator sunglasses for both men and women.',
      available: true,
      colors: ['gold', 'silver', 'black'],
      src:"assets/dummy.jpg"
    },
    {
      id: 8,
      name: 'Men\'s Brown Leather Belt',
      gender: 'men',
      accessory: true,
      price: 29.99,
      description: 'A sturdy and stylish brown leather belt for men.',
      available: false,
      colors: ['brown'],
      src:"assets/dummy.jpg"
    },
    {
      id: 9,
      name: 'Women\'s White Sneakers',
      gender: 'women',
      accessory: false,
      price: 59.99,
      description: 'A pair of comfortable and fashionable white sneakers for women.',
      available: true,
      colors: ['white'],
      src:"assets/dummy.jpg"
    },
    {
      id: 10,
      name: 'Men\'s Black Formal Shoes',
      gender: 'men',
      accessory: false,
      price: 99.99,
      description: 'A pair of sleek and stylish black formal shoes for men.',
      available: true,
      colors: ['black'],
      src:"assets/dummy.jpg"
    },
    {
      id: 11,
      name: 'Women\'s Floral Print Dress',
      gender: 'women',
      accessory: false,
      price: 69.99,
      description: 'A beautiful floral print dress for women.',
      available: true,
      colors: ['pink', 'green'],
      src:"assets/dummy.jpg"
    },
    {
      id: 12,
      name: 'Men\'s Leather Shoes',
      gender: 'male',
      accessory: false,
      price: 109.99,
      description: 'Stylish leather shoes for men',
      available: true,
      colors: ['black', 'brown'],
      src:"assets/dummy.jpg"
    },
    {
      id: 13,
      name: 'Women\'s High Heels',
      gender: 'female',
      accessory: false,
      price: 89.99,
      description: 'Elegant high heels for women',
      available: true,
      colors: ['red', 'black', 'silver'],
      src:"assets/dummy.jpg"
    },
    {
      id: 14,
      name: 'Men\'s Sport Watch',
      gender: 'male',
      accessory: true,
      price: 149.99,
      description: 'Stylish sports watch for men',
      available: true,
      colors: ['black', 'blue', 'red'],
      src:"assets/dummy.jpg"
    },
    {
      id: 15,
      name: 'Women\'s Sunglasses',
      gender: 'female',
      accessory: true,
      price: 39.99,
      description: 'Trendy sunglasses for women',
      available: true,
      colors: ['black', 'pink', 'brown'],
      src:"assets/dummy.jpg"
    },
    {
      id: 16,
      name: 'Men\'s Leather Belt',
      gender: 'male',
      accessory: true,
      price: 29.99,
      description: 'Classic leather belt for men',
      available: true,
      colors: ['black', 'brown'],
      src:"assets/dummy.jpg"
    },
    {
      id: 17,
      name: 'Women\'s Tote Bag',
      gender: 'female',
      accessory: true,
      price: 79.99,
      description: 'Stylish tote bag for women',
      available: true,
      colors: ['black', 'white', 'red'],
      src:"assets/dummy.jpg"
    },
    {
      id: 18,
      name: 'Men\'s Formal Shirt',
      gender: 'male',
      accessory: false,
      price: 59.99,
      description: 'Formal shirt for men',
      available: true,
      colors: ['white', 'blue', 'black'],
      src:"assets/dummy.jpg"
    },
    {
      id: 19,
      name: 'Women\'s Cocktail Dress',
      gender: 'female',
      accessory: false,
      price: 129.99,
      description: 'Elegant cocktail dress for women',
      available: true,
      colors: ['red', 'black', 'blue'],
      src:"assets/dummy.jpg"
    },
    {
      id: 20,
      name: 'Men\'s Leather Wallet',
      gender: 'male',
      accessory: true,
      price: 39.99,
      description: 'Classic leather wallet for men',
      available: true,
      colors: ['black', 'brown'],
      src:"assets/dummy.jpg"
    },{
      id: 21,
      name: 'Leather Handbag',
      gender: 'female',
      accessory: true,
      price: 75.99,
      description: 'A stylish and spacious leather handbag with multiple compartments.',
      available: true,
      colors: ['black', 'brown', 'red'],
      src:"assets/dummy.jpg"
    },
    {
      id: 22,
      name: 'Leather Wallet',
      gender: 'unisex',
      accessory: true,
      price: 39.99,
      description: 'A slim and elegant leather wallet with multiple card slots and bill compartments.',
      available: true,
      colors: ['black', 'brown'],
      src:"assets/dummy.jpg"
    },
    {
      id: 23,
      name: 'Running Shoes',
      gender: 'unisex',
      accessory: false,
      price: 99.99,
      description: 'A pair of high-performance running shoes with breathable mesh upper and responsive cushioning.',
      available: true,
      colors: ['black', 'gray', 'blue'],
      src:"assets/dummy.jpg"
    },
    {
      id: 24,
      name: 'Yoga Mat',
      gender: 'unisex',
      accessory: true,
      price: 49.99,
      description: 'A lightweight and durable yoga mat with non-slip surface and carrying strap.',
      available: true,
      colors: ['purple', 'pink', 'blue'],
      src:"assets/dummy.jpg"
    },
    {
      id: 25,
      name: 'Wireless Headphones',
      gender: 'unisex',
      accessory: true,
      price: 129.99,
      description: 'A pair of wireless headphones with noise-cancelling technology and long battery life.',
      available: true,
      colors: ['black', 'white', 'red'],
      src:"assets/dummy.jpg"
    },
    {
      id: 26,
      name: 'Smart Watch',
      gender: 'unisex',
      accessory: true,
      price: 199.99,
      description: 'A sleek and versatile smart watch with heart rate monitor and GPS tracking.',
      available: true,
      colors: ['black', 'silver', 'rose gold'],
      src:"assets/dummy.jpg"
    },
    {
      id: 27,
      name: 'Puffer Jacket',
      gender: 'male',
      accessory: false,
      price: 149.99,
      description: 'A warm and water-resistant puffer jacket with removable hood.',
      available: true,
      colors: ['navy', 'black', 'green'],
      src:"assets/dummy.jpg"
    },
    {
      id: 28,
      name: 'Leather Belt',
      gender: 'male',
      accessory: true,
      price: 29.99,
      description: 'A classic leather belt with metal buckle and multiple sizing options.',
      available: true,
      colors: ['black', 'brown'],
      src:"assets/dummy.jpg"
    },
    {
      id: 29,
      name: 'Baseball Cap',
      gender: 'unisex',
      accessory: true,
      price: 19.99,
      description: 'A comfortable and stylish baseball cap with embroidered logo.',
      available: true,
      colors: ['black', 'gray', 'navy'],
      src:"assets/dummy.jpg"
    },
    {
      id: 30,
      name: 'Sunglasses',
      gender: 'unisex',
      accessory: true,
      price: 49.99,
      description: 'A pair of trendy and UV-protective sunglasses with polarized lenses.',
      available: true,
      colors: ['black', 'brown', 'gray'],
      src:"assets/dummy.jpg"
    }

  ]
  constructor(){};
  getProducts(){
    return this.products;
  }
  getProductById(id:number){
    return this.products.find(product=> product.id===id)
  }
  getProductByCategory(category:string){
    if(category){
      return this.products.filter(product =>product.gender===category
        || product.accessory && category === 'accessories');
    }
    return this.products;
  }
  createProduct(product:Product){
    this.products.push(product);
  }
}