"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var common_1 = require("@angular/common");
var NormalBlogComponent = /** @class */ (function () {
    function NormalBlogComponent(Send, renderer, post, zone, platformId) {
        this.Send = Send;
        this.renderer = renderer;
        this.post = post;
        this.zone = zone;
        this.isloading = true;
        this.openFullImage = false;
        this.dataRecieved = false;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
    }
    NormalBlogComponent.prototype.ngOnInit = function () {
        this.content = this.strip(this.Content);
        this.blog = {
            blogId: this.blogId,
            blogImage: this.blogImage,
            bloggerName: this.bloggerName,
            bloggerImage: this.bloggerImage,
            heading: this.heading,
            Content: this.Content,
            insertedDate: this.insertedDate,
            ViewCount: this.ViewCount,
            ShareCount: this.ShareCount,
            keywords: this.keywords,
            exactDate: this.exactDate,
            readingTime: this.readingTime,
            MetaDesc: this.MetaDesc,
            ImageDesc: this.ImageDesc
        };
        this.setVariableFont();
        if (this.blogImage) {
            this.dataRecieved = true;
        }
        // console.log(this.blogTitle)
    };
    NormalBlogComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    NormalBlogComponent.prototype.ngAfterViewInit = function () {
        if (this.blogImage) {
            this.dataRecieved = true;
        }
    };
    NormalBlogComponent.prototype.reloadPage = function () {
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    NormalBlogComponent.prototype.setVariableFont = function () {
        if (window.innerWidth > 1200) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth > 1100 && window.innerWidth < 1200) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth < 1100 && window.innerWidth > 1000) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth < 1000 && window.innerWidth > 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.15em');
        }
        if (window.innerWidth > 700 && window.innerWidth < 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (window.innerWidth > 600 && window.innerWidth < 700) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
        if (window.innerWidth > 600 && window.innerWidth < 500) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth > 500 && window.innerWidth < 600) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 320 && window.innerWidth < 400) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
        if (window.innerWidth < 320) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '0.9em');
        }
    };
    NormalBlogComponent.prototype.send = function () {
        this.Send.detailsofBlog.next(this.blog);
        if (this.isBrowser) {
            window.scrollTo(0, 0);
        }
    };
    NormalBlogComponent.prototype.setDefault = function (event) {
        this.blogImage = '/assets/images/default-image.png';
    };
    NormalBlogComponent.prototype.removeInitialImage = function () {
        this.isloading = false;
    };
    NormalBlogComponent.prototype.onresize = function () {
        this.setVariableFont();
    };
    NormalBlogComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-normal-blog',
                    templateUrl: './normal-blog.component.html',
                    styleUrls: ['./normal-blog.component.css']
                },] },
    ];
    /** @nocollapse */
    NormalBlogComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: post_service_1.PostService, },
        { type: core_1.NgZone, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    NormalBlogComponent.propDecorators = {
        'blogId': [{ type: core_1.Input },],
        'blogImage': [{ type: core_1.Input },],
        'bloggerImage': [{ type: core_1.Input },],
        'bloggerName': [{ type: core_1.Input },],
        'heading': [{ type: core_1.Input },],
        'insertedDate': [{ type: core_1.Input },],
        'Content': [{ type: core_1.Input },],
        'ViewCount': [{ type: core_1.Input },],
        'ShareCount': [{ type: core_1.Input },],
        'keywords': [{ type: core_1.Input },],
        'exactDate': [{ type: core_1.Input },],
        'readingTime': [{ type: core_1.Input },],
        'MetaDesc': [{ type: core_1.Input },],
        'ImageDesc': [{ type: core_1.Input },],
        'blogTitle': [{ type: core_1.ViewChild, args: ['blogTitle',] },],
        'holder': [{ type: core_1.ViewChild, args: ['holder',] },],
        'fullImage': [{ type: core_1.ViewChild, args: ['fullImage',] },],
        'Blog': [{ type: core_1.ViewChild, args: ['blog',] },],
        'footer': [{ type: core_1.ViewChild, args: ['footer',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return NormalBlogComponent;
}());
exports.NormalBlogComponent = NormalBlogComponent;
//# sourceMappingURL=normal-blog.component.js.map