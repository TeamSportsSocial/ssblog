import { 
  Component, 
  OnInit,
  ViewChild,
  Renderer2,
  HostListener
} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {GetService} from "../services/get.service";

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
  }[]=[];

  pageNumber=1;
  recievedKey;
  mobileView:boolean=false;
  @ViewChild('searchPage') searchPage;
  @ViewChild('blog') blog;
  constructor(
    private recieveHeight:PropertyService,
    private renderer:Renderer2,
    private recieveData: PropertyService,
    private recievekey: PropertyService,
    private get: GetService
  ) { }

  ngOnInit() {
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
      this.topMargin=margin
      }
   )
   this.recievekey.ofBlogCard.subscribe(
     res=>{
       this.recievedKey=res
      }
   )
   if(window.innerWidth<700){
     this.mobileView=true;
   }
   else{
     this.mobileView=false;
   }
   
   if(this.recievedKey!=undefined){
     sessionStorage.setItem('key',JSON.stringify(this.recievedKey))
   }
   if(this.recievedKey==undefined){
     this.recievedKey=JSON.parse(sessionStorage.getItem('key'))
     this.pageNumber=JSON.parse(sessionStorage.getItem('pageNumber'))
   }
   console.log(this.recievedKey, "rt")
   this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+"px")
   if(this.pageNumber==1){
   this.get.blogData(this.pageNumber,this.recievedKey).subscribe(
    (data)=>{ 
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
              viewCount:"50",
              shareCount:"50",
              keywords:data[i].keywords.split(","),
              exactDate:this.ExactDate(data[i].insertedDate)
            }
          )
      }
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
  ngAfterViewInit(){
    
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
      this.topMargin=margin
      }
   )
  this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+"px")
  
  }
  @HostListener('window:resize',[])onresize(){
    this.recieveHeight.ofHeader.subscribe(
      margin=>{
      this.topMargin=margin
      }
  )
  this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+"px")
  if(window.innerWidth<700){
    this.mobileView=true;
  }
  else{
    this.mobileView=false;
  }
  }
  nextPage(){
    this.pageNumber++;
    this.dataRecieved=false;
    this.get.blogData(this.pageNumber,this.recievedKey).subscribe(
      data=>{
        console.log(data, " nm")
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
              viewCount:"50",
              shareCount:"50",
              keywords:data[i].keywords.split(","),
              exactDate:this.ExactDate(data[i].insertedDate)
            }
          )
       }
       sessionStorage.setItem('searchedBlog',JSON.stringify(this.blogDetails))
      }
    )
   // console.log(this.blogDetails, " nm")
    if(this.pageNumber>1){
      sessionStorage.setItem('pageNumber',JSON.stringify(this.pageNumber));
      
    }
  }

}
