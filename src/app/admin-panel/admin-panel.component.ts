import {
   Component, 
   OnInit,
   Renderer2,
   HostListener,
   ViewChild
} from '@angular/core';

import {PropertyService} from "../services/property.service";
import {PostService} from "../services/post.service";

@Component({
  selector: 'SportSocialBlog-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  
  @ViewChild('panel') panel;
  topMargin;
  pageNumber=1;
  defaultKey="dfg";
  blogDetails;
  dataRecieved=false;
  show=false;
  haveData=true;
  constructor(
    private recieveHeight:PropertyService,
    private renderer :Renderer2,
    private get: PostService
  ) { }

  ngOnInit(){
    this.setTopMargin()
    this.getBlogData();
   }
   
   setTopMargin(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
        this.topMargin=margin
      }
    )
    this.renderer.setStyle(this.panel.nativeElement,'margin-top',this.topMargin+10+"px")
   }
   
   getBlogData(){
     console.log("true")
    let blogDetails:{
      blogId:string;
      blogImage:string;
      bloggerName:string,
      bloggerImage:string,
      heading:string,
      Content:string,
      keywords:string,
    }[]=[];
     this.get.blogData(this.pageNumber,this.defaultKey).subscribe(
       data=>{
         console.log(data)
         if(data.length>0){
           this.haveData=true;
         }
         else{
           this.haveData=false
         }
         this.show=true;
         this.dataRecieved=true;
         for(let i in data){
          blogDetails.push(
            {
              blogId:data[i].blogId,
              blogImage:data[i].blogImage,
              bloggerName:data[i].bloggerName,
              bloggerImage:data[i].bloggerImage,
              heading:data[i].heading,
              Content:data[i].Content,
              keywords:data[i].keywords,
            }
          )
        }
        this.blogDetails=blogDetails
       }
     )
   }

   @HostListener('window:resize',[])onresize(){
     this.setTopMargin()
   }
   nextPage(){
     this.pageNumber++;
     this.get.blogData(this.pageNumber,this.defaultKey).subscribe(
       data=>{
        if(data.length>0){
          this.haveData=true;
        }
        else{
          this.haveData=false
        }
        this.dataRecieved=true;
        for(let i in data){
          this.blogDetails.push(
            {
              blogId:data[i].blogId,
              blogImage:data[i].blogImage,
              bloggerName:data[i].bloggerName,
              bloggerImage:data[i].bloggerImage,
              heading:data[i].heading,
              Content:data[i].Content,
              keywords:data[i].keywords,
            }
          )
        }
       }
     )
   }

}
