import { Injectable } from '@angular/core';
import {Http,HttpModule} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class GetService {

  constructor(private http:Http) { }

  blogData(){
    return this.http.post('https://test.sportsocial.in/poc/loadblogdata',"dfg")
    .map( res => res.json());
  }

}
