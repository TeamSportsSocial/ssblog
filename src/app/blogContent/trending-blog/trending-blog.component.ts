import { 
  Component, 
  OnInit,
} from '@angular/core';
import {GetService} from "../../services/get.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'SportSocial-trending-blog',
  templateUrl: './trending-blog.component.html',
  styleUrls: ['./trending-blog.component.css']
})
export class TrendingBlogComponent implements OnInit {
  blogDetails:{
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
    readingTime:string
  }[]=[]
  constructor(
    private get: PostService,
  ) { }

  ngOnInit() {
    this.getBlog()
  }
   getBlog(){
    this.get.blogData(2,'dfg').subscribe(
      data=>{
        for(let i=0;i<3;i++){
          this.blogDetails.push(
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
          //console.log(this.blogDetails," h")
         // console.log(this.blogDetails[i].blogId, this.blogDetails[i].Content)
       }
      }
    )
   }
   timePassed(i:string){
    
      let writtenDate=new Date(parseInt(i)*1000);
      let presentDate=new Date();
      if(writtenDate.getFullYear()==presentDate.getFullYear()){
        if(writtenDate.getMonth()==presentDate.getMonth()){
          if(writtenDate.getDate()==presentDate.getDate()){
              if(writtenDate.getHours()==presentDate.getHours()){
                if(writtenDate.getMinutes()==presentDate.getMinutes()){
                  if(writtenDate.getSeconds()==presentDate.getSeconds()){
                    return "Just Now"
                  }
                  else{
                    return presentDate.getSeconds()-writtenDate.getSeconds()+" sec ago"
                  }
                }
                else{
                  return presentDate.getMinutes()-writtenDate.getMinutes()+" min ago"
                }
              }
              else{
                return presentDate.getHours()-writtenDate.getHours()+" hrs ago"
              }
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
    let writtenDate=new Date(i*1000);
   // console.log(i, writtenDate,writtenDate.toDateString())
    return  writtenDate.toDateString()
  }
  timeToRead(s:string){
    let words = s.split(" ");
    //console.log(words,words.length,this.blog.blogId)
    let time=Math.round(words.length/180)
    if(time>0){
      return time + " min read"
    }
    else{
      return "1 min read"
    }
  }
}
