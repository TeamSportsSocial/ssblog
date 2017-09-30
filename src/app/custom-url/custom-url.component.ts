import { Component, OnInit } from '@angular/core';
import {UrlSerializer, UrlTree, DefaultUrlSerializer} from '@angular/router';

@Component({
  selector: 'app-custom-url',
  templateUrl: './custom-url.component.html',
  styleUrls: ['./custom-url.component.css']
})
export class CustomUrlComponent implements OnInit, UrlSerializer {

  constructor() { }

  ngOnInit() {
  }
  /* parse(url: any): UrlTree {
    let dus = new DefaultUrlSerializer();
    return dus.parse(url);
  } */

  /* serialize(tree: UrlTree): any {
      let dus = new DefaultUrlSerializer(),
          path = dus.serialize(tree);
      // use your regex to replace as per your requirement.
      return path.replace(/\+/g, '%20');
  } */
  serialize(tree: UrlTree): string {
    let dus = new DefaultUrlSerializer();
    // Use the default serializer to create a url and replace any spaces with + signs
    return dus.serialize(tree).replace(/%20/g, '-');
  }
  parse(url: string): UrlTree {
    let dus = new DefaultUrlSerializer();
    // Change plus signs to encoded spaces
    url = url.replace(/\+/g, '%20');
    // Use the default serializer that you can import to just do the 
    // default parsing now that you have fixed the url.
    return dus.parse(url)  
  }
}
