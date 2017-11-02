"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var window_ref_service_1 = require("../../services/window-ref.service");
var LatestBlogComponent = /** @class */ (function () {
    function LatestBlogComponent(Send, renderer, post, winRef) {
        this.Send = Send;
        this.renderer = renderer;
        this.post = post;
        this.winRef = winRef;
        this.openFullImage = false;
        this.isloading = true;
        this.dataRecieved = false;
    }
    LatestBlogComponent.prototype.ngOnInit = function () {
        this.content = this.Content.replace(/<br>/g, '').replace(/<b>/g, '').replace(/<\/b>/g, '').replace(/<i>/g, '').replace(/<\/i>/g, '');
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
            readingTime: this.readingTime
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
    LatestBlogComponent.prototype.removeInitialImage = function () {
        this.isloading = false;
    };
    LatestBlogComponent.prototype.setDefault = function () {
        this.blogImage = "/assets/images/default-image.png";
    };
    LatestBlogComponent.prototype.send = function () {
        this.Send.detailsofBlog.next(this.blog);
        window.scrollTo(0, 0);
    };
    LatestBlogComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    LatestBlogComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    LatestBlogComponent.prototype.heightOfInitialImage = function () {
        if (this.winRef.nativeWindow.innerWidth <= 600) {
            var width = this.initialImage.nativeElement.getBoundingClientRect().width;
            var height = .72 * width;
            this.renderer.setStyle(this.initialImage.nativeElement, 'height', height + 'px');
        }
    };
    LatestBlogComponent.prototype.onresize = function () {
        this.responsiveDesign();
    };
    LatestBlogComponent.prototype.responsiveDesign = function () {
        if (this.winRef.nativeWindow.innerWidth >= 1000) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '8% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '2.2em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (this.winRef.nativeWindow.innerWidth > 800 && this.winRef.nativeWindow.innerWidth < 1000) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '8% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.8em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (this.winRef.nativeWindow.innerWidth < 800 && this.winRef.nativeWindow.innerWidth >= 600) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '4% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.1em');
        }
        if (this.winRef.nativeWindow.innerWidth < 600 && this.winRef.nativeWindow.innerWidth > 400) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '15% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1em');
            //this.renderer.setStyle(this.Desc.nativeElement,' background','rgba(0, 0, 0, 0.5)')
        }
        if (this.winRef.nativeWindow.innerWidth < 400 && this.winRef.nativeWindow.innerWidth > 340) {
            this.renderer.setStyle(this.DescChild.nativeElement, 'margin', '15% auto');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.3em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1em');
        }
        if (this.winRef.nativeWindow.innerWidth < 340) {
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
        { type: core_1.Renderer2, },
        { type: post_service_1.PostService, },
        { type: window_ref_service_1.WindowRefService, },
    ]; };
    LatestBlogComponent.propDecorators = {
        'blogId': [{ type: core_1.Input },],
        'blogImage': [{ type: core_1.Input },],
        'bloggerName': [{ type: core_1.Input },],
        'bloggerImage': [{ type: core_1.Input },],
        'heading': [{ type: core_1.Input },],
        'Content': [{ type: core_1.Input },],
        'insertedDate': [{ type: core_1.Input },],
        'ViewCount': [{ type: core_1.Input },],
        'ShareCount': [{ type: core_1.Input },],
        'keywords': [{ type: core_1.Input },],
        'exactDate': [{ type: core_1.Input },],
        'readingTime': [{ type: core_1.Input },],
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