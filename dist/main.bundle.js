webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-panel/admin-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    margin:0px;\r\n    padding:0px;\r\n}\r\n.panel{\r\n    margin:2% 5% 2% 5%;\r\n    font-family: 'Roboto',sans-serif; \r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\nbutton{\r\n    display: block;\r\n    margin: 1% auto;\r\n    width: 30%;\r\n    background-color: #ffa600;\r\n    border:none;\r\n    color: #ffffff;\r\n    outline: none;\r\n    font-weight: 700;\r\n    font-size: 1.2em;\r\n    padding: 0.5%;\r\n}\r\n.noMoreData{\r\n    width: 100%;\r\n    color: #024771;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.5em;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-panel/admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" #panel>\r\n  <SportSocial-single-panel *ngFor=\"let blog of blogDetails;let i=index\"\r\n    [blogId]=\"blog.blogId\"\r\n    [blogImage]=\"blog.blogImage\"\r\n    [bloggerImage]=\"blog.bloggerImage\"\r\n    [bloggerName]=\"blog.bloggerName\"\r\n    [heading]=\"blog.heading\"\r\n    [Content]=\"blog.Content\"\r\n    [keywords]=\"blog.keywords\"\r\n  ></SportSocial-single-panel>\r\n</div>\r\n<div *ngIf=\"haveData\">\r\n  <button (click)=\"nextPage()\" *ngIf=\"dataRecieved\">Load More</button>\r\n  <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecieved\" class=\"loading\">\r\n</div>\r\n<p *ngIf=\"!haveData\" class=\"noMoreData\" >No More Data !!!</p>         \r\n<SportSocial-blog-footer *ngIf=\"show\"></SportSocial-blog-footer> \r\n"

/***/ }),

/***/ "../../../../../src/app/admin-panel/admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent(recieveHeight, renderer, get) {
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.get = get;
        this.pageNumber = 1;
        this.defaultKey = "dfg";
        this.dataRecieved = false;
        this.show = false;
        this.haveData = true;
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.getBlogData();
    };
    AdminPanelComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + "px");
    };
    AdminPanelComponent.prototype.getBlogData = function () {
        var _this = this;
        console.log("true");
        var blogDetails = [];
        this.get.blogData(this.pageNumber, this.defaultKey).subscribe(function (data) {
            console.log(data);
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            _this.show = true;
            _this.dataRecieved = true;
            for (var i in data) {
                blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    Content: data[i].Content,
                    keywords: data[i].keywords,
                });
            }
            _this.blogDetails = blogDetails;
        });
    };
    AdminPanelComponent.prototype.onresize = function () {
        this.setTopMargin();
    };
    AdminPanelComponent.prototype.nextPage = function () {
        var _this = this;
        this.dataRecieved = false;
        this.pageNumber++;
        this.get.blogData(this.pageNumber, this.defaultKey).subscribe(function (data) {
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            _this.dataRecieved = true;
            for (var i in data) {
                _this.blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    Content: data[i].Content,
                    keywords: data[i].keywords,
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('panel'),
        __metadata("design:type", Object)
    ], AdminPanelComponent.prototype, "panel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AdminPanelComponent.prototype, "onresize", null);
    AdminPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocialBlog-admin-panel',
            template: __webpack_require__("../../../../../src/app/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object])
    ], AdminPanelComponent);
    return AdminPanelComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-panel/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editorPanel{\r\n    padding: 2%;\r\n    background-color: #fafafa\r\n}\r\n.h1,.h2{\r\n    display: inline-block;\r\n    color:#ffa600;\r\n    font-size: 1.8em;\r\n    margin-right: 8px;\r\n    font-weight: 900;\r\n}\r\n.toolbar{\r\n    position: fixed;\r\n    width: 90%;\r\n    top:10%;\r\n    left: 5%;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    z-index: 10\r\n}\r\n.toolbar>div>img{\r\n    margin: 1%;\r\n    padding: 0.5%\r\n}\r\nselect,option{\r\n    border:1px solid #ffa600;\r\n    width: 40px;\r\n    height: 25px;\r\n    outline: none;\r\n}\r\n.file>input{\r\n    display: none;\r\n}\r\n.toolbar>div:first-child{\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.toolbar>div:first-child>input{\r\n    border: 1px solid #ffa600;\r\n    outline: none;\r\n}\r\n.toolbar>div:last-child{\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.file>input{\r\n    display: none;\r\n}\r\n.file{\r\n    margin: 1.5%;\r\n}\r\n.panel-wrapper{\r\n    width: 90%;\r\n    margin:16% auto;\r\n}\r\n.panel{\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    background-color: #ffffff;\r\n}\r\n[contenteditable=true]:empty:before{\r\n    content: attr(placeholder);\r\n    display: block; /* For Firefox */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n    opacity: 0.4\r\n}\r\n.blog{\r\n    display: block;\r\n    max-width: 90%;\r\n    margin:2% auto;\r\n}\r\n.dummyBlogImage{\r\n    display: block;\r\n    width: 100%;\r\n    height: 400px;\r\n    margin: auto;\r\n}\r\n.BlogImage{\r\n    width: 100%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.blogger{\r\n    border: none;\r\n}\r\n.blogger .dummy{\r\n opacity: 0.1\r\n}\r\n.panel>div{\r\n    width: 90%;\r\n    margin: 40px auto;\r\n    height: 100%;\r\n    outline: none;\r\n}\r\n.title{\r\n    font-size: 2em;\r\n}\r\n.url{\r\n    color: #024771;\r\n}\r\n.primaryKey, .shortTitle{\r\n    color: #024771;\r\n    cursor: text;\r\n    padding: 1% 1% 1% 0%;\r\n    outline: none;\r\n    display: inline-block;\r\n    min-width: 15%;\r\n}\r\n.BloggerImage{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n.bloggerName{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 35%;\r\n    margin-left: 2%;\r\n    border-bottom: 1px solid #bbbbbb;\r\n    outline: none;\r\n    font-size: 1.3em;\r\n   \r\n}\r\n.charCount{\r\n    text-align: right;\r\n    color: black;\r\n}\r\n.bloggerName,.title,.desc{\r\n    cursor: text;\r\n    padding: 1% 1% 1% 0%;\r\n   \r\n}\r\n.imageDesc, .shortDesc{\r\n    cursor: text;\r\n    padding: 1% 1% 1% 0%;\r\n    font-size:1.2em; \r\n}\r\n\r\n.descAbove{\r\n    opacity: 0.5;\r\n    font-size: 1.5em;\r\n}\r\n.desc{\r\n    overflow: auto;\r\n    min-height: 500px;\r\n    font-size: 1.5em;\r\n    border-top:1px solid #bbbbbb\r\n}\r\n.keywords>p{\r\n    width: 90%;\r\n   display: inline-block;\r\n   vertical-align: middle;\r\n   margin-left: 3%;\r\n   font-size: 1.2em;\r\n   outline: none;\r\n}\r\n.key{\r\n    display: inline-block;\r\n    border: 1px solid #bbbbbb;\r\n    margin: 1%;\r\n    padding: 1.5% 2% 1.5% 2%;\r\n    border-radius: 4px;\r\n}\r\n.confirm{\r\n    text-align: center;\r\n    color: #ffa600;\r\n    font-size: 0.9em;\r\n    font-weight: bold\r\n}\r\n.tick{\r\n    text-align: center;\r\n    padding: 1%;\r\n}\r\n.selected{\r\n    border: 1px solid #ffa600;\r\n}\r\n.not-selected{\r\n    border: none;\r\n}\r\n.linkPopup{\r\n    display:none;\r\n    width: 40%;\r\n    z-index: 50;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    position: fixed;\r\n    top:25%;\r\n    left: 30%;\r\n    padding: 2%;\r\n    padding-bottom: 0px;\r\n}\r\n.keywordPopup{\r\n    width: 50%;\r\n    z-index: 10;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    position: fixed;\r\n    top:20%;\r\n    left: 25%;\r\n    padding: 2%;\r\n    padding-bottom: 0px;\r\n}\r\n.keywordPopup>.keyword{\r\n    min-height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #bbbbbb;\r\n    padding: 2%;\r\n    outline: none;\r\n}\r\n.button{\r\n    width: 70%;\r\n    margin: 2% auto;\r\n    text-align: center;\r\n}\r\n.button>button{\r\n    width: 25%;  \r\n    border: none;\r\n    border-radius: 4px;\r\n    padding: 1% 3% 1% 3%;\r\n    color: white;\r\n    background-color: #ffa600;\r\n    outline: none;\r\n}   \r\n.not-selected:active{\r\n    -webkit-transform: scale(1.2,1.2);\r\n            transform: scale(1.2,1.2)\r\n}\r\n.panelButton{\r\n    width: 10%;\r\n    border: none;\r\n    background-color: #ffa600;\r\n    padding: 1%;\r\n    color:white;\r\n    outline: none;\r\n    border-radius: 4px;\r\n    font-family: sans-serif;\r\n    font-size: 1.2em;\r\n    font-weight: bold\r\n}\r\n.panelButton:last-child{\r\n    float: right;\r\n}\r\n.panelButton:disabled{\r\n    cursor: not-allowed;\r\n    background-color: #ffa60054;\r\n}\r\n.preview{\r\n    padding: 2%;\r\n    width:70%;\r\n    position: fixed;\r\n    top:0;\r\n    bottom: 0;\r\n    left:15%;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    overflow-y:scroll;\r\n    overflow-x:hidden;\r\n    z-index: 50;\r\n    background-color: #fafafa;\r\n    font-family: 'Roboto',sans-serif\r\n}\r\n.close{\r\n    opacity: unset;\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n.previewCatagory{\r\n    margin-bottom: 2%;\r\n}\r\n.previewCatagory>span{\r\n    font-size: 0.9em;\r\n    color: black;\r\n    font-weight: 500;\r\n    margin-right: 1%;\r\n}\r\n.previewBlogImageHolder{\r\n    width: 100%;\r\n    height:300px;\r\n    overflow: hidden;\r\n    margin-bottom: 2%;\r\n}\r\n.previewBlogImage{\r\n    width:100%;\r\n}\r\n.previewHeading{\r\n    font-size: 1.8em;\r\n    font-weight: 700;\r\n    color: black;\r\n}\r\n.previewBloggerImageHolder{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius:50%;\r\n}\r\n.previewBloggerImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n.previewBlogContent{\r\n    font-size: 1.4em;\r\n    color: black;\r\n    margin-bottom: 2%;\r\n}\r\n.previewTagIconHolder{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n.previewTagIconHolder{\r\n    height: 100%;\r\n    height: 100%;\r\n}\r\n.previewTags>span{\r\n    margin-right: 2%;\r\n    text-decoration: underline;\r\n    color: #ffa600;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-panel/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editorPanel\" #editorPanel>\r\n  <div class=\"toolbar\">\r\n    <div>\r\n      <img src=\"/assets/images/sports-social-undo.png\"  title=\"undo\" role=\"button\" alt=\"\" (click)=\"undo($event)\" class=\"not-selected\" >\r\n      \r\n      <img src=\"/assets/images/sports-social-redo.png\" title=\"redo\"  role=\"button\" alt=\"\" (click)=\"redo($event)\" class=\"not-selected\" >\r\n      \r\n      <img src=\"/assets/images/sports-social-bold.png\" title=\"Bold\" role=\"button\" alt=\"\" (click)=\"bold($event)\" class=\"not-selected\" >\r\n      \r\n      <img src=\"/assets/images/sports-social-italic.png\" title=\"Italic\" role=\"button\" alt=\"\" (click)=\"italic($event)\" class=\"not-selected\">\r\n      \r\n      <img src=\"/assets/images/sports-social-align-left.png\" title=\"left-align\"  role=\"button\" alt=\"\" (click)=\"leftAlign($event)\" class=\"not-selected\">\r\n      \r\n      <img src=\"/assets/images/sports-social-align-center.png\" title=\"center-align\" role=\"button\" alt=\"\" (click)=\"centerAlign($event)\" class=\"not-selected\">\r\n      \r\n      <img src=\"/assets/images/sports-social-align-right.png\" title=\"right-align\"  role=\"button\" alt=\"\" (click)=\"rightAlign($event)\" class=\"not-selected\">\r\n      \r\n      <img src=\"/assets/images/sports-social-text-justify.png\" title=\"justify\"  role=\"button\" alt=\"\" (click)=\"justify($event)\" class=\"not-selected\">\r\n      \r\n      <img src=\"/assets/images/sports-social-underline.png\" title=\"underline\" role=\"button\" alt=\"\" (click)=\"underline($event)\" class=\"not-selected\">\r\n      \r\n      <img src=\"/assets/images/sports-social-list-with-dots.png\" title=\"List with dosts\" role=\"button\" alt=\"\" (click)=\"listWithDots($event)\" class=\"not-selected\" >\r\n      \r\n      <img src=\"/assets/images/sports-social-list-with-numbers.png\" title=\"List with number\" role=\"button\" alt=\"\" (click)=\"listWithNumbers($event)\" class=\"not-selected\" >\r\n      \r\n      <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-text-color.png\" title=\"Text Color\" role=\"button\" alt=\"\" >\r\n          <input type=\"color\" name=\"textcolor\" id=\"textcolor\"  (change)=\"selectTextColor($event)\">\r\n      </label>\r\n      \r\n      <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-background-color.png\" title=\"Background Color\" role=\"button\" alt=\"\"  multiple>\r\n          <input type=\"color\" name=\"bcolor\" id=\"bcolor\"  (change)=\"selectBackgroundColor($event)\">\r\n      </label>\r\n      \r\n      <select (change)=\"selectFontSize($event)\" [value]=20>\r\n          <option *ngFor=\"let i of fontSize\" [value]=\"i\" >{{i}}</option>\r\n      </select>\r\n    </div>  \r\n    \r\n    <div>\r\n        <select (change)=\"selectTag($event)\">\r\n            <option value=\"h1\">h1</option>\r\n            <option value=\"h2\">h2</option>\r\n            <option value=\"h3\">h3</option>\r\n            <option value=\"h4\">h4</option>\r\n            <option value=\"h5\">h5</option>\r\n            <option value=\"h6\">h6</option>\r\n        </select>\r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-indent.png\" title=\"indent\" role=\"button\" alt=\"\" (click)=\"indent($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-outdent.png\" title=\" outdent\" role=\"button\" alt=\"\" (click)=\"outdent($event)\" class=\"not-selected\" >\r\n        </label>\r\n      \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-paragraph.png\" title=\"Paragraph\" role=\"button\" alt=\"\" (click)=\"addParagraph($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-picture.png\" title=\"Add Image\" role=\"button\" alt=\"\"  class=\"not-selected\" >\r\n            <input type=\"file\" name=\"image\" id=\"image\" accept=\"image/jpeg, image/png\" (change)=\"selectImage($event)\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-youtube-video.png\" title=\"Add Youtube Video\" role=\"button\" class=\"not-selected\"  (click)=\"addYoutubevideo()\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-gif.png\" title=\"Add Gif\" role=\"button\" class=\"not-selected\" alt=\"\"  multiple>\r\n            <input type=\"file\" name=\"video\" id=\"video\" accept=\"image/gif image/webp\"  (change)=\"selectGif($event)\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-link.png\" title=\"Add Link\" role=\"button\" alt=\"\" class=\"not-selected\" (click)=\"addLink($event)\">\r\n        </label>\r\n      \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-remove-css.png\" title=\"Remove Style\" role=\"button\" alt=\"\" (click)=\"removeCss($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-subscript.png\" title=\"Subscript\"  role=\"button\" alt=\"\" (click)=\"subscript($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-superscript.png\" title=\"Superscript\" role=\"button\" alt=\"\" (click)=\"superscript($event)\" class=\"not-selected\" >\r\n        </label>\r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-quote.png\" title=\"Quote\" role=\"button\" alt=\"\" (click)=\"addQuote($event)\" class=\"not-selected\" >\r\n        </label>\r\n    </div>\r\n    </div>\r\n    <div class=\"panel-wrapper\">\r\n        <div class=\"panel\" #panel> \r\n            <div class=\"url\">\r\n                <span>www.chaseyoursport.com/</span>\r\n                <div contenteditable=\"true\" class=\"primaryKey\"  placeholder=\"Primary Key\" #primaryKey></div>\r\n                <span>/</span>\r\n                <div contenteditable=\"true\" class=\"shortTitle\"  placeholder=\"Short Title\" #shortTitle></div>\r\n            </div>\r\n            <label class=\"file blog\">\r\n                <ng-container  *ngIf=\"!blogimageLoaded\">\r\n                    <img src=\"/assets/images/sports-social-temp-blog-image.jpg\" role=\"button\" class=\"dummyBlogImage\">\r\n                </ng-container >\r\n                <ng-container  *ngIf=\"blogimageLoaded\">\r\n                    <img src=\"{{blogimageSrc}}\"  role=\"button\" (error)=\"blogImageNotFound()\" class=\"BlogImage\" >\r\n                </ng-container >                \r\n                <input type=\"file\" name=\"blogImage\"  id=\"blogImage\" accept=\"image/*\" (change)=\"selectBlogImage($event)\" #BlogImage>\r\n            </label>\r\n            <div contenteditable=\"true\" class=\"imageDesc\"  placeholder=\"Describe your Image\" #blogImageDesc></div>   \r\n            <div contenteditable=\"true\" class=\"title\"  placeholder=\"Hii Buddy, Your Title Goes Here\" #title></div>\r\n            <div contenteditable=\"true\" class=\"shortDesc\" (keyup)=\"calCharCount()\" placeholder=\"Add short description, max 140 Characters are allowed\" #shortDesc></div>\r\n            <div class=\"charCount\" >{{charCount}}/140</div>\r\n            <div class=\"blogger\">\r\n                <label class=\"file\">\r\n                    <img src=\"/assets/images/sports-social-user.png\" role=\"button\" class=\"dummy\" *ngIf=\"!bloggerimageLoaded\">\r\n                    <img src=\"{{bloggerimageSrc}}\" *ngIf=\"bloggerimageLoaded\" (error)=\"bloggerImageNotFound()\" role=\"button\" class=\"BloggerImage\">\r\n                    <input type=\"file\" name=\"bloggerImage\" id=\"bloggerImage\" accept=\"image/*\" (change)=\"selectBloggerImage($event)\" #BloggerImage>\r\n                </label>\r\n            <div contenteditable=\"true\" class=\"bloggerName\"  placeholder=\"What's your name??\" #BloggerName></div>\r\n            </div>\r\n            <div class=\"keywords\" >\r\n                <img src=\"/assets/images/sports-social-tags.png\" (click)=\"openAddKeywordPopup()\" role=\"button\" class=\"not-selected\">\r\n                <p contenteditable=\"true\" placeholder=\"Click on tag button to add Keywords\" *ngIf=\"!keywordAdded\"></p>\r\n                <p *ngIf=\"keywordAdded\">\r\n                    <span *ngFor=\"let key of keywordArray;let i=index\" class=\"key\"> \r\n                        {{key}}\r\n                        <img src=\"/assets/images/sports-social-delete-keyword.png\" role=\"button\" (click)=\"deleteKeyword(i)\">\r\n                    </span>\r\n                </p>\r\n            </div>\r\n            <div class=\"descAbove\" *ngIf=\"!Keypress\">Below the Line you will write the Content of Blog. You can also add Images,Youtube Video,Links</div> \r\n            <div contenteditable=\"true\" class=\"desc\" (keyup)=\"startDesc()\" #desc></div> \r\n        </div>\r\n        <button class=\"panelButton\" (click)=\"upload()\" [disabled]=\"isDisabled\" #panelButton >Update</button>\r\n        <button class=\"panelButton\" (click)=\"preview()\" >Preview </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"linkPopup\" role=\"dialog\" #linkpopup>\r\n    <p class=\"confirm\">Please Click on tick to Confirm</p>\r\n    <label for=\"URL\">Url</label>\r\n    <input type=\"url\" name=\"URl\" id=\"url\" class=\"form-control\" (click)=\"test()\"  #url>\r\n    <label for=\"text\">Text</label>\r\n    <input type=\"text\" name=\"text\" id=\"text\" class=\"form-control\" #text>\r\n    <div class=\"tick\">\r\n        <img src=\"/assets/images/sports-social-confirmation.png\" role=\"button\" class=\"not-selected\" (click)=\"restoreCaret()\">\r\n    </div>\r\n    <div class=\"button\">\r\n        <button (click)=\"linkOk($event)\">Ok</button>\r\n        <button (click)=\"linkCancel()\">Cancel</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"linkPopup\" role=\"dialog\" #youtubeLinkPopup>\r\n    <p class=\"confirm\">Please Click on tick to Confirm</p>\r\n    <label for=\"URL\">Url</label>\r\n    <input type=\"url\" name=\"URl\" id=\"url\" class=\"form-control\" #YoutubeUrl>\r\n    <div class=\"tick\">\r\n        <img src=\"/assets/images/sports-social-confirmation.png\" role=\"button\" class=\"not-selected\" (click)=\"restoreCaret()\">\r\n    </div>\r\n    <div class=\"button\">\r\n        <button (click)=\"youtubeLinkOk($event)\">Ok</button>\r\n        <button (click)=\"youtubeLinkCancel()\">Cancel</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"keywordPopup\" *ngIf=\"isKeywordButtonClicked\" >\r\n    <label >Add Keywords:</label>\r\n    <div contenteditable=\"true\" class=\"keyword\" placeholder=\"Separate keywords by Comma\" #keys>{{Keys}}</div>\r\n    <div class=\"button\">\r\n        <button  (click)=\"addKeywords()\">Add</button>\r\n        <button (click)=\"addKeywordsCancel()\">Cancel</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"preview\" *ngIf=\"Preview\">\r\n    <img src=\"/assets/images/sports-social-cancel-black.png\" class=\"close\" role=\"button\" (click)=\"closePreview()\">\r\n    <p  class=\"previewCatagory\">\r\n        <span *ngIf=\"blogPreview\" >{{blogPreview.keywords[0]}}</span>\r\n        <span >|</span>\r\n        <span *ngIf=\"blogPreview\">{{blogPreview.readingTime}}</span>\r\n    </p>\r\n    <div class=\"previewBlogImageHolder\">\r\n        <img *ngIf=\"blogPreview\" class=\"previewBlogImage\" title=\"{{blogPreview.imageDesc}}\" alt=\"blogImage\" src=\"{{blogPreview.blogImage}}\"  >\r\n    </div>\r\n    <div class=\"previewBlogInfo\">\r\n        <p *ngIf=\"blogPreview\" [innerHtml]=\"blogPreview.heading\" class=\"previewHeading\"></p>\r\n        <p *ngIf=\"blogPreview\" class=\"previewBlogShortDesc\">{{blogPreview.metaDesc}}</p>\r\n        \r\n        <div class=\"previewBloggerImageHolder\">\r\n          <img *ngIf=\"blogPreview\" class=\"previewBloggerImage\"  src=\"{{blogPreview.bloggerImage}}\" >\r\n        </div>\r\n        <div class=\"previewBlogger\">\r\n          <p *ngIf=\"blogPreview\" class=\"previewBloggerName\">Written by <span > {{blogPreview.bloggerName}}</span></p>  \r\n        </div>\r\n        <p *ngIf=\"blogPreview\" [innerHtml]=\"blogPreview.content\" class=\"prviewBlogContent\"></p>\r\n        <div class=\"previewTags\" >\r\n          <div class=\"previewTagIconHolder\">\r\n            <img src=\"/assets/images/sports-social-tag.png\" alt=\"sports-social-tag\">\r\n          </div>\r\n          <ng-container *ngIf=\" blogPreview\">          \r\n              <span *ngFor=\"let key of blogPreview.keywords;let i=index\">{{key}}</span>\r\n          </ng-container>\r\n            \r\n        </div>\r\n    </div>   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-panel/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(http, recieveHeight, renderer, route, sanitizer, rec, recieve) {
        this.http = http;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.route = route;
        this.sanitizer = sanitizer;
        this.rec = rec;
        this.recieve = recieve;
        this.fontSize = [];
        this.bloggerimageLoaded = false;
        this.blogimageLoaded = false;
        this.text = '';
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
        this.linkAdded = true;
        this.linkCount = 0;
        this.youtubeVideoAdded = false;
        this.Keypress = false;
        this.selectedText = '';
        this.charCount = 0;
        this.files = [];
        this.imageName = [];
        this.isDisabled = false;
        this.Preview = false;
        this.filesToUpload = [];
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + 'px');
        this.recieveBlogdetails();
        for (var i = 4; i <= 28; i += 4) {
            this.fontSize.push(i);
        }
        this.title.nativeElement.focus();
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditBlogComponent.prototype.recieveBlogdetails = function () {
        var _this = this;
        this.rec.detailsofBlog.subscribe(function (data) {
            _this.blogID = data['blogId'];
            _this.Keys = data['keywords'];
            _this.getBlogDetails();
        });
    };
    EditBlogComponent.prototype.getBlogDetails = function () {
        var _this = this;
        this.recieve.dataOfsingleBlog(this.blogID).subscribe(function (data) {
            // console.clear();
            // console.log(data[0]);
            _this.bloggerimageLoaded = true;
            _this.blogimageLoaded = true;
            _this.keywordAdded = true;
            _this.Keypress = true;
            _this.blogimageSrc = data[0].blogImage;
            _this.bloggerimageSrc = data[0].bloggerImage;
            _this.BloggerName.nativeElement.innerText = data[0].bloggerName;
            _this.title.nativeElement.innerHTML = data[0].heading;
            _this.desc.nativeElement.innerHTML = data[0].Content;
            _this.keywordArray = data[0].keys.split(',');
            _this.Keys = data[0].keys;
            _this.shortDesc.nativeElement.innerText = data[0].MetaDesc;
            _this.blogImageDesc.nativeElement.innerText = data[0].ImageDesc;
            _this.ShortTitle.nativeElement.innerText = data[0].ShortTitle == null ? data[0].heading : data[0].ShortTitle;
            _this.primaryKey.nativeElement.innerText = data[0].PrimaryKeyword == null ? data[0].keys.split(',')[0] : data[0].PrimaryKeyword;
        });
        this.calCharCount();
    };
    EditBlogComponent.prototype.bloggerImageNotFound = function () {
        this.bloggerimageLoaded = false;
    };
    EditBlogComponent.prototype.blogImageNotFound = function () {
        this.blogimageLoaded = false;
    };
    EditBlogComponent.prototype.startDesc = function () {
        if (this.desc.nativeElement.innerHTML) {
            this.Keypress = true;
        }
        else {
            this.Keypress = false;
        }
    };
    EditBlogComponent.prototype.calCharCount = function () {
        this.charCount = this.shortDesc.nativeElement.innerText.length;
        console.log(this.charCount);
        if (this.charCount >= 139) {
            this.shortDesc.nativeElement.blur();
        }
        else {
            this.shortDesc.nativeElement.focus();
        }
    };
    EditBlogComponent.prototype.onmousedown = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditBlogComponent.prototype.onkeyup = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditBlogComponent.prototype.selectTag = function (event) {
        this.initialActiveElement.Element.focus();
        // console.log(event.target.value);
        document.execCommand('formatBlock', false, (event.target.value));
        // console.log(this.initialActiveElement.Element);
    };
    EditBlogComponent.prototype.bold = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('bold', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditBlogComponent.prototype.italic = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('italic', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditBlogComponent.prototype.underline = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('underline', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditBlogComponent.prototype.leftAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyLeft', false, null);
    };
    EditBlogComponent.prototype.rightAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyRight', false, null);
    };
    EditBlogComponent.prototype.centerAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyCenter', false, null);
    };
    EditBlogComponent.prototype.justify = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyFull', false, null);
    };
    EditBlogComponent.prototype.undo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('undo', false, null);
    };
    EditBlogComponent.prototype.redo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('redo', false, null);
    };
    EditBlogComponent.prototype.indent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('indent', false, null);
    };
    EditBlogComponent.prototype.outdent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('outdent', false, null);
    };
    EditBlogComponent.prototype.subscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('subscript', false, null);
    };
    EditBlogComponent.prototype.superscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('superscript', false, null);
    };
    EditBlogComponent.prototype.listWithNumbers = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertOrderedList', false, null);
    };
    EditBlogComponent.prototype.listWithDots = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertUnorderedList', false, null);
    };
    EditBlogComponent.prototype.removeCss = function (event) {
        console.log(document.execCommand('removeFormat', false, null));
        document.execCommand('removeFormat', false, null);
    };
    EditBlogComponent.prototype.addParagraph = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertParagraph', false, null);
    };
    EditBlogComponent.prototype.selectTextColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('foreColor', false, event.target.value);
    };
    EditBlogComponent.prototype.selectBackgroundColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('backColor', false, event.target.value);
    };
    EditBlogComponent.prototype.selectFontSize = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('fontSize', false, (event.target.value) / 4);
    };
    EditBlogComponent.prototype.preventdefault = function (event) {
        event.target.focus();
        event.preventDefault();
    };
    EditBlogComponent.prototype.test = function () {
        //  console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
    };
    EditBlogComponent.prototype.restoreCaret = function () {
        this.beforePopupActiveElement.focus();
        // console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
        var sel = window.getSelection();
        sel.collapse(this.beforePopupSelectedElement, this.beforePopupCurPos);
    };
    EditBlogComponent.prototype.addLink = function (event) {
        this.selectedText = document.getSelection().toString();
        console.log(this.selectedText);
        if (this.selectedText !== '') {
            this.Text.nativeElement.value = this.selectedText;
            document.execCommand('cut', false, null);
        }
        this.initialActiveElement.Element.focus();
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'block');
        this.beforePopupActiveElement = this.initialActiveElement.Element;
        this.initialSelectedELement = document.getSelection();
        this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
        this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
    };
    EditBlogComponent.prototype.unLink = function () {
        this.selctedLink = document.getSelection();
        // console.log(this.selctedLink);
    };
    EditBlogComponent.prototype.linkOk = function (event) {
        this.linkUrl = this.URL.nativeElement.value;
        this.linkText = this.Text.nativeElement.value;
        var embed = "<a class=\"link\" href=\"" + this.linkUrl +
            "\"target=\"_blank\">" + ' ' + this.linkText + "</a>";
        if (this.linkUrl && this.linkText) {
            document.execCommand('insertHTML', false, embed);
        }
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.linkCancel = function () {
        event.preventDefault();
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.addYoutubevideo = function () {
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'block');
        this.beforePopupActiveElement = this.initialActiveElement.Element;
        this.initialSelectedELement = document.getSelection();
        this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
        this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
    };
    EditBlogComponent.prototype.youtubeLinkOk = function (event) {
        this.youtubeUrl = this.youtubeURL.nativeElement.value.replace('watch?v=', 'embed/');
        console.log(this.youtubeUrl);
        if (this.youtubeURL.nativeElement.value) {
            document.execCommand('insertHTML', false, "\n      <div style=\"position: relative;\n      padding-bottom: 56.25%;\n      width:90%;\n      padding-top: 25px;\n      height: 0;\"><iframe style=\"position: absolute;\n      top: 0;\n      left: 5%;\n      width: 100%;\n      height: 100%;\" src=\"" + this.youtubeUrl
                + "\"   frameborder=\"0\" allowfullscreen></iframe></div><br><br>");
        }
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.youtubeLinkCancel = function () {
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.addQuote = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('formatBlock', false, 'blockquote');
    };
    EditBlogComponent.prototype.selectImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditBlogComponent.prototype._handleReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        // console.log(this.imageSrc);
        document.execCommand('insertHTML', false, "<div style=\"max-width:100%;height:auto;\" >\n    <img style=\"max-width:100%;max-height:100%;\" src=\"" + this.imageSrc + "\"></div>");
    };
    EditBlogComponent.prototype.selectGif = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleGifReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditBlogComponent.prototype._handleGifReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        document.execCommand('insertImage', false, this.imageSrc);
    };
    EditBlogComponent.prototype.selectBloggerImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBloggerReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.bloggerimageLoaded = true;
    };
    EditBlogComponent.prototype._handleBloggerReaderLoaded = function (event) {
        var reader = event.target;
        this.bloggerimageSrc = reader.result;
    };
    EditBlogComponent.prototype.selectBlogImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBlogReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.blogimageLoaded = true;
    };
    EditBlogComponent.prototype._handleBlogReaderLoaded = function (event) {
        var reader = event.target;
        this.blogimageSrc = reader.result;
    };
    EditBlogComponent.prototype.openAddKeywordPopup = function () {
        this.isKeywordButtonClicked = true;
        if (this.Keys) {
            this.Keys = this.keywordArray.toString();
        }
    };
    EditBlogComponent.prototype.addKeywords = function () {
        this.Keys = this.keys.nativeElement.textContent;
        this.keywordArray = (this.Keys.split(','));
        this.isKeywordButtonClicked = false;
        if (this.Keys) {
            this.keywordAdded = true;
        }
        else {
            this.keywordAdded = false;
        }
    };
    EditBlogComponent.prototype.addKeywordsCancel = function () {
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
    };
    EditBlogComponent.prototype.deleteKeyword = function (i) {
        this.keywordArray.splice(i, 1);
    };
    EditBlogComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        this.imageName = ['blogImage', 'bloggerImage'];
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(_this.imageName[i], files[i]);
            }
            formData.append('bloggerName', _this.blog.bloggerName);
            formData.append('blogrTitle', _this.blog.blogTitle);
            formData.append('blogDesc', _this.blog.blogDesc);
            formData.append('keywords', _this.blog.keywords);
            formData.append('blogid', _this.blog.blogid);
            formData.append('metaDesc', _this.blog.metaDesc);
            formData.append('imageDesc', _this.blog.imageDesc);
            formData.append('primaryKey', _this.blog.primaryKey);
            formData.append('shortTitle', _this.blog.shortTitle);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
            console.log(formData);
        });
    };
    EditBlogComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.panel);
        this.blogImage = this.BlogImage.nativeElement.files[0];
        this.bloggerImage = this.BloggerImage.nativeElement.files[0];
        this.files = [this.blogImage, this.bloggerImage];
        console.log(this.files);
        this.isDisabled = true;
        this.blog = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            blogTitle: this.title.nativeElement.innerText,
            blogDesc: this.desc.nativeElement.innerHTML,
            keywords: this.Keys,
            blogid: this.blogID,
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText,
            primaryKey: this.primaryKey.nativeElement.innerText,
            shortTitle: this.ShortTitle.nativeElement.innerText
        };
        console.log(this.blog);
        this.imageName = ['blogImage', 'bloggerImage'];
        for (var i = 0; i < this.files.length; i++) {
            this.filesToUpload.push(this.files[i]);
        }
        this.makeFileRequest('https://admin.chaseyoursport.com/blog/updateBlog', [], this.filesToUpload)
            .then(function (result) {
            _this.Result = result;
            console.log(result);
            if (_this.Result.Status === 'Success') {
                _this.isDisabled = false;
            }
        }, function (error) {
            console.error(error);
            if (error) {
                _this.isDisabled = false;
            }
        });
    };
    EditBlogComponent.prototype.strip = function (html) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    EditBlogComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    EditBlogComponent.prototype.preview = function () {
        this.Preview = true;
        var Content = this.desc.nativeElement.innerHTML;
        this.blogPreview = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            heading: this.title.nativeElement.innerHTML,
            content: this.sanitizer.bypassSecurityTrustHtml(this.desc.nativeElement.innerHTML),
            keywords: this.keywordArray,
            blogImage: this.blogimageSrc,
            bloggerImage: this.bloggerimageSrc,
            readingTime: this.timeToRead(this.strip(Content)),
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText,
            primaryKey: this.primaryKey.nativeElement.innerText,
            shortTitle: this.ShortTitle.nativeElement.innerText
        };
        console.log(this.blogPreview);
    };
    EditBlogComponent.prototype.closePreview = function () {
        this.Preview = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('desc'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BlogImage'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "BlogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BloggerImage'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "BloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blogImageDesc'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "blogImageDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('shortDesc'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "shortDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BloggerName'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "BloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('primaryKey'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "primaryKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('shortTitle'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "ShortTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('url'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "URL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('YoutubeUrl'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "youtubeURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('PluginUrl'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "pluginURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('keys'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "keys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('text'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "Text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('editorPanel'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "editorPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('panel'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "panel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('linkpopup'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "linkpopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('youtubeLinkPopup'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "youtubeLinkPopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pluginLinkPopup'),
        __metadata("design:type", Object)
    ], EditBlogComponent.prototype, "pluginLinkPopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditBlogComponent.prototype, "onmousedown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditBlogComponent.prototype, "onkeyup", null);
    EditBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-edit-blog',
            template: __webpack_require__("../../../../../src/app/admin-panel/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-panel/edit-blog/edit-blog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _g || Object])
    ], EditBlogComponent);
    return EditBlogComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-panel/single-panel/single-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel{\r\n    width:100%;\r\n    height: 200px;\r\n    font-family: 'Roboto',sans-serif;\r\n    color: black;\r\n    border: 1px solid black;\r\n    position: relative;\r\n}\r\n.blogImage{\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 30%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n.blogImage>img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.blogInfo{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: top;\r\n    width: 69%;\r\n    height: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    \r\n}\r\n.heading,.desc,.keywords{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    height: 20%;\r\n    padding: 1%;\r\n}\r\n.bloggerName{\r\n    width: 30%;\r\n    height: 20%;\r\n    padding: 1%;\r\n}\r\n.bloggerName>img{\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n.btn{\r\n    width: 50%;\r\n    position: absolute;\r\n    right: 1%;\r\n    bottom: 4.5%;\r\n    text-align: right;\r\n}\r\nbutton{\r\n    width: 20%;\r\n    padding: 1%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    color: white;\r\n    background-color: #ffa600;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 4px;\r\n    margin-right: 2%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-panel/single-panel/single-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" #panel>\r\n  <div class=\"blogImage\">\r\n    <img src=\"{{blogImage}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"blogInfo\">\r\n    <p class=\"heading\">{{heading}}</p>\r\n    <p class=\"desc\">{{Content}}</p>\r\n    <p class=\"keywords\" >{{keywords}}</p>\r\n    <p class=\"bloggerName\">\r\n      <img src=\"/assets/images/sports-social-blogger-black.png\" alt=\"\">\r\n      {{bloggerName}}\r\n    </p>\r\n    <div class=\"btn\">\r\n      <button (click)=\"editBlog()\">Edit</button>\r\n      <button (click)=\"deleteBlog()\">Delete</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin-panel/single-panel/single-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinglePanelComponent = /** @class */ (function () {
    function SinglePanelComponent(perform, route, send, renderer) {
        this.perform = perform;
        this.route = route;
        this.send = send;
        this.renderer = renderer;
    }
    SinglePanelComponent.prototype.ngOnInit = function () {
        this.blog = {
            blogId: this.blogId,
            blogImage: this.blogImage,
            bloggerName: this.bloggerName,
            bloggerImage: this.bloggerImage,
            heading: this.heading,
            Content: this.Content,
            keywords: this.keywords
        };
    };
    SinglePanelComponent.prototype.editBlog = function () {
        this.route.navigate(['/' + this.blogId + '/edit']);
        this.send.detailsofBlog.next(this.blog);
    };
    SinglePanelComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.perform.deleteBlog(this.blog.blogId).subscribe(function (res) {
            console.log(res);
            if (res.Status === 'Success') {
                console.log('blog Deleted');
                _this.renderer.setStyle(_this.panel.nativeElement, 'display', 'none');
            }
            else {
                console.log('something went wrong');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SinglePanelComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SinglePanelComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SinglePanelComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SinglePanelComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SinglePanelComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SinglePanelComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SinglePanelComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('panel'),
        __metadata("design:type", Object)
    ], SinglePanelComponent.prototype, "panel", void 0);
    SinglePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-single-panel',
            template: __webpack_require__("../../../../../src/app/admin-panel/single-panel/single-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-panel/single-panel/single-panel.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _d || Object])
    ], SinglePanelComponent);
    return SinglePanelComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=single-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<SportSocialBlog-header></SportSocialBlog-header>    \r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_panel_editor_panel_component__ = __webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_panel_admin_panel_component__ = __webpack_require__("../../../../../src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_header_blog_header_component__ = __webpack_require__("../../../../../src/app/blog-header/blog-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blogContent_trending_blog_trending_blog_component__ = __webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__keywords_keywords_component__ = __webpack_require__("../../../../../src/app/keywords/keywords.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__keywords_keyword_keyword_component__ = __webpack_require__("../../../../../src/app/keywords/keyword/keyword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__subscribe_card_subscribe_card_component__ = __webpack_require__("../../../../../src/app/subscribe-card/subscribe-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blogContent_trending_blog_trending_blog_card_trending_blog_card_component__ = __webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blogContent_latest_blog_latest_blog_component__ = __webpack_require__("../../../../../src/app/blogContent/latest-blog/latest-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blogContent_normal_blog_normal_blog_component__ = __webpack_require__("../../../../../src/app/blogContent/normal-blog/normal-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blogContent_blogs_blogs_component__ = __webpack_require__("../../../../../src/app/blogContent/blogs/blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blogContent_blog_open_blog_open_component__ = __webpack_require__("../../../../../src/app/blogContent/blog-open/blog-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_get_service__ = __webpack_require__("../../../../../src/app/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_save_service__ = __webpack_require__("../../../../../src/app/services/save.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_gaurd_service__ = __webpack_require__("../../../../../src/app/services/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_facebook_service__ = __webpack_require__("../../../../../src/app/services/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_link_service__ = __webpack_require__("../../../../../src/app/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_maintain_height_width_ratio_directive__ = __webpack_require__("../../../../../src/app/directives/maintain-height-width-ratio.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_tab_view_available_directive__ = __webpack_require__("../../../../../src/app/directives/tab-view-available.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__blog_footer_blog_footer_component__ = __webpack_require__("../../../../../src/app/blog-footer/blog-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__custom_url_custom_url_component__ = __webpack_require__("../../../../../src/app/custom-url/custom-url.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__open_full_image_open_full_image_component__ = __webpack_require__("../../../../../src/app/open-full-image/open-full-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__blogContent_related_blogs_related_blogs_component__ = __webpack_require__("../../../../../src/app/blogContent/related-blogs/related-blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__admin_panel_single_panel_single_panel_component__ = __webpack_require__("../../../../../src/app/admin-panel/single-panel/single-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__admin_panel_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/admin-panel/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__editor_panel_blog_preview_blog_preview_component__ = __webpack_require__("../../../../../src/app/editor-panel/blog-preview/blog-preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__editor_panel_editor_panel_component__["a" /* EditorPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_panel_admin_panel_component__["a" /* AdminPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__blog_header_blog_header_component__["a" /* BlogHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__blogContent_trending_blog_trending_blog_component__["a" /* TrendingBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__keywords_keywords_component__["a" /* KeywordsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__keywords_keyword_keyword_component__["a" /* KeywordComponent */],
                __WEBPACK_IMPORTED_MODULE_12__subscribe_card_subscribe_card_component__["a" /* SubscribeCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__blogContent_trending_blog_trending_blog_card_trending_blog_card_component__["a" /* TrendingBlogCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__blogContent_latest_blog_latest_blog_component__["a" /* LatestBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__blogContent_normal_blog_normal_blog_component__["a" /* NormalBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__blogContent_blogs_blogs_component__["a" /* BlogsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__blogContent_blog_open_blog_open_component__["a" /* BlogOpenComponent */],
                __WEBPACK_IMPORTED_MODULE_28__directives_maintain_height_width_ratio_directive__["a" /* MaintainHeightWidthRatioDirective */],
                __WEBPACK_IMPORTED_MODULE_29__directives_tab_view_available_directive__["a" /* TabViewAvailableDirective */],
                __WEBPACK_IMPORTED_MODULE_31__blog_footer_blog_footer_component__["a" /* BlogFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_32__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_33__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__custom_url_custom_url_component__["a" /* CustomUrlComponent */],
                __WEBPACK_IMPORTED_MODULE_37__open_full_image_open_full_image_component__["a" /* OpenFullImageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__blogContent_related_blogs_related_blogs_component__["a" /* RelatedBlogsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__admin_panel_single_panel_single_panel_component__["a" /* SinglePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_40__admin_panel_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_41__editor_panel_blog_preview_blog_preview_component__["a" /* BlogPreviewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'blogist' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_30__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_property_service__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_20__services_get_service__["a" /* GetService */],
                __WEBPACK_IMPORTED_MODULE_21__services_save_service__["a" /* SaveService */],
                __WEBPACK_IMPORTED_MODULE_22__services_status_service__["a" /* StatusService */],
                __WEBPACK_IMPORTED_MODULE_19__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__services_auth_gaurd_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_25__services_facebook_service__["a" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_26__services_window_ref_service__["a" /* WindowRefService */],
                __WEBPACK_IMPORTED_MODULE_27__services_link_service__["a" /* LinkService */],
                { provide: __WEBPACK_IMPORTED_MODULE_34__angular_router__["e" /* UrlSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_36__custom_url_custom_url_component__["a" /* CustomUrlComponent */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog-footer/blog-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\nfooter{\r\n    z-index: 1;\r\n    background-color: #024771;\r\n    width:100%;\r\n    padding: 0.8%;\r\n}\r\n.subscribe{\r\n    width: 70%;\r\n    margin: 0.4% auto;\r\n    background-color: #e5e5e5;\r\n    padding: 0.4%;\r\n}\r\n.subscribe>p{\r\n    width:100px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    color: #ffa600;\r\n    font-family: 'Roboto',sans-serif;\r\n    border-right: 1px solid #ffa600;\r\n    font-size: 1.2em;\r\n    font-weight:700;\r\n    padding: 0.5%;\r\n    padding-right: 2%;\r\n    padding-left:1%;\r\n    \r\n}\r\n.subscribe>input{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: calc(100% - 238px);\r\n    height: 35px;\r\n    margin-left: 2%;\r\n    text-align: center;\r\n}\r\nbutton{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width:100px;\r\n    border:none;\r\n    background-color: #ffa600;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.1em;\r\n    color: white;\r\n    height: 33px;\r\n    padding: 0.5% 0% 0.5% 0%;\r\n    margin:0% 0% 0% 1%\r\n}\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n    font-size: 0.9em;\r\n}\r\n \r\n:-moz-placeholder { \r\n    text-align: center;  \r\n    font-size: 0.9em;\r\n}\r\n \r\n ::-moz-placeholder {  \r\n    text-align: center; \r\n    font-size: 0.9em; \r\n }\r\n \r\n :-ms-input-placeholder {  \r\n    text-align: center; \r\n    font-size: 0.9em;\r\n }\r\n \r\n .blogName{\r\n     text-align: center;\r\n     font-family: 'Roboto',sans-serif;\r\n     font-size: 1.6em;\r\n     color: #ffffff;\r\n     font-weight: 900;\r\n }\r\n .tagline{\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n }\r\n .about{\r\n     text-align: center;\r\n     width:65%;\r\n     margin: 1% auto;\r\n     font-family: 'Roboto',sans-serif;\r\n     color: #ffffff;\r\n     font-size: 1.1em;\r\n     font-weight: 500;\r\n }\r\n \r\n .copyright>img{\r\n     width: 15px;\r\n     height: 15px;\r\n }\r\n .contactUs{\r\n     margin: 1% auto;\r\n     text-align: center;\r\n     width:50%;\r\n     font-family: 'Roboto',sans-serif;\r\n     color: #ffffff;\r\n     font-size: 1.1em;\r\n     font-weight: 500;\r\n }\r\n .copyright{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 43%;\r\n    color: #ffffff;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n }\r\n .followUs{\r\n     text-align: right;\r\n     float: right;\r\n     display: inline-block;\r\n     vertical-align: middle;\r\n     width: 60%;\r\n     color: #ffffff;\r\n     font-family: 'Roboto',sans-serif;\r\n     font-size: 1.1em;\r\n     font-weight: 500;\r\n }\r\n .followUs img{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 1.5%;\r\n }\r\n \r\n .editor{\r\n     text-align: center;\r\n     width: 50%;\r\n    margin: auto;\r\n }\r\n .editor a{\r\n     color: white\r\n }\r\n .subscriptionBox{\r\n    width: 40%;\r\n    height: 200px;\r\n    z-index: 50;\r\n    position: fixed;\r\n    top:20%;\r\n    left: 30%;\r\n    background-color: #ffffff;\r\n    border: 1px solid #888888;\r\n\r\n }\r\n .subscriptionBox>.top{\r\n     width:100%;\r\n     height: 60%;\r\n     background-image: url('/assets/images/sports-social-correct-symbol-white.png');\r\n     background-repeat: no-repeat;\r\n     background-position: center;\r\n     background-size: 60px;\r\n }\r\n .subscriptionBox>.bottom>p:first-child{\r\n    color: black;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    padding: 0.5%\r\n }\r\n .subscriptionBox>.bottom>p:last-child{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: #024771;\r\n    text-align: center;\r\n }\r\n .closeMessage{\r\n    width: 20px;\r\n    height: 20px;\r\n    float: right;\r\n    padding: 1%;\r\n}\r\n.errorMessage{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    color: #b33a3a\r\n}\r\n\r\n @media  (max-width:1000px) and (min-width:800px) {\r\n    .followUs img{\r\n        width: 20px;\r\n        height: 20px;\r\n        margin-left: 1.5%;\r\n     }\r\n     .subscriptionBox{\r\n         width: 60%;\r\n         left: 20%;\r\n     }\r\n     button{\r\n         height: 30px\r\n     }\r\n     .subscribe>input{\r\n        height: 32px;\r\n        width: calc(100% - 230px);\r\n    }\r\n }\r\n @media  (max-width:800px) and (min-width:600px) {\r\n    .followUs img{\r\n        width: 20px;\r\n        height: 20px;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n        width: 80%;\r\n        font-size: 1em;\r\n    }\r\n    .contactUs{\r\n        font-size: 1em;\r\n    }\r\n    .blogName{\r\n        font-size: 1.5em\r\n    }\r\n    .tagline{\r\n        font-size: 0.95em\r\n    }\r\n    .subscribe{\r\n        width: 85%;\r\n    }\r\n    button{\r\n        height: 30px;\r\n    }\r\n    .subscribe>input{\r\n        height: 32px;\r\n        width: calc(100% - 230px);\r\n    }\r\n    .subscriptionBox{\r\n        width: 70%;\r\n        left: 15%;\r\n    }\r\n }\r\n \r\n @media  (max-width:600px) and (min-width:520px){\r\n    .copyright>img{\r\n        width: 15px;\r\n        height: 15px;\r\n    }\r\n     .followUs{\r\n         margin-bottom: 2%;\r\n         font-size: 1em\r\n     }\r\n    .followUs img{\r\n        width: 15px;\r\n        height: 15px;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n        width: 100%;\r\n    }\r\n    .contactUs{\r\n        font-size: 0.9em;\r\n    }\r\n    .blogName{\r\n        font-size: 1.3em\r\n    }\r\n    .tagline{\r\n        font-size: 0.9em\r\n    }\r\n    .subscribe{\r\n        width: 90%;\r\n    }\r\n    .subscribe>input{\r\n        height: 30px;\r\n        width: calc(100% - 230px);\r\n    }\r\n    button{\r\n        height: 28px;\r\n    }\r\n    .subscriptionBox{\r\n        width: 74%;\r\n        left: 13%;\r\n    }\r\n    \r\n }\r\n\r\n @media  (max-width:520px) and (min-width:450px) {\r\n    .copyright>img{\r\n        width: 15px;\r\n        height: 15px;\r\n    }\r\n    .followUs{\r\n        margin-bottom: 2%;\r\n        font-size: 1em\r\n    }\r\n    .followUs img{\r\n        width: 15px;\r\n        height: 15px;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n         width: 100%;\r\n         font-size: 0.9em\r\n     }\r\n     .contactUs{\r\n         font-size: 0.9em;\r\n     }\r\n     .blogName{\r\n         font-size: 1.3em\r\n     }\r\n     .tagline{\r\n         font-size: 0.85em\r\n     }\r\n     .subscribe{\r\n        width: 100%;\r\n    }\r\n    .subscribe>p{\r\n        width: 85px\r\n    }\r\n    button{\r\n        height: 25px;\r\n        width: 75px\r\n    }\r\n     .subscribe>input{\r\n         height: 25px;\r\n         width: calc(100% - 190px);\r\n     }\r\n     .subscriptionBox{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n }\r\n @media (max-width:450px) {\r\n    .copyright>img{\r\n        width: 15px;\r\n        height: 15px;\r\n    }\r\n    .followUs{\r\n        margin-bottom: 2%;\r\n        font-size: 0.9em\r\n    }\r\n    .followUs img{\r\n        width: 15px;\r\n        height: 15px;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n         width: 100%;\r\n         font-size: 0.9em\r\n     }\r\n     .contactUs{\r\n         font-size: 0.9em;\r\n     }\r\n     .blogName{\r\n         font-size: 1.3em\r\n     }\r\n     .tagline{\r\n         font-size: 0.85em\r\n     }\r\n    .subscribe{\r\n        width: 100%;\r\n    }\r\n    .subscribe>p{\r\n        width: 85px\r\n    }\r\n    button{\r\n        height: 25px;\r\n        width: 75px\r\n    }\r\n     .subscribe>input{\r\n         height: 25px;\r\n         width: calc(100% - 182px);\r\n     }\r\n     .subscriptionBox{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-footer/blog-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer #footer>\r\n  <div class=\"subscribe\" >\r\n    <p>\r\n      Subscribe\r\n    </p>\r\n    <input type=\"email\" placeholder=\"Enter your Email\" #subscriber  email>\r\n    <button  (click)=\"Subscribe()\">Submit</button>\r\n  </div>\r\n  <p  class=\"errorMessage\" *ngIf=\"errorMessage\">Email is Inavlid!!! Please enter correct Email</p>\r\n  <p class=\"blogName\" #blogName>Chase Your Sport</p>\r\n  <p class=\"tagline\" #tagline>The Sports Social Blog</p>\r\n  <p class=\"about\" #about> \r\n    Sports Social Blog: Chase Your Sport aims to create a sustainable platform for Indian sports \r\n    lovers to provide latest updates on Indian Sports Trends, analytics, career in sports & \r\n    health & fitness tips\r\n  </p>\r\n  <p class=\"contactUs\" #contactUs>\r\n    Contact Us: letstalk@sportsocial.in\r\n  </p>\r\n  <!-- <p class=\"editor\"> <a routerLink=\"/editorPanel\">Editor</a></p> -->\r\n  \r\n  <p class=\"followUs\" #followUs>\r\n    Follow us on \r\n    <a href=\"https://www.facebook.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">\r\n        <img src=\"/assets/images/sports-social-facebook-logo-white.png\" alt=\"facebook_Logo\" >\r\n    </a> \r\n    <a href=\"https://www.twitter.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">\r\n        <img src=\"/assets/images/sports-social-twitter-logo-white.png\" alt=\"twitter_Logo\"  >\r\n    </a>\r\n    <a href=\"https://www.instagram.com/chaseyoursport\" target=\"_blank\" rel=\"noopener\">\r\n        <img src=\"/assets/images/sports-social-instagram-logo-white.png\" alt=\"insta_Logo\" >\r\n    </a>\r\n    <a href=\"https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network\" target=\"_blank\" rel=\"noopener\">\r\n        <img src=\"/assets/images/sports-social-quora-logo-white.png\" alt=\"quora_Logo\">\r\n    </a>\r\n    <a href=\"https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ\" target=\"_blank\" rel=\"noopener\">\r\n        <img src=\"/assets/images/sports-social-youtube-logo-white.png\" alt=\"youtube_Logo\">\r\n    </a>\r\n    <a href=\"https://www.pinterest.com/chaseyoursport\" target=\"_blank\" rel=\"noopener\">\r\n        <img src=\"/assets/images/sports-social-pinterest-logo-white.png\" alt=\"pintrest_Logo\">\r\n    </a>\r\n    \r\n  </p>\r\n  <p class=\"copyright\" #copyright>\r\n    Copyright <img src=\"/assets/images/copyright.png\"> 2017 CnP Sports Services Private Limited | All Rights Reserved\r\n  </p>\r\n</footer>\r\n\r\n\r\n<div class=\"subscriptionBox\" #subscriptionBox *ngIf=\"showSubscriptionBox\">\r\n    <div class=\"top\">\r\n        <img src=\"/assets/images/sports-social-cancel-black.png\" role=\"button\" class=\"closeMessage\"  (click)=\"close()\">\r\n    </div>\r\n    <div class=\"bottom\">\r\n        <p>Great</p>\r\n        <p>\r\n            You have Subscribed for our Newsletter and Blog updates.\r\n        </p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog-footer/blog-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BlogFooterComponent = /** @class */ (function () {
    function BlogFooterComponent(sendEmail, renderer, status, platformId) {
        this.sendEmail = sendEmail;
        this.renderer = renderer;
        this.status = status;
        this.showSubscriptionBox = false;
        this.errorMessage = false;
    }
    BlogFooterComponent.prototype.ngOnInit = function () {
        this.setMobileView();
    };
    BlogFooterComponent.prototype.Subscribe = function () {
        var _this = this;
        if (this.subscriber.nativeElement.validity.valid == true && this.subscriber.nativeElement.value) {
            this.sendEmail.ofUser(this.subscriber.nativeElement.value)
                .subscribe(function (res) {
                if (res.Status === 'Success') {
                    _this.showSubscriptionBox = true;
                    _this.subscriber.nativeElement.value = '';
                    _this.errorMessage = false;
                }
            });
        }
        else {
            this.subscriber.nativeElement.value = '';
            this.errorMessage = true;
        }
    };
    BlogFooterComponent.prototype.close = function () {
        this.showSubscriptionBox = false;
    };
    BlogFooterComponent.prototype.setMobileView = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.footer.nativeElement).width;
        if (width < 850) {
            this.renderer.setStyle(this.copyright.nativeElement, 'width', '100%');
            this.renderer.setStyle(this.followUs.nativeElement, 'width', '100%');
            this.renderer.setStyle(this.followUs.nativeElement, 'text-align', 'center');
            this.renderer.setStyle(this.copyright.nativeElement, 'text-align', 'center');
        }
        else {
            this.renderer.setStyle(this.followUs.nativeElement, 'width', '40%');
            this.renderer.setStyle(this.followUs.nativeElement, 'text-align', 'right');
            this.renderer.setStyle(this.copyright.nativeElement, 'width', '60%');
            this.renderer.setStyle(this.copyright.nativeElement, 'text-align', 'left');
        }
    };
    BlogFooterComponent.prototype.onresize = function () {
        this.setMobileView();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('followUs'),
        __metadata("design:type", Object)
    ], BlogFooterComponent.prototype, "followUs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('copyright'),
        __metadata("design:type", Object)
    ], BlogFooterComponent.prototype, "copyright", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('subscriber'),
        __metadata("design:type", Object)
    ], BlogFooterComponent.prototype, "subscriber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('footer'),
        __metadata("design:type", Object)
    ], BlogFooterComponent.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogFooterComponent.prototype, "onresize", null);
    BlogFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-blog-footer',
            template: __webpack_require__("../../../../../src/app/blog-footer/blog-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-footer/blog-footer.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _c || Object, Object])
    ], BlogFooterComponent);
    return BlogFooterComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=blog-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog-header/blog-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    \r\n}\r\nheader{\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    position: fixed;\r\n    top:0px;\r\n    z-index: 10;\r\n    box-shadow: 1px 1px  #bbbbbb;\r\n    font-family: 'Roboto',sans-serif;\r\n    padding: 0.2%;\r\n}\r\n.left{\r\n    display: inline-block;\r\n    width:80%;\r\n    vertical-align: middle;\r\n}\r\n\r\nli{\r\n    display: inline-block;\r\n    list-style: none;\r\n    width: auto;\r\n    margin: 0.2% 0.1% 0.2% 0%;\r\n    vertical-align: top;\r\n   \r\n}\r\n.left>li{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 60%;\r\n    margin-left:3%;\r\n}\r\n.brand-image{\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left:1.8%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\nimg{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brand-title{\r\n  \r\n   display: inline-block;\r\n   vertical-align: middle;\r\n}\r\n.brand-title > h1{\r\n    font-size: 1.5em ;\r\n    font-weight: 700;\r\n}\r\n.brand-title span:first-child{\r\n    color: #024770;\r\n}\r\n.brand-title span:nth-child(2){\r\n    color: #ffa600;\r\n}\r\n.brand-title span:nth-child(3){\r\n    font-size: 60%;\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n.brand-title p{\r\n    font-size: 55%;\r\n    color: #024770;\r\n    font-weight: 400;\r\n    text-align: left;\r\n    font-style: italic;\r\n    padding-left: 9%;\r\n}\r\n.right{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: right;\r\n    width:19%;\r\n}\r\n.right>li{\r\n    margin-right: 5%;\r\n}\r\ninput{\r\n    height: 35px;\r\n    background-image: url('/assets/images/sports-social-search.png');\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    background-position-y: 50%;\r\n    background-position-x: 2%;\r\n    background-size: 15px;\r\n    outline: #fafafa;\r\n    border-radius: 25px;\r\n    background-color: #e5e5e5;\r\n    text-align: center;\r\n    box-shadow: 1px 1px 2px #bbbbbb\r\n}\r\n.mobileView{\r\n    display: inline-block;\r\n    width: auto;\r\n}\r\n.menuImageHolder{\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: right !important;   \r\n}\r\n.menuImageHolder img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.dropDown{\r\n  width: 80%;\r\n  background-color: #ffffff;\r\n  padding: 1% 1% 0% 1%;\r\n  position: fixed;\r\n  z-index: 50;\r\n  top:10%;\r\n  left:10%;\r\n  box-shadow: 1px 1px 2px #eeeeee\r\n}\r\n\r\n.website{\r\n    width: 95% !important;\r\n    border-bottom: 1px solid #bbbbbb\r\n}\r\n.dropDown .Close{\r\n    float: right;\r\n    width: 12px;\r\n    height: 12px;\r\n    padding:0.5% 1% 0% 0%;\r\n}\r\n.websiteLink{\r\n    display: block;\r\n    color: #024770;\r\n    text-align: center;\r\n    margin: 1%;\r\n}\r\n\r\n.search input{\r\n    display: inline-block;\r\n    border-radius: 0px;\r\n    border: none;\r\n    background-image: none;\r\n    width: 100%;\r\n   \r\n}\r\n.search button{\r\n    display: block;\r\n    width: 70%;\r\n    margin: 2% auto;\r\n    border-radius: 4px;\r\n    background-color: #ffa600;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 1%\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n }\r\n \r\n :-moz-placeholder { \r\n    text-align: center;  \r\n }\r\n \r\n ::-moz-placeholder {  \r\n    text-align: center;  \r\n }\r\n \r\n :-ms-input-placeholder {  \r\n    text-align: center; \r\n }\r\n .suggestion{\r\n     position: absolute;\r\n     top: 45px;\r\n     width:51%;\r\n     background-color:white\r\n }\r\n .suggestion ul{\r\n     display: block;\r\n     border: 1px solid #bbbbbb;\r\n }\r\n .suggestion li {\r\n     padding: 1%;\r\n     display: block;\r\n     border-bottom: 1px solid   #bbbbbb\r\n }\r\n .mobileView .suggestion{\r\n     top:65px;\r\n     width: 100%;\r\n }\r\n \r\n  a:hover{\r\n      text-decoration: none;\r\n  }\r\n  .websiteLink{\r\n      color: #024771;\r\n      font-weight: 700;\r\n  }\r\n .websiteLink>img{\r\n     width: 20px;\r\n     height: 20px;\r\n     padding: 1%\r\n}\r\n  .websiteLink:hover{\r\n      color: #ffa600;\r\n  }\r\n  .dropDown p{\r\n      width: 60%;\r\n      margin: auto\r\n  }\r\n  .searchResult{\r\n      z-index: 50;\r\n      background-color: #ffffff;\r\n      display: block;\r\n      border-radius: 5px;\r\n      position: absolute;\r\n      box-shadow: 1px 1px 4px #ffffff;\r\n      padding: 4px;\r\n      padding-top:0px !important;\r\n  }\r\n  .searchResult> li{\r\n      display: block;\r\n      \r\n      text-align: center;\r\n      border-bottom: 1px solid #e5e5e5;\r\n      font-size: 1.2em;\r\n     \r\n  }\r\n   .searchResult a{\r\n       padding: 5px;\r\n       display: block;\r\n       width:100%;\r\n       color: black;\r\n   }\r\n  .searchResult a:hover {\r\n    background-color: #024771;\r\n    color: #ffffff;\r\n    font-weight: 500;\r\n  }\r\n\r\n  @media (max-width:750px) and (min-width:600px){\r\n      .left{\r\n          width: 92%\r\n      }\r\n      header{\r\n          padding: 0.4%;\r\n      }\r\n  }\r\n  @media (max-width:600px) and (min-width:450px) {\r\n    .left{\r\n        width: 90%\r\n    }\r\n    header{\r\n        padding: 0.5%;\r\n    }\r\n  }\r\n  @media (max-width:450px) and (min-width:350px) {\r\n      .left{\r\n          width: 88%;\r\n      }\r\n      header{\r\n        padding: 0.6%;\r\n    }\r\n  }\r\n  @media (max-width:350px) {\r\n      .left{\r\n          width: 86%;\r\n      }\r\n      header{\r\n        padding: 0.6%;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-header/blog-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header #Header>\r\n  <ng-container *ngIf=\"isBrowser\">\r\n  <ul class=\"left\" #left>\r\n    <a href=\"/\">\r\n      <li class=\"brand-image\">\r\n        <img src=\"/assets/images/sports-social-logo.png\" alt=\"Sports Social logo\">\r\n      </li>\r\n      <li class=\"brand-title\">\r\n        <h1>\r\n          <span>Sports</span> <span>Social</span> <span>Blog</span>\r\n          <p>Chase your Sport</p>\r\n        </h1>\r\n      </li>\r\n    </a>\r\n    <li  *ngIf=\"!mobileView\">\r\n      <input \r\n        type=\"text\" \r\n        placeholder=\"Search here the latest topics & trends in sports\" \r\n        (keyup)=\"sendData($event)\"\r\n        #searchBox> \r\n        <ul class=\"searchResult\" *ngIf=\"haveresult\" #resultBox>\r\n          <li *ngFor=\"let result of results | slice:0:9\">\r\n            <a routerLink=\"/{{result}}\" >\r\n              {{ result }}\r\n            </a>\r\n          </li>\r\n        </ul> \r\n    </li>\r\n  </ul>\r\n  <ul class=\"right\" *ngIf=\"!mobileView\">\r\n    <li >\r\n      <a \r\n        href=\"https://www.sportsocial.in\" \r\n        target=\"_blank\" \r\n        class=\" websiteLink\" >\r\n        Website \r\n      </a>\r\n    </li>\r\n    <li >\r\n      <a \r\n        href=\"https://goo.gl/qrgCz5\" \r\n        target=\"_blank\" \r\n        class=\" websiteLink\" >\r\n        App\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"mobileView \" *ngIf=\"mobileView\">\r\n     <div class=\"menuImageHolder\">\r\n       <img src=\"/assets/images/sports-social-menu.png\" role=\"button\" (click)=\"openDropDown()\" alt=\"sports-social-menu\">\r\n     </div>\r\n     <div *ngIf=\"open\" class=\"dropDown\">\r\n        <img src=\"/assets/images/sports-social-cancel-black.png\" role=\"button\" (click)=\"closeDropDown()\" class=\"Close\" alt=\"sports-social-cancel-black\">\r\n        <p class=\"website\"> \r\n          <a \r\n            href=\"https://www.sportsocial.in\" \r\n            target=\"_blank\" \r\n            class=\" websiteLink\">\r\n             Website \r\n         </a>\r\n        </p>\r\n        <p> \r\n          <a \r\n            href=\"https://goo.gl/qrgCz5\" \r\n            target=\"_blank\" \r\n            class=\" websiteLink\">\r\n            <!-- <img src=\"/assets/images/sports-social-link-blue-symbol.png\" alt=\"\" #linkImage> -->\r\n            App\r\n         </a>\r\n        </p>\r\n      <div class=\"search\">\r\n         <input \r\n          type=\"text\" \r\n          placeholder=\"Search \" \r\n          (keyup)=\"sendData($event)\"\r\n          #searchBox >\r\n          <ul class=\"searchResult\" *ngIf=\"haveresult\" #resultBox>\r\n              <li *ngFor=\"let result of results | slice:0:9\" >\r\n                <a routerLink=\"/{{result}}\" (click)=\"navigate()\" >\r\n                  {{ result }}\r\n                </a>\r\n              </li>\r\n          </ul> \r\n          <button (click)=\"searchSportSocial()\">Search</button>\r\n      </div>\r\n      \r\n    </div>\r\n  </div> \r\n</ng-container>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog-header/blog-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_service__ = __webpack_require__("../../../../../src/app/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var BlogHeaderComponent = /** @class */ (function () {
    function BlogHeaderComponent(sendHeight, sendWidth, renderer, send, get, elRef, _sanitizer, searchKeyword, router, sendKey, zone, platformId) {
        this.sendHeight = sendHeight;
        this.sendWidth = sendWidth;
        this.renderer = renderer;
        this.send = send;
        this.get = get;
        this.elRef = elRef;
        this._sanitizer = _sanitizer;
        this.searchKeyword = searchKeyword;
        this.router = router;
        this.sendKey = sendKey;
        this.zone = zone;
        this.keywords = [];
        this.pageNumber = 1;
        this.mobileView = false;
        this.searchedTextPresent = false;
        this.open = false;
        this.search = false;
        this.results = [];
        this.haveresult = false;
        this.searchKey = new __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.isBrowser = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    BlogHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responsiveView();
        this.get.keywords()
            .subscribe(function (res) {
            // tslint:disable-next-line:forin
            for (var i in res) {
                _this.keywords.push(res[i].Keyword);
            }
        });
        this.sendHeight.ofHeader.next(Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Header.nativeElement).bottom);
        this.sendWindowWidth();
    };
    BlogHeaderComponent.prototype.ngAfterViewChecked = function () {
        this.sendWindowWidth();
        this.sendHeight.ofHeader.next(Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Header.nativeElement).bottom);
    };
    BlogHeaderComponent.prototype.onclick = function () {
        this.haveresult = false;
        if (this.searchBox) {
            this.searchBox.nativeElement.value = '';
        }
    };
    BlogHeaderComponent.prototype.onresize = function () {
        this.responsiveView();
        if (this.resultBox) {
            this.setStyleOfResultBox();
        }
        this.sendWindowWidth();
        this.sendHeight.ofHeader.next(Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Header.nativeElement).bottom);
    };
    BlogHeaderComponent.prototype.openDropDown = function () {
        this.open = true;
    };
    BlogHeaderComponent.prototype.closeDropDown = function () {
        this.open = false;
    };
    BlogHeaderComponent.prototype.searchSportSocial = function () {
        var input = this.searchBox.nativeElement.value;
        this.open = false;
        this.router.navigate(['/' + input]);
        this.searchBox.nativeElement.value = '';
        this.haveresult = false;
    };
    BlogHeaderComponent.prototype.responsiveView = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Header.nativeElement).width;
        console.log(width, 'window');
        if (width <= 750) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    BlogHeaderComponent.prototype.sendWindowWidth = function () {
        this.sendWidth.ofWindow.next(Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Header.nativeElement).width);
    };
    BlogHeaderComponent.prototype.sendData = function (event) {
        var _this = this;
        if (event.target.value !== '') {
            this.haveresult = true;
        }
        if (event.target.value === '') {
            this.haveresult = false;
        }
        this.searchKey.
            next(event.target.value);
        this.SearchKey = this.searchKey
            .debounceTime(100)
            .distinctUntilChanged()
            .subscribe(function (res) {
            var str = res.toLowerCase();
            console.log(res, 'conect');
            _this.results = _this.keywords.filter(function (data) {
                return data.toLowerCase().indexOf(str) !== -1 && str !== '';
            });
            if (_this.resultBox) {
                _this.setStyleOfResultBox();
            }
            //  console.log(this.results, ' conect');
        });
        var input = this.searchBox.nativeElement.value;
        if (event.code === 'Enter') {
            this.open = false;
            this.router.navigate(['/' + input]);
            this.searchBox.nativeElement.value = '';
            this.haveresult = false;
        }
    };
    BlogHeaderComponent.prototype.navigate = function () {
        this.open = false;
    };
    BlogHeaderComponent.prototype.hover = function (event) {
        this.linkImage.nativeElement.src = '/assets/images/sports-social-link-orange-symbol.png';
    };
    BlogHeaderComponent.prototype.removehoverColor = function (event) {
        this.linkImage.nativeElement.src = '/assets/images/sports-social-link-blue-symbol.png';
    };
    BlogHeaderComponent.prototype.setStyleOfResultBox = function () {
        var prop = this.searchBox.nativeElement.getBoundingClientRect();
        this.renderer.setStyle(this.resultBox.nativeElement, 'width', prop.width + 'px');
        if (!this.mobileView) {
            this.renderer.setStyle(this.resultBox.nativeElement, 'top', prop.bottom + 2 + 'px');
        }
        else {
            this.renderer.setStyle(this.resultBox.nativeElement, 'top', prop.top - 22 + 'px');
            if (this.results.toString() === '') {
                this.haveresult = false;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('Header'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
    ], BlogHeaderComponent.prototype, "Header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('searchBox'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
    ], BlogHeaderComponent.prototype, "searchBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('resultBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
    ], BlogHeaderComponent.prototype, "resultBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('linkImage'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
    ], BlogHeaderComponent.prototype, "linkImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:click', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogHeaderComponent.prototype, "onclick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogHeaderComponent.prototype, "onresize", null);
    BlogHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocialBlog-header',
            template: __webpack_require__("../../../../../src/app/blog-header/blog-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-header/blog-header.component.css")],
        }),
        __param(11, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_service__["a" /* GetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_service__["a" /* GetService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _q || Object, Object])
    ], BlogHeaderComponent);
    return BlogHeaderComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=blog-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/blog-open/blog-open.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family:'Roboto',sans-serif;\r\n}\r\n\r\n.Catagory{\r\n    width: 90%;\r\n    margin: auto;\r\n    padding: 1.5% 0% 0% 0%;\r\n}\r\n.Catagory>span:first-child{\r\n    font-weight: 500\r\n}\r\n.Catagory>span:first-child:hover{\r\n    font-weight: 700\r\n}\r\n.blogImageHolder{\r\n    position: relative;\r\n    width:90%;\r\n    margin: 1% auto;\r\n    max-height:400px;\r\n    box-shadow: 3px 3px #fafafa;\r\n    overflow: hidden;\r\n}\r\n\r\n.blogImage{\r\n    width:100%;\r\n}\r\n.zoom{\r\n    position: absolute;\r\n    bottom: 2%;\r\n    right: 2%;\r\n    widows: 20px;\r\n    height: 20px;\r\n}\r\n.count img{\r\n    width:15px;\r\n    height: 15px;\r\n}\r\n.title{\r\n    font-size: 2.2em;\r\n    font-weight: 900;\r\n    color: black;\r\n    margin-bottom: 1%\r\n}\r\n.shortDesc{\r\n    font-size: 1.1em;\r\n    color: #888888;\r\n    text-align: left;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.content{\r\n    width: 90%;\r\n    margin: 1% auto;\r\n    padding-top:2% ;\r\n    min-height:1000px;\r\n}\r\n.blogInfo{\r\n    width:65%;\r\n    display: inline-block;\r\n    margin-right: 3.5%;\r\n    margin-top: -0.6%;\r\n}\r\n\r\n.bloggerImage{\r\n    \r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width:45px;\r\n    height: 45px;\r\n    border: 1px solid #bbbbbb;\r\n    border-radius: 50%;\r\n    background-image: url('/assets/images/user.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.bloggerImage>img{\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.blogger{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width:52%;\r\n    font-family: 'Roboto',Cambria, Cochin, Georgia, Times, Times New Roman, serif\r\n}\r\n.bloggerName>span{\r\n    font-weight:700\r\n}\r\n.writtenDate{\r\n    font-size: 0.9em;\r\n    font-weight: 700\r\n}\r\n.count{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: right;\r\n    width:38%;\r\n    padding: 1% 2% 1% 2%;\r\n}\r\n.count>span{\r\n    margin-left: 5%\r\n}\r\n.count>span>span{\r\n    color: #ffa600;\r\n    font-size: 1.1em\r\n}\r\n.count>span>img{\r\n    margin-right: 3%\r\n}\r\n\r\n.shareOn{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n    padding: 2% 0% 2% 0%;\r\n}\r\n.shareOn img{\r\n    width:30px;\r\n    height:30px;\r\n    margin:1%;\r\n}\r\n.shareOn img:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n}\r\n.desc{\r\n    font-family: 'Roboto',sans-serif !important;\r\n    font-size: 1.3em !important;\r\n    font-weight: 400;\r\n    line-height: 2em;\r\n    color: black;\r\n    padding-bottom: 2%;\r\n}\r\n.tags{\r\n    width:100%;\r\n}\r\n.tagHolder{\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.tagHolder>img{\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n.tags>a{\r\n    color: #ffa600;\r\n    padding: 0% 1% 0% 2% ;\r\n    text-decoration: underline\r\n}\r\n.social{\r\n    width: 28%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.follow{\r\n    padding: 5%;\r\n    border: 1px solid #bbbbbb;\r\n}\r\n.follow >p{\r\n    text-align: center;\r\n    color: #024771;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n}\r\n.follow img{\r\n    width:8%;\r\n    height:8%;\r\n    margin: 2.3%\r\n}\r\n.social> .twitter-profile{\r\n    border: 1px solid #bbbbbb;\r\n    margin-top:2%;\r\n}\r\n.twitter-profile{\r\n    min-height: 700px\r\n}\r\n.twitter-profile p{\r\n    padding: 1% 1% 1% 4%;\r\n    color: #024771;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n}\r\n.twitter-profile img{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n.comments{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    border-top: 1px solid #444444;\r\n    padding: 2% 0% 2% 0%\r\n\r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.fullImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    top:0%;\r\n    left:0%;\r\n    z-index: 50;\r\n    box-shadow: 1px 1px #bbbbbb;\r\n    border: 1px solid #bbbbbb;\r\n    background-color: black;\r\n    opacity: 0.7;\r\n    background-repeat: no-repeat;\r\n    background-position: center\r\n}\r\n.fullImageHolder{\r\n    position: fixed;\r\n    width: 70%;\r\n    left: 15%;\r\n    top:0%;\r\n    z-index: 100;\r\n}\r\n.fullImageHolder>img{\r\n    display: block;\r\n    padding: 10%;\r\n    text-align: center;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.cancel{\r\n    position: absolute;\r\n    top:1%;\r\n    right:1%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 150\r\n}\r\n.center{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.center >span{\r\n    display: block;\r\n    font-size: 1.4em; \r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n    z-index: 50;\r\n}\r\n@media (max-width:800px) and (min-width:600px){\r\n    .fullImageHolder{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n}\r\n@media (max-width:600px) and (min-width:500px){\r\n    .fullImageHolder{\r\n        width: 95%;\r\n        left: 2.5%;\r\n    }\r\n    .blogger{\r\n        width:50%;\r\n    }\r\n    .title{\r\n        font-size: 2em\r\n    }\r\n}\r\n@media (max-width:500px) and (min-width:360px) {\r\n    .fullImageHolder{\r\n        width: 95%;\r\n        left: 2.5%;\r\n    }\r\n    .blogger{\r\n        width:45%;\r\n    }\r\n    .title{\r\n        font-size: 1.8em\r\n    }\r\n}\r\n@media (max-width:360px) {\r\n    .fullImageHolder{\r\n        width: 95%;\r\n        left: 2.5%;\r\n    }\r\n    .blogger{\r\n        width:42%;\r\n    }\r\n    .title{\r\n        font-size: 1.6em\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/blog-open/blog-open.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=openBlog  #openBlog>\r\n    <img class=\"loading\" *ngIf=\"!isBrowser\" src=\"/assets/images/sports-social-loading.gif\" >\r\n  <p class=\"Catagory\" *ngIf=\"isBrowser\">\r\n    <span role=\"button\" routerLink=\"/{{Keywords[0]}}\" (click)=\"getblogs($event)\">{{Keywords[0]}}</span>\r\n    <span  *ngIf=\"blogDataRecieved\">|</span>\r\n    <span *ngIf=\"blog\">{{blog.readingTime}}</span>\r\n  </p>\r\n  <div class=\"blogImageHolder\">\r\n    <ng-container *ngIf=\"isBrowser\">\r\n      <img \r\n        class=\"blogImage\" \r\n        alt=\"blogImage\" \r\n        src=\"{{blog.blogImage}}\"  \r\n        (error)=\"setDefaultBlogImage()\" \r\n        (load)=\"removeInitalImage($event)\"\r\n        role=\"button\" \r\n        *ngIf=\"blogDataRecieved\"\r\n        (click)=\"openfullImage()\">\r\n      \r\n      <img \r\n        class=\"blogImage\"  \r\n        alt=\"InitialblogImage\" \r\n        src=\"/assets/images/default-image.png\" \r\n        *ngIf=\"loading\" \r\n        (click)=\"openfullImage()\" \r\n        role=\"button\">\r\n      <img src=\"/assets/images/sports-social-zoom-out-orange.png\" alt=\"sports-social-zoom-out-orange\" role=\"button\" (click)=\"openfullImage()\"  class=\"zoom\">\r\n    </ng-container>\r\n    </div>\r\n  \r\n  <div class=\"content\">\r\n    \r\n    <div class=\"blogInfo\" #BlogInfo>\r\n      <ng-container *ngIf=\"isBrowser\">\r\n        <p *ngIf=\"blog\" [innerHtml]=\"blog.heading\" class=\"title\"></p>\r\n        <p  *ngIf=\"blog\" class=\"shortDesc\">{{blog.MetaDesc}}</p>\r\n      </ng-container>\r\n      <div class=\"bloggerImage\" *ngIf=\"isBrowser\">\r\n        <img *ngIf=\"blog\" src=\"{{blog.bloggerImage}}\" (load)=\"removeBackgroundUserImage()\"  (error)=\"setDefault()\" #userImage>\r\n      </div>\r\n      <ng-container *ngIf=\"isBrowser\">\r\n        <div class=\"blogger\" *ngIf=\"blogDataRecieved\">\r\n          <p  class=\"bloggerName\">Written by <span > {{blog.bloggerName}}</span></p>  \r\n          <p class=\"writtenDate\">\r\n            {{blog.exactDate}}\r\n          </p>\r\n        </div>\r\n        <div class=\"count\" *ngIf=\"blogDataRecieved\">\r\n          <span>\r\n            <img src=\"/assets/images/sports-social-view-orange.png\" alt=\"sports-social-view-orange\">\r\n            <span >{{blog.ViewCount}}</span>\r\n          </span>\r\n          <span>\r\n            <img src=\"/assets/images/sports-social-share-orange.png\" alt=\"sports-social-share-orange\">\r\n            <span>{{blog.ShareCount}}</span>\r\n          </span>\r\n        </div>  \r\n        <img class=\"loading\" *ngIf=\"!blogDataRecieved\" src=\"/assets/images/sports-social-loading.gif\" >\r\n        <div class=\"shareOn\" *ngIf=\"blogDataRecieved\">\r\n          Share on \r\n          <img src=\"/assets/images/sports-social-facebook-logo-black.png\" role=\"button\" (click)=\"shareOnFacebook()\"  alt=\"sports-social-facebook-logo-black\">\r\n          <a href=\"https://twitter.com/share\" (click)=\"shareOnTwitter()\" #popup class=\"twitter\">\r\n            <img src=\"/assets/images/sports-social-twitter-logo-black.png\"  alt=\"sports-social-twitter-logo-black\">\r\n          </a> \r\n          <a href=\"https://www.pinterest.com/pin/create/button/?url={{url}}&media={{blog.blogImage}}\"  \r\n            data-pin-custom=\"true\"\r\n            target=\"_blank\">\r\n              <img (click)=\"shareOnPintrest()\" src=\"/assets/images/sports-social-pintrest-black.png\" alt=\"\">\r\n          </a>\r\n          <a href=\"https://www.linkedin.com/shareArticle?mini=true&url={{url}}\" target=\"_blank\">\r\n            <img (click)=\"shareOnLinkedin()\" src=\"/assets/images/sports-social-linkedin-black.png\" role=\"button\" >\r\n          </a>\r\n          <a href=\"https://plus.google.com/share?url={{url}}\" target=\"_blank\" >\r\n            <img (click)=\"shareOngooglePlus()\" src=\"/assets/images/sports-social-google-plus-black.png\" alt=\"Google+\" title=\"Google+\"/>\r\n          </a>\r\n        </div>\r\n        <p [innerHtml]=\"content\" class=\"desc\" *ngIf=\"blogDataRecieved\"></p>\r\n        <div class=\"tags\" *ngIf=\"blogDataRecieved\" >\r\n          <div class=\"tagHolder\">\r\n            <img src=\"/assets/images/sports-social-tag.png\" alt=\"sports-social-tag\">\r\n          </div>\r\n          <a *ngFor=\"let key of Keywords;let i=index\" role=\"button\" routerLink=\"/{{key}}\" (click)=\"getblogs($event)\">{{key}}</a>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <ng-container *ngIf=\"isBrowser\" >\r\n    <div class=\"social\" *ngIf=\"!removeSocial\">\r\n      <div class=\"follow\">\r\n        <p *ngIf=\"blogDataRecieved\">Follow us</p>\r\n        <a href=\"https://www.facebook.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">\r\n          <img src=\"/assets/images/sports-social-facebook-logo-blue.png\" alt=\"sports-social-facebook-logo-blue\">\r\n        </a> \r\n        <a href=\"https://www.instagram.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\"> \r\n          <img src=\"/assets/images/sports-social-instagram-logo-blue.png\" alt=\"sports-social-instagram-logo-blue\">\r\n        </a>\r\n        <a href=\"https://www.twitter.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">  \r\n          <img src=\"/assets/images/sports-social-twitter-logo-blue.png\" alt=\"sports-social-twitter-logo-blue\">\r\n        </a>\r\n        <a href=\"https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ\" target=\"_blank\"  rel=\"noopener\">  \r\n          <img src=\"/assets/images/sports-social-youtube-logo-blue.png\" alt=\"sports-social-youtube-logo-blue\">\r\n        </a>\r\n        <a href=\"https://www.pinterest.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">  \r\n          <img src=\"/assets/images/sports-social-pinterest-logo-blue.png\" alt=\"sports-social-pinterest-logo-blue\">\r\n        </a>\r\n        <a href=\" https://in.linkedin.com/company/sports-social\" target=\"_blank\"  rel=\"noopener\">  \r\n          <img src=\"/assets/images/sports-social-linkedin-logo-blue.png\" alt=\"sports-social-linkedin-logo-blue\">\r\n        </a>\r\n        <a href=\"https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network\" target=\"_blank\"  rel=\"noopener\">  \r\n          <img src=\"/assets/images/sports-social-quora-logo-blue.png\" alt=\"sports-social-quora-logo-blue\">\r\n        </a>\r\n      </div>\r\n      <div class=\"twitter-profile\">\r\n        <p>\r\n          <img src=\"/assets/images/sports-social-twitter-logo-blue.png\" alt=\"sports-social-twitter-logo-blue\">\r\n          Tweets by @chaseyoursport</p>\r\n          <a class=\"twitter-timeline\" \r\n          data-width=\"450\"\r\n          data-height=\"700\"\r\n          data-chrome=\"noheader nofooter\"\r\n          href=\"https://twitter.com/chaseyoursport\">\r\n          Tweets by chaseyoursport\r\n        </a> \r\n        <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n        </div>\r\n    </div>\r\n  </ng-container>\r\n  </div>\r\n  <ng-container *ngIf=\"isBrowser\">\r\n    <p class=\"shareOn center\" *ngIf=\"blogDataRecieved\"> \r\n      <span>Enjoy this article? Don't forget to share.</span>\r\n      <img src=\"/assets/images/sports-social-facebook-logo-blue.png\" role=\"button\" (click)=\"shareOnFacebook()\" alt=\"sports-social-facebook-logo-black\">\r\n      <a href=\"http://twitter.com/share\" (click)=\"shareOnTwitter()\" #popup class=\"twitter\">\r\n        <img src=\"/assets/images/sports-social-twitter-logo-blue.png\"   alt=\"sports-social-twitter-logo-black\">\r\n      </a> \r\n      <a href=\"https://www.pinterest.com/pin/create/button/?url={{url}}&media={{blog.blogImage}}\"  \r\n        data-pin-custom=\"true\"\r\n        target=\"_blank\">\r\n        <img (click)=\"shareOnPintrest()\" src=\"/assets/images/sports-social-pinterest-logo-blue.png\" alt=\"sports-social-pintrest-logo\">\r\n      </a>\r\n      <a href= \"http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{blog.heading}}&summary={{blog.MetaDesc}}&source=chaseyoursport.com\" target=\"_blank\">\r\n        <img  (click)=\"shareOnLinkedin()\" src=\"/assets/images/sports-social-linkedin-logo-blue.png\" role=\"button\" >\r\n      </a>\r\n      <a href=\"https://plus.google.com/share?url={{url}}\" target=\"_blank\"  >\r\n        <img (click)=\"shareOngooglePlus()\" src=\"/assets/images/sports-social-google-plus-blue.png\" alt=\"Google+\" title=\"Google+\"/>\r\n      </a>\r\n    </p>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isBrowser\">\r\n    <div class=\"comments\" *ngIf=\"blogDataRecieved\">\r\n      <SportSocial-comments\r\n        [BlogId]=\"blogID\">\r\n      </SportSocial-comments>\r\n    </div>\r\n    <SportSocial-related-blogs></SportSocial-related-blogs>\r\n  </ng-container>\r\n  \r\n</div> \r\n<ng-container *ngIf=\"isBrowser\"> \r\n  <SportSocial-blog-footer *ngIf=\"blogDataRecieved\"></SportSocial-blog-footer>\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"fullImage\"  *ngIf=\"openFullImage\" >\r\n  <img \r\n   src=\"/assets/images/sports-social-cancel-white.png\" \r\n   class=\"cancel\" role=\"button\" (click)=\"closeFullImage()\" >   \r\n   \r\n </div>\r\n <div class=\"fullImageHolder\" *ngIf=\"openFullImage\" #fullImage>\r\n   <img src=\"{{blog.blogImage}}\" title=\"{{blog.ImageDesc}}\" (load)=\"onFullImageload()\">\r\n </div>\r\n\r\n \r\n "

/***/ }),

/***/ "../../../../../src/app/blogContent/blog-open/blog-open.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogOpenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_facebook_service__ = __webpack_require__("../../../../../src/app/services/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_link_service__ = __webpack_require__("../../../../../src/app/services/link.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var BlogOpenComponent = /** @class */ (function () {
    function BlogOpenComponent(platformId, recieve, recieveHeight, link, renderer, route, sanitizer, sendKey, router, post, send, metaService, load, titleService, Fb, http, Link) {
        this.recieve = recieve;
        this.recieveHeight = recieveHeight;
        this.link = link;
        this.renderer = renderer;
        this.route = route;
        this.sanitizer = sanitizer;
        this.sendKey = sendKey;
        this.router = router;
        this.post = post;
        this.send = send;
        this.metaService = metaService;
        this.load = load;
        this.titleService = titleService;
        this.Fb = Fb;
        this.http = http;
        this.Link = Link;
        this.removeSocial = false;
        this.isConnectedWithFacebook = false;
        this.mobileView = false;
        this.dataRecived = false;
        this.openFullImage = false;
        this.relatedArticles = false;
        this.blogDataRecieved = false;
        this.Keywords = [];
        this.loading = true;
        this.isBrowser = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["j" /* isPlatformBrowser */])(platformId);
        console.log("costructor call");
    }
    BlogOpenComponent.prototype.ngOnInit = function () {
        console.log('blog opened');
        this.blogDataRecieved = false;
        this.recieveBlogIdFromUrl();
        this.setTopMargin();
        this.setMobileView();
    };
    BlogOpenComponent.prototype.ngAfterViewInit = function () {
        if (this.isBrowser) {
            this.scriptOfTwitter();
        }
        console.log('blog opened after view');
    };
    BlogOpenComponent.prototype.setTitle = function () {
        if (this.route.snapshot.url[0].path !== 'sportsocialblog' || this.route.snapshot.url[1].path !== 'page') {
            this.titleService.setTitle(this.blog.heading + ' | Chase Your Sport - Sports Social Blog');
        }
    };
    BlogOpenComponent.prototype.setCanonivalURL = function () {
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        var url = 'https://www.chaseyoursport.com/' + key
            + '/' + this.blog.heading.replace(/\s/g, '-') + '/' + this.blogID;
        this.Link.addTag({ rel: 'canonical', href: url });
    };
    BlogOpenComponent.prototype.sendViewCount = function () {
        this.send.viewCountOfBlog(this.blogID, this.ViewCount).subscribe(function (data) {
            // console.log(data, " view")
        });
    };
    BlogOpenComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
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
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        this.keys = this.blog.keywords.toString();
        var url = 'https://www.chaseyoursport.com/' + key
            + '/' + this.blog.heading.replace(/\s/g, '-') + '/' + this.blogID;
        // console.log(url);
        this.metaService.addTags([
            { name: 'title', content: this.blog.heading },
            { name: 'keywords', content: this.keys },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: this.blog.heading },
            { property: 'og:description', content: this.blog.MetaDesc },
            { property: 'og:url', content: url },
            { property: 'og:image', content: this.blog.blogImage },
            { property: 'og:type', content: 'article' },
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Chaseyoursport' },
            { name: 'twitter:creator', content: '@NadeemKhan' },
            { name: 'twitter:title', content: this.blog.heading },
            { name: 'twitter:description', content: this.blog.MetaDesc },
            { name: 'twitter:image:src', content: this.blog.blogImage },
        ]);
    };
    BlogOpenComponent.prototype.recieveBlogIdFromUrl = function () {
        var _this = this;
        this.blogID = this.route.snapshot.url[2].path;
        this.route.params.subscribe(function (params) {
            _this.blogID = params.blogId;
            _this.getBlogDetails();
        });
    };
    BlogOpenComponent.prototype.getBlogDetails = function () {
        var _this = this;
        this.removePreviousTags();
        var blog;
        this.load.dataOfsingleBlog(this.blogID).subscribe(function (res) {
            var data = res[0];
            // console.log(data)
            if (data === undefined || _this.route.snapshot.url[0].path === 'sportsocialblog'
                || _this.route.snapshot.url[1].path === 'page') {
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
                Content: (data.Content),
                insertedDate: _this.timePassed(data.insertedDate),
                ViewCount: data.ViewCount,
                ShareCount: data.ShareCount,
                keywords: data.keys.split(','),
                exactDate: _this.ExactDate(data.insertedDate),
                readingTime: _this.timeToRead(data.Content),
                MetaDesc: data.MetaDesc,
                ImageDesc: data.ImageDesc == null ? ' ' : data.ImageDesc,
                PrimaryKeyword: data.PrimaryKeyword == null ? data.keys.split(',')[0] : data.PrimaryKeyword,
                ShortTilte: data.ShortTilte == null ? data.heading : data.ShortTilte
            };
            if (blog.MetaDesc == null) {
                blog.MetaDesc = '';
            }
            if (blog.ImageDesc == null) {
                blog.ImageDesc = '';
            }
            _this.blog = blog;
            // console.log(this.blog);
            _this.Keywords = blog.keywords;
            _this.content = _this.sanitizer.bypassSecurityTrustHtml(data.Content);
            _this.sendKey.ofBlogCard.next(_this.Keywords[_this.Keywords.length - 1]);
            _this.setCanonivalURL();
            _this.setMetaTags();
            _this.setTitle();
            _this.ShareCount = +blog.ShareCount;
            _this.ViewCount = +(blog.ViewCount);
            _this.sendViewCount();
            _this.url = 'https://www.chaseyoursport.com/' + _this.Keywords[0].replace(/\s+/g, '-')
                + '/' + _this.blog.heading.replace(/\s+/g, '-') + '/' + _this.blogID;
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
    BlogOpenComponent.prototype.removeBackgroundUserImage = function () {
        this.renderer.setStyle(this.userImage.nativeElement, 'background-color', 'white');
    };
    BlogOpenComponent.prototype.removeInitalImage = function (event) {
        if (event.returnValue) {
            this.loading = false;
        }
    };
    BlogOpenComponent.prototype.setMobileView = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.openBlog.nativeElement).width;
        if (width > 950) {
            this.mobileView = false;
            this.removeSocial = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '68%');
        }
        if (width <= 950 && width > 700) {
            this.removeSocial = true;
            this.mobileView = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');
        }
        if (width < 700) {
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
    BlogOpenComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    BlogOpenComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    BlogOpenComponent.prototype.onFullImageload = function () {
        if (this.isBrowser) {
            var height = this.fullImage.nativeElement.getBoundingClientRect().height;
            var top = (window.innerHeight - height) / 2;
            this.renderer.setStyle(this.fullImage.nativeElement, 'top', top + 'px');
        }
    };
    BlogOpenComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    BlogOpenComponent.prototype.sendShareCount = function () {
        this.ShareCount++;
        this.post.shareCountOfBlog(this.blog.blogId, this.ShareCount).subscribe(function (data) {
            // console.log(data, "sharedOnFacebook")
        });
    };
    BlogOpenComponent.prototype.shareOnFacebook = function () {
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s+/g, '-');
        }
        this.sendShareCount();
        FB.ui({
            method: 'share',
            href: 'https://www.chaseyoursport.com/' + key
                + '/' + this.blog.heading.replace(/\s+/g, '-') + '/' + this.blogID,
        }, function (response) { });
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
    BlogOpenComponent.prototype.shareOnLinkedin = function () {
        this.sendShareCount();
    };
    BlogOpenComponent.prototype.shareOnPintrest = function () {
        this.sendShareCount();
    };
    BlogOpenComponent.prototype.shareOngooglePlus = function () {
        this.sendShareCount();
    };
    BlogOpenComponent.prototype.getblogs = function (event) {
        var key = event.toElement.innerText;
        console.log(key, ' navigate');
        this.sendKey.ofBlogCard.next(key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('openBlog'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "openBlog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('Social'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "Social", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BlogInfo'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "BlogInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('popup'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "popup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fullImage'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "fullImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BlogImage'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "BlogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('userImage'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "userImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogOpenComponent.prototype, "onresize", null);
    BlogOpenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-blog-open',
            template: __webpack_require__("../../../../../src/app/blogContent/blog-open/blog-open.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/blog-open/blog-open.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Meta */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* Title */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_7__services_facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_facebook_service__["a" /* FacebookService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__services_link_service__["a" /* LinkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_link_service__["a" /* LinkService */]) === "function" && _r || Object])
    ], BlogOpenComponent);
    return BlogOpenComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=blog-open.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/blogs/blogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n*{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.blog{\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\n.col-6{\r\n    width: 50%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 0px 20px 0px 20px\r\n}\r\n.col-12{\r\n    width: 100%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 0px 20px 0px 20px\r\n}\r\n.latestBlog{\r\n    padding: 10px 25px 0px 30px;\r\n    padding-top: 10px !important\r\n}\r\n.col-4{\r\n    padding: 0px 20px 0px 20px\r\n}\r\n.col-8 >.col-6, .col-8 >.col-12, .col-12>.col-6 ,.col-12>.col-12{\r\n    padding: 0px 10px 0px 10px !important\r\n}\r\n.trendingBlogs{\r\n    padding-right: 20px;\r\n}\r\n.col-4,.trendingBlogs{\r\n    width: 33.33%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.topBlogs{\r\n    width: 66.2%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 0px 10px 0px 10px\r\n}\r\n.col-8{\r\n    width: 66.2%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 0px 20px 0px 20px\r\n}\r\n.mobileView>.latestBlog{\r\n    height: auto !important\r\n}\r\n.mobileView .col-4{\r\n    width: 100%;\r\n}\r\n.suscribeCard{\r\n    border: 1px solid #bbbbbb;\r\n    border-radius: 4px;\r\n    margin: 0px 20px 15px 20px !important\r\n}\r\nbutton{\r\n    display: block;\r\n    margin: 1% auto;\r\n    width: 30%;\r\n    background-color: #ffa600;\r\n    border:none;\r\n    color: #ffffff;\r\n    \r\n    font-weight: 700;\r\n    font-size: 1.2em;\r\n    padding: 0.5%;\r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.noMoreData{\r\n    width: 100%;\r\n    color: #024771;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.5em;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n}\r\n.noMoreData a{\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    color:#024771;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<SportSocialBlog-keywords></SportSocialBlog-keywords>\r\n<div #window>\r\n<img class=\"loading\" *ngIf=\"!isBrowser\" src=\"/assets/images/sports-social-loading.gif\" >\r\n<div class=\"blog\" #blog *ngIf=\"!mobileView\" >\r\n    <div class=\"latestBlog\"  *ngFor=\"let data of latestBlogDetails;let i=index\">\r\n        <SportSocial-latest-blog \r\n            [blogId]=\"data.blogId\"\r\n            [blogImage]=\"data.blogImage\"\r\n            [bloggerImage]=\"data.bloggerImage\"\r\n            [bloggerName]=\"data.bloggerName\"\r\n            [insertedDate]=\"data.insertedDate\"\r\n            [heading]=\"data.heading\"\r\n            [Content]=\"data.Content\"\r\n            [ViewCount]=\"data.ViewCount\"\r\n            [ShareCount]=\"data.ShareCount\"\r\n            [keywords]=\"data.keywords\"\r\n            [exactDate]=\"data.exactDate\"\r\n            [readingTime]=\"data.readingTime\"\r\n            [MetaDesc]=\"data.MetaDesc\"\r\n            [ImageDesc]=\"data.ImageDesc\"\r\n            [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n            [ShortTitle]=\"data.ShortTitle\">\r\n        </SportSocial-latest-blog>\r\n    </div>\r\n    <div class=\"col-8\" TabViewAvailable >\r\n        <div  \r\n            *ngFor=\"let data of topBlogDetails;let i=index\" \r\n            [ngClass]=\"{'col-6':i!=2,'col-12':i===2}\">\r\n            <SportSocial-normal-blog \r\n                [blogId]=\"data.blogId\"\r\n                [blogImage]=\"data.blogImage\"\r\n                [bloggerImage]=\"data.bloggerImage\"\r\n                [bloggerName]=\"data.bloggerName\"\r\n                [insertedDate]=\"data.insertedDate\"\r\n                [heading]=\"data.heading\"\r\n                [Content]=\"data.Content\"\r\n                [ViewCount]=\"data.ViewCount\"\r\n                [ShareCount]=\"data.ShareCount\"\r\n                [keywords]=\"data.keywords\"\r\n                [exactDate]=\"data.exactDate\"\r\n                [readingTime]=\"data.readingTime\"\r\n                [MetaDesc]=\"data.MetaDesc\"\r\n                [ImageDesc]=\"data.ImageDesc\"\r\n                [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n                [ShortTitle]=\"data.ShortTitle\">\r\n            </SportSocial-normal-blog>\r\n        </div>\r\n    </div>        \r\n    <div class=\"trendingBlogs\" *ngIf=\"showTrendingBlock()\" >\r\n            <SportSocial-trending-blog></SportSocial-trending-blog>\r\n    </div>\r\n    <div  TabViewAvailable \r\n        *ngFor=\"let data of restBlogDetails;let i=index\"\r\n        [ngClass]=\"{'col-8':i%5===0 ,'col-4': i%5!=0}\">\r\n        <SportSocial-normal-blog\r\n            [blogId]=\"data.blogId\"\r\n            [blogImage]=\"data.blogImage\"\r\n            [bloggerImage]=\"data.bloggerImage\"\r\n            [bloggerName]=\"data.bloggerName\"\r\n            [insertedDate]=\"data.insertedDate\"\r\n            [heading]=\"data.heading\"\r\n            [Content]=\"data.Content\"\r\n            [ViewCount]=\"data.ViewCount\"\r\n            [ShareCount]=\"data.ShareCount\"\r\n            [keywords]=\"data.keywords\"\r\n            [exactDate]=\"data.exactDate\"\r\n            [readingTime]=\"data.readingTime\"\r\n            [MetaDesc]=\"data.MetaDesc\"\r\n            [ImageDesc]=\"data.ImageDesc\"\r\n            [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n            [ShortTitle]=\"data.ShortTitle\">\r\n        </SportSocial-normal-blog>\r\n    </div>\r\n    \r\n</div> \r\n        \r\n<div class=\"blog mobileView\" *ngIf=\"mobileView\" #blog>\r\n    <div class=\"latestBlog col-4\" *ngFor=\"let data of latestBlogDetails;let i=index\" >\r\n        <SportSocial-latest-blog\r\n            [blogId]=\"data.blogId\"\r\n            [blogImage]=\"data.blogImage\"\r\n            [bloggerImage]=\"data.bloggerImage\"\r\n            [bloggerName]=\"data.bloggerName\"\r\n            [insertedDate]=\"data.insertedDate\"\r\n            [heading]=\"data.heading\"\r\n            [Content]=\"data.Content\"\r\n            [ViewCount]=\"data.ViewCount\"\r\n            [ShareCount]=\"data.ShareCount\"\r\n            [keywords]=\"data.keywords\"\r\n            [exactDate]=\"data.exactDate\"\r\n            [readingTime]=\"data.readingTime\"\r\n            [MetaDesc]=\"data.MetaDesc\"\r\n            [ImageDesc]=\"data.ImageDesc\"\r\n            [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n            [ShortTitle]=\"data.ShortTitle\">\r\n        </SportSocial-latest-blog>\r\n    </div>\r\n    <div class=\"col-4\" *ngFor=\"let data of topBlogDetails;let i=index\">\r\n        <SportSocial-normal-blog\r\n            [blogId]=\"data.blogId\"\r\n            [blogImage]=\"data.blogImage\"\r\n            [bloggerImage]=\"data.bloggerImage\"\r\n            [bloggerName]=\"data.bloggerName\"\r\n            [insertedDate]=\"data.insertedDate\"\r\n            [heading]=\"data.heading\"\r\n            [Content]=\"data.Content\"\r\n            [ViewCount]=\"data.ViewCount\"\r\n            [ShareCount]=\"data.ShareCount\"\r\n            [keywords]=\"data.keywords\"\r\n            [exactDate]=\"data.exactDate\"\r\n            [readingTime]=\"data.readingTime\"\r\n            [MetaDesc]=\"data.MetaDesc\"\r\n            [ImageDesc]=\"data.ImageDesc\"\r\n            [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n            [ShortTitle]=\"data.ShortTitle\">\r\n        </SportSocial-normal-blog>\r\n    </div>\r\n    <div class=\"suscribeCard\" *ngIf=\"show\">\r\n        <SportSocial-subscribe-card></SportSocial-subscribe-card>\r\n    </div>\r\n    <div class=\"col-4\" *ngFor=\"let data of restBlogDetails;let i=index\">\r\n        <SportSocial-normal-blog \r\n            [blogId]=\"data.blogId\"\r\n            [blogImage]=\"data.blogImage\"\r\n            [bloggerImage]=\"data.bloggerImage\"\r\n            [bloggerName]=\"data.bloggerName\"\r\n            [insertedDate]=\"data.insertedDate\"\r\n            [heading]=\"data.heading\"\r\n            [Content]=\"data.Content\"\r\n            [ViewCount]=\"data.ViewCount\"\r\n            [ShareCount]=\"data.ShareCount\"\r\n            [keywords]=\"data.keywords\"\r\n            [exactDate]=\"data.exactDate\"\r\n            [readingTime]=\"data.readingTime\"\r\n            [MetaDesc]=\"data.MetaDesc\"\r\n            [ImageDesc]=\"data.ImageDesc\"\r\n            [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n            [ShortTitle]=\"data.ShortTitle\">\r\n        </SportSocial-normal-blog>\r\n    </div>\r\n</div>\r\n<ng-container *ngIf=\"isBrowser\">\r\n    <div *ngIf=\"haveData\">\r\n        <button (click)=\"nextPage()\" *ngIf=\"dataRecived\">Load More</button>\r\n        <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecived\" class=\"loading\">\r\n    </div>\r\n    <p *ngIf=\"!haveData\" class=\"noMoreData\">\r\n        We don't stop playing because we grow old; we grow old because we stop playing.\r\n        <a href=\"https://goo.gl/qrgCz5\">DOWNLOAD THE APP NOW</a>\r\n    </p>\r\n    <SportSocial-blog-footer *ngIf=\"show\"></SportSocial-blog-footer> \r\n</ng-container>          \r\n</div>      "

/***/ }),

/***/ "../../../../../src/app/blogContent/blogs/blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_link_service__ = __webpack_require__("../../../../../src/app/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(reciveHeight, renderer, get, metaService, platformId, link) {
        this.reciveHeight = reciveHeight;
        this.renderer = renderer;
        this.get = get;
        this.metaService = metaService;
        this.link = link;
        this.latestBlogDetails = [];
        this.blogDetails = [];
        this.topBlogDetails = [];
        this.restBlogDetails = [];
        this.removeTrendingBlock = false;
        this.mobileView = false;
        this.nextPageNumber = 1;
        this.defaultKey = 'dfg';
        this.show = false;
        this.dataRecived = false;
        this.haveData = true;
        this.count = 0;
        link.addTag({ rel: 'canonical', href: 'https://www.chaseyoursport.com/' });
        metaService.addTags([
            { name: 'description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n        platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n        career in sports." },
            { name: 'keywords', content: "Indian Sports Trends,Sports Social,Career in Sports,current trends\n        in sports,Indian Sports History, Sports Social media,sports technology,Sports blog,Indian Sports\n        Blog,Multiplayer Strategy Video Games,Health and Fitness Tips,Sports Analytics blog, Indian sports\n        news,outlook in sports industry,future trends in sports,sports business trends, sports articles,\n        sports management,Sports Social network india,sports jobs" },
            { name: 'title', content: 'Chase Your Sport: Sports Social Blog | Indian Sports Trends & Outlook' },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: 'Chase Your Sport: Sports Social Blog | Indian Sports Trends & Outlook' },
            { property: 'og:description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n      platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n      career in sports." },
            { property: 'og:url', content: 'https://www.chaseyoursport.com/' },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Chaseyoursport' },
            { name: 'twitter:creator', content: '@NadeemKhan' },
            { name: 'twitter:title', content: 'Chase Your Sport: Sports Social Blog | Indian Sports Trends & Outlook' },
            { name: 'twitter:description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n      platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n      career in sports." },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    BlogsComponent.prototype.ngOnInit = function () {
        this.setMobileView();
        if (this.isBrowser) {
            this.getBlog();
        }
    };
    BlogsComponent.prototype.getBlog = function () {
        var _this = this;
        this.get.blogData(this.nextPageNumber, this.defaultKey).subscribe(function (data) {
            // console.log(data);
            _this.show = true;
            _this.dataRecived = true;
            // tslint:disable-next-line:forin
            for (var i in data) {
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
                    keywords: data[i].keywords.split(','),
                    exactDate: _this.ExactDate(data[i].insertedDate),
                    readingTime: _this.timeToRead(data[i].Content),
                    MetaDesc: data[i].MetaDesc,
                    ImageDesc: data[i].ImageDesc,
                    PrimaryKeyword: data[i].PrimaryKeyword == null ? data[i].keywords.split(',')[0] : data[i].PrimaryKeyword,
                    ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
                });
            }
            // console.log(this.blogDetails)
            _this.latestBlogDetails.push({
                blogId: _this.blogDetails[0].blogId,
                blogImage: _this.blogDetails[0].blogImage,
                bloggerName: _this.blogDetails[0].bloggerName,
                bloggerImage: _this.blogDetails[0].bloggerImage,
                heading: _this.blogDetails[0].heading,
                Content: _this.blogDetails[0].Content,
                insertedDate: _this.blogDetails[0].insertedDate,
                ViewCount: _this.blogDetails[0].ViewCount,
                ShareCount: _this.blogDetails[0].ShareCount,
                keywords: _this.blogDetails[0].keywords,
                exactDate: _this.blogDetails[0].exactDate,
                readingTime: _this.blogDetails[0].readingTime,
                MetaDesc: _this.blogDetails[0].MetaDesc,
                ImageDesc: _this.blogDetails[0].ImageDesc,
                PrimaryKeyword: _this.blogDetails[0].PrimaryKeyword,
                ShortTitle: _this.blogDetails[0].ShortTitle
            });
            for (var i = 1; i < 4; i++) {
                _this.topBlogDetails.push({
                    blogId: _this.blogDetails[i].blogId,
                    blogImage: _this.blogDetails[i].blogImage,
                    bloggerName: _this.blogDetails[i].bloggerName,
                    bloggerImage: _this.blogDetails[i].bloggerImage,
                    heading: _this.blogDetails[i].heading,
                    Content: _this.blogDetails[i].Content,
                    insertedDate: _this.blogDetails[i].insertedDate,
                    ViewCount: _this.blogDetails[i].ViewCount,
                    ShareCount: _this.blogDetails[i].ShareCount,
                    keywords: _this.blogDetails[i].keywords,
                    exactDate: _this.blogDetails[i].exactDate,
                    readingTime: _this.blogDetails[i].readingTime,
                    MetaDesc: _this.blogDetails[i].MetaDesc,
                    ImageDesc: _this.blogDetails[i].ImageDesc,
                    PrimaryKeyword: _this.blogDetails[i].PrimaryKeyword,
                    ShortTitle: _this.blogDetails[i].ShortTitle
                });
            }
            for (var i = 4; i < _this.blogDetails.length; i++) {
                _this.restBlogDetails.push({
                    blogId: _this.blogDetails[i].blogId,
                    blogImage: _this.blogDetails[i].blogImage,
                    bloggerName: _this.blogDetails[i].bloggerName,
                    bloggerImage: _this.blogDetails[i].bloggerImage,
                    heading: _this.blogDetails[i].heading,
                    Content: _this.blogDetails[i].Content,
                    insertedDate: _this.blogDetails[i].insertedDate,
                    ViewCount: _this.blogDetails[i].ViewCount,
                    ShareCount: _this.blogDetails[i].ShareCount,
                    keywords: _this.blogDetails[i].keywords,
                    exactDate: _this.blogDetails[i].exactDate,
                    readingTime: _this.blogDetails[i].readingTime,
                    MetaDesc: _this.blogDetails[i].MetaDesc,
                    ImageDesc: _this.blogDetails[i].ImageDesc,
                    PrimaryKeyword: _this.blogDetails[i].PrimaryKeyword,
                    ShortTitle: _this.blogDetails[i].ShortTitle
                });
            }
        });
    };
    BlogsComponent.prototype.setMobileView = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.window.nativeElement).width;
        console.log(width);
        if (width > 600) {
            this.mobileView = false;
        }
        else {
            this.mobileView = true;
        }
    };
    BlogsComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    BlogsComponent.prototype.showTrendingBlock = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.window.nativeElement).width;
        if (this.blogDetails.length === 0 || width < 950) {
            return false;
        }
        if (this.blogDetails.length >= 0 && width > 950) {
            return true;
        }
    };
    BlogsComponent.prototype.ngAfterViewInit = function () {
        this.setTopMargin();
    };
    BlogsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    BlogsComponent.prototype.onresize = function () {
        //console.log(ɵgetDOM().getBoundingClientRect(document.body).width, ' b');
        this.setTopMargin();
        this.showTrendingBlock();
        this.setMobileView();
        if (this.blogDetails.length > 0) {
            this.show = true;
        }
    };
    BlogsComponent.prototype.timePassed = function (i) {
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
    BlogsComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    BlogsComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    BlogsComponent.prototype.nextPage = function () {
        var _this = this;
        this.dataRecived = false;
        this.nextPageNumber++;
        if (this.nextPageNumber > 1) {
            this.get.blogData((this.nextPageNumber), this.defaultKey).subscribe(function (data) {
                _this.dataRecived = true;
                if (data.length === 0) {
                    _this.haveData = false;
                }
                else {
                    _this.haveData = true;
                }
                // tslint:disable-next-line:forin
                for (var i in data) {
                    _this.restBlogDetails.push({
                        blogId: data[i].blogId,
                        blogImage: data[i].blogImage,
                        bloggerName: data[i].bloggerName,
                        bloggerImage: data[i].bloggerImage,
                        heading: data[i].heading,
                        Content: data[i].Content,
                        insertedDate: _this.timePassed(data[i].insertedDate),
                        ViewCount: data[i].ViewCount,
                        ShareCount: data[i].ShareCount,
                        keywords: data[i].keywords.split(','),
                        exactDate: _this.ExactDate(data[i].insertedDate),
                        readingTime: _this.timeToRead(data[i].Content),
                        MetaDesc: data[i].MetaDesc,
                        ImageDesc: data[i].ImageDesc,
                        PrimaryKeyword: data[i].PrimaryKeyword == null ? data[i].keywords.split(',')[0] : data[i].PrimaryKeyword,
                        ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
                    });
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blog'),
        __metadata("design:type", Object)
    ], BlogsComponent.prototype, "blog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('window'),
        __metadata("design:type", Object)
    ], BlogsComponent.prototype, "window", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogsComponent.prototype, "onresize", null);
    BlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-blogs',
            template: __webpack_require__("../../../../../src/app/blogContent/blogs/blogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/blogs/blogs.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Meta */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_link_service__["a" /* LinkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_link_service__["a" /* LinkService */]) === "function" && _e || Object])
    ], BlogsComponent);
    return BlogsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/latest-blog/latest-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-size: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.latest{\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n    margin-bottom: 20px;\r\n    box-shadow: 1px 1px 2px #bbbbbb\r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n}\r\n.desc{\r\n    width: 100%;\r\n    height:100%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left:0px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    \r\n    \r\n}\r\n.desc>div{\r\n    width:90%;\r\n    margin: 8% auto;\r\n}\r\n.desc>div>div:nth-of-type(2){\r\n    margin-bottom: 2%;\r\n}\r\n.desc>div>div:nth-of-type(2)>span{\r\n    margin-left: -0.5%\r\n}\r\n.desc span{\r\n    color: white;\r\n    font-size: 0.8em;\r\n    padding: 0.8%;\r\n    font-weight: 400;\r\n   \r\n}\r\n.count{\r\n    position: absolute;\r\n    top:5%;\r\n    right: 2%;\r\n    width:100%;\r\n    text-align: right\r\n}\r\n.count>img{\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-left: 0%\r\n}\r\n.count>span{\r\n    display: inline-block;\r\n    color: white;\r\n    font-size: 0.9em\r\n}\r\n\r\n.heading{\r\n    width:100%;\r\n    color: #ffffff;\r\n    font-size: 2em;\r\n    text-align: left;\r\n    overflow: hidden;\r\n    position: relative; \r\n    /* use this value to count block height */\r\n    line-height: 1.3em;\r\n    /* max-height = line-height (1.2) * lines max number (3) */\r\n    margin-right: -1em;\r\n    padding-right: 1em;\r\n    max-height: 2.6em; \r\n    font-weight: 700;\r\n    margin-bottom:2%; \r\n   \r\n}\r\n.heading::after{\r\n    content: '';\r\n    /* absolute position */\r\n    position: absolute;\r\n    /* set position to right bottom corner of text */\r\n    right: 0;\r\n    /* set width and height */\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-top: 0.2em;\r\n}\r\n.heading:before{\r\n    /* points in the end */\r\n  content: '...';\r\n  /* absolute position */\r\n  position: absolute;\r\n  /* set position to right bottom corner of block */\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.bloggerImage{\r\n    display: inline-block;\r\n    padding: 0px;\r\n    width: 20px !important;\r\n    height: 20px !important;\r\n    margin-right: 5px;\r\n}\r\n.bloggerImage >img{\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    margin: 0px;\r\n}\r\n.bloggerName{\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n    color: white;\r\n    font-size: 0.9em;\r\n}\r\n.Blogger{\r\n    margin-bottom:2%; \r\n}\r\n.smallDesc{\r\n    color: white;\r\n    font-size: 1.1em;\r\n    text-align: left;\r\n    font-weight: 500;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    margin-bottom:2%; \r\n}\r\n\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.fullImage{\r\n    width: 40%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    top:13%;\r\n    left:30%;\r\n    z-index: 50;\r\n    box-shadow: 1px 1px #bbbbbb;\r\n    border: 1px solid #bbbbbb;\r\n}\r\n.fullImageHolder{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.fullImageHolder>img{\r\n    max-width: 100%;\r\n}\r\n.cancel{\r\n    position: absolute;\r\n    top:1%;\r\n    right:1%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 150\r\n}\r\n@media (max-width:800px) and (min-width:600){\r\n    .fullImage{\r\n        width: 70%;\r\n        left: 15%;\r\n    }\r\n}\r\n@media (max-width:600px){\r\n    .fullImage{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/latest-blog/latest-blog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"latest\" MaintainHeightWidthRatio #latest>\r\n  <a routerLink=\"/{{PrimaryKeyword}}/{{ShortTitle}}/{{blogId}}\" (click)=\"send()\">\r\n    <img #initialImage src=\"/assets/images/default-image.png\" alt=\"InitialblogImage\" *ngIf=\"isloading\">\r\n    <img src=\"{{blogImage}}\" title=\"{{ImageDesc}}\" (error)=\"setDefault()\" (load)=\"removeInitialImage()\" alt=\"blogImage\"  *ngIf=\"dataRecieved\" #blogimage>\r\n    \r\n    \r\n    <div class=\"desc\" #Desc>\r\n      <div #DescChild>\r\n        <div class=\"count\">\r\n          <img src=\"/assets/images/sports-social-view-white.png\" alt=\"sports-social-view-white\">\r\n          <span>{{ViewCount}}</span> \r\n          <img src=\"/assets/images/sports-social-share-white.png\" alt=\"sports-social-share-white\">\r\n          <span>{{ShareCount}}</span>\r\n        </div> \r\n        <div >\r\n          <span>{{insertedDate}}</span>\r\n          <span>|</span>\r\n          <span>{{keywords[0]}}</span>\r\n        </div>\r\n        <p class=\"heading\" [innerHtml]=\"heading\" #latestTitle> </p>\r\n        <!-- <p  class=\"smallDesc\" #latestDesc>{{Content}}</p> -->\r\n        <p  class=\"smallDesc\" #latestDesc>{{content}}</p>\r\n        <div class=\"Blogger\">\r\n          <div class=\"bloggerImage\" #BloggerImage>\r\n              <img src=\"/assets/images/sports-social-blogger-white.png\" alt=\"sports-social-blogger-white\" >\r\n          </div>  \r\n          <p class=\"bloggerName\">{{bloggerName}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/blogContent/latest-blog/latest-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LatestBlogComponent = /** @class */ (function () {
    function LatestBlogComponent(Send, recieveWidth, renderer, post, platformId) {
        this.Send = Send;
        this.recieveWidth = recieveWidth;
        this.renderer = renderer;
        this.post = post;
        this.openFullImage = false;
        this.isloading = true;
        this.dataRecieved = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    LatestBlogComponent.prototype.ngOnInit = function () {
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
            ImageDesc: this.ImageDesc,
            PrimaryKeyword: this.PrimaryKeyword,
            ShortTitle: this.ShortTitle
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
        var width = Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.latest.nativeElement).width;
        if (width <= 600) {
            var Width = Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.initialImage.nativeElement).width;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "ViewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "ShareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], LatestBlogComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "exactDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "readingTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "MetaDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "ImageDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "PrimaryKeyword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "ShortTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('DescChild'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "DescChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('latestTitle'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "latestTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('latestDesc'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "latestDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blogimage'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "blogimage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('latest'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "latest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('initialImage'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "initialImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('Desc'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "Desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LatestBlogComponent.prototype, "onresize", null);
    LatestBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-latest-blog',
            template: __webpack_require__("../../../../../src/app/blogContent/latest-blog/latest-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/latest-blog/latest-blog.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _d || Object, Object])
    ], LatestBlogComponent);
    return LatestBlogComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=latest-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/normal-blog/normal-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.blog{\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    margin-bottom: 20px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 100%;\r\n    box-shadow: 1px 1px 4px #bbbbbb;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.blogImageHolder{\r\n    width: 100%;\r\n    max-height:65%;\r\n    min-height: 55%;\r\n    overflow: hidden;\r\n    border-radius: 5px;   \r\n    border-bottom: 1px solid #bbbbbb;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.blogImageHolder img{\r\n    width: 100%;\r\n    border-radius: 5px;   \r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.blogFooter{\r\n    margin: 0px;\r\n    min-height: 35%;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n.blogFooter p{\r\n    width: 95%;\r\n    margin:0.8% auto;\r\n}\r\n.blogFooter>p:first-child{\r\n    font-size: 0.8em;\r\n    font-weight: 400;\r\n    color: black;\r\n    text-align: left;\r\n    width: 95%;\r\n}\r\nspan >img{\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-right: 2%;\r\n}\r\n.blogFooter>p:first-child>span{\r\n    padding-right: 4px;\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: top;\r\n}\r\n.blogFooter>p:first-child>span:last-child{\r\n    width: 20%;\r\n    float: right;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n    color: #ffa600;\r\n    font-weight: 500\r\n}\r\n.blogFooter>p:nth-of-type(2){ \r\n    color: black;\r\n    font-weight: 700;\r\n   /* hide text if it more than N lines  */\r\n  overflow: hidden;\r\n  /* for set '...' in absolute position */\r\n  position: relative; \r\n  /* use this value to count block height */\r\n  line-height: 1.2em;\r\n  /* max-height = line-height (1.2) * lines max number (3) */\r\n  max-height: 2.4em; \r\n  /* fix problem when last visible word doesn't adjoin right side  */\r\n  text-align: left;  \r\n  /* place for '...' */\r\n  padding-right: 1em;\r\n\r\n}\r\n/* create the ... */\r\n.blogFooter>p:nth-of-type(2):before {\r\n  /* points in the end */\r\n  content: '...';\r\n  /* absolute position */\r\n  position: absolute;\r\n  /* set position to right bottom corner of block */\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n/* hide ... if we have text, which is less than or equal to max lines */\r\n.blogFooter>p:nth-of-type(2):after {\r\n  /* points in the end */\r\n  content: '';\r\n  /* absolute position */\r\n  position: absolute;\r\n  /* set position to right bottom corner of text */\r\n  right: 0;\r\n  /* set width and height */\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: 0.2em;\r\n  /* bg color = bg color under block */\r\n  background: white;\r\n}\r\n.content{\r\n    overflow: hidden;\r\n    margin: 1.6% auto !important;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    color: black;\r\n    font-size: 0.95em;\r\n    font-weight: 500\r\n}\r\n.bloggerName{\r\n    position:absolute ;\r\n    bottom:4px;\r\n    left: 2.5%;\r\n    color: #444444;\r\n    font-weight: 500;\r\n    font-size:0.8em;\r\n}\r\np>img{\r\n  width: 12px;\r\n  height: 12px;\r\n  margin-right: 2%;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n@media (max-width:1200px) and (min-width:1060px){\r\n    .blogImageHolder{\r\n        max-height: 60%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 40%;\r\n    }\r\n}\r\n@media (max-width:1060px) and (min-width:950px){\r\n    .blogImageHolder{\r\n        max-height: 58%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 42%;\r\n    }\r\n}\r\n@media (max-width:950px) and (min-width:850px){\r\n    .blogImageHolder{\r\n        max-height: 65%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 35%;\r\n    }\r\n}\r\n@media (max-width:850px) and (min-width:750px){\r\n    .blogImageHolder{\r\n        max-height: 62%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 38%;\r\n    }\r\n}\r\n@media (max-width:750px) and (min-width:600px){\r\n    .blogImageHolder{\r\n        max-height: 58%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 42%;\r\n    }\r\n}\r\n@media (max-width:600px)and(min-width:350px) {\r\n    .blogImageHolder{\r\n        max-height: 70%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 30%;\r\n    }\r\n}\r\n@media (max-width:350px) {\r\n    .blogImageHolder{\r\n        max-height: 60%;\r\n    }\r\n    .blogFooter{\r\n        min-height: 40%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/normal-blog/normal-blog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"blog\" MaintainHeightWidthRatio #blog >\r\n    <a routerLink=\"/{{PrimaryKeyword}}/{{ShortTitle}}/{{blogId}}\" (click)=\"send()\">\r\n        <div class=\"blogImageHolder\" #holder>\r\n          <img #initialImage src=\"/assets/images/default-image.png\" alt=\"InitialblogImage\" *ngIf=\"isloading\">\r\n          <img src=\"{{blogImage}}\" title=\"{{ImageDesc}}\" (load)=\"removeInitialImage()\"  (error)=\"setDefault()\" alt=\"blogImage\"  *ngIf=\"dataRecieved\" >\r\n        </div>\r\n        <div class=\"blogFooter\" #footer>\r\n          <p>\r\n            <span>{{insertedDate}}</span>\r\n            <span>|</span>\r\n            <span>{{keywords[0]}}</span>\r\n            <span>\r\n              <img src=\"/assets/images/sports-social-view-orange.png\" alt=\"sports-social-view-orange\" >\r\n              {{ViewCount}}\r\n            </span>\r\n          </p>\r\n          <p  [innerHtml]=\"heading\" #blogTitle></p>\r\n          <p  class=\"content\" [innerHtml]=\"content\"></p>\r\n          <p class=\"bloggerName\">\r\n            <img src=\"/assets/images/sports-social-blogger-black.png\"  alt=\"sports-social-blogger-black\">\r\n            {{bloggerName}}\r\n          </p>\r\n        </div>\r\n      </a>\r\n  </div>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/blogContent/normal-blog/normal-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NormalBlogComponent = /** @class */ (function () {
    function NormalBlogComponent(Send, link, renderer, post, recievewidth, zone, platformId) {
        this.Send = Send;
        this.link = link;
        this.renderer = renderer;
        this.post = post;
        this.recievewidth = recievewidth;
        this.zone = zone;
        this.isloading = true;
        this.openFullImage = false;
        this.dataRecieved = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* isPlatformBrowser */])(platformId);
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
            ImageDesc: this.ImageDesc,
            PrimaryKeyword: this.PrimaryKeyword,
            ShortTitle: this.ShortTitle
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
        var width;
        this.recievewidth.ofWindow.subscribe(function (data) {
            width = data;
        });
        if (width > 1200) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (width > 1100 && width < 1200) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (width < 1100 && width > 1000) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (width < 1000 && width > 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.15em');
        }
        if (width > 700 && width < 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (width > 600 && width < 700) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
        if (width > 600 && width < 500) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (width > 500 && width < 600) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (width > 320 && width < 400) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
        if (width < 320) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '0.9em');
        }
    };
    NormalBlogComponent.prototype.send = function () {
        this.Send.detailsofBlog.next(this.blog);
        // console.log(this.blogOpen);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "ViewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "ShareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NormalBlogComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "exactDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "readingTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "MetaDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "ImageDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "PrimaryKeyword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "ShortTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blogTitle'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "blogTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('holder'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "holder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fullImage'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "fullImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blog'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "Blog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('footer'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BlogOpenComponent'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "blogOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NormalBlogComponent.prototype, "onresize", null);
    NormalBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-normal-blog',
            template: __webpack_require__("../../../../../src/app/blogContent/normal-blog/normal-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/normal-blog/normal-blog.component.css")]
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _f || Object, Object])
    ], NormalBlogComponent);
    return NormalBlogComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=normal-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/related-blogs/related-blogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-6{\r\n    width: 50%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding:0% 1.5% 2% 1.5%;\r\n}\r\n.col-4{\r\n    width: 33%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 1%;\r\n}\r\n.mobileView .col-4{\r\n    width: 100%;\r\n}\r\n.relatedBlog{\r\n    width:90%;\r\n    min-height: 400px;\r\n    margin: 2% auto;\r\n    padding-top:4%;\r\n    border-top: 2px solid #024771\r\n}\r\n.relatedBlog>p{\r\n    width: 90%;\r\n    margin: auto;\r\n    margin-bottom: 2%;\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 2em;\r\n    color: #024771;\r\n    font-weight: 400;\r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/related-blogs/related-blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div #window>\r\n  <div  *ngIf=\"!mobileView\" class=\"relatedBlog\">\r\n    <p >Related Articles</p>\r\n    <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecived\" class=\"loading\" >\r\n    <div TabViewAvailable class=\"col-4\" *ngFor=\"let data of relatedBlogDetails;let i=index\">\r\n      <SportSocial-normal-blog \r\n        [blogId]=\"data.blogId\"\r\n        [blogImage]=\"data.blogImage\"\r\n        [bloggerImage]=\"data.bloggerImage\"\r\n        [bloggerName]=\"data.bloggerName\"\r\n        [insertedDate]=\"data.insertedDate\"\r\n        [heading]=\"data.heading\"\r\n        [Content]=\"data.Content\"\r\n        [ViewCount]=\"data.ViewCount\"\r\n        [ShareCount]=\"data.ShareCount\"\r\n        [keywords]=\"data.keywords\"\r\n        [exactDate]=\"data.exactDate\"\r\n        [readingTime]=\"data.readingTime\"\r\n        [MetaDesc]=\"data.MetaDesc\"\r\n        [ImageDesc]=\"data.ImageDesc\"\r\n        [PrimaryKeyword]=\"data.Primarykeyword\"\r\n        [ShortTitle]=\"data.ShortTitle\">\r\n      </SportSocial-normal-blog>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"mobileView\" class=\"mobileView relatedBlog\">\r\n    <p>Related Articles</p>\r\n    <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecived\" class=\"loading\">\r\n    <div class=\"col-4\" *ngFor=\"let data of relatedBlogDetails;let i=index\">\r\n      <SportSocial-normal-blog \r\n          [blogId]=\"data.blogId\"\r\n          [blogImage]=\"data.blogImage\"\r\n          [bloggerImage]=\"data.bloggerImage\"\r\n          [bloggerName]=\"data.bloggerName\"\r\n          [insertedDate]=\"data.insertedDate\"\r\n          [heading]=\"data.heading\"\r\n          [Content]=\"data.Content\"\r\n          [ViewCount]=\"data.ViewCount\"\r\n          [ShareCount]=\"data.ShareCount\"\r\n          [keywords]=\"data.keywords\"\r\n          [exactDate]=\"data.exactDate\"\r\n          [readingTime]=\"data.readingTime\"\r\n          [MetaDesc]=\"data.MetaDesc\"\r\n          [ImageDesc]=\"data.ImageDesc\"\r\n          [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n          [ShortTitle]=\"data.ShortTitle\">\r\n      </SportSocial-normal-blog>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/blogContent/related-blogs/related-blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedBlogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var RelatedBlogsComponent = /** @class */ (function () {
    function RelatedBlogsComponent(getRelated, recieveKey, platformId) {
        this.getRelated = getRelated;
        this.recieveKey = recieveKey;
        this.dataRecived = false;
        this.mobileView = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_3__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    RelatedBlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setMobileView();
        this.recieveKey.ofBlogCard.subscribe(function (data) {
            // console.log(data, ' checkarticle');
            _this.getRelatedBlogs(data);
        });
    };
    RelatedBlogsComponent.prototype.getRelatedBlogs = function (key) {
        var _this = this;
        var relatedBlogDetails = [];
        this.getRelated.blogData(1, key).subscribe(function (data) {
            _this.dataRecived = true;
            // console.log(data, 'related');
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
                    keywords: data[i].keywords.split(','),
                    exactDate: _this.ExactDate(data[i].insertedDate),
                    readingTime: _this.timeToRead(data[i].Content),
                    MetaDesc: data[i].MetaDesc,
                    ImageDesc: data[i].ImageDesc,
                    PrimaryKeyword: data[i].PrimaryKeyword == null ? data[i].keywords.split(',')[0] : data[i].PrimaryKeyword,
                    ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
                });
            }
            _this.relatedBlogDetails = relatedBlogDetails;
        });
    };
    RelatedBlogsComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
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
        return writtenDate.toDateString();
    };
    RelatedBlogsComponent.prototype.setMobileView = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.window.nativeElement).width;
        if (width > 950) {
            this.mobileView = false;
        }
        else {
            this.mobileView = true;
        }
    };
    RelatedBlogsComponent.prototype.onresize = function () {
        this.setMobileView();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('window'),
        __metadata("design:type", Object)
    ], RelatedBlogsComponent.prototype, "window", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RelatedBlogsComponent.prototype, "onresize", null);
    RelatedBlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-related-blogs',
            template: __webpack_require__("../../../../../src/app/blogContent/related-blogs/related-blogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/related-blogs/related-blogs.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, Object])
    ], RelatedBlogsComponent);
    return RelatedBlogsComponent;
    var _a, _b;
}());

//# sourceMappingURL=related-blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trending{\r\n    width: 96%;\r\n    height: 23%;\r\n    margin:2% auto;\r\n    \r\n    position: relative;\r\n    font-family: 'Roboto',sans-serif;\r\n    color: white;\r\n    border-radius: 7px;\r\n    overflow: hidden;\r\n}\r\n.blogImg{\r\n    border-radius: 7px;\r\n}\r\nimg{\r\n    width: 100%;\r\n}\r\n.desc{\r\n    background: rgba(0, 0, 0, 0.7);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left:0px;\r\n    padding: 1%;\r\n}\r\n.desc>p:last-child{\r\n    width: 90%;\r\n    margin: auto;\r\n    text-align: left;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    bottom: 20%;\r\n    left: 4%;\r\n}\r\nspan>img{\r\n    width: 14px;\r\n    height: 14px;\r\n}\r\n.desc>p:first-child{\r\n    width: 95%;\r\n    margin:0.5% auto;\r\n    text-align: right;\r\n}\r\n.desc>p:first-child>span{\r\n    color: #ffffff;\r\n    margin-left: 2%;\r\n}\r\n.desc>p:first-child img{\r\n   margin-right: 1%; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"trending\">\r\n  <a routerLink=\"/{{PrimaryKeyword}}/{{ShortTitle}}/{{blogId}}\" (click)=\"send()\">\r\n    <div class=\"blogImageHolder\" #holder>\r\n        <img #initialImage src=\"/assets/images/default-image.png\" alt=\"InitialblogImage\" *ngIf=\"isloading\">\r\n        <img src=\"{{blogImage}}\" (load)=\"removeInitialImage()\"  (error)=\"setDefault()\" alt=\"blogImage\"  *ngIf=\"dataRecieved\" >\r\n    </div>\r\n  <div class=\"desc\">\r\n    \r\n    <p >\r\n      <span class=\"views\">\r\n        <img src=\"/assets/images/sports-social-view-white.png\" alt=\"sports-social-view-white\">\r\n        <span>{{ViewCount}}</span> \r\n      </span>\r\n      <span class=\"share\">\r\n        <img src=\"/assets/images/sports-social-share-white.png\" alt=\"sports-social-share-white\"  >\r\n        <span>{{ShareCount}}</span>\r\n      </span>\r\n    </p>\r\n    <p [innerHtml]=\"heading\"></p>\r\n  </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingBlogCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TrendingBlogCardComponent = /** @class */ (function () {
    function TrendingBlogCardComponent(Send, platformId) {
        this.Send = Send;
        this.isloading = true;
        this.dataRecieved = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* isPlatformBrowser */])(platformId);
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
            ImageDesc: this.ImageDesc,
            PrimaryKeyword: this.PrimaryKeyword,
            ShortTilte: this.ShortTitle
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
        window.scrollTo(0, 0);
    };
    TrendingBlogCardComponent.prototype.setDefault = function (event) {
        this.blogImage = '/assets/images/default-image.png';
    };
    TrendingBlogCardComponent.prototype.removeInitialImage = function () {
        this.isloading = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "ViewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "ShareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TrendingBlogCardComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "exactDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "readingTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "MetaDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "ImageDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "PrimaryKeyword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "ShortTitle", void 0);
    TrendingBlogCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-trending-blog-card',
            template: __webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, Object])
    ], TrendingBlogCardComponent);
    return TrendingBlogCardComponent;
    var _a;
}());

//# sourceMappingURL=trending-blog-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    width: 100%;\r\n    height: 700px;\r\n    border: 1px solid  #bbbbbb;\r\n    border-radius: 5px;\r\n    margin-bottom: 20px;\r\n}\r\np:last-child{\r\n    text-align: right;\r\n    margin-right: 2%;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n.popular{\r\n    text-align: left;\r\n    margin-left: 2%;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div MaintainHeightWidthRatio>\r\n    <SportSocial-subscribe-card></SportSocial-subscribe-card>\r\n    <a href=\"#\" class=\"popular\">\r\n       Most Popular >>\r\n    </a>\r\n    <ng-container\r\n        *ngFor=\"let data of blogDetails;let i=index\">\r\n    <SportSocial-trending-blog-card\r\n        [blogId]=\"data.blogId\"\r\n        [blogImage]=\"data.blogImage\"\r\n        [bloggerImage]=\"data.bloggerImage\"\r\n        [bloggerName]=\"data.bloggerName\"\r\n        [insertedDate]=\"data.insertedDate\"\r\n        [heading]=\"data.heading\"\r\n        [Content]=\"data.Content\"\r\n        [ViewCount]=\"data.ViewCount\"\r\n        [ShareCount]=\"data.ShareCount\"\r\n        [keywords]=\"data.keywords\"\r\n        [exactDate]=\"data.exactDate\"\r\n        [readingTime]=\"data.readingTime\"\r\n        [PrimaryKeyword]=\"data.PrimaryKeyword\"\r\n        [ShortTitle]=\"data.ShortTitle\">\r\n    </SportSocial-trending-blog-card>\r\n    </ng-container>\r\n   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
                    readingTime: _this.timeToRead(data[i].Content),
                    MetaDesc: data[i].MetaDesc == null ? ' ' : data[i].MetaDesc,
                    ImageDesc: data[i].ImageDesc == null ? ' ' : data[i].ImageDesc,
                    PrimaryKeyword: data[i].PrimaryKeyword == null ? data[i].keywords.split(',')[0] : data[i].PrimaryKeyword,
                    ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
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
    TrendingBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-trending-blog',
            template: __webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
    ], TrendingBlogComponent);
    return TrendingBlogComponent;
    var _a;
}());

//# sourceMappingURL=trending-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment{\r\n    width:100%;\r\n}\r\n.imageHolder{\r\n    display: inline-block;\r\n    width:50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-image: url('/assets/images/user.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.imageHolder> img {\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n.commentBox{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: calc(60% - 55px);\r\n    border: 1px solid #888888;\r\n}\r\n.text{\r\n    width: 100%;\r\n    padding: 1%;\r\n    min-height: 60px;\r\n    outline: none;\r\n    resize: none;\r\n    border:none;\r\n\r\n}\r\n.text:required{\r\n    box-shadow: none;\r\n}\r\n.commentButton{\r\n   border-top: 1px solid #888888;\r\n   padding: 1%;\r\n   text-align:right\r\n}\r\nbutton{\r\n    background-color: #024771;\r\n    border: none;\r\n    color: white;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 1% 2% 1% 2%;\r\n    white-space: nowrap;\r\n    width:auto;\r\n    box-shadow: 1px 1px 2px #bbbbbb\r\n}\r\n.loadComment{\r\n    margin-top: 2%;\r\n}\r\n.loadComment>.imageHolder{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.loadComment>.commentBox{\r\n    margin-left: 1%;\r\n    width: 85%;\r\n    border:none;\r\n}\r\n.commentDate{\r\n    padding-left: 2%;\r\n}\r\n.userName{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    color: #024771;\r\n    font-weight: 700;\r\n}\r\n.userComment{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 0.9em;\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n\r\n@media (max-width:950px) {\r\n    .commentBox{\r\n        width: calc(90% - 55px);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\" #commentBox>\r\n  <div class=\"imageHolder\">\r\n    <img src=\"{{profilePicture}}\" (error)=\"setDefault()\">\r\n  </div>\r\n  <div class=\"commentBox \">\r\n    <textarea  class=\"text\" ngModel name=\"desc\" required placeholder=\"Add a Comment...\" #textArea></textarea>\r\n    <div class=\"commentButton\">\r\n      <button (click)=\"post()\"> {{isConnected ? 'Comment' : 'Login to Comment'}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"loadComment\" *ngFor=\"let data of recivedComment.reverse();let i = index\">\r\n  <div class=\"imageHolder\">\r\n    <img src=\"{{data.image}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"commentBox\">\r\n    <p class=\"userName\">\r\n       {{data.userName}}\r\n       <span class=\"commentDate\">{{data.commentDate}}</span>\r\n    </p>\r\n   \r\n    <p class=\"userComment\">\r\n      {{data.comment}}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_facebook_service__ = __webpack_require__("../../../../../src/app/services/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





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
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* isPlatformBrowser */])(platformId);
        if (Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* isPlatformBrowser */])(platformId)) {
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
    };
    CommentsComponent.prototype.setDefault = function () {
        this.profilePicture = '/assets/images/user.png';
    };
    CommentsComponent.prototype.getDate = function (i) {
        // console.log(i);
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
            // console.log(response, ' conect');
            if (response.status === 'connected') {
                // console.log('conect');
                this.isConnected = true;
                this.profilePicture = "https://graph.facebook.com/" + response.authResponse.userID + "/picture?type=large";
            }
            else {
                // console.log('logged out');
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
                    //  console.log(this.user);
                }
                else if (response.status === 'not_authorized') {
                    //  console.log('conect1');
                }
                else {
                    //  console.log('conect2');
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
                    //  console.log(this.user, 'conect');
                    // console.log(this.profilePicture);
                    _this.sendUserInfo.ofFacebookUser(result.id, result.name, result.email, _this.profilePicture).subscribe(function (res) {
                        //  console.log(res, ' login');
                        _this.userId = res[0].UserId;
                    });
                }
                else {
                    //  console.log(result.error);
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
            // console.log(res, 'c');
            _this.textArea.nativeElement.value = '';
            _this.newComment = {
                userName: res[res.length - 1].Name,
                image: res[res.length - 1].Image,
                comment: res[res.length - 1].Comment,
                commentDate: _this.getDate(res[res.length - 1].InsertedDate)
            };
            // console.log(this.newComment, ' new comment' );
            _this.recivedComment.push(_this.newComment);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('commentBox'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "commentBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('textArea'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "textArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('profileImage'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "profileImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "BlogId", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_facebook_service__["a" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_facebook_service__["a" /* FacebookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _g || Object, Object])
    ], CommentsComponent);
    return CommentsComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/custom-url/custom-url.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-url/custom-url.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  custom-url works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/custom-url/custom-url.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomUrlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomUrlComponent = /** @class */ (function () {
    function CustomUrlComponent() {
    }
    CustomUrlComponent.prototype.ngOnInit = function () {
    };
    /* parse(url: any): UrlTree {
      let dus = new DefaultUrlSerializer();
      return dus.parse(url);
    } */
    /* serialize(tree: UrlTree): any {
        let dus = new DefaultUrlSerializer(),
            path = dus.serialize(tree);
        // use your regex to replace as per your requirement.
        return path.replace(/\+/g, '%20');
    } */
    CustomUrlComponent.prototype.serialize = function (tree) {
        var dus = new __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* DefaultUrlSerializer */]();
        // Use the default serializer to create a url and replace any spaces with + signs
        return dus.serialize(tree).replace(/%20/g, '-');
    };
    CustomUrlComponent.prototype.parse = function (url) {
        var dus = new __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* DefaultUrlSerializer */]();
        // Change plus signs to encoded spaces
        url = url.replace(/\+/g, '%20');
        // Use the default serializer that you can import to just do the 
        // default parsing now that you have fixed the url.
        return dus.parse(url);
    };
    CustomUrlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-custom-url',
            template: __webpack_require__("../../../../../src/app/custom-url/custom-url.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custom-url/custom-url.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomUrlComponent);
    return CustomUrlComponent;
}());

//# sourceMappingURL=custom-url.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/maintain-height-width-ratio.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainHeightWidthRatioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MaintainHeightWidthRatioDirective = /** @class */ (function () {
    function MaintainHeightWidthRatioDirective(elRef, renderer, platformId, recieveWidth) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.recieveWidth = recieveWidth;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
        this.setHeight();
    }
    MaintainHeightWidthRatioDirective.prototype.ngAfterViewInit = function () {
        this.setHeight();
    };
    MaintainHeightWidthRatioDirective.prototype.onresize = function () {
        this.setHeight();
    };
    MaintainHeightWidthRatioDirective.prototype.setHeight = function () {
        this.width = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.elRef.nativeElement).width;
        var windowWidth;
        this.recieveWidth.ofWindow.subscribe(function (data) {
            windowWidth = data;
        });
        if (this.elRef.nativeElement.parentNode.parentNode.className === 'col-8') {
            this.height = 0.47 * (this.width);
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className === 'col-4') {
            this.height = (1) * this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className === 'col-6') {
            this.height = (1) * this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className === 'col-12') {
            this.height = 0.47 * (this.width);
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className === 'trendingBlogs') {
            this.height = (1.9) * this.width;
        }
        if (this.elRef.nativeElement.className === 'latest' &&
            this.elRef.nativeElement.parentNode.parentNode.className !== 'latestBlog col-4') {
            this.height = (0.3) * this.width;
        }
        if (this.elRef.nativeElement.className === 'latest' &&
            this.elRef.nativeElement.parentNode.parentNode.className === 'latestBlog col-4') {
            this.height = (0.64) * (this.width);
        }
        if (this.elRef.nativeElement.className === 'subscribeCard' && windowWidth < 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
            this.width = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.elRef.nativeElement).width;
            this.height = -(.548751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className === 'subscribeCard' && windowWidth >= 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', '23.5%');
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaintainHeightWidthRatioDirective.prototype, "onresize", null);
    MaintainHeightWidthRatioDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[MaintainHeightWidthRatio]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object])
    ], MaintainHeightWidthRatioDirective);
    return MaintainHeightWidthRatioDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=maintain-height-width-ratio.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/tab-view-available.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabViewAvailableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TabViewAvailableDirective = /** @class */ (function () {
    function TabViewAvailableDirective(elRef, renderer, recieveWidth, platformId) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.recieveWidth = recieveWidth;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
        this.recieveWidth.ofWindow.subscribe(function (data) {
            _this.windowWidth = data;
        });
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className === 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
            }
            if (this.className === 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    }
    TabViewAvailableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.recieveWidth.ofWindow.subscribe(function (data) {
            _this.windowWidth = data;
        });
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className === 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
                // this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
            }
            if (this.className === 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    };
    TabViewAvailableDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.recieveWidth.ofWindow.subscribe(function (data) {
            _this.windowWidth = data;
        });
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className === 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
                // this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
            }
            if (this.className === 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    };
    TabViewAvailableDirective.prototype.onresize = function () {
        var _this = this;
        this.recieveWidth.ofWindow.subscribe(function (data) {
            _this.windowWidth = data;
        });
        if (this.windowWidth > 950) {
            this.className = this.elRef.nativeElement.className;
            if (this.className === 'col-12') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-8');
            }
            if (this.className === 'col-6') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-4');
            }
        }
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className === 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
            }
            if (this.className === 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabViewAvailableDirective.prototype, "onresize", null);
    TabViewAvailableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[TabViewAvailable]'
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, Object])
    ], TabViewAvailableDirective);
    return TabViewAvailableDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=tab-view-available.directive.js.map

/***/ }),

/***/ "../../../../../src/app/editor-panel/blog-preview/blog-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview{\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 60%;\r\n    left: 20%;\r\n    z-index: 50;\r\n    box-shadow: 2px 2px #bbbbbb;\r\n    background-color: #ffffff;\r\n    overflow-y:scroll;\r\n    overflow-x:hidden;\r\n    font-family: 'Roboto',sans-serif\r\n}\r\n\r\n\r\n.cancel{\r\n    width: 30px;\r\n    height: 30px;\r\n    float: right;\r\n    padding: 1%;\r\n}\r\n.title{\r\n    width: 90%;\r\n    margin: 1% auto;\r\n    font-size: 2.2em;\r\n    font-weight: 700;\r\n}\r\n.blogger{\r\n    width: 90%;\r\n    margin: 1% auto;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n}\r\n.bloggerName{\r\n    margin-left: 2%;\r\n}\r\n.desc{\r\n    width: 90%;\r\n    margin: 1% auto;\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n}\r\n.tags{\r\n    width: 90%;\r\n    margin: 1% auto;\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n    color: #ffa600\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor-panel/blog-preview/blog-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\" >\r\n    <img class=\"cancel\" role=\"button\" (click)=\"closePreview()\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\">\r\n    <div class=\"blogImage\">\r\n      <img  alt=\"\" [src]=\"previewBlogImage\">\r\n    </div>\r\n    <p class=\"title\" ></p>\r\n    <div class=\"blogger\">\r\n      <img class=\"bloggerImage\"  alt=\"\" >\r\n      <span class=\"bloggerName\"></span>\r\n    </div>\r\n    <p class=\"desc\" ></p>\r\n    <p class=\"tags\" ></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/editor-panel/blog-preview/blog-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPreviewComponent = /** @class */ (function () {
    function BlogPreviewComponent() {
        this.Preview = true;
    }
    BlogPreviewComponent.prototype.ngOnInit = function () {
    };
    BlogPreviewComponent.prototype.closePreview = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BlogPreviewComponent.prototype, "Preview", void 0);
    BlogPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'sportsocial-blog-preview',
            template: __webpack_require__("../../../../../src/app/editor-panel/blog-preview/blog-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor-panel/blog-preview/blog-preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPreviewComponent);
    return BlogPreviewComponent;
}());

//# sourceMappingURL=blog-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/editor-panel/editor-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editorPanel{\r\n    padding: 2%;\r\n    background-color: #fafafa\r\n}\r\n.toolbar{\r\n    position: fixed;\r\n    width: 90%;\r\n    top:10%;\r\n    left: 5%;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    z-index: 10\r\n}\r\n.toolbar>div>img{\r\n    margin: 1%;\r\n    padding: 0.5%\r\n}\r\nselect,option{\r\n    border:1px solid #ffa600;\r\n    width: 40px;\r\n    height: 25px;\r\n    outline: none;\r\n}\r\n.file>input{\r\n    display: none;\r\n}\r\n.toolbar>div:first-child{\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.toolbar>div:first-child>input{\r\n    border: 1px solid #ffa600;\r\n    outline: none;\r\n}\r\n.toolbar>div:last-child{\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.file>input{\r\n    display: none;\r\n}\r\n.file{\r\n    margin: 1.5%;\r\n}\r\n.h{\r\n    display: inline-block;\r\n    color:#ffa600;\r\n    font-size: 1.8em;\r\n    margin-right: 8px;\r\n    font-weight: 900;\r\n}\r\n.panel-wrapper{\r\n    width: 90%;\r\n    margin:16% auto;\r\n}\r\n.panel{\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    background-color: #ffffff;\r\n}\r\n[contenteditable=true]:empty:before{\r\n    content: attr(placeholder);\r\n    display: block; /* For Firefox */\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n    opacity: 0.4\r\n}\r\n.blog{\r\n    display: block;\r\n    max-width: 90%;\r\n    margin:2% auto;\r\n}\r\n.dummyBlogImage{\r\n    display: block;\r\n    width: 100%;\r\n    height: 400px;\r\n    margin: auto;\r\n}\r\n.BlogImage{\r\n    width: 100%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.blogger{\r\n    border: none;\r\n}\r\n.blogger .dummy{\r\n opacity: 0.1\r\n}\r\n.panel>div{\r\n    width: 90%;\r\n    margin: 40px auto;\r\n    height: 100%;\r\n    outline: none;\r\n}\r\n.title{\r\n    font-size: 2em;\r\n}\r\n.BloggerImage{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n.bloggerName{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 35%;\r\n    margin-left: 2%;\r\n    border-bottom: 1px solid #bbbbbb;\r\n    outline: none;\r\n    font-size: 1.3em;\r\n   \r\n}\r\n\r\n.bloggerName,.title,.desc{\r\n    cursor: text;\r\n    padding: 1% 1% 1% 0%;\r\n   \r\n}\r\n.url{\r\n    color: #024771;\r\n}\r\n.primaryKey, .shortTitle{\r\n    color: #024771;\r\n    cursor: text;\r\n    padding: 1% 1% 1% 0%;\r\n    outline: none;\r\n    display: inline-block;\r\n    min-width: 15%;\r\n}\r\n.imageDesc, .shortDesc{\r\n    cursor: text;\r\n    padding: 1% 1% 1% 0%;\r\n    font-size:1.2em; \r\n}\r\n.charCount{\r\n    text-align: right;\r\n    color: black;\r\n}\r\n.descAbove{\r\n    opacity: 0.5;\r\n    font-size: 1.5em;\r\n}\r\n.desc{\r\n    overflow: auto;\r\n    min-height: 500px;\r\n    font-size: 1.5em;\r\n    border-top:1px solid #bbbbbb\r\n}\r\n.keywords>p{\r\n    width: 90%;\r\n   display: inline-block;\r\n   vertical-align: middle;\r\n   margin-left: 3%;\r\n   font-size: 1.2em;\r\n   outline: none;\r\n}\r\n.key{\r\n    display: inline-block;\r\n    border: 1px solid #bbbbbb;\r\n    margin: 1%;\r\n    padding: 1.5% 2% 1.5% 2%;\r\n    border-radius: 4px;\r\n}\r\n.confirm{\r\n    text-align: center;\r\n    color: #ffa600;\r\n    font-size: 0.9em;\r\n    font-weight: bold\r\n}\r\n.tick{\r\n    text-align: center;\r\n    padding: 1%;\r\n}\r\n.selected{\r\n    border: 1px solid #ffa600;\r\n}\r\n.not-selected{\r\n    border: none;\r\n}\r\n.linkPopup{\r\n    display:none;\r\n    width: 40%;\r\n    z-index: 50;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    position: fixed;\r\n    top:25%;\r\n    left: 30%;\r\n    padding: 2%;\r\n    padding-bottom: 0px;\r\n}\r\n.keywordPopup{\r\n    width: 50%;\r\n    z-index: 10;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    position: fixed;\r\n    top:20%;\r\n    left: 25%;\r\n    padding: 2%;\r\n    padding-bottom: 0px;\r\n}\r\n.keywordPopup>.keyword{\r\n    min-height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #bbbbbb;\r\n    padding: 2%;\r\n    outline: none;\r\n}\r\n.button{\r\n    width: 70%;\r\n    margin: 2% auto;\r\n    text-align: center;\r\n}\r\n.button>button{\r\n    width: 25%;  \r\n    border: none;\r\n    border-radius: 4px;\r\n    padding: 1% 3% 1% 3%;\r\n    color: white;\r\n    background-color: #ffa600;\r\n    outline: none;\r\n}   \r\n.not-selected:active{\r\n    -webkit-transform: scale(1.2,1.2);\r\n            transform: scale(1.2,1.2)\r\n}\r\n.panelButton{\r\n    width: 10%;\r\n    border: none;\r\n    background-color: #ffa600;\r\n    padding: 1%;\r\n    color:white;\r\n    outline: none;\r\n    border-radius: 4px;\r\n    font-family: sans-serif;\r\n    font-size: 1.2em;\r\n    font-weight: bold\r\n}\r\n.panelButton:last-child{\r\n    float: right;\r\n}\r\n.panelButton:disabled{\r\n    cursor: not-allowed;\r\n    background-color: #ffa60054;\r\n}\r\n.preview{\r\n    padding: 2%;\r\n    width:70%;\r\n    position: fixed;\r\n    top:0;\r\n    bottom: 0;\r\n    left:15%;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    overflow-y:scroll;\r\n    overflow-x:hidden;\r\n    z-index: 50;\r\n    background-color: #fafafa;\r\n    font-family: 'Roboto',sans-serif\r\n}\r\n.close{\r\n    opacity: unset;\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n.previewCatagory{\r\n    margin-bottom: 2%;\r\n}\r\n.previewCatagory>span{\r\n    font-size: 0.9em;\r\n    color: black;\r\n    font-weight: 500;\r\n    margin-right: 1%;\r\n}\r\n.previewBlogImageHolder{\r\n    width: 100%;\r\n    height:300px;\r\n    overflow: hidden;\r\n    margin-bottom: 2%;\r\n}\r\n.previewBlogImage{\r\n    width:100%;\r\n}\r\n.previewHeading{\r\n    font-size: 1.8em;\r\n    font-weight: 700;\r\n    color: black;\r\n    margin-bottom: 2%;\r\n}\r\n.previewBlogShortDesc{\r\n    font-size: 1.2em;\r\n    color: black;\r\n    text-align: left;\r\n}\r\n.previewBloggerImageHolder{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius:50%;\r\n}\r\n.previewBloggerImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n.previewBlogContent{\r\n    font-size: 1.4em;\r\n    color: black;\r\n    margin-bottom: 2%;\r\n}\r\n.previewTagIconHolder{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n.previewTagIconHolder{\r\n    height: 100%;\r\n    height: 100%;\r\n}\r\n.previewTags>span{\r\n    margin-right: 2%;\r\n    text-decoration: underline;\r\n    color: #ffa600;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor-panel/editor-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editorPanel\" #editorPanel>\r\n    <div class=\"toolbar\">\r\n      <div>\r\n        <img src=\"/assets/images/sports-social-undo.png\"  title=\"undo\" role=\"button\" alt=\"\" (click)=\"undo($event)\" class=\"not-selected\" >\r\n        \r\n        <img src=\"/assets/images/sports-social-redo.png\" title=\"redo\"  role=\"button\" alt=\"\" (click)=\"redo($event)\" class=\"not-selected\" >\r\n        \r\n        <img src=\"/assets/images/sports-social-bold.png\" title=\"Bold\" role=\"button\" alt=\"\" (click)=\"bold($event)\" class=\"not-selected\" >\r\n        \r\n        <img src=\"/assets/images/sports-social-italic.png\" title=\"Italic\" role=\"button\" alt=\"\" (click)=\"italic($event)\" class=\"not-selected\">\r\n        \r\n        <img src=\"/assets/images/sports-social-align-left.png\" title=\"left-align\"  role=\"button\" alt=\"\" (click)=\"leftAlign($event)\" class=\"not-selected\">\r\n        \r\n        <img src=\"/assets/images/sports-social-align-center.png\" title=\"center-align\" role=\"button\" alt=\"\" (click)=\"centerAlign($event)\" class=\"not-selected\">\r\n        \r\n        <img src=\"/assets/images/sports-social-align-right.png\" title=\"right-align\"  role=\"button\" alt=\"\" (click)=\"rightAlign($event)\" class=\"not-selected\">\r\n        \r\n        <img src=\"/assets/images/sports-social-text-justify.png\" title=\"justify\"  role=\"button\" alt=\"\" (click)=\"justify($event)\" class=\"not-selected\">\r\n        \r\n        <img src=\"/assets/images/sports-social-underline.png\" title=\"underline\" role=\"button\" alt=\"\" (click)=\"underline($event)\" class=\"not-selected\">\r\n        \r\n        <img src=\"/assets/images/sports-social-list-with-dots.png\" title=\"List with dosts\" role=\"button\" alt=\"\" (click)=\"listWithDots($event)\" class=\"not-selected\" >\r\n        \r\n        <img src=\"/assets/images/sports-social-list-with-numbers.png\" title=\"List with number\" role=\"button\" alt=\"\" (click)=\"listWithNumbers($event)\" class=\"not-selected\" >\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-text-color.png\" title=\"Text Color\" role=\"button\" alt=\"\" >\r\n            <input type=\"color\" name=\"textcolor\" id=\"textcolor\"  (change)=\"selectTextColor($event)\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-background-color.png\" title=\"Background Color\" role=\"button\" alt=\"\"  multiple>\r\n            <input type=\"color\" name=\"bcolor\" id=\"bcolor\"  (change)=\"selectBackgroundColor($event)\">\r\n        </label>\r\n        \r\n        <select (change)=\"selectFontSize($event)\" [value]=20>\r\n            <option *ngFor=\"let i of fontSize\" [value]=\"i\" >{{i}}</option>\r\n        </select>\r\n      </div>  \r\n      \r\n      <div>\r\n        <select (change)=\"selectTag($event)\">\r\n            <option value=\"h1\">h1</option>\r\n            <option value=\"h2\">h2</option>\r\n            <option value=\"h3\">h3</option>\r\n            <option value=\"h4\">h4</option>\r\n            <option value=\"h5\">h5</option>\r\n            <option value=\"h6\">h6</option>\r\n        </select>\r\n\r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-indent.png\" title=\"indent\" role=\"button\" alt=\"\" (click)=\"indent($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-outdent.png\" title=\" outdent\" role=\"button\" alt=\"\" (click)=\"outdent($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n           <img src=\"/assets/images/sports-social-paragraph.png\" title=\"Paragraph\" role=\"button\" alt=\"\" (click)=\"addParagraph($event)\" class=\"not-selected\" >\r\n         </label>\r\n        \r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-picture.png\" title=\"Add Image\" role=\"button\" alt=\"\"  class=\"not-selected\" >\r\n          <input type=\"file\" name=\"image\" id=\"image\" accept=\"image/jpeg, image/png\" (change)=\"selectImage($event)\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-youtube-video.png\" title=\"Add Youtube Video\" role=\"button\" class=\"not-selected\"  (click)=\"addYoutubevideo()\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-gif.png\" title=\"Add Gif\" role=\"button\" class=\"not-selected\" alt=\"\"  multiple>\r\n            <input type=\"file\" name=\"video\" id=\"video\" accept=\"image/gif image/webp\"  (change)=\"selectGif($event)\">\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n            <img src=\"/assets/images/sports-social-link.png\" title=\"Add Link\" role=\"button\" alt=\"\" class=\"not-selected\" (click)=\"addLink($event)\">\r\n        </label>\r\n        \r\n       \r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-remove-css.png\" title=\"Remove Style\" role=\"button\" alt=\"\" (click)=\"removeCss($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-subscript.png\" title=\"Subscript\"  role=\"button\" alt=\"\" (click)=\"subscript($event)\" class=\"not-selected\" >\r\n        </label>\r\n        \r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-superscript.png\" title=\"Superscript\" role=\"button\" alt=\"\" (click)=\"superscript($event)\" class=\"not-selected\" >\r\n        </label>\r\n        <label class=\"file\">\r\n          <img src=\"/assets/images/sports-social-quote.png\" title=\"Quote\" role=\"button\" alt=\"\" (click)=\"addQuote($event)\" class=\"not-selected\" >\r\n        </label>\r\n      </div>\r\n      </div>\r\n      <div class=\"panel-wrapper\">\r\n          <div class=\"panel\" #panel> \r\n              <div class=\"url\">\r\n                <span>www.chaseyoursport.com/</span>\r\n                <div contenteditable=\"true\" class=\"primaryKey\"  placeholder=\"Primary Key\" #primaryKey></div>\r\n                <span>/</span>\r\n                <div contenteditable=\"true\" class=\"shortTitle\"  placeholder=\"Short Title\" #shortTitle></div>\r\n              </div>\r\n              <label class=\"file blog\">\r\n                  <ng-container  *ngIf=\"!blogimageLoaded\">\r\n                      <img src=\"/assets/images/sports-social-temp-blog-image.jpg\" role=\"button\" class=\"dummyBlogImage\">\r\n                  </ng-container >\r\n                  <ng-container  *ngIf=\"blogimageLoaded\">\r\n                      <img src=\"{{blogimageSrc}}\"  role=\"button\" class=\"BlogImage\" >\r\n                  </ng-container >                \r\n                  <input type=\"file\" name=\"blogImage\"  id=\"blogImage\" accept=\"image/*\" (change)=\"selectBlogImage($event)\" #BlogImage>\r\n              </label>\r\n              <div contenteditable=\"true\" class=\"imageDesc\"  placeholder=\"Describe your Image\" #blogImageDesc></div>   \r\n              <div contenteditable=\"true\" class=\"title\"  placeholder=\"Hii Buddy, Your Title Goes Here\" #title></div>\r\n              <div contenteditable=\"true\" class=\"shortDesc\" (keyup)=\"calCharCount()\" placeholder=\"Add short description, max 140 Characters are allowed\" #shortDesc></div>\r\n              <div class=\"charCount\" >{{charCount}}/140</div>\r\n              <div class=\"blogger\">\r\n                  <label class=\"file\">\r\n                      <img src=\"/assets/images/sports-social-user.png\" role=\"button\" class=\"dummy\" *ngIf=\"!bloggerimageLoaded\">\r\n                      <img src=\"{{bloggerimageSrc}}\" *ngIf=\"bloggerimageLoaded\" role=\"button\" class=\"BloggerImage\">\r\n                      <input type=\"file\" name=\"bloggerImage\" id=\"bloggerImage\" accept=\"image/*\" (change)=\"selectBloggerImage($event)\" #BloggerImage>\r\n                  </label>\r\n              <div contenteditable=\"true\" class=\"bloggerName\"  placeholder=\"What's your name??\" #BloggerName></div>\r\n              </div>\r\n              <div class=\"keywords\" >\r\n                  <img src=\"/assets/images/sports-social-tags.png\" (click)=\"openAddKeywordPopup()\" role=\"button\" class=\"not-selected\">\r\n                  <p contenteditable=\"true\" placeholder=\"Click on tag button to add Keywords\" *ngIf=\"!keywordAdded\"></p>\r\n                  <p *ngIf=\"keywordAdded\" >\r\n                      <span *ngFor=\"let key of keywordArray;let i=index\" class=\"key\"> \r\n                          {{key}}\r\n                          <img src=\"/assets/images/sports-social-delete-keyword.png\" role=\"button\" (click)=\"deleteKeyword(i)\">\r\n                      </span>\r\n                  </p>\r\n              </div>\r\n              <div class=\"descAbove\" *ngIf=\"!Keypress\">Below the Line you will write the Content of Blog. You can also add Images,Youtube Video,Links</div> \r\n              <div contenteditable=\"true\" class=\"desc\" (keyup)=\"startDesc()\" #desc></div> \r\n          </div>\r\n          <button class=\"panelButton\" (click)=\"upload()\" [disabled]=\"isDisabled\" #panelButton >Upload </button>\r\n          <button class=\"panelButton\" (click)=\"preview()\" >Preview </button>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"linkPopup\" role=\"dialog\" #linkpopup>\r\n      <p class=\"confirm\">Please Click on tick to Confirm</p>\r\n      <label for=\"URL\">Url</label>\r\n      <input type=\"url\" name=\"URl\" id=\"url\" class=\"form-control\" (click)=\"test()\"  #url>\r\n      <label for=\"text\">Text</label>\r\n      <input type=\"text\" name=\"text\" id=\"text\" class=\"form-control\" #text>\r\n      <div class=\"tick\">\r\n          <img src=\"/assets/images/sports-social-confirmation.png\" role=\"button\" class=\"not-selected\" (click)=\"restoreCaret()\">\r\n      </div>\r\n      <div class=\"button\">\r\n          <button (click)=\"linkOk($event)\">Ok</button>\r\n          <button (click)=\"linkCancel()\">Cancel</button>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"linkPopup\" role=\"dialog\" #youtubeLinkPopup>\r\n      <p class=\"confirm\">Please Click on tick to Confirm</p>\r\n      <label for=\"URL\">Url</label>\r\n      <input type=\"url\" name=\"URl\" id=\"url\" class=\"form-control\" #YoutubeUrl>\r\n      <div class=\"tick\">\r\n          <img src=\"/assets/images/sports-social-confirmation.png\" role=\"button\" class=\"not-selected\" (click)=\"restoreCaret()\">\r\n      </div>\r\n      <div class=\"button\">\r\n          <button (click)=\"youtubeLinkOk($event)\">Ok</button>\r\n          <button (click)=\"youtubeLinkCancel()\">Cancel</button>\r\n      </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"keywordPopup\" *ngIf=\"isKeywordButtonClicked\" >\r\n      <label >Add Keywords:</label>\r\n      <div contenteditable=\"true\" class=\"keyword\" placeholder=\"Separate keywords by Comma\" #keys>{{Keys}}</div>\r\n      <div class=\"button\">\r\n          <button  (click)=\"addKeywords()\">Add</button>\r\n          <button (click)=\"addKeywordsCancel()\">Cancel</button>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"preview\" *ngIf=\"Preview\">\r\n      <img src=\"/assets/images/sports-social-cancel-black.png\" class=\"close\" role=\"button\" (click)=\"closePreview()\">\r\n      <p  class=\"previewCatagory\">\r\n          <span *ngIf=\"blogPreview\" >{{blogPreview.keywords[0]}}</span>\r\n          <span >|</span>\r\n          <span *ngIf=\"blogPreview\">{{blogPreview.readingTime}}</span>\r\n      </p>\r\n      <div class=\"previewBlogImageHolder\">\r\n          <img *ngIf=\"blogPreview\" class=\"previewBlogImage\" title=\"{{blogPreview.imageDesc}}\" alt=\"blogImage\" src=\"{{blogPreview.blogImage}}\"  >\r\n      </div>\r\n      <div class=\"previewBlogInfo\">\r\n          <p *ngIf=\"blogPreview\" [innerHtml]=\"blogPreview.heading\" class=\"previewHeading\"></p>\r\n          <p *ngIf=\"blogPreview\" class=\"previewBlogShortDesc\">{{blogPreview.metaDesc}}</p>\r\n          \r\n          <div class=\"previewBloggerImageHolder\">\r\n            <img *ngIf=\"blogPreview\" class=\"previewBloggerImage\"  src=\"{{blogPreview.bloggerImage}}\" >\r\n          </div>\r\n          <div class=\"previewBlogger\">\r\n            <p *ngIf=\"blogPreview\" class=\"previewBloggerName\">Written by <span > {{blogPreview.bloggerName}}</span></p>  \r\n          </div>\r\n          <p *ngIf=\"blogPreview\" [innerHtml]=\"blogPreview.content\" class=\"prviewBlogContent\"></p>\r\n          <div class=\"previewTags\" >\r\n            <div class=\"previewTagIconHolder\">\r\n              <img src=\"/assets/images/sports-social-tag.png\" alt=\"sports-social-tag\">\r\n            </div>\r\n            <ng-container *ngIf=\" blogPreview\">          \r\n                <span *ngFor=\"let key of blogPreview.keywords;let i=index\">{{key}}</span>\r\n            </ng-container>\r\n              \r\n          </div>\r\n      </div>   \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/editor-panel/editor-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorPanelComponent = /** @class */ (function () {
    function EditorPanelComponent(http, recieveHeight, renderer, route, sanitizer) {
        this.http = http;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.route = route;
        this.sanitizer = sanitizer;
        this.fontSize = [];
        this.bloggerimageLoaded = false;
        this.blogimageLoaded = false;
        this.text = '';
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
        this.linkAdded = true;
        this.linkCount = 0;
        this.youtubeVideoAdded = false;
        this.Keypress = false;
        this.selectedText = '';
        this.files = [];
        this.imageName = [];
        this.isDisabled = false;
        this.Preview = false;
        this.charCount = 0;
        this.filesToUpload = [];
    }
    EditorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + 'px');
        for (var i = 4; i <= 28; i += 4) {
            this.fontSize.push(i);
        }
        this.title.nativeElement.focus();
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditorPanelComponent.prototype.startDesc = function () {
        if (this.desc.nativeElement.innerHTML) {
            this.Keypress = true;
        }
        else {
            this.Keypress = false;
        }
    };
    EditorPanelComponent.prototype.calCharCount = function () {
        this.charCount = this.shortDesc.nativeElement.innerText.length;
        console.log(this.charCount);
        if (this.charCount >= 139) {
            this.shortDesc.nativeElement.blur();
        }
        else {
            this.shortDesc.nativeElement.focus();
        }
    };
    EditorPanelComponent.prototype.onmousedown = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
        // console.log(event)
    };
    EditorPanelComponent.prototype.onkeyup = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditorPanelComponent.prototype.selectTag = function (event) {
        this.initialActiveElement.Element.focus();
        // console.log(event.target.value);
        document.execCommand('formatBlock', false, (event.target.value));
        // console.log(this.initialActiveElement.Element);
    };
    EditorPanelComponent.prototype.bold = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('bold', false, null);
        /*  if (event.target.className === 'not-selected') {
           this.renderer.removeClass(event.target, 'not-selected');
           this.renderer.addClass(event.target, 'selected');
         } else {
           this.renderer.removeClass(event.target, 'selected');
           this.renderer.addClass(event.target, 'not-selected');
         } */
    };
    EditorPanelComponent.prototype.italic = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('italic', false, null);
        /* if (event.target.className === 'not-selected'){
          this.renderer.removeClass(event.target, 'not-selected');
          this.renderer.addClass(event.target, 'selected');
        } else {
          this.renderer.removeClass(event.target, 'selected');
          this.renderer.addClass(event.target, 'not-selected');
        } */
    };
    EditorPanelComponent.prototype.underline = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('underline', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditorPanelComponent.prototype.leftAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyLeft', false, null);
    };
    EditorPanelComponent.prototype.rightAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyRight', false, null);
    };
    EditorPanelComponent.prototype.centerAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyCenter', false, null);
    };
    EditorPanelComponent.prototype.justify = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyFull', false, null);
    };
    EditorPanelComponent.prototype.undo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('undo', false, null);
    };
    EditorPanelComponent.prototype.redo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('redo', false, null);
    };
    EditorPanelComponent.prototype.indent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('indent', false, null);
    };
    EditorPanelComponent.prototype.outdent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('outdent', false, null);
    };
    EditorPanelComponent.prototype.subscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('subscript', false, null);
    };
    EditorPanelComponent.prototype.superscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('superscript', false, null);
    };
    EditorPanelComponent.prototype.listWithNumbers = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertOrderedList', false, null);
    };
    EditorPanelComponent.prototype.listWithDots = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertUnorderedList', false, null);
    };
    EditorPanelComponent.prototype.removeCss = function (event) {
        console.log(document.execCommand('removeFormat', false, null));
        document.execCommand('removeFormat', false, null);
    };
    EditorPanelComponent.prototype.addParagraph = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertParagraph', false, null);
    };
    EditorPanelComponent.prototype.selectTextColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('foreColor', false, event.target.value);
    };
    EditorPanelComponent.prototype.selectBackgroundColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('backColor', false, event.target.value);
    };
    EditorPanelComponent.prototype.selectFontSize = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('fontSize', false, (event.target.value) / 4);
    };
    EditorPanelComponent.prototype.preventdefault = function (event) {
        event.target.focus();
        event.preventDefault();
    };
    EditorPanelComponent.prototype.test = function () {
        console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
    };
    EditorPanelComponent.prototype.restoreCaret = function () {
        this.beforePopupActiveElement.focus();
        console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
        var sel = window.getSelection();
        sel.collapse(this.beforePopupSelectedElement, this.beforePopupCurPos);
    };
    EditorPanelComponent.prototype.addLink = function (event) {
        this.selectedText = document.getSelection().toString();
        console.log(this.selectedText);
        if (this.selectedText !== '') {
            this.Text.nativeElement.value = this.selectedText;
            document.execCommand('cut', false, null);
        }
        this.initialActiveElement.Element.focus();
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'block');
        this.beforePopupActiveElement = this.initialActiveElement.Element;
        this.initialSelectedELement = document.getSelection();
        this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
        this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
    };
    EditorPanelComponent.prototype.unLink = function () {
        this.selctedLink = document.getSelection();
        console.log(this.selctedLink);
    };
    EditorPanelComponent.prototype.linkOk = function (event) {
        this.linkUrl = this.URL.nativeElement.value;
        this.linkText = this.Text.nativeElement.value;
        var embed = "<a class=\"link\" href=\"" + this.linkUrl +
            "\"target=\"_blank\">" + ' ' + this.linkText + "</a>";
        if (this.linkUrl && this.linkText) {
            document.execCommand('insertHTML', false, embed);
        }
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.linkCancel = function () {
        event.preventDefault();
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.addYoutubevideo = function () {
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'block');
        this.beforePopupActiveElement = this.initialActiveElement.Element;
        this.initialSelectedELement = document.getSelection();
        this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
        this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
    };
    EditorPanelComponent.prototype.youtubeLinkOk = function (event) {
        this.youtubeUrl = this.youtubeURL.nativeElement.value.replace('watch?v=', 'embed/');
        console.log(this.youtubeUrl);
        if (this.youtubeURL.nativeElement.value) {
            document.execCommand('insertHTML', false, "\n      <div style=\"position: relative;\n      padding-bottom: 56.25%;\n      width:90%;\n      padding-top: 25px;\n      height: 0;\"><iframe style=\"position: absolute;\n      top: 0;\n      left: 5%;\n      width: 100%;\n      height: 100%;\" src=\"" + this.youtubeUrl
                + "\"   frameborder=\"0\" allowfullscreen></iframe></div><br><br>");
        }
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.youtubeLinkCancel = function () {
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.addQuote = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('formatBlock', false, 'blockquote');
    };
    EditorPanelComponent.prototype.selectImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditorPanelComponent.prototype._handleReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
        document.execCommand('insertHTML', false, "<div style=\"max-width:100%;height:auto;\" ><img style=\"max-width:100%;max-height:100%;\" src=\""
            + this.imageSrc + "\"></div>");
    };
    EditorPanelComponent.prototype.selectGif = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleGifReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditorPanelComponent.prototype._handleGifReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        document.execCommand('insertImage', false, this.imageSrc);
    };
    EditorPanelComponent.prototype.selectBloggerImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBloggerReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.bloggerimageLoaded = true;
    };
    EditorPanelComponent.prototype._handleBloggerReaderLoaded = function (event) {
        var reader = event.target;
        this.bloggerimageSrc = reader.result;
    };
    EditorPanelComponent.prototype.selectBlogImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBlogReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.blogimageLoaded = true;
    };
    EditorPanelComponent.prototype._handleBlogReaderLoaded = function (event) {
        var reader = event.target;
        this.blogimageSrc = reader.result;
    };
    EditorPanelComponent.prototype.openAddKeywordPopup = function () {
        this.isKeywordButtonClicked = true;
        if (this.Keys) {
            this.Keys = this.keywordArray.toString();
        }
    };
    EditorPanelComponent.prototype.addKeywords = function () {
        this.Keys = this.keys.nativeElement.textContent;
        this.keywordArray = (this.Keys.split(','));
        this.isKeywordButtonClicked = false;
        if (this.Keys) {
            this.keywordAdded = true;
        }
        else {
            this.keywordAdded = false;
        }
    };
    EditorPanelComponent.prototype.addKeywordsCancel = function () {
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
    };
    EditorPanelComponent.prototype.deleteKeyword = function (i) {
        this.keywordArray.splice(i, 1);
    };
    EditorPanelComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        this.imageName = ['blogImage', 'bloggerImage'];
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(_this.imageName[i], files[i]);
            }
            formData.append('bloggerName', _this.blog.bloggerName);
            formData.append('blogrTitle', _this.blog.blogTitle);
            formData.append('blogDesc', _this.blog.blogDesc);
            formData.append('keywords', _this.blog.keywords);
            formData.append('metaDesc', _this.blog.metaDesc);
            formData.append('imageDesc', _this.blog.imageDesc);
            formData.append('primaryKey', _this.blog.primaryKey);
            formData.append('shortTitle', _this.blog.shortTitle);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    EditorPanelComponent.prototype.upload = function () {
        var _this = this;
        // console.log(this.BlogImage,this.BloggerImage,this.BloggerName,this.title,this.desc,this.shortDesc,this.blogImageDesc);
        this.blogImage = this.BlogImage.nativeElement.files[0];
        this.bloggerImage = this.BloggerImage.nativeElement.files[0];
        this.files = [this.blogImage, this.bloggerImage];
        console.log(this.files);
        this.isDisabled = true;
        this.blog = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            blogTitle: this.title.nativeElement.innerText,
            blogDesc: this.desc.nativeElement.innerHTML,
            keywords: this.Keys,
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText,
            primaryKey: this.primaryKey.nativeElement.innerText,
            shortTitle: this.ShortTitle.nativeElement.innerText
        };
        console.log(this.blog);
        this.imageName = ['blogImage', 'bloggerImage'];
        for (var i = 0; i < this.files.length; i++) {
            this.filesToUpload.push(this.files[i]);
        }
        this.makeFileRequest('https://admin.chaseyoursport.com/blog/saveNewBlog', [], this.filesToUpload)
            .then(function (result) {
            _this.Result = result;
            console.log(result);
            if (_this.Result.Status === 'Success') {
                _this.isDisabled = false;
            }
        }, function (error) {
            console.error(error);
            if (error) {
                _this.isDisabled = false;
            }
        });
    };
    EditorPanelComponent.prototype.strip = function (html) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    EditorPanelComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    EditorPanelComponent.prototype.preview = function () {
        this.Preview = true;
        var Content = this.desc.nativeElement.innerHTML;
        console.log(this.files);
        this.blogPreview = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            heading: this.title.nativeElement.innerHTML,
            content: this.sanitizer.bypassSecurityTrustHtml(this.desc.nativeElement.innerHTML),
            keywords: this.keywordArray,
            blogImage: this.blogimageSrc,
            bloggerImage: this.bloggerimageSrc,
            readingTime: this.timeToRead(this.strip(Content)),
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText,
            primaryKey: this.primaryKey.nativeElement.innerText,
            shortTitle: this.ShortTitle.nativeElement.innerText
        };
        console.log(this.blogPreview);
    };
    EditorPanelComponent.prototype.closePreview = function () {
        this.Preview = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('desc'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BlogImage'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "BlogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BloggerImage'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "BloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blogImageDesc'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "blogImageDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('shortDesc'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "shortDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('BloggerName'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "BloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('primaryKey'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "primaryKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('shortTitle'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "ShortTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('url'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "URL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('YoutubeUrl'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "youtubeURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('PluginUrl'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "pluginURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('keys'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "keys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('text'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "Text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('editorPanel'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "editorPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('panel'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "panel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('linkpopup'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "linkpopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('youtubeLinkPopup'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "youtubeLinkPopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pluginLinkPopup'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "pluginLinkPopup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('panelButton'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "panelButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditorPanelComponent.prototype, "onmousedown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EditorPanelComponent.prototype, "onkeyup", null);
    EditorPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocialBlog-editor-panel',
            template: __webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object])
    ], EditorPanelComponent);
    return EditorPanelComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=editor-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/keywords/keyword/keyword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: 'Roboto',sans-serif\r\n}\r\n.keyword{\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: top;\r\n    border: 1px solid #024771;\r\n    border-radius: 4px;\r\n    margin: 0.8% 0.15% 0.8% 0.15%;\r\n     \r\n}\r\n.image{\r\n    background-repeat:no-repeat ;\r\n    background-size: 100%;\r\n}\r\n.title{\r\n   \r\n    display: inline-block;\r\n    width: auto;       \r\n}\r\n.title p{\r\n    padding: 6px 14px 6px 14px;\r\n    display: inline-block;\r\n    width: auto;\r\n    font-size: 0.9em;\r\n    color: #024771;\r\n    text-align: left;\r\n    font-weight: 500;\r\n}\r\n.keyword:hover{\r\n    background-color: #024771;\r\n    border:none;\r\n    \r\n}\r\n.title p:hover{\r\n    color: white\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keywords/keyword/keyword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"keyword\" #Keyword>\r\n  <div class=\"title\">\r\n    <p>{{title}}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/keywords/keyword/keyword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeywordComponent = /** @class */ (function () {
    function KeywordComponent(renderer) {
        this.renderer = renderer;
    }
    KeywordComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], KeywordComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('Keyword'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
    ], KeywordComponent.prototype, "Keyword", void 0);
    KeywordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocialBlog-keyword',
            template: __webpack_require__("../../../../../src/app/keywords/keyword/keyword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keywords/keyword/keyword.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
    ], KeywordComponent);
    return KeywordComponent;
    var _a, _b;
}());

//# sourceMappingURL=keyword.component.js.map

/***/ }),

/***/ "../../../../../src/app/keywords/keywords.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".keywords{\r\n   \r\n    width: 100%;\r\n    z-index: 1;\r\n    background-color: #ffffff;\r\n    white-space: nowrap !important;\r\n    box-shadow: 2px 2px 4px #bbbbbb\r\n    \r\n    \r\n}\r\n.keywords div{\r\n    text-align: center;\r\n    overflow-x: scroll;\r\n    max-width: 100%;\r\n    margin: 2px auto;\r\n}\r\n::-webkit-scrollbar{\r\n   display: none;\r\n}\r\n::-moz-scrollbar{\r\n    display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keywords/keywords.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"keywords\" #Keywords>\r\n  <ng-container *ngIf=\"isBrowser\">\r\n    <div>\r\n      <SportSocialBlog-keyword *ngFor=\"let keyword of keywords;let i=index\" \r\n        [title]=\"keyword.name\" class=\"keyword\" role=\"button\" (click)=\"send(i)\">\r\n      </SportSocialBlog-keyword>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/keywords/keywords.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_get_service__ = __webpack_require__("../../../../../src/app/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var KeywordsComponent = /** @class */ (function () {
    function KeywordsComponent(platformId, renderer, recieveHeight, sendHeight, searched, sendSearchedData, router, sendKey, get) {
        this.renderer = renderer;
        this.recieveHeight = recieveHeight;
        this.sendHeight = sendHeight;
        this.searched = searched;
        this.sendSearchedData = sendSearchedData;
        this.router = router;
        this.sendKey = sendKey;
        this.get = get;
        this.keywords = [];
        this.pageNumber = 1;
        this.isBrowser = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["j" /* isPlatformBrowser */])(platformId);
    }
    KeywordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get.keywords().subscribe(function (res) {
            for (var i in res) {
                _this.keywords.push({
                    name: res[i].Keyword
                });
            }
        });
        // console.log(this.keywords, ' check')
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + 'px');
    };
    KeywordsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + 'px');
        this.sendHeight.ofKeyWords.next(Object(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Keywords.nativeElement).bottom);
    };
    KeywordsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + 'px');
        this.sendHeight.ofKeyWords.next(Object(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Keywords.nativeElement).bottom);
    };
    KeywordsComponent.prototype.send = function (i) {
        /* this.searched.blogData(this.pageNumber,this.keywords[i].name).subscribe(
          res=>{
            console.log(res)
            this.sendSearchedData.ofsearchBlog.next(res);
          }
        ) */
        this.path = '/' + this.keywords[i].name;
        this.router.navigate([this.path]);
        //this.sendKey.ofBlogCard.next(this.keywords[i].name)
    };
    KeywordsComponent.prototype.onresize = function () {
        var _this = this;
        this.sendHeight.ofKeyWords.next(Object(__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.Keywords.nativeElement).bottom);
        this.recieveHeight.ofHeader.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('Keywords'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
    ], KeywordsComponent.prototype, "Keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeywordsComponent.prototype, "onresize", null);
    KeywordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocialBlog-keywords',
            template: __webpack_require__("../../../../../src/app/keywords/keywords.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keywords/keywords.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_service__["a" /* GetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_get_service__["a" /* GetService */]) === "function" && _j || Object])
    ], KeywordsComponent);
    return KeywordsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=keywords.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login{\r\n    margin: 12% auto;\r\n   box-shadow: 1px 1px #bbbbbb;\r\n    background-color: #fafafa;\r\n    width: 40%;\r\n    padding: 2%;\r\n    font-family: 'Roboto',sans-serif\r\n}\r\n\r\ninput{\r\n    margin: 1%;\r\n    border-radius:25px;\r\n    background-color: #ffffff;\r\n    padding-left: 2%;\r\n    outline: none;\r\n    border: none;\r\n}\r\nbutton{\r\n    display: block;\r\n    margin: 2% auto;\r\n    margin-bottom: 0%;\r\n    background-color: #ffa600;\r\n    color: white;\r\n    border: none;\r\n    outline: none;\r\n    padding: 2% 4% 2% 4%;\r\n    border-radius: 4px;\r\n}\r\n\r\n.wrongPassword{\r\n    width:100%;\r\n    text-align: center;\r\n    padding: 1%;\r\n    color: #b33a3a;\r\n    font-weight: 500;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <p *ngIf=\"wrongPassword\" class=\"wrongPassword\">Enter Correct credentials!!!</p>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input type=\"text\" id=\"userName\" class=\"form-control\"  name=\"UserName\" #userName>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"Title\">Password</label>\r\n    <input type=\"password\" id=\"password\" class=\"form-control\" ngModel name=\"password\" #password>\r\n  </div>\r\n  <button (click)=\"checkLogin()\" [disabled]=\"\">Login </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.wrongPassword = false;
        this.loading = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginPageComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.code === "Enter") {
            this.checkLogin();
        }
    };
    LoginPageComponent.prototype.checkLogin = function () {
        var UserName = this.userName.nativeElement.value;
        var Password = this.password.nativeElement.value;
        // console.log(typeof(UserName),typeof(Password))
        if (UserName == "sportsocial" && Password == "cys") {
            this.wrongPassword = false;
            this.authService.login();
            this.router.navigate(['/' + this.returnUrl]);
        }
        else {
            this.wrongPassword = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('userName'),
        __metadata("design:type", Object)
    ], LoginPageComponent.prototype, "userName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPageComponent.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginPageComponent.prototype, "handleKeyboardEvent", null);
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocialBlog-login-page',
            template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    width: 40%;\r\n    height: 150px;\r\n    z-index: 50;\r\n    position: fixed;\r\n    top:30%;\r\n    left: 30%;\r\n    border: 1px solid black;\r\n    background-color: #024771\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"subscriptionBox\" #subscriptionBox *ngIf=\"showSubscriptionBox\">\r\n    <button type=\"button\" (click)=\"close()\">&times;</button>\r\n  You have subscribed\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(status, renderer) {
        this.status = status;
        this.renderer = renderer;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.showSubscriptionBox)
        console.log(this.showSubscriptionBox, " gfghj");
    };
    MessageComponent.prototype.close = function () {
        this.showSubscriptionBox = false;
        console.log(this.showSubscriptionBox);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('subscriptionBox'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "subscriptionBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "showSubscriptionBox", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
    ], MessageComponent);
    return MessageComponent;
    var _a, _b;
}());

//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/open-full-image/open-full-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    top:0%;\r\n    left:0%;\r\n    z-index: 50;\r\n    box-shadow: 1px 1px #bbbbbb;\r\n    border: 1px solid #bbbbbb;\r\n    background-color: black;\r\n    opacity: 0.7;\r\n    background-repeat: no-repeat;\r\n    background-position: center\r\n}\r\n.fullImageHolder{\r\n    position: fixed;\r\n    width: 70%;\r\n    left: 15%;\r\n    top:0%;\r\n    z-index: 100;\r\n}\r\n.fullImageHolder>img{\r\n    display: block;\r\n    padding: 5%;\r\n    text-align: center;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.cancel{\r\n    position: absolute;\r\n    top:1%;\r\n    right:1%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 150\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/open-full-image/open-full-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fullImage\" #fullImage *ngIf=\"openFullImage\">\r\n  <img \r\n   src=\"/assets/images/sports-social-cancel-white.png\" \r\n   class=\"cancel\" role=\"button\" (click)=\"closeFullImage()\">   \r\n   \r\n </div>\r\n <div class=\"fullImageHolder\" *ngIf=\"openFullImage\" #fullImageHolder>\r\n   <img src=\"{{blog.blogImage}}\" >\r\n </div>"

/***/ }),

/***/ "../../../../../src/app/open-full-image/open-full-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenFullImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpenFullImageComponent = /** @class */ (function () {
    function OpenFullImageComponent() {
        this.openFullImage = false;
    }
    OpenFullImageComponent.prototype.ngOnInit = function () {
    };
    OpenFullImageComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    OpenFullImageComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    OpenFullImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-open-full-image',
            template: __webpack_require__("../../../../../src/app/open-full-image/open-full-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/open-full-image/open-full-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OpenFullImageComponent);
    return OpenFullImageComponent;
}());

//# sourceMappingURL=open-full-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blogContent_blogs_blogs_component__ = __webpack_require__("../../../../../src/app/blogContent/blogs/blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogContent_blog_open_blog_open_component__ = __webpack_require__("../../../../../src/app/blogContent/blog-open/blog-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_panel_editor_panel_component__ = __webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_panel_admin_panel_component__ = __webpack_require__("../../../../../src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_panel_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/admin-panel/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_gaurd_service__ = __webpack_require__("../../../../../src/app/services/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoute = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__blogContent_blogs_blogs_component__["a" /* BlogsComponent */] },
    { path: 'editorPanel',
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_gaurd_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__editor_panel_editor_panel_component__["a" /* EditorPanelComponent */] },
    { path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'adminPanel',
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_auth_gaurd_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__admin_panel_admin_panel_component__["a" /* AdminPanelComponent */] },
    { path: ':tag', component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */] },
    { path: ':blogId/edit', component: __WEBPACK_IMPORTED_MODULE_7__admin_panel_edit_blog_edit_blog_component__["a" /* EditBlogComponent */] },
    { path: ':tag/:title/:blogId', component: __WEBPACK_IMPORTED_MODULE_2__blogContent_blog_open_blog_open_component__["a" /* BlogOpenComponent */] },
    { path: '**', redirectTo: '' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */].forRoot(appRoute)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Row{\r\n    padding: 1%;\r\n}\r\n.col-6{\r\n    width: 49.50%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding:0% 1.5% 2% 1.5%;\r\n}\r\n.col-12{\r\n    width: 100%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n   \r\n}\r\n.col-4{\r\n    width: 33%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 1%;\r\n}\r\n.mobileView .col-4{\r\n    width: 100%;\r\n}\r\nbutton{\r\n    display: block;\r\n    margin: 1% auto;\r\n    width: 30%;\r\n    background-color: #ffa600;\r\n    border:none;\r\n    color: #ffffff;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 700;\r\n    font-size: 1.2em;\r\n    padding: 0.5%;\r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.noMoreData{\r\n    width: 100%;\r\n    color: #024771;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.5em;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n.topic{\r\n    width: 95%;\r\n    margin: 2% auto;\r\n    padding-top: 2%;\r\n    text-align: left;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 700;\r\n}\r\n.topicDetails{\r\n    width:95%;\r\n    margin: 1% auto ;\r\n    text-align: left;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div  #searchPage>\r\n    <img class=\"loading\" *ngIf=\"!isBrowser\" src=\"/assets/images/sports-social-loading.gif\" >\r\n  <ng-container *ngIf=\"isBrowser\">\r\n    <h2 class=\"topic\">{{recievedKey}} blogs</h2>\r\n    <p class=\"topicDetails\">All you need to know about {{recievedKey}} updates, news, trends and articles </p>\r\n  \r\n  <div class=\"Row\"  *ngIf=\"!mobileView\">\r\n      \r\n    <div TabViewAvailable class=\"col-4\" *ngFor=\"let data of blogDetails\">\r\n      <SportSocial-normal-blog \r\n        [blogId]=\"data.blogId\"\r\n        [blogImage]=\"data.blogImage\"\r\n        [bloggerImage]=\"data.bloggerImage\"\r\n        [bloggerName]=\"data.bloggerName\"\r\n        [insertedDate]=\"data.insertedDate\"\r\n        [heading]=\"data.heading\"\r\n        [Content]=\"data.Content\"\r\n        [ViewCount]=\"data.ViewCount\"\r\n        [ShareCount]=\"data.ShareCount\"\r\n        [keywords]=\"data.keywords\"\r\n        [exactDate]=\"data.exactDate\"\r\n        [readingTime]=\"data.readingTime\"\r\n        [MetaDesc]=\"data.MetaDesc\"\r\n        [ImageDesc]=\"data.ImageDesc\">\r\n      </SportSocial-normal-blog>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"Row mobileView\" *ngIf=\"mobileView\" >\r\n      <div class=\"col-4\" *ngFor=\"let data of blogDetails;let i=index\">\r\n          <SportSocial-normal-blog \r\n              [blogId]=\"data.blogId\"\r\n              [blogImage]=\"data.blogImage\"\r\n              [bloggerImage]=\"data.bloggerImage\"\r\n              [bloggerName]=\"data.bloggerName\"\r\n              [insertedDate]=\"data.insertedDate\"\r\n              [heading]=\"data.heading\"\r\n              [Content]=\"data.Content\"\r\n              [ViewCount]=\"data.ViewCount\"\r\n              [ShareCount]=\"data.ShareCount\"\r\n              [keywords]=\"data.keywords\"\r\n              [exactDate]=\"data.exactDate\"\r\n              [readingTime]=\"data.readingTime\" \r\n              [MetaDesc]=\"data.MetaDesc\"\r\n              [ImageDesc]=\"data.ImageDesc\">\r\n          </SportSocial-normal-blog>\r\n      </div>\r\n  </div>\r\n </ng-container>\r\n</div>\r\n<ng-container *ngIf=\"isBrowser\">\r\n  <div *ngIf=\"haveData\">\r\n      <button (click)=\"nextPage()\" *ngIf=\"dataRecieved\">Load More</button>\r\n      <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecieved\" class=\"loading\">\r\n  </div>\r\n  <p *ngIf=\"!haveData\" class=\"noMoreData\" >No More Data !!!</p>         \r\n  <SportSocial-blog-footer *ngIf=\"show\"></SportSocial-blog-footer> \r\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_link_service__ = __webpack_require__("../../../../../src/app/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var SearchComponent = /** @class */ (function () {
    function SearchComponent(platformId, recieveHeight, renderer, recieveData, recievekey, get, route, zone, titleService, metaService, link) {
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.recieveData = recieveData;
        this.recievekey = recievekey;
        this.get = get;
        this.route = route;
        this.zone = zone;
        this.titleService = titleService;
        this.metaService = metaService;
        this.link = link;
        this.dataRecieved = false;
        this.show = false;
        this.tempBlog = [];
        this.pageNumber = 1;
        this.mobileView = false;
        this.haveData = true;
        this.keywords = ' ';
        this.keys = ' ';
        this.keyArray = [];
        this.isBrowser = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["j" /* isPlatformBrowser */])(platformId);
        console.log(this.isBrowser);
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.recievekeyFromUrl();
        this.setMobileView();
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        this.setTopMargin();
        // this.recievekeyFromUrl();
    };
    SearchComponent.prototype.setCanonicalURL = function () {
        this.link.addTag({ rel: 'canonical', href: 'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-') });
    };
    SearchComponent.prototype.setTitle = function () {
        this.titleService.setTitle(this.recievedKey + " | Latest updates,trends,blogs,news and articles | Sports Social Blog");
    };
    SearchComponent.prototype.setMetaTags = function () {
        this.metaService.addTags([
            { name: 'description', content: 'All you need to know about' + this.recievedKey + 'updates,news,trends and articles' },
            { name: 'title', content: this.recievedKey + ' Blogs' },
            { name: 'keywords', content: this.keywords },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: this.recievedKey + 'Blogs' },
            { property: 'og:description', content: 'All you need to know about' + this.recievedKey + 'updates,news,trends and articles' },
            { property: 'og:url', content: 'https://www.chaseyoursport.com/' + this.recievedKey.replace(/ /g, '-') },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Chase Your Sport' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Chaseyoursport' },
            { name: 'twitter:creator', content: '@NadeemKhan' },
            { name: 'twitter:title', content: this.recievedKey + ' Blogs' },
            { name: 'twitter:description', content: 'All you need to know about' + this.recievedKey + 'updates, news, trends and articles' },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
    };
    SearchComponent.prototype.getBlogs = function () {
        var _this = this;
        var blogDetails = [];
        this.get.blogData(this.pageNumber, this.recievedKey).subscribe(function (data) {
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            if (data.length === 0 && _this.pageNumber === 1) {
            }
            _this.show = true;
            _this.dataRecieved = true;
            // tslint:disable-next-line:forin
            for (var i in data) {
                blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    Content: data[i].Content,
                    insertedDate: _this.timePassed(data[i].insertedDate),
                    ViewCount: data[i].ViewCount,
                    ShareCount: data[i].ShareCount,
                    keywords: data[i].keywords.split(','),
                    exactDate: _this.ExactDate(data[i].insertedDate),
                    readingTime: _this.timeToRead(data[i].Content),
                    MetaDesc: data[i].MetaDesc == null ? ' ' : data[i].MetaDesc,
                    ImageDesc: data[i].ImageDesc == null ? ' ' : data[i].ImageDesc,
                    PrimaryKeyword: data[i].PrimaryKeyword == null ? data[i].keywords.split(',')[0] : data[i].PrimaryKeyword,
                    ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
                });
                _this.keys += blogDetails[i].keywords + ',';
            }
            _this.blogDetails = blogDetails;
            _this.keyArray = _this.keys.trim().split(',');
            _this.keyArray = Array.from(new Set(_this.keyArray));
            _this.keywords = _this.keyArray.toString();
            console.log(_this.keys, _this.keyArray, _this.keywords);
            _this.setCanonicalURL();
            _this.setMetaTags();
        });
    };
    SearchComponent.prototype.recievekeyFromUrl = function () {
        var _this = this;
        this.recievedKey = this.route.snapshot.url[0].path.replace(/-/g, ' ');
        this.route.params.subscribe(function (params) {
            _this.pageNumber = 1;
            _this.recievedKey = params.tag.replace(/-/g, ' ');
            _this.setTitle();
            _this.getBlogs();
        });
    };
    SearchComponent.prototype.setMobileView = function () {
        var width = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* ɵgetDOM */])().getBoundingClientRect(this.searchPage.nativeElement).width;
        if (width < 700) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    SearchComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    SearchComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    SearchComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i) * 1000);
        var presentDate = new Date();
        // console.log(writtenDate.toDateString(),presentDate.getDate() ," date")
        if (writtenDate.getFullYear() === presentDate.getFullYear()) {
            if (writtenDate.getMonth() === presentDate.getMonth()) {
                if (writtenDate.getDate() === presentDate.getDate()) {
                    if (writtenDate.getHours() === presentDate.getHours()) {
                        if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                            if (writtenDate.getSeconds() - presentDate.getSeconds()) {
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
    SearchComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.searchPage.nativeElement, 'margin-top', this.topMargin + 'px');
    };
    SearchComponent.prototype.onresize = function () {
        this.setTopMargin();
        this.setMobileView();
    };
    SearchComponent.prototype.nextPage = function () {
        var _this = this;
        this.pageNumber++;
        this.dataRecieved = false;
        this.get.blogData(this.pageNumber, this.recievedKey).subscribe(function (data) {
            console.log(data, ' nm');
            _this.dataRecieved = true;
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            console.log(_this.haveData);
            for (var i in data) {
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
                    keywords: data[i].keywords.split(','),
                    exactDate: _this.ExactDate(data[i].insertedDate),
                    readingTime: _this.timeToRead(data[i].Content),
                    MetaDesc: data[i].MetaDesc == null ? ' ' : data[i].MetaDesc,
                    ImageDesc: data[i].ImageDesc == null ? ' ' : data[i].ImageDesc,
                    PrimaryKeyword: data[i].PrimaryKeyword == null ? data[i].keywords.split(',')[0] : data[i].PrimaryKeyword,
                    ShortTitle: data[i].ShortTitle == null ? data[i].heading : data[i].ShortTitle
                });
            }
            // sessionStorage.setItem('searchedBlog',JSON.stringify(this.blogDetails))
        });
        // sessionStorage.setItem('pageNumber',JSON.stringify(this.pageNumber));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('searchPage'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('blog'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "blog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchComponent.prototype, "onresize", null);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_service__["a" /* PropertyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* Title */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Meta */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_link_service__["a" /* LinkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_link_service__["a" /* LinkService */]) === "function" && _k || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            console.log(authenticated, " init");
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            }
        });
    };
    /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    } */
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth-gaurd.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loggedIn = true;
        console.log(this.loggedIn, " login");
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/facebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FacebookService = /** @class */ (function () {
    function FacebookService(platformId) {
        this.connected = false;
        this.isBrowser = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId);
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(platformId)) {
            if (window.FB) {
                window.FB.XFBML.parse();
            }
        }
    }
    FacebookService.prototype.init = function () {
        if (this.isBrowser) {
            FB.init({
                appId: '1750709328507665',
                cookie: false,
                xfbml: true,
                version: 'v2.10'
            });
        }
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object])
    ], FacebookService);
    return FacebookService;
}());

//# sourceMappingURL=facebook.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/get.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
    }
    GetService.prototype.keywords = function () {
        return this.http.get('https://admin.chaseyoursport.com/blog/getKeywords')
            .map(function (res) { return res.json(); });
    };
    GetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], GetService);
    return GetService;
    var _a;
}());

//# sourceMappingURL=get.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/link.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LinkService = /** @class */ (function () {
    function LinkService(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement('link');
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            renderer_1.appendChild(head, link_1);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    };
    LinkService.prototype._parseSelector = function (tag) {
        var attr = tag.rel ? 'rel' : 'hreflang';
        return attr + "=\"" + tag[attr] + "\"";
    };
    LinkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* RendererFactory2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* RendererFactory2 */]) === "function" && _a || Object, Object])
    ], LinkService);
    return LinkService;
    var _a;
}());

//# sourceMappingURL=link.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.blogData = function (i, s) {
        this.Page = {
            name: s,
            page: i
        };
        // console.log(this.Page);
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
            isFb: '1',
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
        // console.log(this.viewCount, 'count');
        return this.http.post('https://admin.chaseyoursport.com/blog/updateViewCount', this.viewCount)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.shareCountOfBlog = function (id, count) {
        count++;
        this.shareCount = {
            blogid: id,
            sharecount: count
        };
        // console.log(this.shareCount, 'count');
        return this.http.post('https://admin.chaseyoursport.com/blog/updateShareCount', this.shareCount)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.dataOfsingleBlog = function (id) {
        this.BlogId = {
            blogid: id
        };
        // console.log(this.BlogId);
        return this.http.post('https://admin.chaseyoursport.com/blog/loadSingleBlogData', this.BlogId)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.deleteBlog = function (id) {
        this.BlogId = {
            blogid: id
        };
        return this.http.post('https://admin.chaseyoursport.com/blog/deleteBlog', this.BlogId)
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], PostService);
    return PostService;
    var _a;
}());

//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/property.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyService = /** @class */ (function () {
    function PropertyService() {
        this.ofHeader = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.ofWindow = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.ofKeyWords = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.ofBlogCard = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.detailsofBlog = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.saveDetailsOfBlog = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.ofsearchBlog = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.isclicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
    }
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PropertyService);
    return PropertyService;
}());

//# sourceMappingURL=property.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/save.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveService = /** @class */ (function () {
    function SaveService() {
        this.detailsOfBlog = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.blog = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
    }
    SaveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SaveService);
    return SaveService;
}());

//# sourceMappingURL=save.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusService = /** @class */ (function () {
    function StatusService() {
        this.ofSubscrition = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
    }
    StatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StatusService);
    return StatusService;
}());

//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    return window;
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
}());

//# sourceMappingURL=window-ref.service.js.map

/***/ }),

/***/ "../../../../../src/app/subscribe-card/subscribe-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.subscribeCard{\r\n    width:100%;\r\n    height: 23.5%;\r\n    padding: 2%;\r\n    font-family: 'Roboto',sans-serif;\r\n    border-bottom: 1px  solid #bbbbbb;\r\n}\r\n.heading{\r\n    text-align: center;\r\n    font-weight: 900;\r\n    margin:3% 0% 3% 0%;\r\n    color: black\r\n}\r\ninput{\r\n    display: block;\r\n    width: 60%;\r\n    margin: auto;\r\n    outline: none;\r\n    border: 1px solid  #bbbbbb;\r\n    padding: 0.6% 0% 0.6% 0%;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n}\r\n.errorMessage{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    color: #b33a3a;\r\n}\r\nbutton{\r\n    border: none;\r\n    background-color: #ffa600;\r\n    display: block;\r\n    width: 60%;\r\n    padding: 0.6%;\r\n    margin: 5% auto;\r\n    border-radius: 4px;\r\n    color: white;\r\n}\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n    font-size: 0.8em;\r\n }\r\n \r\n :-moz-placeholder { \r\n    text-align: center;\r\n    font-size: 0.8em;  \r\n }\r\n \r\n ::-moz-placeholder {  \r\n    text-align: center;  \r\n    font-size: 0.8em;\r\n }\r\n \r\n :-ms-input-placeholder {  \r\n    text-align: center; \r\n    font-size: 0.8em;\r\n }\r\n .subscriptionBox{\r\n    width: 40%;\r\n    height: 200px;\r\n    z-index: 50;\r\n    position: fixed;\r\n    top:20%;\r\n    left: 30%;\r\n    background-color: #ffffff;\r\n    border: 1px solid #888888\r\n\r\n }\r\n .subscriptionBox>.top{\r\n     width:100%;\r\n     height: 60%;\r\n     background-image: url('/assets/images/sports-social-correct-symbol-white.png');\r\n     background-repeat: no-repeat;\r\n     background-position: center;\r\n     background-size: 60px;\r\n }\r\n .subscriptionBox>.bottom>p:first-child{\r\n    color: black;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    padding: 0.5%;\r\n    margin: 0px;\r\n }\r\n .subscriptionBox>.bottom>p:last-child{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: #024771;\r\n    text-align: center;\r\n    margin: 0px;\r\n }\r\n .closeMessage{\r\n    width: 20px;\r\n    height: 20px;\r\n    float: right;\r\n    padding: 1%;\r\n}\r\n\r\n@media (max-width:600px){\r\n    .subscriptionBox{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscribe-card/subscribe-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"subscribeCard\" MaintainHeightWidthRatio>\r\n  <p class=\"heading\">Subscribe via Email</p>\r\n  <input type=\"email\" name=\"Email\" placeholder=\"Enter your Email\"  #subscriber email >\r\n  <p  class=\"errorMessage\" *ngIf=\"errorMessage\">Email is Inavlid!!! Please enter correct Email</p>\r\n  <button (click)=\"Subscribe()\" type=\"submit\" #button>Submit</button>\r\n</div>\r\n<div class=\"subscriptionBox\" #subscriptionBox *ngIf=\"showSubscriptionBox\">\r\n    <div class=\"top\">\r\n        <img src=\"/assets/images/sports-social-cancel-black.png\" role=\"button\" class=\"closeMessage\"  (click)=\"close()\">\r\n    </div>\r\n    <div class=\"bottom\">\r\n        <p>Great</p>\r\n        <p>\r\n            You have Subscribed for our Newsletter and Blog updates.\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/subscribe-card/subscribe-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribeCardComponent = /** @class */ (function () {
    function SubscribeCardComponent(sendEmail, status, renderer) {
        this.sendEmail = sendEmail;
        this.status = status;
        this.renderer = renderer;
        this.errorMessage = false;
        this.showSubscriptionBox = false;
    }
    SubscribeCardComponent.prototype.ngOnInit = function () {
    };
    SubscribeCardComponent.prototype.Subscribe = function () {
        var _this = this;
        if (this.subscriber.nativeElement.validity.valid == true && this.subscriber.nativeElement.value) {
            this.sendEmail.ofUser(this.subscriber.nativeElement.value)
                .subscribe(function (res) {
                // console.log(res.Status)
                if (res.Status == 'Success') {
                    _this.showSubscriptionBox = true;
                    // console.log(this.showSubscriptionBox)
                    _this.subscriber.nativeElement.value = '';
                    _this.errorMessage = false;
                    _this.renderer.setStyle(_this.button.nativeElement, 'margin', '5% auto');
                }
            });
        }
        else {
            this.subscriber.nativeElement.value = '';
            this.errorMessage = true;
            this.renderer.setStyle(this.button.nativeElement, 'margin', '1% auto');
        }
    };
    SubscribeCardComponent.prototype.close = function () {
        this.showSubscriptionBox = false;
        console.log(this.showSubscriptionBox);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('subscriber'),
        __metadata("design:type", Object)
    ], SubscribeCardComponent.prototype, "subscriber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('button'),
        __metadata("design:type", Object)
    ], SubscribeCardComponent.prototype, "button", void 0);
    SubscribeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'SportSocial-subscribe-card',
            template: __webpack_require__("../../../../../src/app/subscribe-card/subscribe-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscribe-card/subscribe-card.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object])
    ], SubscribeCardComponent);
    return SubscribeCardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=subscribe-card.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map