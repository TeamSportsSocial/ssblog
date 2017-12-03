import { Injectable } from '@angular/core';
import {Http, HttpModule, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {

  Page: {
    name: string,
    page: number
  };
  Email: {
    email:  string;
  };
  loginDetails: {
    id: string,
    email: string,
    name: string,
    image: string
  };
  Comment: {
    blogid: string;
    userid: string;
    comment: string;
  };
  BlogId: {
    blogid: string;
  };
  viewCount: {
    blogid: string;
    viewcount: number
  };
  shareCount: {
    blogid: string;
    sharecount: number
  };
  popularBlogReq: {
    page: number;

  };

 constructor(private http: Http) { }
 
  blogData(i: number, s: string) {
    this.Page = {
      name: s,
      page: i
    };
   // console.log(this.Page);
    return this.http.post('http://test.chaseyoursport.com:3000/loadblogdata', this.Page)
    .map( res => res.json());
  }
  ofUser(s: string) {
    this.Email = {
      email: s
    };
    return this.http.post('http://test.chaseyoursport.com:3000/subscribeBlog', this.Email)
    .map(res => res.json());
  }
  ofFacebookUser(id: string, name: string, email: string, image: string) {
    this.loginDetails = {
      id: id,
      email: email,
      name: name,
      image: image
    };
    return this.http.post('https://admin.chaseyoursport.com/blog/blogLogin', this.loginDetails)
    .map( res => res.json());
  }
  userComment(blogId: string, userid: string, comment: string) {
    this.Comment = {
      blogid: blogId,
      userid: userid,
      comment: comment
    };
    return this.http.post('https://admin.chaseyoursport.com/blog/commentBlog', this.Comment)
    .map(res => res.json());
  }
  ofBlog(id: string) {
    this.BlogId = {
      blogid: id
    };
    return this.http.post('https://admin.chaseyoursport.com/blog/loadBlogComment',this.BlogId)
    .map(res => res.json());
  }
  viewCountOfBlog(id: string, count: number) {
    count++;
    this.viewCount = {
      blogid: id,
      viewcount: count
    };
   // console.log(this.viewCount, 'count');
    return this.http.post('http://test.chaseyoursport.com:3000/updateViewCount', this.viewCount)
    .map(res => res.json());
  }
  shareCountOfBlog(id: string, count: number) {
    count++;
    this.shareCount = {
      blogid: id,
      sharecount: count
    };
    // console.log(this.shareCount, 'count');
    return this.http.post('http://test.chaseyoursport.com:3000/updateShareCount', this.shareCount)
    .map(res => res.json());
  }
  dataOfsingleBlog(id: string) {
    this.BlogId = {
      blogid: id
    };
   // console.log(this.BlogId);
    return this.http.post('http://test.chaseyoursport.com:3000/loadSingleBlogData', this.BlogId)
    .map((response: Response) => response.json());
  }
  deleteBlog(id: string) {
    this.BlogId = {
      blogid: id
    };
    return this.http.post('https://admin.chaseyoursport.com/blog/deleteBlog', this.BlogId)
    .map(res => res.json());
  }
}
