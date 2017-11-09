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
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


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
    bloggerImage:string,
    heading:string,
    Content:string,
    insertedDate:string,
    ViewCount:string,
    ShareCount:string,
    keywords:string[],
    exactDate:string;
    readingTime:string;
    MetaDesc: string;
    ImageDesc: string;
  }[]=[];
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
    readingTime:string;
    MetaDesc: string;
    ImageDesc: string
  }[]=[];
  topBlogDetails:{
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
    readingTime:string;
    MetaDesc: string;
    ImageDesc: string
  }[]= [];
  restBlogDetails:{
    blogId:string;
    blogImage: string;
    bloggerName: string,
    bloggerImage: string,
    heading: string,
    Content: string,
    insertedDate: string,
    ViewCount: string,
    ShareCount: string,
    keywords: string[],
    exactDate: string;
    readingTime: string;
    MetaDesc: string;
    ImageDesc: string
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
  constructor(
    private reciveHeight: PropertyService,
    private renderer: Renderer2,
    private get: PostService,
    private metaService: Meta,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    metaService.addTags([
      { rel: 'canonical', href: 'https://www.chaseyoursport.com/'},
      { name: 'description', content: `chase your sports provides a better & sustainable
      platform for the sports analytics and latest national as well as international
      sports news & update for better engagement with the sports-friendly environment &
      future aspects in INDIA....` },
      { name: 'keywords' , content: `best sports social media, best sports social campaigns, extreme sports social network,
      sports social network in india launch, sports social network india, action sports blog,
      adventure sports blog, blog sports vent, indian sports blog, sports analytics blog,
      all sports news, best college sports news network, best online sports news, best sports news channel,
      cricket sports news, current sports news, daily sports news, indian sports news today, latest updates in sports in india
      indian sports analysis group, indian sports analysis jobs, indian sports analysis news,
      indian sports analysis questions, indian sports analysis report, international sports news & analysis report,
      international news of sports, international sports breaking news, international sports news articles,
      international sports news basketball, international sports news india, international sports news latest,
      international sports news soccer, football sports news, latest international news about sports,
      latest international sports news, latest national and international sports news`},
      { name: 'title', content: 'Chase Your Sport: The Sports Social Blog'},
      { name: 'theme-color', content: '#4327a0'},
      { property: 'og:title', content: 'Chase Your Sport: The Sports Social Blog' },
      { property: 'og:description', content: `chase your sports provides a better & sustainable
      platform for the sports analytics and latest national as well as international
      sports news & update for better engagement with the sports-friendly environment &
      future aspects in INDIA....`},
      { property: 'og:url', content:  'https://www.chaseyoursport.com/' },
      { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
      { property: 'og:site_name', content: 'Chase Your Sport' },
      { property: 'fb:app_id', content: '1750709328507665'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@Chaseyoursport'},
      { name: 'twitter:creator', content: '@NadeemKhan'},
      { name: 'twitter:title', content: 'Chase Your Sport:The Sports Social Blog'},
      { name: 'twitter:description', content: `chase your sports provides a better & sustainable
      platform for the sports analytics and latest national as well as international
      sports news & update for better engagement with the sports-friendly environment &
      future aspects in INDIA....`},
      { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
    ]);
    this.isBrowser = isPlatformBrowser( platformId );
  }

  ngOnInit() {
    this.setMobileView();
    this.getBlog();
  }
  getBlog() {
    this.get.blogData(this.nextPageNumber, this.defaultKey).subscribe(
      (data) => {

       // console.log(data);
        this.show = true;
        this.dataRecived = true;
        // tslint:disable-next-line:forin
        for (const i in data) {
            this.blogDetails.push({
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
                readingTime: this.timeToRead(data[i].Content),
                MetaDesc: data[i].MetaDesc,
                ImageDesc: data[i].ImageDesc
              });
        }
        this.latestBlogDetails.push(
          {
            blogId: this.blogDetails[0].blogId,
            blogImage: this.blogDetails[0].blogImage,
            bloggerName: this.blogDetails[0].bloggerName,
            bloggerImage: this.blogDetails[0].bloggerImage,
            heading: this.blogDetails[0].heading,
            Content: this.blogDetails[0].Content,
            insertedDate: this.blogDetails[0].insertedDate,
            ViewCount: this.blogDetails[0].ViewCount,
            ShareCount: this.blogDetails[0].ShareCount,
            keywords: this.blogDetails[0].keywords,
            exactDate: this.blogDetails[0].exactDate,
            readingTime: this.blogDetails[0].readingTime,
            MetaDesc: this.blogDetails[0].MetaDesc,
            ImageDesc: this.blogDetails[0].ImageDesc
          }
        );
        for (let i = 1; i < 4; i++) {
          this.topBlogDetails.push(
            {
              blogId: this.blogDetails[i].blogId,
              blogImage: this.blogDetails[i].blogImage,
              bloggerName: this.blogDetails[i].bloggerName,
              bloggerImage: this.blogDetails[i].bloggerImage,
              heading: this.blogDetails[i].heading,
              Content: this.blogDetails[i].Content,
              insertedDate: this.blogDetails[i].insertedDate,
              ViewCount: this.blogDetails[i].ViewCount,
              ShareCount: this.blogDetails[i].ShareCount,
              keywords: this.blogDetails[i].keywords,
              exactDate: this.blogDetails[i].exactDate,
              readingTime: this.blogDetails[i].readingTime,
              MetaDesc: this.blogDetails[i].MetaDesc,
              ImageDesc: this.blogDetails[i].ImageDesc
            }
          );
        }
       for (let i = 4; i < this.blogDetails.length; i++) {
        this.restBlogDetails.push(
          {
            blogId: this.blogDetails[i].blogId,
            blogImage: this.blogDetails[i].blogImage,
            bloggerName: this.blogDetails[i].bloggerName,
            bloggerImage: this.blogDetails[i].bloggerImage,
            heading: this.blogDetails[i].heading,
            Content: this.blogDetails[i].Content,
            insertedDate: this.blogDetails[i].insertedDate,
            ViewCount: this.blogDetails[i].ViewCount,
            ShareCount: this.blogDetails[i].ShareCount,
            keywords: this.blogDetails[i].keywords,
            exactDate: this.blogDetails[i].exactDate,
            readingTime: this.blogDetails[i].readingTime,
            MetaDesc: this.blogDetails[i].MetaDesc,
            ImageDesc: this.blogDetails[i].ImageDesc
          }
        );
      }
      }
    );
  }
  setMobileView() {
      if (window.innerWidth > 600 ) {
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
      if (this.blogDetails.length === 0 || window.innerWidth < 950) {
        return false;
      }
      if (this.blogDetails.length >= 0 && window.innerWidth > 950) {
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
                bloggerImage: data[i].bloggerImage,
                heading: data[i].heading,
                Content: data[i].Content,
                insertedDate: this.timePassed(data[i].insertedDate),
                ViewCount: data[i].ViewCount,
                ShareCount: data[i].ShareCount,
                keywords: data[i].keywords.split(','),
                exactDate: this.ExactDate(data[i].insertedDate),
                readingTime: this.timeToRead(data[i].Content),
                MetaDesc: data[i].MetaDesc,
                ImageDesc: data[i].ImageDesc
              }
            );
           }
        }
      );
    }
  }

}
