// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'practice';
//   public name=''
//   taskPriority=""
//   tempArr:any = []  
//   addToList(){
//     this.tempArr.push(this.name);
//     this.tempArr.push(this.taskPriority);
  
//     console.log(this.tempArr)

//   }
//   public toDoList:Array<any> = [
//     {
//       toDoText:this.tempArr[0],
//       priority:this.tempArr[1]
//     }
 
//   ]
// }

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

