"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var platform_browser_1 = require("@angular/platform-browser");
var window_ref_service_1 = require("../../services/window-ref.service");
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(reciveHeight, renderer, get, metaService, winRef) {
        this.reciveHeight = reciveHeight;
        this.renderer = renderer;
        this.get = get;
        this.metaService = metaService;
        this.winRef = winRef;
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
        metaService.addTags([
            { rel: 'canonical', href: 'https://www.chaseyoursport.com/' },
            { name: 'description', content: "chase your sports provides a better & sustainable\n      platform for the sports analytics and latest national as well as international\n      sports news & update for better engagement with the sports-friendly environment &\n      future aspects in INDIA...." },
            { name: 'keywords', content: "best sports social media, best sports social campaigns, extreme sports social network,\n      sports social network in india launch, sports social network india, action sports blog,\n      adventure sports blog, blog sports vent, indian sports blog, sports analytics blog,\n      all sports news, best college sports news network, best online sports news, best sports news channel,\n      cricket sports news, current sports news, daily sports news, indian sports news today, latest updates in sports in india\n      indian sports analysis group, indian sports analysis jobs, indian sports analysis news,\n      indian sports analysis questions, indian sports analysis report, international sports news & analysis report,\n      international news of sports, international sports breaking news, international sports news articles,\n      international sports news basketball, international sports news india, international sports news latest,\n      international sports news soccer, football sports news, latest international news about sports,\n      latest international sports news, latest national and international sports news" },
            { name: 'title', content: 'Chase Your Sport: The Sports Social Blog' },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: 'Chase Your Sport: The Sports Social Blog' },
            { property: 'og:description', content: "chase your sports provides a better & sustainable\n      platform for the sports analytics and latest national as well as international\n      sports news & update for better engagement with the sports-friendly environment &\n      future aspects in INDIA...." },
            { property: 'og:url', content: 'https://www.chaseyoursport.com/' },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Chaseyoursport' },
            { name: 'twitter:creator', content: '@NadeemKhan' },
            { name: 'twitter:title', content: 'Chase Your Sport:The Sports Social Blog' },
            { name: 'twitter:description', content: "chase your sports provides a better & sustainable\n      platform for the sports analytics and latest national as well as international\n      sports news & update for better engagement with the sports-friendly environment &\n      future aspects in INDIA...." },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.setMobileView();
        this.getBlog();
    };
    /* setMetaTags() {
      this.metaService.addTags([
        { rel: 'canonical' , href: 'https://wwww.chaseoursport.com'},
        { name: 'author',   content: 'Coursetro.com'},
        { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
        { name: 'description', content: 'Welcome to Sports Social Blog. Here you will get all latest update regarding sports.' },
        { name: 'title', content: 'Chase Your Sport: The Sports Social Blog'},
        { name: 'theme-color', content: '#4327a0'},
        { property: 'og:title', content: 'Chase Your Sport: The Sports Social Blog' },
        { property: 'og:description', content:  'Welcome to Sports Social Blog. Here you will get all latest update regarding sports.'},
        { property: 'og:url', content:  'https://wwww.chaseoursport.com' },
        { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        { property: 'og:site_name', content: 'Chase Your Sport' },
        { property: 'fb:app_id', content: '1750709328507665'},
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@Chaseyoursport'},
        { name: 'twitter:creator', content: '@NadeemKhan'},
        { name: 'twitter:title', content: 'Chase Your Sport:The Sports Social Blog'},
        { name: 'twitter:description', content: 'Welcome to Sports Social Blog. Here you will get all latest update regarding sports.'},
        { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
      ]);
    } */
    BlogsComponent.prototype.getBlog = function () {
        var _this = this;
        this.get.blogData(this.nextPageNumber, this.defaultKey).subscribe(function (data) {
            _this.show = true;
            _this.dataRecived = true;
            for (var i_1 in data) {
                _this.blogDetails.push({
                    blogId: data[i_1].blogId,
                    blogImage: data[i_1].blogImage,
                    bloggerName: data[i_1].bloggerName,
                    bloggerImage: data[i_1].bloggerImage,
                    heading: data[i_1].heading,
                    Content: data[i_1].Content,
                    insertedDate: _this.timePassed(data[i_1].insertedDate),
                    ViewCount: data[i_1].ViewCount,
                    ShareCount: data[i_1].ShareCount,
                    keywords: data[i_1].keywords.split(','),
                    exactDate: _this.ExactDate(data[i_1].insertedDate),
                    readingTime: _this.timeToRead(data[i_1].Content)
                });
            }
            _this.latestBlogDetails.push({
                blogId: _this.blogDetails[0].blogId,
                blogImage: _this.blogDetails[0].blogImage,
                bloggerName: _this.blogDetails[0].bloggerName,
                bloggerImage: _this.blogDetails[0].bloggerImage,
                heading: _this.blogDetails[0].heading,
                Content: _this.blogDetails[0].Content,
                insertedDate: _this.blogDetails[0].insertedDate,
                ViewCount: _this.blogDetails[0].ViewCount,
                ShareCount: _this.blogDetails[0].ShareCount,
                keywords: _this.blogDetails[0].keywords,
                exactDate: _this.blogDetails[0].exactDate,
                readingTime: _this.blogDetails[0].readingTime
            });
            for (var i = 1; i < 4; i++) {
                _this.topBlogDetails.push({
                    blogId: _this.blogDetails[i].blogId,
                    blogImage: _this.blogDetails[i].blogImage,
                    bloggerName: _this.blogDetails[i].bloggerName,
                    bloggerImage: _this.blogDetails[i].bloggerImage,
                    heading: _this.blogDetails[i].heading,
                    Content: _this.blogDetails[i].Content,
                    insertedDate: _this.blogDetails[i].insertedDate,
                    ViewCount: _this.blogDetails[i].ViewCount,
                    ShareCount: _this.blogDetails[i].ShareCount,
                    keywords: _this.blogDetails[i].keywords,
                    exactDate: _this.blogDetails[i].exactDate,
                    readingTime: _this.blogDetails[i].readingTime
                });
            }
            for (var i = 4; i < _this.blogDetails.length; i++) {
                _this.restBlogDetails.push({
                    blogId: _this.blogDetails[i].blogId,
                    blogImage: _this.blogDetails[i].blogImage,
                    bloggerName: _this.blogDetails[i].bloggerName,
                    bloggerImage: _this.blogDetails[i].bloggerImage,
                    heading: _this.blogDetails[i].heading,
                    Content: _this.blogDetails[i].Content,
                    insertedDate: _this.blogDetails[i].insertedDate,
                    ViewCount: _this.blogDetails[i].ViewCount,
                    ShareCount: _this.blogDetails[i].ShareCount,
                    keywords: _this.blogDetails[i].keywords,
                    exactDate: _this.blogDetails[i].exactDate,
                    readingTime: _this.blogDetails[i].readingTime
                });
            }
        });
    };
    BlogsComponent.prototype.setMobileView = function () {
        if (this.winRef.nativeWindow.innerWidth > 600) {
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
        if (this.blogDetails.length === 0 || window.innerWidth < 950) {
            return false;
        }
        if (this.blogDetails.length >= 0 && window.innerWidth > 950) {
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
        // console.log(i, writtenDate,writtenDate.toDateString())
        return writtenDate.toDateString();
    };
    BlogsComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        //console.log(words,words.length,this.blog.blogId)
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
                if (data.length == 0) {
                    _this.haveData = false;
                }
                else {
                    _this.haveData = true;
                }
                for (var i in data) {
                    _this.restBlogDetails.push({
                        blogId: data[i].blogId,
                        blogImage: data[i].blogImage,
                        bloggerName: data[i].bloggerName,
                        bloggerImage: data[i].bloggerImage,
                        heading: data[i].heading,
                        Content: data[i].Content,
                        insertedDate: _this.timePassed(data[i].insertedDate),
                        ViewCount: '50',
                        ShareCount: '50',
                        keywords: data[i].keywords.split(','),
                        exactDate: _this.ExactDate(data[i].insertedDate),
                        readingTime: _this.timeToRead(data[i].Content)
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
        { type: window_ref_service_1.WindowRefService, },
    ]; };
    BlogsComponent.propDecorators = {
        'blog': [{ type: core_1.ViewChild, args: ['blog',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return BlogsComponent;
}());
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map