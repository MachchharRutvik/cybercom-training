import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _enrollmentService:EnrollmentService){}
  title = 'form_practice';
  topicHasError=true;
  submitted=false;
  topics = ['angular','react','vue'];
  userModel = new User('Rob','rob@test.com',5555555512,'','morning',true);
  errorMsg=''
  validateTopic(value: string){
if(value === 'default' || value===''){
  this.topicHasError=true
}
else{
  this.topicHasError=false
}
  }

onSubmit(){
  this.submitted=true;
  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data=>console.log('success!',data),
    error=>this.errorMsg= error.statusText
  )
}
}
