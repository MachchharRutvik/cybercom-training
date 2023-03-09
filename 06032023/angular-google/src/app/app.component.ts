import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-google';
  user:any;
  loggedIn:any;
  constructor(private authService: SocialAuthService,private getApi:GetApiService) { }
 data='';
 ipDetails:any;
setTable=false;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  
  }
  showDetails(data: string){
  this.getApi.apiCall(data).subscribe((data)=>{
    console.warn("get api data",data);
    this.ipDetails=data;
    this.setTable=true;
  })}
}
