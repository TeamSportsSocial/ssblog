"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var post_service_1 = require(".././services/post.service");
var facebook_service_1 = require(".././services/facebook.service");
var common_1 = require("@angular/common");
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(renderer, Fb, http, sendUserInfo, send, loadComment, zone, platformId) {
        this.renderer = renderer;
        this.Fb = Fb;
        this.http = http;
        this.sendUserInfo = sendUserInfo;
        this.send = send;
        this.loadComment = loadComment;
        this.zone = zone;
        this.isConnected = false;
        this.loged = false;
        this.user = { name: 'Hello' };
        this.recivedComment = [];
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        if (common_1.isPlatformBrowser(platformId)) {
            Fb.init();
        }
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadComment.ofBlog(this.BlogId).subscribe(function (res) {
            for (var i in res) {
                _this.recivedComment.push({
                    userName: res[i].Name,
                    image: res[i].Image,
                    comment: res[i].Comment,
                    commentDate: _this.getDate(res[i].InsertedDate)
                });
            }
        });
        if (this.isBrowser) {
            this.getLoginStatus();
        }
    };
    CommentsComponent.prototype.setDefault = function () {
        this.profilePicture = '/assets/images/user.png';
    };
    CommentsComponent.prototype.getDate = function (i) {
        console.log(i);
        var commentDate = new Date(parseInt(i) * 1000);
        var presentDate = new Date();
        if (commentDate.getFullYear() === presentDate.getFullYear()) {
            if (commentDate.getMonth() === presentDate.getMonth()) {
                if (presentDate.getDate() === commentDate.getDate()) {
                    if (presentDate.getHours() === commentDate.getHours()) {
                        if (presentDate.getMinutes() === commentDate.getMinutes()) {
                            if (presentDate.getSeconds() === commentDate.getSeconds()) {
                                return 'Just Now';
                            }
                            else {
                                return presentDate.getSeconds() - commentDate.getSeconds() + ' s';
                            }
                        }
                        else {
                            return presentDate.getMinutes() - commentDate.getMinutes() + ' min';
                        }
                    }
                    else {
                        presentDate.getHours() - commentDate.getHours() + ' h';
                    }
                }
                else {
                    return presentDate.getDate() - commentDate.getDate() + ' d';
                }
            }
            else {
                return presentDate.getMonth() - commentDate.getMonth() + ' month';
            }
        }
        else {
            return presentDate.getFullYear() - commentDate.getFullYear() + ' yr';
        }
    };
    CommentsComponent.prototype.getLoginStatus = function () {
        FB.getLoginStatus(function (response) {
            console.log(response, ' conect');
            if (response.status === 'connected') {
                console.log('conect');
                this.isConnected = true;
                this.profilePicture = "https://graph.facebook.com/" + response.authResponse.userID + "/picture?type=large";
            }
            else {
                console.log('logged out');
            }
        });
    };
    CommentsComponent.prototype.login = function () {
        var _this = this;
        if (this.isBrowser) {
            FB.login(function (response) {
                if (response.status === 'connected') {
                    _this.loged = true;
                    _this.token = response;
                    _this.isConnected = true;
                    _this.profilePicture = "https://graph.facebook.com/" + response.authResponse.userID + "/picture?type=large";
                    _this.me();
                    console.log(_this.user);
                }
                else if (response.status === 'not_authorized') {
                    console.log('conect1');
                }
                else {
                    console.log('conect2');
                }
            }, { scope: 'user_friends,email' });
        }
    };
    CommentsComponent.prototype.me = function () {
        var _this = this;
        if (this.isBrowser) {
            FB.api('/me?fields=id,name,picture.type(large),email', function (result) {
                if (result && !result.error) {
                    _this.user = result;
                    console.log(_this.user, 'conect');
                    console.log(_this.profilePicture);
                    _this.sendUserInfo.ofFacebookUser(result.id, result.name, result.email, _this.profilePicture).subscribe(function (res) {
                        console.log(res, ' login');
                        _this.userId = res[0].UserId;
                    });
                }
                else {
                    console.log(result.error);
                }
            });
        }
    };
    CommentsComponent.prototype.post = function () {
        var _this = this;
        if (this.isConnected !== true) {
            this.login();
        }
        this.send.userComment(this.BlogId, this.userId, this.textArea.nativeElement.value).subscribe(function (res) {
            console.log(res, 'c');
            _this.textArea.nativeElement.value = '';
            _this.newComment = {
                userName: res[res.length - 1].Name,
                image: res[res.length - 1].Image,
                comment: res[res.length - 1].Comment,
                commentDate: _this.getDate(res[res.length - 1].InsertedDate)
            };
            console.log(_this.newComment, ' new comment');
            _this.recivedComment.push(_this.newComment);
        });
    };
    CommentsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-comments',
                    templateUrl: './comments.component.html',
                    styleUrls: ['./comments.component.css']
                },] },
    ];
    /** @nocollapse */
    CommentsComponent.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: facebook_service_1.FacebookService, },
        { type: http_1.Http, },
        { type: post_service_1.PostService, },
        { type: post_service_1.PostService, },
        { type: post_service_1.PostService, },
        { type: core_1.NgZone, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    CommentsComponent.propDecorators = {
        'commentBox': [{ type: core_1.ViewChild, args: ['commentBox',] },],
        'textArea': [{ type: core_1.ViewChild, args: ['textArea',] },],
        'profileImage': [{ type: core_1.ViewChild, args: ['profileImage',] },],
        'BlogId': [{ type: core_1.Input },],
    };
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=comments.component.js.map