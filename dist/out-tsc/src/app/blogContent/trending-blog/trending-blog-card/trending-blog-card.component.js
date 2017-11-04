"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../../services/property.service");
var window_ref_service_1 = require("../../../services/window-ref.service");
var TrendingBlogCardComponent = /** @class */ (function () {
    function TrendingBlogCardComponent(Send, winRef) {
        this.Send = Send;
        this.winRef = winRef;
        this.isloading = true;
        this.dataRecieved = false;
    }
    TrendingBlogCardComponent.prototype.ngOnInit = function () {
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
            Metadesc: this.MetaDesc,
            ImageDesc: this.ImageDesc
        };
        if (this.blogImage) {
            this.dataRecieved = true;
        }
    };
    TrendingBlogCardComponent.prototype.ngAfterViewInit = function () {
        if (this.blogImage) {
            this.dataRecieved = true;
        }
    };
    TrendingBlogCardComponent.prototype.send = function () {
        this.Send.detailsofBlog.next(this.blog);
        this.winRef.nativeWindow.scrollTo(0, 0);
    };
    TrendingBlogCardComponent.prototype.setDefault = function (event) {
        this.blogImage = '/assets/images/default-image.png';
    };
    TrendingBlogCardComponent.prototype.removeInitialImage = function () {
        this.isloading = false;
    };
    TrendingBlogCardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-trending-blog-card',
                    templateUrl: './trending-blog-card.component.html',
                    styleUrls: ['./trending-blog-card.component.css']
                },] },
    ];
    /** @nocollapse */
    TrendingBlogCardComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: window_ref_service_1.WindowRefService, },
    ]; };
    TrendingBlogCardComponent.propDecorators = {
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
    };
    return TrendingBlogCardComponent;
}());
exports.TrendingBlogCardComponent = TrendingBlogCardComponent;
//# sourceMappingURL=trending-blog-card.component.js.map