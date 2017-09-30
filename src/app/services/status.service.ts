import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class StatusService {

  constructor() { }
  ofSubscrition=new ReplaySubject();
}
