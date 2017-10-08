import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {PropertyService} from "../../services/property.service";

@Component({
  selector: 'SportSocial-related-blogs',
  templateUrl: './related-blogs.component.html',
  styleUrls: ['./related-blogs.component.css']
})
export class RelatedBlogsComponent implements OnInit {
  
  
  relatedBlogDetails;
  numberofBlog;
  dataRecived:boolean=false;
  

  constructor( 
    private getRelated: PostService,
    private recieveKey :PropertyService
  ) { }

  ngOnInit() {
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
                    readingTime:this.timeToRead(data[i].Content)
                  }
                )
            }
            this.relatedBlogDetails=relatedBlogDetails
            console.log(this.relatedBlogDetails," checkarticle")
        }
    )
}
timeToRead(s:string){
  let words = s.split(" ");
  let time=Math.round(words.length/180)
  if(time>0){
    return time + " min read"
  }
  else{
    return "1 min read"
  }
}

timePassed(i:string){
  let writtenDate=new Date(i);
  let presentDate=new Date();
  console.log(writtenDate.getDate(),presentDate.getDate(), " Date")
  if(writtenDate.getFullYear()==presentDate.getFullYear()){
    if(writtenDate.getMonth()==presentDate.getMonth()){
      if(writtenDate.getDate()==presentDate.getDate()){
          return "Today"
      }
      else{
        return presentDate.getDate()-writtenDate.getDate() + " day ago"
      }
    }
    else{
      return presentDate.getMonth()-writtenDate.getMonth() + " month ago"
    }
  }
  else{
    return presentDate.getFullYear()-writtenDate.getFullYear() + " year ago"
  }
 
}


ExactDate(i:number){
let writtenDate=new Date(i);
//console.log(writtenDate," wDate")
return writtenDate.toDateString()
}



}
