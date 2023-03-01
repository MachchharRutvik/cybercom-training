import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicss';
  v = 50;

  users = {
    name:"rutvik",age:20
  };
  numbers= [1,2,3,4,5];
  arrOfObj = [
    {
      name:"rutvik",age:20
    },
    {
      name:"param ",age:20
    },
    {
      name:"yug",age:20
    }, 
   {
      name:"tejas",age:20
    },
  ]


}
