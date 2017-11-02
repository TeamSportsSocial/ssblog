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
}
