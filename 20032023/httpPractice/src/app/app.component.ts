import { Component, ViewChild } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
// 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild(AddUserComponent) childComponent!:AddUserComponent;

  title = 'httpPractice';

  childMethod(){
    console.log("button")
    this.childComponent?.childFunction();  }
}
