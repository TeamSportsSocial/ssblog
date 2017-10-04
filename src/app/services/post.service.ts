import { Injectable } from '@angular/core';
import {Http,HttpModule,Response} from "@angular/http";

@Injectable()
export class PostService {

  Page:{
    name:string,
    page:number
  }
  Email:{
    userid:string;
    email:string;
  }
  loginDetails:{
    id:string,
    email:string,
    name:string,
    isFb:string,
    image:string
  }
  Comment:{
    blogid:string;
    userid:string;
    comment:string;
  }
  BlogId:{
    blogid:string;
  }
  viewCount:{
    blogid:string;
    viewcount:string
  }
  shareCount:{
    blogid:string;
    sharecount:string
  }
 constructor(private http:Http) { }
 
  blogData(i:number,s:string){
    this.Page={
      name:s,
      page:i
    }
    console.log(this.Page)
    return this.http.post('https://admin.chaseyoursport.com/blog/loadblogdata',this.Page)
    .map( res => res.json());
  }
  ofUser(s:string){
    this.Email={
      userid:'2',
      email:s
    }
    return this.http.post('https://admin.chaseyoursport.com/blog/subscribeBlog',this.Email)
    .map(res=>res.json())
  }
  ofFacebookUser(id:string,name:string,email:string,image:string){
    this.loginDetails={
      id:id,
      email:email,
      name:name,
      isFb:"1",
      image:image
    }
    return this.http.post('https://admin.chaseyoursport.com/blog/blogLogin',this.loginDetails)
    .map( res => res.json());
  }
  userComment(blogId:string,userid:string,comment:string){
    this.Comment={
      blogid:blogId,
      userid:userid,
      comment:comment
    }
    return this.http.post('https://admin.chaseyoursport.com/blog/commentBlog',this.Comment)
    .map(res=>res.json())
  }
  ofBlog(id:string){
    this.BlogId={
      blogid:id
    }
    return this.http.post('https://admin.chaseyoursport.com/blog/loadBlogComment',this.BlogId)
    .map(res=>res.json())
  }
  viewCountOfBlog(id:string){
    this.viewCount={
      blogid:id,
      viewcount:"1"
    }
    return this.http.post("https://admin.chaseyoursport.com/blog/updateViewCount",this.viewCount)
    .map(res=>res.json())
  }
  shareCountOfBlog(id:string){
    this.shareCount={
      blogid:id,
      sharecount:"1"
    }
    return this.http.post("https://admin.chaseyoursport.com/blog/updateShareCount",this.shareCount)
    .map(res=>res.json())
  }
  dataOfsingleBlog(id:string){
    this.BlogId={
      blogid:id
    }
    console.log(this.BlogId)
    return this.http.post('https://admin.chaseyoursport.com/blog/loadSingleBlogData',this.BlogId)
    .map((response : Response)=> response.json()) 
  }
}
