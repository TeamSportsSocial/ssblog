"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("../../services/post.service");
var TrendingBlogComponent = /** @class */ (function () {
    function TrendingBlogComponent(get) {
        this.get = get;
        this.blogDetails = [];
    }
    TrendingBlogComponent.prototype.ngOnInit = function () {
        this.getBlog();
    };
    TrendingBlogComponent.prototype.getBlog = function () {
        var _this = this;
        this.get.blogData(2, 'dfg').subscribe(function (data) {
            for (var i = 0; i < 3; i++) {
                _this.blogDetails.push({
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
        });
    };
    TrendingBlogComponent.prototype.timePassed = function (i) {
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
    TrendingBlogComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        // console.log(i, writtenDate,writtenDate.toDateString())
        return writtenDate.toDateString();
    };
    TrendingBlogComponent.prototype.timeToRead = function (s) {
        var words = s.split(" ");
        //console.log(words,words.length,this.blog.blogId)
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + " min read";
        }
        else {
            return "2 min read";
        }
    };
    TrendingBlogComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-trending-blog',
                    templateUrl: './trending-blog.component.html',
                    styleUrls: ['./trending-blog.component.css']
                },] },
    ];
    /** @nocollapse */
    TrendingBlogComponent.ctorParameters = function () { return [
        { type: post_service_1.PostService, },
    ]; };
    return TrendingBlogComponent;
}());
exports.TrendingBlogComponent = TrendingBlogComponent;
//# sourceMappingURL=trending-blog.component.js.map