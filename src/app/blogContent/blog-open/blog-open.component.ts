import {
    Component,
    OnInit,
    ViewChild,
    Renderer2,
    HostListener,
    NgZone,
    PLATFORM_ID,
    Inject,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import {Http} from '@angular/http';
import { Meta, Title } from '@angular/platform-browser';
import {PropertyService} from '../../services/property.service';
import {SaveService} from '../../services/save.service';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ɵgetDOM } from '@angular/platform-browser';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FacebookService } from '../../services/facebook.service';
import { LinkService } from '../../services/link.service';

declare var FB: any;

@Component({
  selector: 'SportSocial-blog-open',
  templateUrl: './blog-open.component.html',
  styleUrls: ['./blog-open.component.css']
})
export class BlogOpenComponent implements OnInit, AfterViewInit {
    temp;
    blog;
    topMargin;
    removeSocial: boolean=false;
    isConnectedWithFacebook: boolean=false;
    mobileView=false;
    dataRecived=false;
    openFullImage=false;
    relatedArticles=false;
    blogDataRecieved=false;
    blogID;
    Keywords = [];
    ViewCount: number;
    ShareCount: number;
    loading = true;
    content;
    contentForShare;
    keys;
    isBrowser = false;
    readTimeCalc: boolean;
    url;
    @ViewChild('openBlog') openBlog;
    @ViewChild('Social') Social;
    @ViewChild('BlogInfo') BlogInfo;
    @ViewChild('popup') popup;
    @ViewChild('fullImage') fullImage;
    @ViewChild('BlogImage') BlogImage;
    @ViewChild('userImage') userImage;
    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private recieve: PropertyService ,
        private recieveHeight: PropertyService,
        private link: PropertyService,
        private renderer: Renderer2,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private sendKey: PropertyService,
        private router: Router,
        private post: PostService,
        private send: PostService,
        private metaService: Meta,
        private load: PostService,
        private titleService: Title,
        private Fb: FacebookService,
        private http: Http,
        private Link: LinkService,
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        console.log("costructor call")
     }

    ngOnInit() {
        console.log('blog opened');
        this.blogDataRecieved = false;
        this.recieveBlogIdFromUrl();
        this.setTopMargin();
        this.setMobileView();
    }
    
    ngAfterViewInit() {
        if (this.isBrowser) {
            this.scriptOfTwitter();
        }
        console.log('blog opened after view');
    }

    setTitle() {
        if (this.route.snapshot.url[0].path !== 'sportsocialblog' || this.route.snapshot.url[1].path !== 'page') {
            this.titleService.setTitle(this.blog.heading + ' | Chase Your Sport - Sports Social Blog');
        }
    }
    setCanonivalURL() {
        let key;
        if (this.Keywords[0].search(/ /g ) === -1) {
           key = this.Keywords[0] ;
        }else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        const url = 'https://www.chaseyoursport.com/' + key
        + '/' + this.blog.heading.replace(/\s/g, '-') + '/' + this.blogID;
        this.Link.addTag({ rel: 'canonical', href: url } )
    }
    sendViewCount() {
        this.send.viewCountOfBlog(this.blogID, this.ViewCount).subscribe(
            data => {
              // console.log(data, " view")
              }
        );
    }
    strip(html) {
        const tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
    removePreviousTags() {
        this.metaService.removeTag(`rel= 'canonical'`);
        this.metaService.removeTag(`property= 'og:site_name'`);
        this.metaService.removeTag(`property= 'og:image'`);
        this.metaService.removeTag(`property= 'og:url'`);
        this.metaService.removeTag(`property= 'og:description'`);
        this.metaService.removeTag(`property= 'og:title'`);
        this.metaService.removeTag(`name= 'theme-color'`);
        this.metaService.removeTag(`name= 'title'`);
        this.metaService.removeTag(`name= 'description'`);
        this.metaService.removeTag(`name= 'twitter:image:src'`);
        this.metaService.removeTag(`name= 'twitter:description'`);
        this.metaService.removeTag(`name= 'twitter:title'`);
        this.metaService.removeTag(`name= 'twitter:creator'`);
        this.metaService.removeTag(`name= 'twitter:site'`);
        this.metaService.removeTag(`name= 'twitter:card'`);
        this.metaService.removeTag(`property= 'fb:app_id'`);


    }
    setMetaTags() {
        let key;
        if (this.Keywords[0].search(/ /g ) === -1) {
           key = this.Keywords[0] ;
        }else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        this.keys = this.blog.keywords.toString();
        const url = 'https://www.chaseyoursport.com/' + key
            + '/' + this.blog.heading.replace(/\s/g, '-') + '/' + this.blogID;
        // console.log(url);
        this.metaService.addTags([
            { name: 'title', content: this.blog.heading},
            { name: 'keywords', content: this.keys},
            { name: 'theme-color', content: '#4327a0'},
            { property: 'og:title', content: this.blog.heading},
            { property: 'og:description', content: this.blog.MetaDesc},
            { property: 'og:url', content: url},
            { property: 'og:image', content: this.blog.blogImage},
            { property: 'og:type', content: 'article'},
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665'},
            { name: 'twitter:card', content: 'summary_large_image'},
            { name: 'twitter:site', content: '@Chaseyoursport'},
            { name: 'twitter:creator', content: '@NadeemKhan'},
            { name: 'twitter:title', content: this.blog.heading},
            { name: 'twitter:description', content:  this.blog.MetaDesc},
            { name: 'twitter:image:src', content: this.blog.blogImage},
          ]);
    }
    recieveBlogIdFromUrl() {
        this.blogID = this.route.snapshot.url[2].path;
        this.route.params.subscribe(
            (params) => {
              this.blogID = params.blogId;
              this.getBlogDetails();

            });
    }

    getBlogDetails() {
        this.removePreviousTags();
        let blog: {
            blogId: string;
            blogImage: string;
            bloggerName: string,
            bloggerImage: string,
            heading: string,
            Content: any,
            insertedDate: string,
            ViewCount: string,
            ShareCount: string,
            keywords: string[],
            exactDate: string;
            readingTime: string;
            MetaDesc: string;
            ImageDesc: string;
            PrimaryKeyword: string;
            ShortTilte: string;
        };
        this.load.dataOfsingleBlog(this.blogID).subscribe(
            res => {
                const data = res[0];
                // console.log(data)
                if (data === undefined  || this.route.snapshot.url[0].path === 'sportsocialblog'
                            || this.route.snapshot.url[1].path === 'page') {
                    this.router.navigate(['/']);
                } else {
                    this.blogDataRecieved = true;
                }
                blog = {
                    blogId: data.blogId,
                    blogImage: data.blogImage,
                    bloggerName: data.bloggerName,
                    bloggerImage: data.bloggerImage,
                    heading: data.heading,
                    Content: (data.Content),
                    insertedDate: this.timePassed(data.insertedDate),
                    ViewCount: data.ViewCount,
                    ShareCount: data.ShareCount,
                    keywords: data.keys.split(','),
                    exactDate: this.ExactDate(data.insertedDate),
                    readingTime: this.timeToRead(data.Content),
                    MetaDesc: data.MetaDesc,
                    ImageDesc: data.ImageDesc == null ? ' ' : data.ImageDesc,
                    PrimaryKeyword: data.PrimaryKeyword == null ? data.keys.split(',')[0] : data.PrimaryKeyword,
                    ShortTilte: data.ShortTilte == null ? data.heading : data.ShortTilte
                };
                if (blog.MetaDesc == null) {
                    blog.MetaDesc = '';
                }
                if (blog.ImageDesc == null) {
                    blog.ImageDesc = '';
                }
                this.blog = blog;
                // console.log(this.blog);
                this.Keywords = blog.keywords;
                this.content = this.sanitizer.bypassSecurityTrustHtml(data.Content);
                this.sendKey.ofBlogCard.next(this.Keywords[this.Keywords.length - 1]);
                this.setCanonivalURL();
                this.setMetaTags();
                this.setTitle();
                this.ShareCount = + blog.ShareCount;
                this.ViewCount = + (blog.ViewCount);
                this.sendViewCount();
                this.url = 'https://www.chaseyoursport.com/' + this.Keywords[0].replace(/\s+/g, '-')
                + '/' + this.blog.heading.replace(/\s+/g, '-') + '/' + this.blogID;
            }
        );
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

    timePassed(i: string) {
        const writtenDate = new Date( parseInt(i) * 1000 );
        const presentDate = new Date();
        if (writtenDate.getFullYear() === presentDate.getFullYear()) {
          if (writtenDate.getMonth() === presentDate.getMonth()) {
            if (writtenDate.getDate() === presentDate.getDate()) {
                return 'Today';
            }else {
              return presentDate.getDate() - writtenDate.getDate() + ' day ago';
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
      return writtenDate.toDateString();
    }



    setDefault() {
        this.blog.bloggerImage = '/assets/images/user.png';
    }


    removeBackgroundUserImage() {
        this.renderer.setStyle(this.userImage.nativeElement, 'background-color', 'white');
    }

    removeInitalImage(event) {
        if (event.returnValue) {
            this.loading = false;
        }
    }
    setMobileView() {
        const width = ɵgetDOM().getBoundingClientRect(this.openBlog.nativeElement).width;
            if (width > 950  ) {
                this.mobileView = false;
                this.removeSocial = false;
                this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '68%');
            }
            if (width <= 950 && width > 700 ) {
            this.removeSocial = true;
            this.mobileView = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');

            }
            if (width < 700) {
                this.removeSocial = true;
                this.mobileView = true;
                this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');
            }

    }

    scriptOfTwitter() {
        !function(d, s, id) {
            let js: any,
                fjs = d.getElementsByTagName(s)[0],
                p = 'https';
            if (!d.getElementById(id)){
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }
        (document, 'script', 'twitter-wjs');
    }

    setTopMargin() {
        this.recieveHeight.ofHeader.subscribe(
            margin => {
              this.topMargin = margin;
            }
        );
        this.renderer.setStyle(this.openBlog.nativeElement, 'margin-top', this.topMargin + 'px');
    }

    @HostListener('window:resize', []) onresize() {
        this.setMobileView();
        this.setTopMargin();
        if ( this.openFullImage === true) {
            this.onFullImageload();
        }
    }


    private handleError(error) {
        console.error('Error processing action', error);
    }


    openfullImage() {
        this.openFullImage = true;
    }
    onFullImageload() {
        if (this.isBrowser) {
            const height = this.fullImage.nativeElement.getBoundingClientRect().height;
            const top = (window.innerHeight - height) / 2;
            this.renderer.setStyle(this.fullImage.nativeElement, 'top', top + 'px');
        }
    }
    closeFullImage() {
        this.openFullImage = false;
    }
    sendShareCount() {
        this.ShareCount++;
        this.post.shareCountOfBlog(this.blog.blogId, this.ShareCount).subscribe(
            data => {
                // console.log(data, "sharedOnFacebook")
            }
        );
    }
    shareOnFacebook() {
        let key;
        if (this.Keywords[0].search(/ /g ) === -1){
            key = this.Keywords[0] ;
        }else {
             key = this.Keywords[0].replace(/\s+/g, '-')
        }
        this.sendShareCount();
        FB.ui({
            method: 'share',
            href: 'https://www.chaseyoursport.com/' + key
                + '/' + this.blog.heading.replace(/\s+/g, '-') + '/' + this.blogID,
          }, function(response){});
    }

    shareOnTwitter(){
        this.sendShareCount();
        const width  = 575,
        height = 400,
        left   = (window.innerWidth  - width)  / 2,
        top    = (window.innerHeight - height) / 2,
        url    = this.popup.nativeElement.attributes[2].value,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

        window.open(url, 'twitter', opts);

    return false;
    }

    shareOnLinkedin() {
       this.sendShareCount();
    }

    shareOnPintrest() {
        this.sendShareCount();
    }

    shareOngooglePlus() {
        this.sendShareCount();
    }

    getblogs(event) {
        const key = event.toElement.innerText;
        console.log(key, ' navigate');
        this.sendKey.ofBlogCard.next(key);

    }


}
