import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataFromStudentComponent:any;
  title = 'input_output';
  students = [
    {  
      name:"rutvik",id:"1"
    },
    {  
      name:"yug",id:"2"
    },
    {  
      name:"param",id:"3"
    }]

    onEmit(data: any){
      this.dataFromStudentComponent=data;
      console.log(this.dataFromStudentComponent);
    }
}
