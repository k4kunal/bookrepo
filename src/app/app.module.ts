import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { BookInterceptor } from './book.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    SliderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '', component : LandingComponent},
      {path : 'dashboard', component : DashboardComponent}
    ])
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : BookInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
