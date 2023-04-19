import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyInterceptor } from './my.interceptor';
import { FocusDirective } from './focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:MyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
