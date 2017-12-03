"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var LatestBlogComponent = /** @class */ (function () {
    function LatestBlogComponent(Send, recieveWidth, renderer, post, platformId) {
        this.Send = Send;
        this.recieveWidth = recieveWidth;
        this.renderer = renderer;
        this.post = post;
        this.openFullImage = false;
        this.isloading = true;
        this.dataRecieved = false;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
    }
    LatestBlogComponent.prototype.ngOnInit = function () {
        this.Content = this.strip(this.content);
        this.blog = {
            blogId: this.blogId,
            blogImage: this.blogImage,
            bloggerName: this.bloggerName,
            // bloggerImage: this.bloggerImage,
            heading: this.heading,
            // content: this.content,
            insertedDate: this.insertedDate,
            viewCount: this.viewCount,
            shareCount: this.shareCount,
            // keywords: this.keywords,
            // exactDate: this.exactDate,
            // readingTime: this.readingTime,
            metaDesc: this.metaDesc,
            imageDesc: this.imageDesc,
            primaryKeyword: this.primaryKeyword,
        };
        this.responsiveDesign();
        if (this.blogImage) {
            this.dataRecieved = true;
        }
    };
    LatestBlogComponent.prototype.ngAfterViewInit = function () {
        this.heightOfInitialImage();
        if (this.blogImage) {
            this.dataRecieved = true;
        }
    };
    LatestBlogComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    LatestBlogComponent.prototype.removeInitialImage = function () {
        this.isloading = false;
    };
    LatestBlogComponent.prototype.setDefault = function () {
        this.blogImage = '/assets/images/default-image.png';
    };
    LatestBlogComponent.prototype.send = function () {
        this.Send.detailsofBlog.next(this.blog);
        if (this.isBrowser) {
            window.scrollTo(0, 0);
        }
    };
    LatestBlogComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    LatestBlogComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    LatestBlogComponent.prototype.heightOfInitialImage = function () {
        var width = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.latest.nativeElement).width;
        if (width <= 600) {
            var Width = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.initialImage.nativeElement).width;
            var height = .72 * Width;
            this.renderer.setStyle(this.initialImage.nativeElement, 'height', height + 'px');
        }
    };
    LatestBlogComponent.prototype.onresize = function () {
        this.responsiveDesign();
    };
    LatestBlogComponent.prototype.responsiveDesign = function () {
        var width;
        this.recieveWidth.ofWindow.subscribe(function (data) {
            width = data;
        });
        if (width >= 1000) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '8% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '2.2em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (width > 800 && width < 1000) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '8% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.8em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (width < 800 && width >= 600) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '4% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.1em');
        }
        if (width < 600 && width > 400) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '15% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1em');
        }
        if (width < 400 && width > 340) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '15% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.3em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1em');
        }
        if (width < 340) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '15% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.2em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1em');
        }
    };
    LatestBlogComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-latest-blog',
                    templateUrl: './latest-blog.component.html',
                    styleUrls: ['./latest-blog.component.css']
                },] },
    ];
    /** @nocollapse */
    LatestBlogComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: post_service_1.PostService, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    LatestBlogComponent.propDecorators = {
        'blogId': [{ type: core_1.Input },],
        'blogImage': [{ type: core_1.Input },],
        'bloggerName': [{ type: core_1.Input },],
        'bloggerImage': [{ type: core_1.Input },],
        'heading': [{ type: core_1.Input },],
        'content': [{ type: core_1.Input },],
        'insertedDate': [{ type: core_1.Input },],
        'viewCount': [{ type: core_1.Input },],
        'shareCount': [{ type: core_1.Input },],
        'keywords': [{ type: core_1.Input },],
        'exactDate': [{ type: core_1.Input },],
        'readingTime': [{ type: core_1.Input },],
        'metaDesc': [{ type: core_1.Input },],
        'imageDesc': [{ type: core_1.Input },],
        'primaryKeyword': [{ type: core_1.Input },],
        'shortTitle': [{ type: core_1.Input },],
        'DescChild': [{ type: core_1.ViewChild, args: ['DescChild',] },],
        'latestTitle': [{ type: core_1.ViewChild, args: ['latestTitle',] },],
        'latestDesc': [{ type: core_1.ViewChild, args: ['latestDesc',] },],
        'blogimage': [{ type: core_1.ViewChild, args: ['blogimage',] },],
        'latest': [{ type: core_1.ViewChild, args: ['latest',] },],
        'initialImage': [{ type: core_1.ViewChild, args: ['initialImage',] },],
        'Desc': [{ type: core_1.ViewChild, args: ['Desc',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return LatestBlogComponent;
}());
exports.LatestBlogComponent = LatestBlogComponent;
//# sourceMappingURL=latest-blog.component.js.map