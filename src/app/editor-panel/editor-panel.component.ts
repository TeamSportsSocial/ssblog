import { 
  Component,
  OnInit, 
  ViewChild,
  ElementRef,
  Input,
  Renderer2,
  HostListener
}from '@angular/core';
import {Http,HttpModule} from '@angular/http';
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
  @ViewChild('desc') desc;
  filesToUpload: Array<File>;
  files=[]
  topMargin;
  Result;
  imageName=[];
  isDisabled:boolean=false;
  blog:{
    bloggerName:any,
    blogDate:any,
    blogTitle:any,
    blogDesc:any,
    keywords:any[]
}
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
@HostListener('document:keypress', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  let length=this.desc.nativeElement.value.length
  let curPos=this.desc.nativeElement.selectionStart
 // console.log(event,this.desc.nativeElement.selectionStart);
  if(event.code=="Enter"){
    let textBefore= this.desc.nativeElement.value.substring(0,curPos)
    let textAfter= this.desc.nativeElement.value.substring(curPos, length)
    this.desc.nativeElement.value=textBefore+"</br>"+textAfter
    this.desc.nativeElement.selectionEnd=curPos+5
    //console.log(this.desc.nativeElement.value)
  }
  if(event.code=="KeyB" && event.ctrlKey==true){
    let startCurPos=this.desc.nativeElement.selectionStart
    let endCurPos=this.desc.nativeElement.selectionEnd
    console.log("true",this.desc.nativeElement.selectionStart,this.desc.nativeElement.selectionEnd)
    let textBefore=this.desc.nativeElement.value.substring(0,startCurPos)
    let textMiddle= this.desc.nativeElement.value.substring(startCurPos,endCurPos)
    let textAfter=this.desc.nativeElement.value.substring(endCurPos,length) 
   // console.log("before: ", textBefore,"middle:", textMiddle, "after: " ,textAfter)
    this.desc.nativeElement.value=textBefore+"<b>"+textMiddle+"</b>"+textAfter
    this.desc.nativeElement.selectionEnd=endCurPos+5
  }
  if(event.code=="KeyI" && event.ctrlKey==true){
    let startCurPos=this.desc.nativeElement.selectionStart
    let endCurPos=this.desc.nativeElement.selectionEnd
    //console.log("true",this.desc.nativeElement.selectionStart,this.desc.nativeElement.selectionEnd)
    let textBefore=this.desc.nativeElement.value.substring(0,startCurPos)
    let textMiddle= this.desc.nativeElement.value.substring(startCurPos,endCurPos)
    let textAfter=this.desc.nativeElement.value.substring(endCurPos,length) 
    //console.log("before: ", textBefore,"middle:", textMiddle, "after: " ,textAfter)
    this.desc.nativeElement.value=textBefore+"<i>"+textMiddle+"</i>"+textAfter
    this.desc.nativeElement.selectionEnd=endCurPos+5
  }
}
makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
  this.imageName=["bloggerImage","blogImage"]
  return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
          formData.append(this.imageName[i],files[i]);
      }
      formData.append("bloggerName",this.blog.bloggerName)
      formData.append("blogrTitle",this.blog.blogTitle)
      formData.append("blogDesc",this.blog.blogDesc)
      formData.append("blogDate",this.blog.blogDate)
      formData.append("keywords",this.blog.keywords)
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
  this.isDisabled=true;
  this.files=[this.bloggerImage,this.blogImage]
  this.blog={
    bloggerName:this.signupForm.value.blogData.name,
    blogDate:this.signupForm.value.blogData.date,
    blogTitle:this.signupForm.value.blogData.Title,
    blogDesc:this.signupForm.value.blogData.desc,
    keywords:this.signupForm.value.blogData.keywords.split(",")
  }
  this.imageName=["bloggerImage","blogImage"]
  for(var i=0;i<this.files.length;i++){
    this.filesToUpload.push(<File> this.files[i].nativeElement.files[0]);
  }
  this.makeFileRequest("https://admin.chaseyoursport.com/blog/saveNewBlog", [], this.filesToUpload)
  .then((result) => {
    this.Result=result
    console.log(result);
    if(this.Result.Status=="Success"){
      this.isDisabled=false;
    }
  }, (error) => {
    console.error(error);
    if(error){
      this.isDisabled=false
    }
  });
  
  
 }
}
