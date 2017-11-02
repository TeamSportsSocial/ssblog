"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("../../services/post.service");
var property_service_1 = require("../../services/property.service");
var window_ref_service_1 = require("../../services/window-ref.service");
var RelatedBlogsComponent = /** @class */ (function () {
    function RelatedBlogsComponent(getRelated, recieveKey, winRef) {
        this.getRelated = getRelated;
        this.recieveKey = recieveKey;
        this.winRef = winRef;
        this.dataRecived = false;
        this.mobileView = false;
    }
    RelatedBlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setMobileView();
        this.recieveKey.ofBlogCard.subscribe(function (data) {
            console.log(data, " checkarticle");
            _this.getRelatedBlogs(data);
        });
    };
    RelatedBlogsComponent.prototype.getRelatedBlogs = function (key) {
        var _this = this;
        //console.clear()
        var relatedBlogDetails = [];
        this.getRelated.blogData(1, key).subscribe(function (data) {
            _this.dataRecived = true;
            console.log(data, "related");
            if (data.length > 3) {
                _this.numberofBlog = 3;
            }
            else {
                _this.numberofBlog = data.length;
            }
            for (var i = 0; i < _this.numberofBlog; i++) {
                relatedBlogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    Content: data[i].Content,
                    insertedDate: _this.timePassed(data[i].insertedDate),
                    ViewCount: data[i].ViewCount,
                    ShareCount: data[i].ShareCount,
                    keywords: data[i].keywords.split(","),
                    exactDate: _this.ExactDate(data[i].insertedDate),
                    readingTime: _this.timeToRead(data[i].Content)
                });
            }
            _this.relatedBlogDetails = relatedBlogDetails;
            console.log(_this.relatedBlogDetails, " checkarticle");
        });
    };
    RelatedBlogsComponent.prototype.timeToRead = function (s) {
        var words = s.split(" ");
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + " min read";
        }
        else {
            return "2 min read";
        }
    };
    RelatedBlogsComponent.prototype.timePassed = function (i) {
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
    RelatedBlogsComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        //console.log(writtenDate," wDate")
        return writtenDate.toDateString();
    };
    RelatedBlogsComponent.prototype.setMobileView = function () {
        if (this.winRef.nativeWindow.innerWidth > 950) {
            this.mobileView = false;
        }
        else {
            this.mobileView = true;
        }
    };
    RelatedBlogsComponent.prototype.onresize = function () {
        this.setMobileView();
    };
    RelatedBlogsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-related-blogs',
                    templateUrl: './related-blogs.component.html',
                    styleUrls: ['./related-blogs.component.css']
                },] },
    ];
    /** @nocollapse */
    RelatedBlogsComponent.ctorParameters = function () { return [
        { type: post_service_1.PostService, },
        { type: property_service_1.PropertyService, },
        { type: window_ref_service_1.WindowRefService, },
    ]; };
    RelatedBlogsComponent.propDecorators = {
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return RelatedBlogsComponent;
}());
exports.RelatedBlogsComponent = RelatedBlogsComponent;
//# sourceMappingURL=related-blogs.component.js.map