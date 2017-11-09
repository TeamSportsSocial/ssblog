import { Injectable, HostListener } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetService {
  constructor(private http: Http) { }
  keywords() {
    return this.http.get('https://admin.chaseyoursport.com/blog/getKeywords')
    .map(res => res.json());
  }
}
