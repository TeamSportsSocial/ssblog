import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  NgZone,
  PLATFORM_ID,
  Inject,
  AfterViewInit
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {PropertyService} from '../services/property.service';
import {PostService} from '../services/post.service';
import {LinkService} from '../services/link.service';
import {ActivatedRoute} from '@angular/router';
import { ɵgetDOM } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  topMargin;
  dataRecieved: boolean = false;
  show: boolean = false;
  tempBlog= [];
  savedDetails: {
    tempBlog: any[],
    pageNumber: number
  };
  tempBlogDetails;
  blogDetails;

  pageNumber= 1;
  recievedKey;
  mobileView: boolean= false;
  haveData: boolean= true;
  keywords= ' ';
  keys = ' ';
  keyArray = [];
  isBrowser: boolean = false;
  @ViewChild('searchPage') searchPage;
  @ViewChild('blog') blog;
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private recieveHeight: PropertyService,
    private renderer: Renderer2,
    private recieveData: PropertyService,
    private recievekey: PropertyService,
    private get: PostService,
    private route:  ActivatedRoute,
    private zone: NgZone,
    private titleService: Title,
    private metaService: Meta,
    private link: LinkService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    console.log(this.isBrowser);
  }

    ngOnInit() {
      this.setTopMargin();
      this.recievekeyFromUrl();
      this.setMobileView();

    }

    ngAfterViewInit() {
      this.setTopMargin();
     // this.recievekeyFromUrl();
    }
    setCanonicalURL() {
      this.link.addTag( { rel: 'canonical', href: 'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-')})
    }
    setTitle() {
      this.titleService.setTitle(this.recievedKey + ` | Latest updates,trends,blogs,news and articles | Sports Social Blog`);
    }
    setMetaTags() {
      this.metaService.addTags([
        { name: 'description', content: 'All you need to know about' + this.recievedKey + 'updates,news,trends and articles' },
        { name: 'title', content: this.recievedKey + ' Blogs'},
        { name: 'keywords' , content: this.keywords},
        { name: 'theme-color', content: '#4327a0'},
        { property: 'og:title', content: this.recievedKey + 'Blogs' },
        { property: 'og:description', content: 'All you need to know about' + this.recievedKey + 'updates,news,trends and articles'},
        { property: 'og:url', content:  'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-')},
        { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        { property: 'og:site_name', content: 'Chase Your Sport' },
        { property: 'fb:app_id', content: '1750709328507665'},
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@Chaseyoursport'},
        { name: 'twitter:creator', content: '@NadeemKhan'},
        { name: 'twitter:title', content: this.recievedKey + ' Blogs'},
        { name: 'twitter:description', content: 'All you need to know about' + this.recievedKey + 'updates, news, trends and articles'},
        { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
      ]);
    }
    getBlogs() {
      const blogDetails: {
        blogId: string;
        blogImage: string;
        bloggerName: string,
        // bloggerImage: string,
        heading: string,
        // content: string,
        insertedDate: string,
        viewCount: string,
        shareCount: string,
        // keywords: string[],
        // exactDate: string;
        // readingTime: string;
        metaDesc: string;
        imageDesc: string;
        primaryKeyword: string;
         // shortTitle: string;
      }[] = [];
      this.get.blogData(this.pageNumber, this.recievedKey).subscribe(
        (data) => {
          if (data.length > 0) {
            this.haveData = true;
          } else {
            this.haveData = false;
          }
          if (data.length === 0 && this.pageNumber === 1) {

          }
          this.show = true;
          this.dataRecieved = true;
          // tslint:disable-next-line:forin
          for (const i in data) {
              blogDetails.push(
                {
                  blogId: data[i].blogId,
                  blogImage: data[i].blogImage,
                  bloggerName: data[i].bloggerName,
                 // bloggerImage: data[i].bloggerImage,
                  heading: data[i].heading,
                  // content: data[i].content,
                  insertedDate: this.timePassed(data[i].insertedDate),
                  viewCount: data[i].viewCount,
                  shareCount: data[i].shareCount,
                 // keywords: data[i].keywords.split(','),
                 //  exactDate: this.ExactDate(data[i].insertedDate),
                  // readingTime: this.timeToRead(data[i].Content),
                  metaDesc: data[i].metaDesc == null ? ' ' : data[i].metaDesc,
                  imageDesc: data[i].imageDesc == null ? ' ' : data[i].imageDesc,
                  primaryKeyword: data[i].primaryKeyword == null ? 'sports social' : data[i].primaryKeyword,
                  // shortTitle: data[i].shortTitle == null ? data[i].heading : data[i].shortTitle
                }
              );
              this.keys += blogDetails[i].keywords + ',';
            }
          this.blogDetails = blogDetails;
          this.keyArray = this.keys.trim().split(',');
          this.keyArray =  Array.from(new Set(this.keyArray));
          this.keywords = this.keyArray.toString();
          console.log(this.keys, this.keyArray, this.keywords);
          // this.setCanonicalURL();
          // this.setMetaTags();
          }

        );

    }
    recievekeyFromUrl() {

      this.recievedKey = this.route.snapshot.url[0].path.replace(/-/g, ' ');
        this.route.params.subscribe(
          (params) => {
            this.pageNumber = 1;
            this.recievedKey = params.tag.replace(/-/g, ' ');
            this.setTitle();
            this.getBlogs();

          }
        );
    }

    setMobileView() {
      const width = ɵgetDOM().getBoundingClientRect(this.searchPage.nativeElement).width;
      if (width < 700) {
        this.mobileView = true;
       }else {
         this.mobileView = false;
       }
    }

    timeToRead(s: string) {
      const words = s.split(' ');
      const time = Math.round(words.length / 180);
      if (time > 1) {
        return time + ' min read';
      }else {
        return '2 min read';
      }
    }

    ExactDate(i: number) {
      const writtenDate = new Date(i * 1000);
      return writtenDate.toDateString();
    }

    timePassed(i: string){

        const writtenDate = new Date(parseInt(i) * 1000);
        const presentDate = new Date();
        // console.log(writtenDate.toDateString(),presentDate.getDate() ," date")
        if (writtenDate.getFullYear() === presentDate.getFullYear()){
          if (writtenDate.getMonth() === presentDate.getMonth()){
            if (writtenDate.getDate() === presentDate.getDate()){
                if (writtenDate.getHours() === presentDate.getHours()){
                  if (writtenDate.getMinutes() === presentDate.getMinutes()){
                    if (writtenDate.getSeconds() - presentDate.getSeconds()){
                      return 'Just Now';
                    }else {
                      return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                    }
                  }else {
                    return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
                  }
                }
                else{
                  return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
                }
            }
            else{
              return presentDate.getDate() - writtenDate.getDate() + ' day ago';
            }
          }
          else{
            return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
          }
        }
        else{
          return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago';
        }

    }


    setTopMargin(){
      this.recieveHeight.ofHeader.subscribe(
        margin => {
        this.topMargin = margin;
        }
      );
      this.renderer.setStyle(this.searchPage.nativeElement, 'margin-top', this.topMargin + 'px');
    }


    @HostListener('window:resize', [])onresize(){
      this.setTopMargin();

      this.setMobileView();
    }

    nextPage(){
      this.pageNumber++;
      this.dataRecieved = false;
      this.get.blogData(this.pageNumber, this.recievedKey).subscribe(
        data => {
          console.log(data, ' nm');
          this.dataRecieved = true;
          if (data.length > 0){
            this.haveData = true;
          }
          else{
            this.haveData = false;
          }
          console.log(this.haveData);
          for (const i in data){
            this.blogDetails.push(
              {
                blogId: data[i].blogId,
                blogImage: data[i].blogImage,
                bloggerName: data[i].bloggerName,
                // bloggerImage: data[i].bloggerImage,
                heading: data[i].heading,
                // Content: data[i].Content,
                insertedDate: this.timePassed(data[i].insertedDate),
                viewCount: data[i].viewCount,
                shareCount: data[i].shareCount,
               //  keywords: data[i].keywords.split(','),
                // exactDate: this.ExactDate(data[i].insertedDate),
               //  readingTime: this.timeToRead(data[i].Content),
                metaDesc: data[i].metaDesc == null ? ' ' : data[i].metaDesc,
                imageDesc: data[i].imageDesc == null ? ' ' : data[i].imageDesc,
                primaryKeyword: data[i].primaryKeyword == null ? 'sport social' : data[i].primaryKeyword,
               // ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
              }
            );
         }
         // sessionStorage.setItem('searchedBlog',JSON.stringify(this.blogDetails))
        }
      );
      // sessionStorage.setItem('pageNumber',JSON.stringify(this.pageNumber));
    }

}
