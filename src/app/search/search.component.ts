import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  NgZone
} from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';
import {PropertyService} from '../services/property.service';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';
import { WindowRefService } from '../services/window-ref.service';

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
    private metaService:Meta,
    private winRef: WindowRefService
  ) {
    metaService.addTags([
      { name: 'author',   content: 'Coursetro.com'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }
    ]);
  }

  ngOnInit() {
    this.setTopMargin();

    this.recievekeyFromUrl();

    this.setMobileView();

    }
    ngAfterViewInit() {
      this.setTopMargin();
      this.recievekeyFromUrl();
    }

    setTitle() {
      this.titleService.setTitle(this.recievedKey + ',' +
                  'Read the latest articles, blogs, news and other informations related to '
                  + this.recievedKey);
    }
    setMetaTags() {
      this.metaService.addTags([
        { rel: 'canonical', href: 'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-')},
        { name: 'description', content: 'Read the latest articles, blogs, news and other informations related to '
          + this.recievedKey },
        { name: 'title', content: this.recievedKey + 'Blogs'},
        { name: 'theme-color', content: '#4327a0'},
        { property: 'og:title', content: this.recievedKey + 'Blogs' },
        { property: 'og:description', content: 'Read the latest articles, blogs, news and other informations related to '
           + this.recievedKey},
        { property: 'og:url', content:  'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-')},
        { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        { property: 'og:site_name', content: 'Chase Your Sport' },
        { property: 'fb:app_id', content: '1750709328507665'},
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@Chaseyoursport'},
        { name: 'twitter:creator', content: '@NadeemKhan'},
        { name: 'twitter:title', content: this.recievedKey + 'Blogs'},
        { name: 'twitter:description', content: 'Read the latest articles, blogs, news and other informations related to '
          + this.recievedKey},
        { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
      ]);
    }
    getBlogs() {
      const blogDetails: {
        blogId: string;
        blogImage: string;
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
      }[] = [];
      this.get.blogData(this.pageNumber,this.recievedKey).subscribe(
        (data) => {
          if(data.length > 0) {
            this.haveData = true;
          } else {
            this.haveData = false;
          }
          if(data.length==0 && this.pageNumber==1){

          }
          this.show=true;
          this.dataRecieved=true;
          for(let i in data){
              blogDetails.push(
                {
                  blogId: data[i].blogId,
                  blogImage: data[i].blogImage,
                  bloggerName: data[i].bloggerName,
                  bloggerImage: data[i].bloggerImage,
                  heading: data[i].heading,
                  Content: data[i].Content,
                  insertedDate: this.timePassed(data[i].insertedDate),
                  ViewCount: data[i].ViewCount,
                  ShareCount: data[i].ShareCount,
                  keywords: data[i].keywords.split(','),
                  exactDate: this.ExactDate(data[i].insertedDate),
                  readingTime: this.timeToRead(data[i].Content)
                }
              )
            }
          this.blogDetails = blogDetails;
          }
        )
        this.setMetaTags();
    }
    recievekeyFromUrl() {

      this.recievedKey=this.route.snapshot.url[0].path.replace(/-/g, ' ')
      this.route.params.subscribe(
        (params)=>{
          this.pageNumber=1
          // console.log(params, " params")
          this.recievedKey=params.tag.replace(/-/g, ' ')
          this.setTitle()
          this.getBlogs()

        }
      )

    }

    setMobileView(){
      if(this.winRef.nativeWindow.innerWidth<700){
        this.mobileView=true;
       }
       else{
         this.mobileView=false;
       }

    }

    timeToRead(s:string){
      let words = s.split(' ');
      let time=Math.round(words.length/180)
      if(time>1){
        return time + ' min read'
      }
      else{
        return '2 min read'
      }
    }

    ExactDate(i:number){
      let writtenDate=new Date(i*1000);
      return writtenDate.toDateString()
    }

    timePassed(i: string){
      
        let writtenDate = new Date(parseInt(i) * 1000);
        let presentDate = new Date();
        if (writtenDate.getFullYear() === presentDate.getFullYear()) {
          if (writtenDate.getMonth() === presentDate.getMonth() || writtenDate.getDate() > presentDate.getDate()) {
            if (writtenDate.getDate() === presentDate.getDate()) {
                if (writtenDate.getHours() === presentDate.getHours()) {
                  if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                    if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                      return 'Just Now'
                    }
                    else{
                      return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                    }
                  }
                  else{
                    return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago'
                  }
                }
                else{
                  return presentDate.getHours() - writtenDate.getHours() + ' hrs ago'
                }
            }
            else{
              let date = (presentDate.getDate() - writtenDate.getDate());
              if (date < 0) {
                date += 30;
              }
              return date + ' day ago';
            }
          }
          else{
            return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
          }
        }
        else{
          return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago'
        }
       
    }


    setTopMargin(){
      this.recieveHeight.ofHeader.subscribe(
        margin=>{
        this.topMargin=margin
        }
      )
      this.renderer.setStyle(this.searchPage.nativeElement,'margin-top',this.topMargin+'px')
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
          console.log(data, ' nm')
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
                keywords:data[i].keywords.split(','),
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
