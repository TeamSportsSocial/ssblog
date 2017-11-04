import { Component, OnInit,HostListener } from '@angular/core';
import {PostService} from "../../services/post.service";
import {PropertyService} from "../../services/property.service";

import { WindowRefService } from '../../services/window-ref.service';

@Component({
  selector: 'SportSocial-related-blogs',
  templateUrl: './related-blogs.component.html',
  styleUrls: ['./related-blogs.component.css']
})
export class RelatedBlogsComponent implements OnInit {
  
  
  relatedBlogDetails;
  numberofBlog;
  dataRecived:boolean=false;
  mobileView:boolean=false;

  constructor( 
    private getRelated: PostService,
    private recieveKey: PropertyService,
    private winRef: WindowRefService
  ) { }

  ngOnInit() {
    this.setMobileView()
   this.recieveKey.ofBlogCard.subscribe(
     data=>{
       console.log(data, " checkarticle")
       this.getRelatedBlogs(data)
     }
   )
   
  }
  getRelatedBlogs(key){
    //console.clear()
    let relatedBlogDetails:{
      blogId:string;
      blogImage:string;
      bloggerName:string,
      bloggerImage:string,
      heading:string,
      Content:string,
      insertedDate:string,
      ViewCount:string,
      ShareCount:string,
      keywords:string[],
      exactDate:string;
      readingTime:string;
      MetaDesc: string;
      ImageDesc: string
    }[]=[]
    this.getRelated.blogData(1,key).subscribe(
        data=>{
            this.dataRecived=true;
            console.log(data, "related")
            if(data.length>3){
                this.numberofBlog=3
            }
            else{
              this.numberofBlog=data.length
            }
            for(let i=0;i<this.numberofBlog;i++){
                relatedBlogDetails.push(
                  {
                    blogId:data[i].blogId,
                    blogImage:data[i].blogImage,
                    bloggerName:data[i].bloggerName,
                    bloggerImage:data[i].bloggerImage,
                    heading:data[i].heading,
                    Content:data[i].Content,
                    insertedDate:this.timePassed(data[i].insertedDate),
                    ViewCount:data[i].ViewCount,
                    ShareCount:data[i].ShareCount,
                    keywords:data[i].keywords.split(","),
                    exactDate:this.ExactDate(data[i].insertedDate),
                    readingTime:this.timeToRead(data[i].Content),
                    MetaDesc: data[i].MetaDesc,
                    ImageDesc: data[i].ImageDesc
                  }
                )
            }
            this.relatedBlogDetails = relatedBlogDetails
            console.log(this.relatedBlogDetails," checkarticle")
        }
    )
}
timeToRead(s:string){
  let words = s.split(" ");
  let time=Math.round(words.length/180)
  if(time>1){
    return time + " min read"
  }
  else{
    return "2 min read"
  }
}

timePassed(i: string){
  
    let writtenDate = new Date(parseInt(i) * 1000);
    let presentDate = new Date();
    if (writtenDate.getFullYear() === presentDate.getFullYear()) {
      if (writtenDate.getMonth() === presentDate.getMonth() || writtenDate.getDate() > presentDate.getDate()) {
        if (writtenDate.getDate() === presentDate.getDate()) {
            if (writtenDate.getHours() === presentDate.getHours()) {
              if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                  return 'Just Now'
                }
                else{
                  return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                }
              }
              else{
                return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago'
              }
            }
            else{
              return presentDate.getHours() - writtenDate.getHours() + ' hrs ago'
            }
        }
        else{
          let date = (presentDate.getDate() - writtenDate.getDate());
          if (date < 0) {
            date += 30;
          }
          return date + ' day ago';
        }
      }
      else{
        return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
      }
    }
    else{
      return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago'
    }
   
}


ExactDate(i:number){
let writtenDate=new Date(i*1000);
//console.log(writtenDate," wDate")
return writtenDate.toDateString()
}
setMobileView(){
  if(this.winRef.nativeWindow.innerWidth>950){
      this.mobileView=false;
  }
  else{
    this.mobileView=true
  }
}
@HostListener('window:resize',[])onresize(){
  this.setMobileView()
}

}
