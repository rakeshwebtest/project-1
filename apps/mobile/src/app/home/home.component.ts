import { Component, OnInit } from "@angular/core";
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";
import { AppHttpClient } from '@theapp/utils';

@Component({
  selector: 'theapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login = {};
  submitted = false;
  user: SocialUser;
  constructor(
    private authService: AuthService,
    private http: AppHttpClient
  ) { }

  test(response) {
    this.http.get('user').subscribe(res => {
      console.log('res', res);
    });
    this.http.post('user', { test: "test", test2: "ts" }).subscribe(res => {
      console.log('res', res);
    });
  }
  // login callback
  loginCallback(response) {
    console.log(response);
    if (response.status === "PARTIALLY_AUTHENTICATED") {
      var code = response.code;
      var csrf = response.state;
      this.http.post('user', response).subscribe(res => {
        console.log('res', res);
      });
      // Send code to server to exchange for access token
    } else if (response.status === "NOT_AUTHENTICATED") {
      // handle authentication failure
    } else if (response.status === "BAD_PARAMS") {
      // handle bad parameters
    }
  }



  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      // this.navCtrl.setRoot(TabsPage);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      delete user.id;
      this.http.post('user', user).subscribe(res => {
        console.log('ressss', res);
      });
      // this.navCtrl.setRoot(TabsPage);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
