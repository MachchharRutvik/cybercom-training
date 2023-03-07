import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_practice';
  topicHasError=true;
  
  topics = ['angular','react','vue'];
  userModel = new User('Rob','rob@test.com',5555555512,'','morning',true);

  validateTopic(value: string){
if(value === 'default' || value===''){
  this.topicHasError=true
}
else{
  this.topicHasError=false
}
  }
}
