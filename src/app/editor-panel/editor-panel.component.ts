import { 
  Component,
  OnInit, 
  ViewChild,
  ElementRef,
  Input,
  Renderer2
}from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {NgForm} from "@angular/forms";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'SportSocialBlog-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.css']
})
export class EditorPanelComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('bloggerImage') bloggerImage;
  @ViewChild('blogImage') blogImage;
  @ViewChild('form') panel;
  filesToUpload: Array<File>;
  files=[]
  topMargin;
  imageName=[];
  blog:{
    bloggerName:any,
    blogDate:any,
    blogTitle:any,
    blofDesc:any,
    keywords:any[]
}
x;
constructor(private http:Http,private recieveHeight:PropertyService,private renderer:Renderer2){
  this.filesToUpload = [];
}
ngOnInit(){
  this.recieveHeight.ofHeader.subscribe(
    margin=>{
      this.topMargin=margin
    }
  )
  this.renderer.setStyle(this.panel.nativeElement,'margin-top',this.topMargin+10+"px")
}
bold(){

}
makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
  this.imageName=["bloggerImage","blogImage"]
  return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
          formData.append(this.imageName[i],files[i]);
      }
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
              } else {
                  reject(xhr.response);
              }
          }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
  });
}
upload(){
  this.files=[this.bloggerImage,this.blogImage]
  this.imageName=["bloggerImage","blogImage"]
  for(var i=0;i<this.files.length;i++){
    this.filesToUpload .push(<File> this.files[i].nativeElement.files[0]);
  }
  this.makeFileRequest("https://test.sportsocial.in/poc/saveNewBlog", [], this.filesToUpload).then((result) => {
    console.log(result);
  }, (error) => {
    console.error(error);
  });
  this.blog={
    bloggerName:this.signupForm.value.blogData.name,
    blogDate:this.signupForm.value.blogData.date,
    blogTitle:this.signupForm.value.blogData.Title,
    blofDesc:this.signupForm.value.blogData.desc,
    keywords:this.signupForm.value.blogData.keywords.split(",")
  }
  this.http.post('https://test.sportsocial.in/poc/saveNewBlog',this.blog).subscribe(
    (data)=>console.log(data)
  )
 }
}
