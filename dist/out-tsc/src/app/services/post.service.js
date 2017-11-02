"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.blogData = function (i, s) {
        this.Page = {
            name: s,
            page: i
        };
        console.log(this.Page);
        return this.http.post('https://admin.chaseyoursport.com/blog/loadblogdata', this.Page)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.ofUser = function (s) {
        this.Email = {
            userid: '2',
            email: s
        };
        return this.http.post('https://admin.chaseyoursport.com/blog/subscribeBlog', this.Email)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.ofFacebookUser = function (id, name, email, image) {
        this.loginDetails = {
            id: id,
            email: email,
            name: name,
            isFb: "1",
            image: image
        };
        return this.http.post('https://admin.chaseyoursport.com/blog/blogLogin', this.loginDetails)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.userComment = function (blogId, userid, comment) {
        this.Comment = {
            blogid: blogId,
            userid: userid,
            comment: comment
        };
        return this.http.post('https://admin.chaseyoursport.com/blog/commentBlog', this.Comment)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.ofBlog = function (id) {
        this.BlogId = {
            blogid: id
        };
        return this.http.post('https://admin.chaseyoursport.com/blog/loadBlogComment', this.BlogId)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.viewCountOfBlog = function (id, count) {
        count++;
        this.viewCount = {
            blogid: id,
            viewcount: count
        };
        console.log(this.viewCount, "count");
        return this.http.post("https://admin.chaseyoursport.com/blog/updateViewCount", this.viewCount)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.shareCountOfBlog = function (id, count) {
        count++;
        this.shareCount = {
            blogid: id,
            sharecount: count
        };
        console.log(this.shareCount, "count");
        return this.http.post("https://admin.chaseyoursport.com/blog/updateShareCount", this.shareCount)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.dataOfsingleBlog = function (id) {
        this.BlogId = {
            blogid: id
        };
        console.log(this.BlogId);
        return this.http.post('https://admin.chaseyoursport.com/blog/loadSingleBlogData', this.BlogId)
            .map(function (response) { return response.json(); });
    };
    PostService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PostService.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map