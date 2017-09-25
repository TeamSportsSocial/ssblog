import { Injectable,HostListener } from '@angular/core';
import {Http,HttpModule} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class GetService {
   page={
     name:"dfg",
     pageNumber:0
   }
  constructor(private http:Http) { }
  
  blogData(i:number){
    this.page.pageNumber=i
    console.log(this.page, 'p')
    return this.http.post('https://test.sportsocial.in/poc/loadblogdata',this.page)
    .map( res => res.json());
  }

}
