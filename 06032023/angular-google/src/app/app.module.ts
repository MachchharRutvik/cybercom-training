import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule
} from '@abacritt/angularx-social-login';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SocialLoginModule,HttpClientModule,FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '464695470710-8oqvu1d0tbri52t1i01rq6stpr0dgt5d.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
