import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  name ="luis"
  imgURL = "https://picsum.photos/id/237/500/500"
  currentDate = new Date();
  cost = 2000;
  temperature = 25.35

  changeImage(e:KeyboardEvent){
  this.imgURL = (e.target as HTMLInputElement).value;
  }
  logImg(event:string){
    console.log(event);
  }

}
