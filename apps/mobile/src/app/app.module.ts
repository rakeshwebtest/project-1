import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FormsModule } from "@angular/forms";
import { AppHttpClient, AppHttpClientCreator, HttpInterceptorService } from '@theapp/utils';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

const config: any = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("712248616094-54q4g8qhskhij9dbc0g1s7p8ecu02bfr.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [AppComponent, HomeComponent, SignInComponent, DashboardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SocialLoginModule,
    IonicModule.forRoot()
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, {
    provide: AppHttpClient,
    useFactory: AppHttpClientCreator,
    deps: [HttpClient]
  }, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
