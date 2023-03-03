

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public task = '';
  // public cate = '';
  // public fullTask = '';
  public taskArr:Array<{task:string,category:string}> = new Array();
  
store(v1:string,v2:string){
 this.taskArr.push({
  task : v1,
  category : v2
 });
 console.log(this.taskArr);
};

}

