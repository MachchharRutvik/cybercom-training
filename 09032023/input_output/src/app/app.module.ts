import { NgModule } from '@angular/core/core';
import { BrowserModule } from '@angular/platform-browser/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    AppRoutingModule,BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
