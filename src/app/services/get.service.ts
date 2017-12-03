import { Injectable, HostListener } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetService {
  constructor(private http: Http) { }
  keywords() {
    return this.http.get('http://test.chaseyoursport.com:3000/getKeywords')
    .map(res => res.json());
  }
}
