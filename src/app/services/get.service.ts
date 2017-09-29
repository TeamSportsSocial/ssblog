import { Injectable,HostListener } from '@angular/core';
import {Http,HttpModule} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class GetService {
   Page:{
     name:string,
     page:number
   }
  constructor(private http:Http) { }
  
  blogData(i:number,s:string){
    this.Page={
      name:s,
      page:i
    }
    console.log(this.Page)
    return this.http.post('http://admin.chaseyoursport.com/blog/loadblogdata',this.Page)
    .map( res => res.json());
  }

}
