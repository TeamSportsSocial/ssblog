import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class PropertyService {

  constructor() { }
  
  ofHeader =new ReplaySubject();
  ofKeyWords=new ReplaySubject();
  ofBlogCard=new ReplaySubject();
  detailsofBlog= new ReplaySubject();
  saveDetailsOfBlog=new ReplaySubject();
  ofsearchBlog=new Subject()
}
