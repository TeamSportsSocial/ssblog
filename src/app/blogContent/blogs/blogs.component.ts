import { 
  Component, 
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChildren,
  SimpleChanges,
  ChangeDetectorRef
} from '@angular/core';
import {PropertyService} from "../../services/property.service";
import {GetService} from "../../services/get.service";


@Component({
  selector: 'SportSocial-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit,AfterViewInit {
  latestBlogDetails:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string[],
    exactDate:string;
  }[]=[]
  blogDetails:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string[],
    exactDate:string;
  }[]=[]
  topBlogDetails:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string[],
    exactDate:string;
  }[]=[]
  restBlogDetails:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string[],
    exactDate:string;
  }[]=[]
  mobileBlogDetails:{
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keys:string[],
    exactDate:string;
  }[]=[]
  topMargin;
  removeTrendingBlock:boolean=false;
  mobileView=false;
  @ViewChild('blog') blog;
  constructor(
    private reciveHeight:PropertyService,
    private renderer:Renderer2,
    private get: GetService,
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit(){
    sessionStorage.clear();
    if(window.innerWidth>950){
      this.removeTrendingBlock=false;
      this.mobileView=false;
    }
    if(window.innerWidth>600 && window.innerWidth<=950){
      this.removeTrendingBlock=true;
      this.mobileView=false;
    }
    if(window.innerWidth<=600 ){
      this.removeTrendingBlock=true;
      this.mobileView=true;
    }
    this.get.blogData(0).subscribe(
      (data)=>{
        for(let i in data){
            this.blogDetails.push(
              {
                blogImage:data[i].blogImage,
                bloggerName:data[i].bloggerName,
                bloggerImage:data[i].bloggerImage,
                title:data[i].heading,
                desc:data[i].Content,
                dow:this.timePassed(data[i].insertedDate),
                viewCount:"50",
                shareCount:"50",
                keys:data[i].keys.split(","),
                exactDate:this.ExactDate(data[i].insertedDate)
              }
            )
        }
        //console.log(this.blogDetails)
        this.latestBlogDetails.push(
          {
            blogImage:this.blogDetails[this.blogDetails.length-1].blogImage,
            bloggerName:this.blogDetails[this.blogDetails.length-1].bloggerName,
            bloggerImage:this.blogDetails[this.blogDetails.length-1].bloggerImage,
            title:this.blogDetails[this.blogDetails.length-1].title,
            desc:this.blogDetails[this.blogDetails.length-1].desc,
            dow:this.blogDetails[this.blogDetails.length-1].dow,
            viewCount:"50",
            shareCount:"50",
            keys:this.blogDetails[this.blogDetails.length-1].keys,
            exactDate:this.blogDetails[this.blogDetails.length-1].exactDate
          }
        )
        for(var i=this.blogDetails.length-2; i>this.blogDetails.length-5;i--){
          this.topBlogDetails.push(
            {
              blogImage:this.blogDetails[i].blogImage,
              bloggerName:this.blogDetails[i].bloggerName,
              bloggerImage:this.blogDetails[i].bloggerImage,
              title:this.blogDetails[i].title,
              desc:this.blogDetails[i].desc,
              dow:this.blogDetails[i].dow,
              viewCount:"50",
              shareCount:"50",
              keys:this.blogDetails[i].keys,
              exactDate:this.blogDetails[i].exactDate
            }
          )
        }
       for(var i=this.blogDetails.length-5;i>=0;i--){
        this.restBlogDetails.push(
          {
            blogImage:this.blogDetails[i].blogImage,
            bloggerName:this.blogDetails[i].bloggerName,
            bloggerImage:this.blogDetails[i].bloggerImage,
            title:this.blogDetails[i].title,
            desc:this.blogDetails[i].desc,
            dow:this.blogDetails[i].dow,
            viewCount:"50",
            shareCount:"50",
            keys:this.blogDetails[i].keys,
            exactDate:this.blogDetails[i].exactDate
          }
        )
      }
     // console.log(this.restBlogDetails, " i")
      for(var i=this.blogDetails.length-2;i>=0;i--){
        this.mobileBlogDetails.push(
          {
            blogImage:this.blogDetails[i].blogImage,
            bloggerName:this.blogDetails[i].bloggerName,
            bloggerImage:this.blogDetails[i].bloggerImage,
            title:this.blogDetails[i].title,
            desc:this.blogDetails[i].desc,
            dow:this.blogDetails[i].dow,
            viewCount:"50",
            shareCount:"50",
            keys:this.blogDetails[i].keys,
            exactDate:this.blogDetails[i].exactDate
          }
        )
       }
      }
    )
    
  
  }
  ngAfterViewInit(){
    this.reciveHeight.ofKeyWords.subscribe(
      (margin)=>this.topMargin=margin
    ) 
    this.renderer.setStyle(this.blog.nativeElement,'margin-top',this.topMargin+"px")
  }
  ngAfterViewChecked(){
    this.reciveHeight.ofKeyWords.subscribe(
      (margin)=>this.topMargin=margin
    ) 
    this.renderer.setStyle(this.blog.nativeElement,'margin-top',this.topMargin+"px")
  }
  @HostListener('window:resize',[]) onresize(){
    this.reciveHeight.ofKeyWords.subscribe(
      (margin)=>this.topMargin=margin
    )
    this.renderer.setStyle(this.blog.nativeElement,'margin-top',this.topMargin+"px");
    if(window.innerWidth>950){
      this.removeTrendingBlock=false;
      this.mobileView=false;
    }
    if(window.innerWidth>600 && window.innerWidth<=950){
      this.removeTrendingBlock=true;
      this.mobileView=false;
    }
    if(window.innerWidth<=600 ){
      this.removeTrendingBlock=true;
      this.mobileView=true;
    }
  }
  timePassed(i:string){
      let writtenDate=new Date(i);
      let presentDate=new Date();
      //console.log(writtenDate.getDate(),presentDate.getDate())
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
    return writtenDate.toDateString()
  }
  @HostListener('window:scroll',[]) onscroll(){
    let currentPageNumber=this.get.page.pageNumber
    let nextPageNumber=Math.round((window.scrollY)/1500)
    if(nextPageNumber>currentPageNumber && nextPageNumber>0){
      this.get.blogData(nextPageNumber).subscribe(
        (data)=>{
           for(let i in data){
            this.restBlogDetails.push(
              {
                blogImage:data[i].blogImage,
                bloggerName:data[i].bloggerName,
                bloggerImage:data[i].bloggerImage,
                title:data[i].heading,
                desc:data[i].Content,
                dow:data[i].insertedDate,
                viewCount:"50",
                shareCount:"50",
                keys:data[i].keys,
                exactDate:this.blogDetails[i].exactDate
              }
            )
           }
        }
      )
      //console.log(this.restBlogDetails)
    }

  }


}
