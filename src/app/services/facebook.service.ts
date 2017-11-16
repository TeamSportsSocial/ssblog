import { Injectable, Inject} from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
declare var window: any;
declare var FB: any;

@Injectable()
export class FacebookService {
  connected = false;
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (isPlatformBrowser(platformId)) {
      if (window.FB)  {
        window.FB.XFBML.parse();
      }
    }
  }

  init() {
    if(this.isBrowser){
      FB.init({
        appId: '1750709328507665',
        cookie: false,
        xfbml: true,
        version: 'v2.10'
      });
    }
  }

}
