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
  ChangeDetectorRef,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {PropertyService} from '../../services/property.service';
import {GetService} from '../../services/get.service';
import {PostService} from '../../services/post.service';
import { LinkService} from '../../services/link.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ɵgetDOM } from '@angular/platform-browser';

@Component({
  selector: 'SportSocial-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit,AfterViewInit {
  latestBlogDetails:{
    blogId: string;
    blogImage:string;
    bloggerName:string,
    // bloggerImage:string,
    heading:string,
    // content:string,
    insertedDate:string,
    viewCount:string,
    shareCount:string,
    // keywords:string[],
    // exactDate:string;
    // readingTime:string;
    metaDesc: string;
    imageDesc: string;
    primaryKeyword: string;
    // shortTitle: string;
  }[]=[];
  blogDetails:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    // bloggerImage:string,
    heading:string,
    // content:string,
    insertedDate:string,
    viewCount:string,
    shareCount:string,
    // keywords:string[],
    // exactDate:string;
    // readingTime:string;
    metaDesc: string;
    imageDesc: string;
    primaryKeyword: string;
    // shortTitle: string;
  }[]=[];
  topBlogDetails:{
    blogId:string;
    blogImage:string;
    bloggerName:string,
    // bloggerImage:string,
    heading:string,
    // content:string,
    insertedDate:string,
    viewCount:string,
    shareCount:string,
    // keywords:string[],
   //  exactDate:string;
    // readingTime:string;
    metaDesc: string;
    imageDesc: string;
    primaryKeyword: string;
    // shortTitle: string;
  }[]= [];
  restBlogDetails:{
    blogId:string;
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
  }[]= [];
  topMargin;
  removeTrendingBlock: boolean= false;
  mobileView= false;
  nextPageNumber= 1;
  defaultKey= 'dfg';
  show: boolean= false;
  dataRecived: boolean= false;
  haveData: boolean= true;
  count= 0;
  isBrowser: boolean;
  @ViewChild('blog') blog;
  @ViewChild('window') window;
  constructor(
    private reciveHeight: PropertyService,
    private renderer: Renderer2,
    private get: PostService,
    private metaService: Meta,
    @Inject(PLATFORM_ID) platformId: Object,
    private link: LinkService,
  ) {
   //  link.addTag(  { rel: 'canonical', href: 'https://www.chaseyoursport.com/'});
   /*  metaService.addTags([
      { name: 'description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
        platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        career in sports.` },
      { name: 'keywords' , content: `Indian Sports Trends,Sports Social,Career in Sports,current trends
        in sports,Indian Sports History, Sports Social media,sports technology,Sports blog,Indian Sports
        Blog,Multiplayer Strategy Video Games,Health and Fitness Tips,Sports Analytics blog, Indian sports
        news,outlook in sports industry,future trends in sports,sports business trends, sports articles,
        sports management,Sports Social network india,sports jobs`},
      { name: 'title', content: 'Chase Your Sport: Sports Social Blog | Indian Sports Trends & Outlook'},
      { name: 'theme-color', content: '#4327a0'},
      { property: 'og:title', content: 'Chase Your Sport: Sports Social Blog | Indian Sports Trends & Outlook' },
      { property: 'og:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
      platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
      career in sports.`},
      { property: 'og:url', content:  'https://www.chaseyoursport.com/' },
      { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
      { property: 'og:site_name', content: 'Chase Your Sport' },
      { property: 'fb:app_id', content: '1750709328507665'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@Chaseyoursport'},
      { name: 'twitter:creator', content: '@NadeemKhan'},
      { name: 'twitter:title', content: 'Chase Your Sport: Sports Social Blog | Indian Sports Trends & Outlook'},
      { name: 'twitter:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
      platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
      career in sports.`},
      { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
    ]); */
    this.isBrowser = isPlatformBrowser( platformId );
  }

  ngOnInit() {
    this.setMobileView();
    if (this.isBrowser) {
      this.getBlog();
  }

  }
  getBlog() {
    this.get.blogData(this.nextPageNumber, this.defaultKey).subscribe(
      (data) => {

         console.log(data);
        this.show = true;
        this.dataRecived = true;
        // tslint:disable-next-line:forin
        for (const i in data) {
            this.blogDetails.push({
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
                // exactDate: this.ExactDate(data[i].insertedDate),
               // readingTime: this.timeToRead(data[i].Content),
                metaDesc: 'chase your sport' ,
                imageDesc: data[i].imageDesc,
                primaryKeyword: data[i].primaryKeyword == null ? 'sports social' : data[i].primaryKeyword,
                // shortTitle: data[i].shortTitle == null ? data[i].heading : data[i].shortTitle
              });
        }
       // console.log(this.blogDetails)
        this.latestBlogDetails.push(
          {
            blogId: this.blogDetails[0].blogId,
            blogImage: this.blogDetails[0].blogImage,
            bloggerName: this.blogDetails[0].bloggerName,
            // bloggerImage: this.blogDetails[0].bloggerImage,
            heading: this.blogDetails[0].heading,
            // content: this.blogDetails[0].content,
            insertedDate: this.blogDetails[0].insertedDate,
            viewCount: this.blogDetails[0].viewCount,
            shareCount: this.blogDetails[0].shareCount,
            // keywords: this.blogDetails[0].keywords,
            // exactDate: this.blogDetails[0].exactDate,
            // readingTime: this.blogDetails[0].readingTime,
            metaDesc: this.blogDetails[0].metaDesc,
            imageDesc: this.blogDetails[0].imageDesc,
            primaryKeyword: this.blogDetails[0].primaryKeyword,
            // shortTitle: this.blogDetails[0].shortTitle
          }
        );
        for (let i = 1; i < 4; i++) {
          this.topBlogDetails.push(
            {
              blogId: this.blogDetails[i].blogId,
              blogImage: this.blogDetails[i].blogImage,
              bloggerName: this.blogDetails[i].bloggerName,
              // bloggerImage: this.blogDetails[i].bloggerImage,
              heading: this.blogDetails[i].heading,
              // content: this.blogDetails[i].content,
              insertedDate: this.blogDetails[i].insertedDate,
              viewCount: this.blogDetails[i].viewCount,
              shareCount: this.blogDetails[i].shareCount,
              // keywords: this.blogDetails[i].keywords,
              // exactDate: this.blogDetails[i].exactDate,
             //  readingTime: this.blogDetails[i].readingTime,
              metaDesc: this.blogDetails[i].metaDesc,
              imageDesc: this.blogDetails[i].imageDesc,
              primaryKeyword: this.blogDetails[i].primaryKeyword,
              // shortTitle: this.blogDetails[i].shortTitle
            }
          );
        }
       for (let i = 4; i < this.blogDetails.length; i++) {
        this.restBlogDetails.push(
          {
            blogId: this.blogDetails[i].blogId,
            blogImage: this.blogDetails[i].blogImage,
            bloggerName: this.blogDetails[i].bloggerName,
            // bloggerImage: this.blogDetails[i].bloggerImage,
            heading: this.blogDetails[i].heading,
            // content: this.blogDetails[i].content,
            insertedDate: this.blogDetails[i].insertedDate,
            viewCount: this.blogDetails[i].viewCount,
            shareCount: this.blogDetails[i].shareCount,
            // keywords: this.blogDetails[i].keywords,
            // exactDate: this.blogDetails[i].exactDate,
           // readingTime: this.blogDetails[i].readingTime,
            metaDesc: this.blogDetails[i].metaDesc,
            imageDesc: this.blogDetails[i].imageDesc,
            primaryKeyword: this.blogDetails[i].primaryKeyword ,
            // shortTitle: this.blogDetails[i].shortTitle
          }
        );
      }
      }
    );
  }
  setMobileView() {
    const width =  ɵgetDOM().getBoundingClientRect(this.window.nativeElement).width;
    console.log(width)
      if( width > 600 ) {
        this.mobileView = false;
      }else {
        this.mobileView = true;
      }
  }
  setTopMargin() {
    this.reciveHeight.ofKeyWords.subscribe(
      (margin) => this.topMargin = margin
    );
    this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + 'px');
  }
  showTrendingBlock() {
    const width = ɵgetDOM().getBoundingClientRect(this.window.nativeElement).width;
      if (this.blogDetails.length === 0 || width < 950) {
        return false;
      }
      if (this.blogDetails.length >= 0 && width > 950) {
        return true;
      }
  }
  ngAfterViewInit() {
    this.setTopMargin();
  }
  ngAfterViewChecked() {
    this.reciveHeight.ofKeyWords.subscribe(
      (margin) => this.topMargin = margin
    );
    this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + 'px');
  }
  @HostListener('window:resize', []) onresize() {
    //console.log(ɵgetDOM().getBoundingClientRect(document.body).width, ' b');
    this.setTopMargin();
    this.showTrendingBlock();
    this.setMobileView();
    if (this.blogDetails.length > 0){
      this.show = true;
    }
  }
  timePassed(i: string) {
      const writtenDate = new Date(parseInt(i) * 1000);
      const presentDate = new Date();
      if (writtenDate.getFullYear() === presentDate.getFullYear()) {
        if (writtenDate.getMonth() === presentDate.getMonth() || writtenDate.getDate() > presentDate.getDate()) {
          if (writtenDate.getDate() === presentDate.getDate()) {
              if (writtenDate.getHours() === presentDate.getHours()) {
                if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                  if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                    return 'Just Now';
                  }else {
                    return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                  }
                }else {
                  return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
                }
              }else {
                return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
              }
          }else {
            let date = (presentDate.getDate() - writtenDate.getDate());
            if (date < 0) {
              date += 30;
            }
            return date + ' day ago';
          }
        }else {
          return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
        }
      }else {
        return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago';
      }
  }
  ExactDate(i: number) {
    const writtenDate = new Date(i * 1000);
    return  writtenDate.toDateString();
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
  nextPage() {
    this.dataRecived = false;
    this.nextPageNumber++;
    if (this.nextPageNumber > 1) {
      this.get.blogData((this.nextPageNumber), this.defaultKey).subscribe(
        (data) => {
          this.dataRecived = true;
           if (data.length === 0) {
             this.haveData = false;
           }else {
             this.haveData = true;
           }
           // tslint:disable-next-line:forin
           for (const i in data) {
            this.restBlogDetails.push(
              {
                blogId: data[i].blogId,
                blogImage: data[i].blogImage,
                bloggerName: data[i].bloggerName,
               // bloggerImage: data[i].bloggerImage,
                heading: data[i].heading,
               // content: data[i].content,
                insertedDate: this.timePassed(data[i].insertedDate),
                viewCount: data[i].viewCount,
                shareCount: data[i].vhareCount,
                // keywords: data[i].keywords.split(','),
              //  exactDate: this.ExactDate(data[i].insertedDate),
                // readingTime: this.timeToRead(data[i].Content),
                metaDesc: data[i].metaDesc,
                imageDesc: data[i].imageDesc,
                primaryKeyword:  data[i].primaryKeyword == null ? 'sport social' : data[i].primaryKeyword,
               // shortTitle: data[i].shortTitle == null ? data[i].heading : data[i].shortTitle
              }
            );
           }
        }
      );
    }
  }

}
