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
    heading:string,
    Content:string,
    insertedDate:string,
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
    heading:string,
    Content:string,
    insertedDate:string,
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
    heading:string,
    Content:string,
    insertedDate:string,
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
    heading:string,
    Content:string,
    insertedDate:string,
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
    heading:string,
    Content:string,
    insertedDate:string,
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
    sessionStorage.removeItem('Blog')
    sessionStorage.removeItem('pageNumber')
    sessionStorage.removeItem('searchedBlog')
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
    this.nextPageNumber=JSON.parse(sessionStorage.getItem('blogPageNumber'))
    console.log(this.nextPageNumber," try")
    if(this.nextPageNumber==null){
      this.nextPageNumber=1
    }
    if(this.nextPageNumber==1){
    this.get.blogData(this.nextPageNumber,this.defaultKey).subscribe(
      (data)=>{ 
        this.show=true;
        this.dataRecived=true;
        for(let i in data){
            this.blogDetails.push(
              {
                blogId:data[i].blogId,
                blogImage:data[i].blogImage,
                bloggerName:data[i].bloggerName,
                bloggerImage:data[i].bloggerImage,
                heading:data[i].heading,
                Content:data[i].Content,
                insertedDate:this.timePassed(data[i].insertedDate),
                viewCount:"50",
                shareCount:"50",
                keywords:data[i].keywords.split(","),
                exactDate:this.ExactDate(data[i].insertedDate)
              }
            )
        }
        console.log(this.blogDetails, " tfd")
        this.latestBlogDetails.push(
          {
            blogId:this.blogDetails[0].blogId,
            blogImage:this.blogDetails[0].blogImage,
            bloggerName:this.blogDetails[0].bloggerName,
            bloggerImage:this.blogDetails[0].bloggerImage,
            heading:this.blogDetails[0].heading,
            Content:this.blogDetails[0].Content,
            insertedDate:this.blogDetails[0].insertedDate,
            viewCount:"50",
            shareCount:"50",
            keywords:this.blogDetails[0].keywords,
            exactDate:this.blogDetails[0].exactDate
          }
        )
        for(var i=1; i<4;i++){
          this.topBlogDetails.push(
            {
              blogId:this.blogDetails[i].blogId,
              blogImage:this.blogDetails[i].blogImage,
              bloggerName:this.blogDetails[i].bloggerName,
              bloggerImage:this.blogDetails[i].bloggerImage,
              heading:this.blogDetails[i].heading,
              Content:this.blogDetails[i].Content,
              insertedDate:this.blogDetails[i].insertedDate,
              viewCount:"50",
              shareCount:"50",
              keywords:this.blogDetails[i].keywords,
              exactDate:this.blogDetails[i].exactDate
            }
          )
        }
       for(var i=4;i<this.blogDetails.length;i++){
        this.restBlogDetails.push(
          {
            blogId:this.blogDetails[i].blogId,
            blogImage:this.blogDetails[i].blogImage,
            bloggerName:this.blogDetails[i].bloggerName,
            bloggerImage:this.blogDetails[i].bloggerImage,
            heading:this.blogDetails[i].heading,
            Content:this.blogDetails[i].Content,
            insertedDate:this.blogDetails[i].insertedDate,
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
  else{
    this.blogDetails=JSON.parse(sessionStorage.getItem('blogData'))
    console.log(this.blogDetails," mus")
    this.latestBlogDetails.push(
      {
        blogId:this.blogDetails[0].blogId,
        blogImage:this.blogDetails[0].blogImage,
        bloggerName:this.blogDetails[0].bloggerName,
        bloggerImage:this.blogDetails[0].bloggerImage,
        heading:this.blogDetails[0].heading,
        Content:this.blogDetails[0].Content,
        insertedDate:this.blogDetails[0].insertedDate,
        viewCount:"50",
        shareCount:"50",
        keywords:this.blogDetails[0].keywords,
        exactDate:this.blogDetails[0].exactDate
      }
    )
    for(var i=1; i<4;i++){
      this.topBlogDetails.push(
        {
          blogId:this.blogDetails[i].blogId,
          blogImage:this.blogDetails[i].blogImage,
          bloggerName:this.blogDetails[i].bloggerName,
          bloggerImage:this.blogDetails[i].bloggerImage,
          heading:this.blogDetails[i].heading,
          Content:this.blogDetails[i].Content,
          insertedDate:this.blogDetails[i].insertedDate,
          viewCount:"50",
          shareCount:"50",
          keywords:this.blogDetails[i].keywords,
          exactDate:this.blogDetails[i].exactDate
        }
      )
    }
   for(var i=4;i<this.blogDetails.length;i++){
    this.restBlogDetails.push(
      {
        blogId:this.blogDetails[i].blogId,
        blogImage:this.blogDetails[i].blogImage,
        bloggerName:this.blogDetails[i].bloggerName,
        bloggerImage:this.blogDetails[i].bloggerImage,
        heading:this.blogDetails[i].heading,
        Content:this.blogDetails[i].Content,
        insertedDate:this.blogDetails[i].insertedDate,
        viewCount:"50",
        shareCount:"50",
        keywords:this.blogDetails[i].keywords,
        exactDate:this.blogDetails[i].exactDate
      }
    )
  }
  this.show=true;
  this.dataRecived=true;
  } 
   
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
     // console.log("tr")
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
  @HostListener('window:scroll',[])onsrcol(){
    console.log(window.scrollY)
  }
  nextPage(){
    this.dataRecived=false;
    this.nextPageNumber++;
    if(this.nextPageNumber>1){
      this.get.blogData((this.nextPageNumber),this.defaultKey).subscribe(
        (data)=>{
          this.dataRecived=true;
           console.log(data.length)
           for(let i in data){
            this.restBlogDetails.push(
              {
                blogId:data[i].blogId,
                blogImage:data[i].blogImage,
                bloggerName:data[i].bloggerName,
                bloggerImage:data[i].bloggerImage,
                heading:data[i].heading,
                Content:data[i].Content,
                insertedDate:this.timePassed(data[i].insertedDate),
                viewCount:"50",
                shareCount:"50",
                keywords:data[i].keywords.split(","),
                exactDate:this.ExactDate(data[i].insertedDate)
              }
            )
           }
           console.log(this.restBlogDetails.concat(this.topBlogDetails).concat(this.latestBlogDetails),"  hr")
           sessionStorage.setItem('blogData',JSON.stringify((this.latestBlogDetails).concat(this.topBlogDetails).concat(this.restBlogDetails)))
        }
      )
    }
   
    sessionStorage.setItem('blogPageNumber',JSON.stringify(this.nextPageNumber))
  }

}
