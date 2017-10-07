import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-full-image',
  templateUrl: './open-full-image.component.html',
  styleUrls: ['./open-full-image.component.css']
})
export class OpenFullImageComponent implements OnInit {
  openFullImage:boolean=false
  constructor() { }

  ngOnInit() {
  }
  openfullImage(){
    this.openFullImage=true;     
  }

  closeFullImage(){
    this.openFullImage=false;
  }

}
