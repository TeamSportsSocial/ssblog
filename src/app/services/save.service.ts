import { Injectable } from '@angular/core';
import 'rxjs/Rx'
import {AsyncSubject} from 'rxjs/AsyncSubject'
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class SaveService {
  
  constructor() { 
  }
  detailsOfBlog =new ReplaySubject();
  blog=new ReplaySubject();
}
