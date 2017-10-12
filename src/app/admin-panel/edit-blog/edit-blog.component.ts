import {
  Component, 
  OnInit,
  Renderer2,
  HostListener,
  ViewChild
} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PropertyService} from "../../services/property.service";
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
   
  @ViewChild('editBlog') editBlog;
  @ViewChild('f') editBlogForm: NgForm;
  @ViewChild('desc')desc;
  @ViewChild('title') title;
  @ViewChild('name') name;
  @ViewChild('keywords') keywords
  topMargin;
  constructor(
    private recieveHeight:PropertyService,
    private renderer :Renderer2,
    private recieve:PropertyService
  ) { }
  blog:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    heading:string,
    Content:string,
    keywords:string,
  }
  ngOnInit() {
    console.log(this.editBlog)
    this.setTopMargin();
    this.recieve.detailsofBlog.subscribe(
      data=>{
        console.log(data['bloggerName'])
       
        this.title.nativeElement.value=data['heading']
        this.desc.nativeElement.value=data['Content']
        this.name.nativeElement.value=data['bloggerName']
        this.keywords.nativeElement.value=data['keywords']
        //console.log(this.title, this.title.nativeElement.value)
  
      }
    )
  }
  setTopMargin(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.editBlog.nativeElement,'margin-top',this.topMargin+10+"px")
   }

   @HostListener('window:resize',[])onresize(){
     this.setTopMargin()
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
}
