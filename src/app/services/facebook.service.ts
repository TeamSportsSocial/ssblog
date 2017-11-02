import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
declare var window: any;
declare var FB: any;

@Injectable()
export class FacebookService {
  connected = false;
  constructor() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }
  init() {
    FB.init({
      appId: '1750709328507665',
      cookie: false,
      xfbml: true,
      version: 'v2.10'
    });
  }
  getLoginStatus() {
    FB.getLoginStatus(function(response) {
      console.log(response, ' conect');
      if (response.status === 'connected') {
        console.log('login');
        FB.api('/me?fields=id,name,first_name,gender,picture.type(large),age_range,friends',
        function(result) {
            if (result && !result.error) {
                this.user = result;
                console.log(this.user,' conect');
            } else {
                console.log(result.error);
            }
        });
      }
    });
  }
  login() {
    FB.login((response: any) => {
      if (response.status === 'connected') {
        // this.me(response.authResponse.userID, response.authResponse.accessToken);
          // Logged into your app and Facebook.
      } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not your app.
      } else {

          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
      }

    }, {scope: 'user_friends,email'});
  }
  me() {
    FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
    function(result) {
        if (result && !result.error) {
            this.user = result;
            console.log(this.user);
        } else {
            console.log(result.error);
        }
    });
  }
}
