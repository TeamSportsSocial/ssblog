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
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keywords:string[],
    exactDate:string;
  }[]=[]
  blogDetails:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keywords:string[],
    exactDate:string;
  }[]=[]
  topBlogDetails:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keywords:string[],
    exactDate:string;
  }[]=[]
  restBlogDetails:{
    blogId:string;    
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keywords:string[],
    exactDate:string;
  }[]=[]
  mobileBlogDetails:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    bloggerImage:string,
    title:string,
    desc:string,
    dow:string,
    viewCount:string,
    shareCount:string,
    keywords:string[],
    exactDate:string;
  }[]=[]
  topMargin;
  removeTrendingBlock:boolean=false;
  mobileView=false;
  nextPageNumber=1;
  defaultKey="dfg";
  show:boolean=false;
  dataRecived:boolean=false;
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
  
    this.get.blogData(this.nextPageNumber,this.defaultKey).subscribe(
      (data)=>{ 
        this.show=true;
        this.dataRecived=true;
        console.log("hii")
        console.log(data)
        for(let i in data){
            this.blogDetails.push(
              {
                blogId:data[i].blogId,
                blogImage:data[i].blogImage,
                bloggerName:data[i].bloggerName,
                bloggerImage:data[i].bloggerImage,
                title:data[i].heading,
                desc:data[i].Content,
                dow:this.timePassed(data[i].insertedDate),
                viewCount:"50",
                shareCount:"50",
                keywords:data[i].keywords.split(","),
                exactDate:this.ExactDate(data[i].insertedDate)
              }
            )
        }
        this.latestBlogDetails.push(
          {
            blogId:this.blogDetails[this.blogDetails.length-1].blogId,
            blogImage:this.blogDetails[this.blogDetails.length-1].blogImage,
            bloggerName:this.blogDetails[this.blogDetails.length-1].bloggerName,
            bloggerImage:this.blogDetails[this.blogDetails.length-1].bloggerImage,
            title:this.blogDetails[this.blogDetails.length-1].title,
            desc:this.blogDetails[this.blogDetails.length-1].desc,
            dow:this.blogDetails[this.blogDetails.length-1].dow,
            viewCount:"50",
            shareCount:"50",
            keywords:this.blogDetails[this.blogDetails.length-1].keywords,
            exactDate:this.blogDetails[this.blogDetails.length-1].exactDate
          }
        )
        for(var i=this.blogDetails.length-2; i>this.blogDetails.length-5;i--){
          this.topBlogDetails.push(
            {
              blogId:this.blogDetails[i].blogId,
              blogImage:this.blogDetails[i].blogImage,
              bloggerName:this.blogDetails[i].bloggerName,
              bloggerImage:this.blogDetails[i].bloggerImage,
              title:this.blogDetails[i].title,
              desc:this.blogDetails[i].desc,
              dow:this.blogDetails[i].dow,
              viewCount:"50",
              shareCount:"50",
              keywords:this.blogDetails[i].keywords,
              exactDate:this.blogDetails[i].exactDate
            }
          )
        }
       for(var i=this.blogDetails.length-5;i>=0;i--){
        this.restBlogDetails.push(
          {
            blogId:this.blogDetails[i].blogId,
            blogImage:this.blogDetails[i].blogImage,
            bloggerName:this.blogDetails[i].bloggerName,
            bloggerImage:this.blogDetails[i].bloggerImage,
            title:this.blogDetails[i].title,
            desc:this.blogDetails[i].desc,
            dow:this.blogDetails[i].dow,
            viewCount:"50",
            shareCount:"50",
            keywords:this.blogDetails[i].keywords,
            exactDate:this.blogDetails[i].exactDate
          }
        )
      }
    // console.log(this.restBlogDetails, " i")
      for(var i=this.blogDetails.length-2;i>=0;i--){
        this.mobileBlogDetails.push(
          {
            blogId:this.blogDetails[i].blogId,
            blogImage:this.blogDetails[i].blogImage,
            bloggerName:this.blogDetails[i].bloggerName,
            bloggerImage:this.blogDetails[i].bloggerImage,
            title:this.blogDetails[i].title,
            desc:this.blogDetails[i].desc,
            dow:this.blogDetails[i].dow,
            viewCount:"50",
            shareCount:"50",
            keywords:this.blogDetails[i].keywords,
            exactDate:this.blogDetails[i].exactDate
          }
        )
       }
      }
    )
    
  
  }
  showTrendingBlock(){
    if(this.blogDetails.length==0 || window.innerWidth<950){
      return false;
    }
    if(this.blogDetails.length>=0 && window.innerWidth>950){
      return true;
    }
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
    if(this.blogDetails.length>0){
      this.show=true
      console.log("tr")
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
  showLoadMorebutton(){
   if(this.dataRecived || this.show){
     return true
   }
  }
  nextPage(){
    this.dataRecived=false;
    this.nextPageNumber++;
    if(this.nextPageNumber>0){
      this.get.blogData((this.nextPageNumber),this.defaultKey).subscribe(
        (data)=>{
          this.dataRecived=true;
           console.log(data)
           if(data.length==0){
             console.log("true")
           }
           for(let i in data){
            this.restBlogDetails.push(
              {
                blogId:data[i].blogId,
                blogImage:data[i].blogImage,
                bloggerName:data[i].bloggerName,
                bloggerImage:data[i].bloggerImage,
                title:data[i].heading,
                desc:data[i].Content,
                dow:this.timePassed(data[i].insertedDate),
                viewCount:"50",
                shareCount:"50",
                keywords:data[i].keywords.split(","),
                exactDate:this.ExactDate(data[i].exactDate)
              }
            )
           }
           console.log(this.restBlogDetails)
        }
      )
    }
  }


}
