"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var link_service_1 = require("../../services/link.service");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var platform_browser_2 = require("@angular/platform-browser");
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(reciveHeight, renderer, get, metaService, platformId, link) {
        this.reciveHeight = reciveHeight;
        this.renderer = renderer;
        this.get = get;
        this.metaService = metaService;
        this.link = link;
        this.latestBlogDetails = [];
        this.blogDetails = [];
        this.topBlogDetails = [];
        this.restBlogDetails = [];
        this.removeTrendingBlock = false;
        this.mobileView = false;
        this.nextPageNumber = 1;
        this.defaultKey = 'dfg';
        this.show = false;
        this.dataRecived = false;
        this.haveData = true;
        this.count = 0;
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
        this.isBrowser = common_1.isPlatformBrowser(platformId);
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.setMobileView();
        if (this.isBrowser) {
            this.getBlog();
        }
    };
    BlogsComponent.prototype.getBlog = function () {
        var _this = this;
        this.get.blogData(this.nextPageNumber, this.defaultKey).subscribe(function (data) {
            console.log(data);
            _this.show = true;
            _this.dataRecived = true;
            // tslint:disable-next-line:forin
            for (var i in data) {
                _this.blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    // bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    // content: data[i].content,
                    insertedDate: _this.timePassed(data[i].insertedDate),
                    viewCount: data[i].viewCount,
                    shareCount: data[i].shareCount,
                    // keywords: data[i].keywords.split(','),
                    // exactDate: this.ExactDate(data[i].insertedDate),
                    // readingTime: this.timeToRead(data[i].Content),
                    metaDesc: 'chase your sport',
                    imageDesc: data[i].imageDesc,
                    primaryKeyword: data[i].primaryKeyword == null ? 'sports social' : data[i].primaryKeyword,
                });
            }
            // console.log(this.blogDetails)
            _this.latestBlogDetails.push({
                blogId: _this.blogDetails[0].blogId,
                blogImage: _this.blogDetails[0].blogImage,
                bloggerName: _this.blogDetails[0].bloggerName,
                // bloggerImage: this.blogDetails[0].bloggerImage,
                heading: _this.blogDetails[0].heading,
                // content: this.blogDetails[0].content,
                insertedDate: _this.blogDetails[0].insertedDate,
                viewCount: _this.blogDetails[0].viewCount,
                shareCount: _this.blogDetails[0].shareCount,
                // keywords: this.blogDetails[0].keywords,
                // exactDate: this.blogDetails[0].exactDate,
                // readingTime: this.blogDetails[0].readingTime,
                metaDesc: _this.blogDetails[0].metaDesc,
                imageDesc: _this.blogDetails[0].imageDesc,
                primaryKeyword: _this.blogDetails[0].primaryKeyword,
            });
            for (var i = 1; i < 4; i++) {
                _this.topBlogDetails.push({
                    blogId: _this.blogDetails[i].blogId,
                    blogImage: _this.blogDetails[i].blogImage,
                    bloggerName: _this.blogDetails[i].bloggerName,
                    // bloggerImage: this.blogDetails[i].bloggerImage,
                    heading: _this.blogDetails[i].heading,
                    // content: this.blogDetails[i].content,
                    insertedDate: _this.blogDetails[i].insertedDate,
                    viewCount: _this.blogDetails[i].viewCount,
                    shareCount: _this.blogDetails[i].shareCount,
                    // keywords: this.blogDetails[i].keywords,
                    // exactDate: this.blogDetails[i].exactDate,
                    //  readingTime: this.blogDetails[i].readingTime,
                    metaDesc: _this.blogDetails[i].metaDesc,
                    imageDesc: _this.blogDetails[i].imageDesc,
                    primaryKeyword: _this.blogDetails[i].primaryKeyword,
                });
            }
            for (var i = 4; i < _this.blogDetails.length; i++) {
                _this.restBlogDetails.push({
                    blogId: _this.blogDetails[i].blogId,
                    blogImage: _this.blogDetails[i].blogImage,
                    bloggerName: _this.blogDetails[i].bloggerName,
                    // bloggerImage: this.blogDetails[i].bloggerImage,
                    heading: _this.blogDetails[i].heading,
                    // content: this.blogDetails[i].content,
                    insertedDate: _this.blogDetails[i].insertedDate,
                    viewCount: _this.blogDetails[i].viewCount,
                    shareCount: _this.blogDetails[i].shareCount,
                    // keywords: this.blogDetails[i].keywords,
                    // exactDate: this.blogDetails[i].exactDate,
                    // readingTime: this.blogDetails[i].readingTime,
                    metaDesc: _this.blogDetails[i].metaDesc,
                    imageDesc: _this.blogDetails[i].imageDesc,
                    primaryKeyword: _this.blogDetails[i].primaryKeyword,
                });
            }
        });
    };
    BlogsComponent.prototype.setMobileView = function () {
        var width = platform_browser_2.ɵgetDOM().getBoundingClientRect(this.window.nativeElement).width;
        console.log(width);
        if (width > 600) {
            this.mobileView = false;
        }
        else {
            this.mobileView = true;
        }
    };
    BlogsComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    BlogsComponent.prototype.showTrendingBlock = function () {
        var width = platform_browser_2.ɵgetDOM().getBoundingClientRect(this.window.nativeElement).width;
        if (this.blogDetails.length === 0 || width < 950) {
            return false;
        }
        if (this.blogDetails.length >= 0 && width > 950) {
            return true;
        }
    };
    BlogsComponent.prototype.ngAfterViewInit = function () {
        this.setTopMargin();
    };
    BlogsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    BlogsComponent.prototype.onresize = function () {
        //console.log(ɵgetDOM().getBoundingClientRect(document.body).width, ' b');
        this.setTopMargin();
        this.showTrendingBlock();
        this.setMobileView();
        if (this.blogDetails.length > 0) {
            this.show = true;
        }
    };
    BlogsComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i) * 1000);
        var presentDate = new Date();
        if (writtenDate.getFullYear() === presentDate.getFullYear()) {
            if (writtenDate.getMonth() === presentDate.getMonth() || writtenDate.getDate() > presentDate.getDate()) {
                if (writtenDate.getDate() === presentDate.getDate()) {
                    if (writtenDate.getHours() === presentDate.getHours()) {
                        if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                            if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                                return 'Just Now';
                            }
                            else {
                                return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                            }
                        }
                        else {
                            return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
                        }
                    }
                    else {
                        return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
                    }
                }
                else {
                    var date = (presentDate.getDate() - writtenDate.getDate());
                    if (date < 0) {
                        date += 30;
                    }
                    return date + ' day ago';
                }
            }
            else {
                return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
            }
        }
        else {
            return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago';
        }
    };
    BlogsComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    BlogsComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    BlogsComponent.prototype.nextPage = function () {
        var _this = this;
        this.dataRecived = false;
        this.nextPageNumber++;
        if (this.nextPageNumber > 1) {
            this.get.blogData((this.nextPageNumber), this.defaultKey).subscribe(function (data) {
                _this.dataRecived = true;
                if (data.length === 0) {
                    _this.haveData = false;
                }
                else {
                    _this.haveData = true;
                }
                // tslint:disable-next-line:forin
                for (var i in data) {
                    _this.restBlogDetails.push({
                        blogId: data[i].blogId,
                        blogImage: data[i].blogImage,
                        bloggerName: data[i].bloggerName,
                        // bloggerImage: data[i].bloggerImage,
                        heading: data[i].heading,
                        // content: data[i].content,
                        insertedDate: _this.timePassed(data[i].insertedDate),
                        viewCount: data[i].viewCount,
                        shareCount: data[i].vhareCount,
                        // keywords: data[i].keywords.split(','),
                        //  exactDate: this.ExactDate(data[i].insertedDate),
                        // readingTime: this.timeToRead(data[i].Content),
                        metaDesc: data[i].metaDesc,
                        imageDesc: data[i].imageDesc,
                        primaryKeyword: data[i].primaryKeyword == null ? 'sport social' : data[i].primaryKeyword,
                    });
                }
            });
        }
    };
    BlogsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-blogs',
                    templateUrl: './blogs.component.html',
                    styleUrls: ['./blogs.component.css']
                },] },
    ];
    /** @nocollapse */
    BlogsComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: post_service_1.PostService, },
        { type: platform_browser_1.Meta, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: link_service_1.LinkService, },
    ]; };
    BlogsComponent.propDecorators = {
        'blog': [{ type: core_1.ViewChild, args: ['blog',] },],
        'window': [{ type: core_1.ViewChild, args: ['window',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return BlogsComponent;
}());
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map