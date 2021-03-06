"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var property_service_1 = require("../services/property.service");
var post_service_1 = require("../services/post.service");
var link_service_1 = require("../services/link.service");
var router_1 = require("@angular/router");
var platform_browser_2 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(platformId, recieveHeight, renderer, recieveData, recievekey, get, route, zone, titleService, metaService, link) {
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.recieveData = recieveData;
        this.recievekey = recievekey;
        this.get = get;
        this.route = route;
        this.zone = zone;
        this.titleService = titleService;
        this.metaService = metaService;
        this.link = link;
        this.dataRecieved = false;
        this.show = false;
        this.tempBlog = [];
        this.pageNumber = 1;
        this.mobileView = false;
        this.haveData = true;
        this.keywords = ' ';
        this.keys = ' ';
        this.keyArray = [];
        this.isBrowser = false;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        console.log(this.isBrowser);
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.recievekeyFromUrl();
        this.setMobileView();
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        this.setTopMargin();
        // this.recievekeyFromUrl();
    };
    SearchComponent.prototype.setCanonicalURL = function () {
        this.link.addTag({ rel: 'canonical', href: 'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-') });
    };
    SearchComponent.prototype.setTitle = function () {
        this.titleService.setTitle(this.recievedKey + " | Latest updates,trends,blogs,news and articles | Sports Social Blog");
    };
    SearchComponent.prototype.setMetaTags = function () {
        this.metaService.addTags([
            { name: 'description', content: 'All you need to know about' + this.recievedKey + 'updates,news,trends and articles' },
            { name: 'title', content: this.recievedKey + ' Blogs' },
            { name: 'keywords', content: this.keywords },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: this.recievedKey + 'Blogs' },
            { property: 'og:description', content: 'All you need to know about' + this.recievedKey + 'updates,news,trends and articles' },
            { property: 'og:url', content: 'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-') },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Chaseyoursport' },
            { name: 'twitter:creator', content: '@NadeemKhan' },
            { name: 'twitter:title', content: this.recievedKey + ' Blogs' },
            { name: 'twitter:description', content: 'All you need to know about' + this.recievedKey + 'updates, news, trends and articles' },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
    };
    SearchComponent.prototype.getBlogs = function () {
        var _this = this;
        var blogDetails = [];
        this.get.blogData(this.pageNumber, this.recievedKey).subscribe(function (data) {
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            if (data.length === 0 && _this.pageNumber === 1) {
            }
            _this.show = true;
            _this.dataRecieved = true;
            // tslint:disable-next-line:forin
            for (var i in data) {
                blogDetails.push({
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
                    //  exactDate: this.ExactDate(data[i].insertedDate),
                    // readingTime: this.timeToRead(data[i].Content),
                    metaDesc: data[i].metaDesc == null ? ' ' : data[i].metaDesc,
                    imageDesc: data[i].imageDesc == null ? ' ' : data[i].imageDesc,
                    primaryKeyword: data[i].primaryKeyword == null ? 'sports social' : data[i].primaryKeyword,
                });
                _this.keys += blogDetails[i].keywords + ',';
            }
            _this.blogDetails = blogDetails;
            _this.keyArray = _this.keys.trim().split(',');
            _this.keyArray = Array.from(new Set(_this.keyArray));
            _this.keywords = _this.keyArray.toString();
            console.log(_this.keys, _this.keyArray, _this.keywords);
            // this.setCanonicalURL();
            // this.setMetaTags();
        });
    };
    SearchComponent.prototype.recievekeyFromUrl = function () {
        var _this = this;
        this.recievedKey = this.route.snapshot.url[0].path.replace(/-/g, ' ');
        this.route.params.subscribe(function (params) {
            _this.pageNumber = 1;
            _this.recievedKey = params.tag.replace(/-/g, ' ');
            _this.setTitle();
            _this.getBlogs();
        });
    };
    SearchComponent.prototype.setMobileView = function () {
        var width = platform_browser_2.ɵgetDOM().getBoundingClientRect(this.searchPage.nativeElement).width;
        if (width < 700) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    SearchComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    SearchComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    SearchComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i) * 1000);
        var presentDate = new Date();
        // console.log(writtenDate.toDateString(),presentDate.getDate() ," date")
        if (writtenDate.getFullYear() === presentDate.getFullYear()) {
            if (writtenDate.getMonth() === presentDate.getMonth()) {
                if (writtenDate.getDate() === presentDate.getDate()) {
                    if (writtenDate.getHours() === presentDate.getHours()) {
                        if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                            if (writtenDate.getSeconds() - presentDate.getSeconds()) {
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
                    return presentDate.getDate() - writtenDate.getDate() + ' day ago';
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
    SearchComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.searchPage.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    SearchComponent.prototype.onresize = function () {
        this.setTopMargin();
        this.setMobileView();
    };
    SearchComponent.prototype.nextPage = function () {
        var _this = this;
        this.pageNumber++;
        this.dataRecieved = false;
        this.get.blogData(this.pageNumber, this.recievedKey).subscribe(function (data) {
            console.log(data, ' nm');
            _this.dataRecieved = true;
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            console.log(_this.haveData);
            for (var i in data) {
                _this.blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    // bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    // Content: data[i].Content,
                    insertedDate: _this.timePassed(data[i].insertedDate),
                    viewCount: data[i].viewCount,
                    shareCount: data[i].shareCount,
                    //  keywords: data[i].keywords.split(','),
                    // exactDate: this.ExactDate(data[i].insertedDate),
                    //  readingTime: this.timeToRead(data[i].Content),
                    metaDesc: data[i].metaDesc == null ? ' ' : data[i].metaDesc,
                    imageDesc: data[i].imageDesc == null ? ' ' : data[i].imageDesc,
                    primaryKeyword: data[i].primaryKeyword == null ? 'sport social' : data[i].primaryKeyword,
                });
            }
            // sessionStorage.setItem('searchedBlog',JSON.stringify(this.blogDetails))
        });
        // sessionStorage.setItem('pageNumber',JSON.stringify(this.pageNumber));
    };
    SearchComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-search',
                    templateUrl: './search.component.html',
                    styleUrls: ['./search.component.css']
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: property_service_1.PropertyService, },
        { type: property_service_1.PropertyService, },
        { type: post_service_1.PostService, },
        { type: router_1.ActivatedRoute, },
        { type: core_1.NgZone, },
        { type: platform_browser_1.Title, },
        { type: platform_browser_1.Meta, },
        { type: link_service_1.LinkService, },
    ]; };
    SearchComponent.propDecorators = {
        'searchPage': [{ type: core_1.ViewChild, args: ['searchPage',] },],
        'blog': [{ type: core_1.ViewChild, args: ['blog',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map