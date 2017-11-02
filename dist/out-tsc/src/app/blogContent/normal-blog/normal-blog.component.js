"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var window_ref_service_1 = require("../../services/window-ref.service");
var NormalBlogComponent = /** @class */ (function () {
    function NormalBlogComponent(Send, renderer, post, zone, winRef) {
        this.Send = Send;
        this.renderer = renderer;
        this.post = post;
        this.zone = zone;
        this.winRef = winRef;
        this.isloading = true;
        this.openFullImage = false;
        this.dataRecieved = false;
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
            readingTime: this.readingTime
        };
        this.setVariableFont();
        if (this.blogImage) {
            this.dataRecieved = true;
        }
        //console.log(this.blogTitle)
    };
    NormalBlogComponent.prototype.strip = function (html) {
        var tmp = document.createElement('DIV');
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
        if (this.winRef.nativeWindow.innerWidth > 1200) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (this.winRef.nativeWindow.innerWidth > 1100 && this.winRef.nativeWindow.innerWidth < 1200) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (this.winRef.nativeWindow.innerWidth < 1100 && this.winRef.nativeWindow.innerWidth > 1000) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (this.winRef.nativeWindow.innerWidth < 1000 && this.winRef.nativeWindow.innerWidth > 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.15em');
        }
        if (this.winRef.nativeWindow.innerWidth > 700 && this.winRef.nativeWindow.innerWidth < 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (this.winRef.nativeWindow.innerWidth > 600 && this.winRef.nativeWindow.innerWidth < 700) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
        if (this.winRef.nativeWindow.innerWidth > 600 && this.winRef.nativeWindow.innerWidth < 500) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (this.winRef.nativeWindow.innerWidth > 500 && this.winRef.nativeWindow.innerWidth < 600) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (this.winRef.nativeWindow.innerWidth > 320 && this.winRef.nativeWindow.innerWidth < 400) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
        if (this.winRef.nativeWindow.innerWidth < 320) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '0.9em');
        }
    };
    NormalBlogComponent.prototype.setHeightOfTitle = function () {
        var heightofBlog = this.Blog.nativeElement.getBoundingClientRect().height;
        var heightofHolder = this.holder.nativeElement.getBoundingClientRect().height;
        var heightofFooter = heightofBlog - heightofHolder;
        var heightofFirstChild = this.footer.nativeElement.children[0].offsetHeight;
        var heightofThirdChild = this.footer.nativeElement.children[2].offsetHeight;
        var heightOfTitle = heightofFooter - heightofFirstChild - heightofThirdChild - 18;
        this.renderer.setStyle(this.blogTitle.nativeElement, 'height', heightOfTitle + 'px');
        var topMargin = (heightofFooter - heightofFirstChild - heightOfTitle - heightofThirdChild) / 2;
    };
    NormalBlogComponent.prototype.send = function () {
        this.Send.detailsofBlog.next(this.blog);
        this.winRef.nativeWindow.scrollTo(0, 0);
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
        { type: window_ref_service_1.WindowRefService, },
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