import { 
  Component, 
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  NgZone 
} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {PostService} from "../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  topMargin;
  dataRecieved:boolean=false;
  show:boolean=false;
  tempBlog=[];
  savedDetails:{
    tempBlog:any[],
    pageNumber:number
  }
  tempBlogDetails;
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
  }[]=[];

  pageNumber=1;
  recievedKey;
  mobileView:boolean=false;
  haveData:boolean=true;
  @ViewChild('searchPage') searchPage;
  @ViewChild('blog') blog;
  constructor(
    private recieveHeight:PropertyService,
    private renderer:Renderer2,
    private recieveData: PropertyService,
    private recievekey: PropertyService,
    private get: PostService,
    private route:  ActivatedRoute,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.setTopMargin()
   
    this.recievekeyFromUrl()
     
    this.setMobileView()
   
    this.pageNumber=JSON.parse(sessionStorage.getItem('pageNumber'))
    if(this.pageNumber==null){
      this.pageNumber=1
    }
    console.log(this.recievedKey,this.pageNumber, "rt")
   
    if(this.pageNumber==1){
      this.get.blogData(this.pageNumber,this.recievedKey).subscribe(
      (data)=>{ 
        if(data.length>0){
          this.haveData=true
        }
        else{
          this.haveData=false
        }
        if(data.length==0 && this.pageNumber==1){

        }
        this.show=true;
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
                insertedDate:this.timePassed(data[i].insertedDate),
                ViewCount:data[i].ViewCount,
                ShareCount:data[i].ShareCount,
                keywords:data[i].keywords.split(","),
                exactDate:this.ExactDate(data[i].insertedDate),
                readingTime:this.timeToRead(data[i].Content)
              }
            )
          }
        console.log(this.blogDetails)
        }
      )
    }
    else{
      this.show=true;
      this.dataRecieved=true;
      this.blogDetails=JSON.parse(sessionStorage.getItem('searchedBlog'))
      console.log(this.blogDetails," vtds")
    }
    
    }
    
    recievekeyFromUrl(){
      this.recievedKey=this.route.snapshot.url[0].path.replace(/-/g, " ")
      this.route.params.subscribe(
        (params)=>{
          console.log(params, " params")
          this.recievedKey=params.tag.replace(/-/g, " ")
          
          
        }
      )
    }
    
    setMobileView(){
      if(window.innerWidth<700){
        this.mobileView=true;
       }
       else{
         this.mobileView=false;
       }
      
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
    
    ExactDate(i:number){
      let writtenDate=new Date(i);
      return writtenDate.toDateString()
    }
    
    timePassed(i:string){
      let writtenDate=new Date(i);
      let presentDate=new Date();
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
    
    
    setTopMargin(){
      this.recieveHeight.ofHeader.subscribe(
        margin=>{
        this.topMargin=margin
        }
      ) 
      this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+"px")
    }
    
    ngAfterViewInit(){
      this.setTopMargin()
    }
    
    @HostListener('window:resize',[])onresize(){
      this.setTopMargin()
      
      this.setMobileView()
    }
    
    
    nextPage(){
      this.pageNumber++;
      this.dataRecieved=false;
      this.get.blogData(this.pageNumber,this.recievedKey).subscribe(
        data=>{
          console.log(data, " nm")
          this.dataRecieved=true;
          if(data.length>0){
            this.haveData=true
          }
          else{
            this.haveData=false;
          }
          console.log(this.haveData)
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
                ViewCount:data[i].ViewCount,
                ShareCount:data[i].ShareCount,
                keywords:data[i].keywords.split(","),
                exactDate:this.ExactDate(data[i].insertedDate),
                readingTime:this.timeToRead(data[i].Content)
              }
            )
         }
         sessionStorage.setItem('searchedBlog',JSON.stringify(this.blogDetails))
        }
      )
      sessionStorage.setItem('pageNumber',JSON.stringify(this.pageNumber));
    }

}
