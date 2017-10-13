import { 
  Component, 
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  NgZone 
} from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';
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
  blogDetails;

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
    private zone: NgZone,
    private titleService:Title,
    private metaService:Meta
  ) { }

  ngOnInit() {
    this.setTopMargin()
   
    this.recievekeyFromUrl()
     
    this.setMobileView()
   
    /* this.pageNumber=JSON.parse(sessionStorage.getItem('pageNumber'))
    if(this.pageNumber==null){
      this.pageNumber=1
    } */
   /// console.log(this.recievedKey,this.pageNumber, "search")
   
    /* if(this.pageNumber==1){
      console.log(this.recievedKey,this.pageNumber, "search")
      /* this.get.blogData(this.pageNumber,this.recievedKey).subscribe(
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
        console.log(this.blogDetails, " search")
        }
      ) 
    }
    else{
      this.show=true;
      this.dataRecieved=true;
      this.blogDetails=JSON.parse(sessionStorage.getItem('searchedBlog'))
      console.log(this.blogDetails," vtds")
    }
 */    
    }
    ngAfterViewInit(){
      this.setTopMargin()
      this.recievekeyFromUrl()
    }
    
    setTitle(){
      this.titleService.setTitle(this.recievedKey+","+"Read the latest articles, blogs, news and other informations related to "+this.recievedKey)
    }
    
    getBlogs(){
      let blogDetails:{
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
              blogDetails.push(
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
          this.blogDetails=blogDetails
          }
        )
    }
    recievekeyFromUrl(){
     
      this.recievedKey=this.route.snapshot.url[0].path.replace(/-/g, " ")
      this.route.params.subscribe(
        (params)=>{
          this.pageNumber=1
          //console.log(params, " params")
          this.recievedKey=params.tag.replace(/-/g, " ")
          this.setTitle()
          this.getBlogs()
          
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
      let writtenDate=new Date(i*1000);
      return writtenDate.toDateString()
    }
    
    timePassed(i:string){
      
        let writtenDate=new Date(parseInt(i)*1000);
        let presentDate=new Date();
        //console.log(writtenDate.toDateString(),presentDate.getDate() ," date")
        if(writtenDate.getFullYear()==presentDate.getFullYear()){
          if(writtenDate.getMonth()==presentDate.getMonth()){
            if(writtenDate.getDate()==presentDate.getDate()){
                if(writtenDate.getHours()==presentDate.getHours()){
                  if(writtenDate.getMinutes()==presentDate.getMinutes()){
                    if(writtenDate.getSeconds()-presentDate.getSeconds()){
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
    
    
    setTopMargin(){
      this.recieveHeight.ofHeader.subscribe(
        margin=>{
        this.topMargin=margin
        }
      ) 
      this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+"px")
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
         //sessionStorage.setItem('searchedBlog',JSON.stringify(this.blogDetails))
        }
      )
      //sessionStorage.setItem('pageNumber',JSON.stringify(this.pageNumber));
    }

}
