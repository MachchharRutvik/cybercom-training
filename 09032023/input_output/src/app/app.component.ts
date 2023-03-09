import { Component, Input } from "@angular/core/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input_output';
 data = [
    {
      name:"rutvik",id:"1"
    },
    {
      name:"param",id:"2"
    },
    {
      name:"yug",id:"3"
    },
    {
      name:"tejas",id:"4"
    }
  ]
}
