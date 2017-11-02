import {
    Component,
    OnInit,
    ViewChild,
    Renderer2,
    HostListener,
    NgZone
} from '@angular/core';
import {Http} from '@angular/http';
import { Meta,Title } from '@angular/platform-browser';
import {PropertyService} from '../../services/property.service';
import {SaveService} from '../../services/save.service';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

import {FacebookService} from '../../services/facebook.service';
import {Router} from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { WindowRefService } from '../../services/window-ref.service';

declare var FB: any;

@Component({
  selector: 'SportSocial-blog-open',
  templateUrl: './blog-open.component.html',
  styleUrls: ['./blog-open.component.css']
})
export class BlogOpenComponent implements OnInit {
    temp;
    blog;
    topMargin;
    removeSocial:boolean=false;
    isConnectedWithFacebook:boolean=false;
    mobileView:boolean=false;
    dataRecived:boolean=false;
    openFullImage:boolean=false;
    relatedArticles:boolean=false;
    blogDataRecieved:boolean=false;
    blogID;
    Keywords=[];
    ViewCount:number;
    ShareCount:number;
    loading:boolean=true;
    content;
    @ViewChild('openBlog') openBlog;
    @ViewChild('Social') Social;
    @ViewChild('BlogInfo') BlogInfo;
    @ViewChild('popup') popup;
    @ViewChild('fullImage') fullImage;
    @ViewChild('BlogImage') BlogImage;
    constructor(
        private recieve: PropertyService ,
        private recieveHeight: PropertyService,
        private renderer: Renderer2,
        private route: ActivatedRoute,
        private Fb: FacebookService,
        private sendKey: PropertyService,
        private router: Router,
        private post: PostService,
        private send: PostService,
        private metaService: Meta,
        private load: PostService,
        private zone: NgZone,
        private titleService: Title,
        private sanitizer: DomSanitizer,
        private winRef: WindowRefService
    ) {
        Fb.init();
        this.blogID = this.route.snapshot.url[2].path;
    }

    ngOnInit() {
        this.recieveBlogIdFromUrl();
        this.setTopMargin();
        this.setMobileView();
    }

    ngAfterViewInit() {
        this.scriptOfTwitter();
         // this.recieveBlogIdFromUrl();
    }
    setTitle() {
        if (this.route.snapshot.url[0].path !== 'sportsocialblog' || this.route.snapshot.url[1].path !== 'page') {
            this.titleService.setTitle(this.blog.heading);
        }
    }
    sendViewCount() {
        this.send.viewCountOfBlog(this.blogID, this.ViewCount).subscribe(
            data => {
              // console.log(data, " view")
              }
        );
    }

    strip(html) {
        const tmp = document.createElement('DIV');
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
        this.metaService.addTags([
            { rel: 'canonical', href: 'https://www.chaseyoursport.com/'},
            { name: 'description', content: 'Read the latest articles, blogs, news and other informations related to '},
            { name: 'title', content: this.blog.heading},
            { name: 'theme-color', content: '#4327a0'},
            { property: 'og:title', content: this.blog.heading},
            { property: 'og:description', content: 'Read the latest articles, blogs, news and other informations related to '},
            { property: 'og:url', content:  'https://www.chaseyoursport.com/'},
            { property: 'og:image', content: this.blog.blogImage},
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665'},
            { name: 'twitter:card', content: 'summary_large_image'},
            { name: 'twitter:site', content: '@Chaseyoursport'},
            { name: 'twitter:creator', content: '@NadeemKhan'},
            { name: 'twitter:title', content: this.blog.heading},
            { name: 'twitter:description', content: 'Read the latest articles, blogs, news and other informations related to '},
            { name: 'twitter:image:src', content: this.blog.blogImage},
          ]);
      }
    loadBlogFromSendData() {
        this.recieve.detailsofBlog
        .subscribe(
            data => {
                this.blogDataRecieved = true;
                this.blog = {
                    blogId: data['blogId'],
                    blogImage: data['blogImage'],
                    bloggerName: data['bloggerName'],
                    bloggerImage: data['bloggerImage'],
                    heading: ( data['heading']),
                    Content: this.sanitizer.bypassSecurityTrustHtml(data['Content']),
                    insertedDate: data['insertedDate'],
                    ViewCount: data['ViewCount'],
                    ShareCount: data['ShareCount'],
                    keywords: data['keywords'],
                    exactDate: data['exactDate'],
                    readingTime: data['readingTime']
                };
            }
        );
    }

    recieveBlogIdFromUrl() {
        this.blogID = this.route.snapshot.url[2].path;
        this.route.params.subscribe(
            (params) => {
              this.blogID = params.blogId;
              console.clear();
              console.log(this.blogID);
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
        };
        this.load.dataOfsingleBlog(this.blogID).subscribe(
            res => {
                const data = res[0];
                if (data === undefined  ) {
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
                    Content: data.Content,
                    insertedDate: this.timePassed(data.insertedDate),
                    ViewCount: data.ViewCount,
                    ShareCount: data.ShareCount,
                    keywords: data.keys.split(','),
                    exactDate: this.ExactDate(data.insertedDate),
                    readingTime: this.timeToRead(data.Content)
                };
                this.blog = blog;
                this.content = this.sanitizer.bypassSecurityTrustHtml(data['Content']);
                this.setMetaTags();
                this.ShareCount = + blog.ShareCount;
                this.ViewCount = + (blog.ViewCount);
                this.sendViewCount();
                this.Keywords = blog.keywords;

               // window.scrollTo(0, 0);
                this.sendKey.ofBlogCard.next(this.Keywords[this.Keywords.length - 1]);
                this.setTitle();
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
        const writtenDate = new Date( parseInt(i)* 1000);
        const presentDate = new Date();
        if (writtenDate.getFullYear() === presentDate.getFullYear()) {
          if (writtenDate.getMonth() === presentDate.getMonth()) {
            if (writtenDate.getDate() === presentDate.getDate()) {
                return 'Today';
            }
            else {
              return presentDate.getDate() - writtenDate.getDate() + ' day ago';
            }
          }
          else {
            return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
          }
        }
        else{
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

    removeInitalImage(event) {
        console.log(event.returnValue, 'load');
        if (event.returnValue) {
            this.loading = false;
        }
    }
    showprogress(event) {
        console.log(event, 'progress');
    }
    setDefaultBlogImage() {
        this.blog.blogImage = '/assets/images/default-image.png';
    }
    setMobileView() {
        if (this.winRef.nativeWindow.innerWidth > 950 ) {
            this.mobileView = false;
            this.removeSocial = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '68%');
        }
        if (this.winRef.nativeWindow.innerWidth <= 950 && window.innerWidth > 700 ) {
           this.removeSocial = true;
           this.mobileView = false;
           this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');

        }
        if (this.winRef.nativeWindow.innerWidth < 700) {
            this.removeSocial = true;
            this.mobileView = true;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');
        }

    }

    scriptOfTwitter() {
        !function(d,s,id) {
            let js: any,
                fjs =d.getElementsByTagName(s)[0],
                p ='https';
            if(!d.getElementById(id)){
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js,fjs);
            }
        }
        (document,'script','twitter-wjs');
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



    openfullImage() {
        this.openFullImage = true;
    }
    onFullImageload() {
        const height = this.fullImage.nativeElement.getBoundingClientRect().height;
        const top = (window.innerHeight - height) / 2;
        this.renderer.setStyle(this.fullImage.nativeElement, 'top', top + 'px');
    }
    closeFullImage() {
        this.openFullImage = false;
    }

    sendShareCount() {
        this.post.shareCountOfBlog(this.blog.blogId, this.ShareCount).subscribe(
            data => {
                // console.log(data, "sharedOnFacebook")
            }
        );
    }
    shareOnFacebook() {
        this.sendShareCount();
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object : {
                   'og:url': 'https://www.chaseyoursport.com/' + this.Keywords[0].replace(/ /g, '-')
                        + '/' + this.blog.heading.replace(/ /g, '-') + '/' + this.blogID ,
                   'og:title': this.blog.heading,
                   'og:description': this.strip (this.blog.Content),
                   'og:image': this.blog.blogImage,
                   'og:image:width': '180',
                   'og:image:height': '110'
                }
            })
            },
            // callback
            function(response) {});
    }

    shareOnTwitter(){
        this.sendShareCount();
        var width  = 575,
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


    getblogs(event) {
        const key = event.toElement.innerText;
        console.log(key, ' navigate');
       // this.router.navigate(['/'+key])
        this.sendKey.ofBlogCard.next(key);

    }



}
