import { Injectable, Inject} from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
declare var window: any;
declare var FB: any;

@Injectable()
export class FacebookService {
  connected = false;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      if (window.FB)  {
        window.FB.XFBML.parse();
      }
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

}
