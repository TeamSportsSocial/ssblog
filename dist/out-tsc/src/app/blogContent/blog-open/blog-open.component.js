"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var router_1 = require("@angular/router");
var facebook_service_1 = require("../../services/facebook.service");
var router_2 = require("@angular/router");
var platform_browser_2 = require("@angular/platform-browser");
var window_ref_service_1 = require("../../services/window-ref.service");
var BlogOpenComponent = /** @class */ (function () {
    function BlogOpenComponent(recieve, recieveHeight, renderer, route, Fb, sendKey, router, post, send, metaService, load, zone, titleService, sanitizer, winRef) {
        this.recieve = recieve;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.route = route;
        this.Fb = Fb;
        this.sendKey = sendKey;
        this.router = router;
        this.post = post;
        this.send = send;
        this.metaService = metaService;
        this.load = load;
        this.zone = zone;
        this.titleService = titleService;
        this.sanitizer = sanitizer;
        this.winRef = winRef;
        this.removeSocial = false;
        this.isConnectedWithFacebook = false;
        this.mobileView = false;
        this.dataRecived = false;
        this.openFullImage = false;
        this.relatedArticles = false;
        this.blogDataRecieved = false;
        this.Keywords = [];
        this.loading = true;
        Fb.init();
        this.blogID = this.route.snapshot.url[2].path;
    }
    BlogOpenComponent.prototype.ngOnInit = function () {
        this.recieveBlogIdFromUrl();
        this.setTopMargin();
        this.setMobileView();
    };
    BlogOpenComponent.prototype.ngAfterViewInit = function () {
        this.scriptOfTwitter();
        // this.recieveBlogIdFromUrl();
    };
    BlogOpenComponent.prototype.setTitle = function () {
        if (this.route.snapshot.url[0].path !== 'sportsocialblog' || this.route.snapshot.url[1].path !== 'page') {
            this.titleService.setTitle(this.blog.heading);
        }
    };
    BlogOpenComponent.prototype.sendViewCount = function () {
        this.send.viewCountOfBlog(this.blogID, this.ViewCount).subscribe(function (data) {
            // console.log(data, " view")
        });
    };
    BlogOpenComponent.prototype.strip = function (html) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    BlogOpenComponent.prototype.removePreviousTags = function () {
        this.metaService.removeTag("rel= 'canonical'");
        this.metaService.removeTag("property= 'og:site_name'");
        this.metaService.removeTag("property= 'og:image'");
        this.metaService.removeTag("property= 'og:url'");
        this.metaService.removeTag("property= 'og:description'");
        this.metaService.removeTag("property= 'og:title'");
        this.metaService.removeTag("name= 'theme-color'");
        this.metaService.removeTag("name= 'title'");
        this.metaService.removeTag("name= 'description'");
        this.metaService.removeTag("name= 'twitter:image:src'");
        this.metaService.removeTag("name= 'twitter:description'");
        this.metaService.removeTag("name= 'twitter:title'");
        this.metaService.removeTag("name= 'twitter:creator'");
        this.metaService.removeTag("name= 'twitter:site'");
        this.metaService.removeTag("name= 'twitter:card'");
        this.metaService.removeTag("property= 'fb:app_id'");
    };
    BlogOpenComponent.prototype.setMetaTags = function () {
        this.metaService.addTags([
            { rel: 'canonical', href: 'https://www.chaseyoursport.com/' },
            { name: 'description', content: 'Read the latest articles, blogs, news and other informations related to ' },
            { name: 'title', content: this.blog.heading },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: this.blog.heading },
            { property: 'og:description', content: 'Read the latest articles, blogs, news and other informations related to ' },
            { property: 'og:url', content: 'https://www.chaseyoursport.com/' },
            { property: 'og:image', content: this.blog.blogImage },
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Chaseyoursport' },
            { name: 'twitter:creator', content: '@NadeemKhan' },
            { name: 'twitter:title', content: this.blog.heading },
            { name: 'twitter:description', content: 'Read the latest articles, blogs, news and other informations related to ' },
            { name: 'twitter:image:src', content: this.blog.blogImage },
        ]);
    };
    BlogOpenComponent.prototype.loadBlogFromSendData = function () {
        var _this = this;
        this.recieve.detailsofBlog
            .subscribe(function (data) {
            _this.blogDataRecieved = true;
            _this.blog = {
                blogId: data['blogId'],
                blogImage: data['blogImage'],
                bloggerName: data['bloggerName'],
                bloggerImage: data['bloggerImage'],
                heading: (data['heading']),
                Content: _this.sanitizer.bypassSecurityTrustHtml(data['Content']),
                insertedDate: data['insertedDate'],
                ViewCount: data['ViewCount'],
                ShareCount: data['ShareCount'],
                keywords: data['keywords'],
                exactDate: data['exactDate'],
                readingTime: data['readingTime']
            };
        });
    };
    BlogOpenComponent.prototype.recieveBlogIdFromUrl = function () {
        var _this = this;
        this.blogID = this.route.snapshot.url[2].path;
        this.route.params.subscribe(function (params) {
            _this.blogID = params.blogId;
            console.clear();
            console.log(_this.blogID);
            _this.getBlogDetails();
        });
    };
    BlogOpenComponent.prototype.getBlogDetails = function () {
        var _this = this;
        this.removePreviousTags();
        var blog;
        this.load.dataOfsingleBlog(this.blogID).subscribe(function (res) {
            var data = res[0];
            if (data === undefined) {
                _this.router.navigate(['/']);
            }
            else {
                _this.blogDataRecieved = true;
            }
            blog = {
                blogId: data.blogId,
                blogImage: data.blogImage,
                bloggerName: data.bloggerName,
                bloggerImage: data.bloggerImage,
                heading: data.heading,
                Content: data.Content,
                insertedDate: _this.timePassed(data.insertedDate),
                ViewCount: data.ViewCount,
                ShareCount: data.ShareCount,
                keywords: data.keys.split(','),
                exactDate: _this.ExactDate(data.insertedDate),
                readingTime: _this.timeToRead(data.Content)
            };
            _this.blog = blog;
            _this.content = _this.sanitizer.bypassSecurityTrustHtml(data['Content']);
            _this.setMetaTags();
            _this.ShareCount = +blog.ShareCount;
            _this.ViewCount = +(blog.ViewCount);
            _this.sendViewCount();
            _this.Keywords = blog.keywords;
            // window.scrollTo(0, 0);
            _this.sendKey.ofBlogCard.next(_this.Keywords[_this.Keywords.length - 1]);
            _this.setTitle();
        });
    };
    BlogOpenComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    BlogOpenComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i) * 1000);
        var presentDate = new Date();
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
        else {
            return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago';
        }
    };
    BlogOpenComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    BlogOpenComponent.prototype.setDefault = function () {
        this.blog.bloggerImage = '/assets/images/user.png';
    };
    BlogOpenComponent.prototype.removeInitalImage = function (event) {
        console.log(event.returnValue, 'load');
        if (event.returnValue) {
            this.loading = false;
        }
    };
    BlogOpenComponent.prototype.showprogress = function (event) {
        console.log(event, 'progress');
    };
    BlogOpenComponent.prototype.setDefaultBlogImage = function () {
        this.blog.blogImage = '/assets/images/default-image.png';
    };
    BlogOpenComponent.prototype.setMobileView = function () {
        if (this.winRef.nativeWindow.innerWidth > 950) {
            this.mobileView = false;
            this.removeSocial = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '68%');
        }
        if (this.winRef.nativeWindow.innerWidth <= 950 && window.innerWidth > 700) {
            this.removeSocial = true;
            this.mobileView = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');
        }
        if (this.winRef.nativeWindow.innerWidth < 700) {
            this.removeSocial = true;
            this.mobileView = true;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');
        }
    };
    BlogOpenComponent.prototype.scriptOfTwitter = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
    };
    BlogOpenComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.openBlog.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    BlogOpenComponent.prototype.onresize = function () {
        this.setMobileView();
        this.setTopMargin();
        if (this.openFullImage === true) {
            this.onFullImageload();
        }
    };
    BlogOpenComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    BlogOpenComponent.prototype.onFullImageload = function () {
        var height = this.fullImage.nativeElement.getBoundingClientRect().height;
        var top = (window.innerHeight - height) / 2;
        this.renderer.setStyle(this.fullImage.nativeElement, 'top', top + 'px');
    };
    BlogOpenComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    BlogOpenComponent.prototype.sendShareCount = function () {
        this.post.shareCountOfBlog(this.blog.blogId, this.ShareCount).subscribe(function (data) {
            // console.log(data, "sharedOnFacebook")
        });
    };
    BlogOpenComponent.prototype.shareOnFacebook = function () {
        this.sendShareCount();
        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object: {
                    'og:url': 'https://www.chaseyoursport.com/' + this.Keywords[0].replace(/ /g, '-')
                        + '/' + this.blog.heading.replace(/ /g, '-') + '/' + this.blogID,
                    'og:title': this.blog.heading,
                    'og:description': this.strip(this.blog.Content),
                    'og:image': this.blog.blogImage,
                    'og:image:width': '180',
                    'og:image:height': '110'
                }
            })
        }, 
        // callback
        function (response) { });
    };
    BlogOpenComponent.prototype.shareOnTwitter = function () {
        this.sendShareCount();
        var width = 575, height = 400, left = (window.innerWidth - width) / 2, top = (window.innerHeight - height) / 2, url = this.popup.nativeElement.attributes[2].value, opts = 'status=1' +
            ',width=' + width +
            ',height=' + height +
            ',top=' + top +
            ',left=' + left;
        window.open(url, 'twitter', opts);
        return false;
    };
    BlogOpenComponent.prototype.getblogs = function (event) {
        var key = event.toElement.innerText;
        console.log(key, ' navigate');
        // this.router.navigate(['/'+key])
        this.sendKey.ofBlogCard.next(key);
    };
    BlogOpenComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-blog-open',
                    templateUrl: './blog-open.component.html',
                    styleUrls: ['./blog-open.component.css']
                },] },
    ];
    /** @nocollapse */
    BlogOpenComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: router_1.ActivatedRoute, },
        { type: facebook_service_1.FacebookService, },
        { type: property_service_1.PropertyService, },
        { type: router_2.Router, },
        { type: post_service_1.PostService, },
        { type: post_service_1.PostService, },
        { type: platform_browser_1.Meta, },
        { type: post_service_1.PostService, },
        { type: core_1.NgZone, },
        { type: platform_browser_1.Title, },
        { type: platform_browser_2.DomSanitizer, },
        { type: window_ref_service_1.WindowRefService, },
    ]; };
    BlogOpenComponent.propDecorators = {
        'openBlog': [{ type: core_1.ViewChild, args: ['openBlog',] },],
        'Social': [{ type: core_1.ViewChild, args: ['Social',] },],
        'BlogInfo': [{ type: core_1.ViewChild, args: ['BlogInfo',] },],
        'popup': [{ type: core_1.ViewChild, args: ['popup',] },],
        'fullImage': [{ type: core_1.ViewChild, args: ['fullImage',] },],
        'BlogImage': [{ type: core_1.ViewChild, args: ['BlogImage',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return BlogOpenComponent;
}());
exports.BlogOpenComponent = BlogOpenComponent;
//# sourceMappingURL=blog-open.component.js.map