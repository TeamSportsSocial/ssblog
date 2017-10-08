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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-panel/admin-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-panel works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin-panel/admin-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPanelComponent; });
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

var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocialBlog-admin-panel',
            template: __webpack_require__("../../../../../src/app/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());

//# sourceMappingURL=admin-panel.component.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_maintain_height_width_ratio_directive__ = __webpack_require__("../../../../../src/app/directives/maintain-height-width-ratio.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_tab_view_available_directive__ = __webpack_require__("../../../../../src/app/directives/tab-view-available.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__blog_footer_blog_footer_component__ = __webpack_require__("../../../../../src/app/blog-footer/blog-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__custom_url_custom_url_component__ = __webpack_require__("../../../../../src/app/custom-url/custom-url.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__open_full_image_open_full_image_component__ = __webpack_require__("../../../../../src/app/open-full-image/open-full-image.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_23__directives_maintain_height_width_ratio_directive__["a" /* MaintainHeightWidthRatioDirective */],
                __WEBPACK_IMPORTED_MODULE_24__directives_tab_view_available_directive__["a" /* TabViewAvailableDirective */],
                __WEBPACK_IMPORTED_MODULE_26__blog_footer_blog_footer_component__["a" /* BlogFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_28__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_33__custom_url_custom_url_component__["a" /* CustomUrlComponent */],
                __WEBPACK_IMPORTED_MODULE_34__open_full_image_open_full_image_component__["a" /* OpenFullImageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_25__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_30_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_31__ngui_auto_complete__["NguiAutoCompleteModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_property_service__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_20__services_get_service__["a" /* GetService */],
                __WEBPACK_IMPORTED_MODULE_21__services_save_service__["a" /* SaveService */],
                __WEBPACK_IMPORTED_MODULE_22__services_status_service__["a" /* StatusService */],
                __WEBPACK_IMPORTED_MODULE_19__services_post_service__["a" /* PostService */],
                { provide: __WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* UrlSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_33__custom_url_custom_url_component__["a" /* CustomUrlComponent */] }
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
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\nfooter{\r\n    z-index: 1;\r\n    background-color: #024771;\r\n    width:100%;\r\n    padding: 0.8%;\r\n}\r\n.subscribe{\r\n    width: 70%;\r\n    margin: 0.4% auto;\r\n    background-color: #e5e5e5;\r\n    padding: 0.4%;\r\n}\r\n.subscribe>p{\r\n    width:100px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    color: #ffa600;\r\n    font-family: 'Roboto',sans-serif;\r\n    border-right: 1px solid #ffa600;\r\n    font-size: 1.2em;\r\n    font-weight:700;\r\n    padding: 0.5%;\r\n    padding-right: 2%;\r\n    padding-left:1%;\r\n    \r\n}\r\n.subscribe>input{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: calc(100% - 238px);\r\n    height: 35px;\r\n    margin-left: 2%;\r\n    text-align: center;\r\n}\r\nbutton{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width:100px;\r\n    border:none;\r\n    background-color: #ffa600;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.1em;\r\n    color: white;\r\n    height: 33px;\r\n    padding: 0.5% 0% 0.5% 0%;\r\n    margin:0% 0% 0% 1%\r\n}\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n    font-size: 0.9em;\r\n}\r\n \r\n:-moz-placeholder { \r\n    text-align: center;  \r\n    font-size: 0.9em;\r\n}\r\n \r\n ::-moz-placeholder {  \r\n    text-align: center; \r\n    font-size: 0.9em; \r\n }\r\n \r\n :-ms-input-placeholder {  \r\n    text-align: center; \r\n    font-size: 0.9em;\r\n }\r\n \r\n .blogName{\r\n     text-align: center;\r\n     font-family: 'Roboto',sans-serif;\r\n     font-size: 1.6em;\r\n     color: #ffffff;\r\n     font-weight: 900;\r\n }\r\n .tagline{\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n }\r\n .about{\r\n     text-align: center;\r\n     width:65%;\r\n     margin: 1% auto;\r\n     font-family: 'Roboto',sans-serif;\r\n     color: #ffffff;\r\n     font-size: 1.1em;\r\n     font-weight: 500;\r\n }\r\n .copyright{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 35%;\r\n    color: #ffffff;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n }\r\n .copyright>img{\r\n     width: 20px;\r\n     height: 20px;\r\n }\r\n .contactUs{\r\n     margin: 1% auto;\r\n     text-align: center;\r\n     width:50%;\r\n     font-family: 'Roboto',sans-serif;\r\n     color: #ffffff;\r\n     font-size: 1.1em;\r\n     font-weight: 500;\r\n }\r\n .followUs{\r\n     text-align: right;\r\n     float: right;\r\n     display: inline-block;\r\n     vertical-align: middle;\r\n     width: 60%;\r\n     color: #ffffff;\r\n     font-family: 'Roboto',sans-serif;\r\n     font-size: 1.1em;\r\n     font-weight: 500;\r\n }\r\n .followUs img{\r\n    width: 3%;\r\n    height: 3%;\r\n    margin-left: 1.5%;\r\n }\r\n \r\n .editor{\r\n     text-align: center;\r\n     width: 50%;\r\n    margin: auto;\r\n }\r\n .editor a{\r\n     color: white\r\n }\r\n .subscriptionBox{\r\n    width: 40%;\r\n    height: 200px;\r\n    z-index: 50;\r\n    position: fixed;\r\n    top:20%;\r\n    left: 30%;\r\n    background-color: #ffffff;\r\n    border: 1px solid #888888;\r\n\r\n }\r\n .subscriptionBox>.top{\r\n     width:100%;\r\n     height: 60%;\r\n     background-image: url('/assets/images/sports-social-correct-symbol-white.png');\r\n     background-repeat: no-repeat;\r\n     background-position: center;\r\n     background-size: 60px;\r\n }\r\n .subscriptionBox>.bottom>p:first-child{\r\n    color: black;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    padding: 0.5%\r\n }\r\n .subscriptionBox>.bottom>p:last-child{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: #024771;\r\n    text-align: center;\r\n }\r\n .closeMessage{\r\n    width: 20px;\r\n    height: 20px;\r\n    float: right;\r\n    padding: 1%;\r\n}\r\n.errorMessage{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    color: #b33a3a\r\n}\r\n\r\n @media  (max-width:1000px) and (min-width:800px) {\r\n    .followUs img{\r\n        width: 5%;\r\n        height: 5%;\r\n        margin-left: 1.5%;\r\n     }\r\n     .subscriptionBox{\r\n         width: 60%;\r\n         left: 20%;\r\n     }\r\n     button{\r\n         height: 30px\r\n     }\r\n     .subscribe>input{\r\n        height: 32px;\r\n        width: calc(100% - 230px);\r\n    }\r\n }\r\n @media  (max-width:800px) and (min-width:650px) {\r\n    .followUs img{\r\n        width: 4%;\r\n        height: 4%;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n        width: 80%;\r\n        font-size: 1em;\r\n    }\r\n    .contactUs{\r\n        font-size: 1em;\r\n    }\r\n    .blogName{\r\n        font-size: 1.5em\r\n    }\r\n    .tagline{\r\n        font-size: 0.95em\r\n    }\r\n    .subscribe{\r\n        width: 85%;\r\n    }\r\n    button{\r\n        height: 30px;\r\n    }\r\n    .subscribe>input{\r\n        height: 32px;\r\n        width: calc(100% - 230px);\r\n    }\r\n    .subscriptionBox{\r\n        width: 70%;\r\n        left: 15%;\r\n    }\r\n }\r\n \r\n @media  (max-width:650px) and (min-width:520px){\r\n    .followUs img{\r\n        width: 5%;\r\n        height: 5%;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n        width: 100%;\r\n    }\r\n    .contactUs{\r\n        font-size: 0.9em;\r\n    }\r\n    .blogName{\r\n        font-size: 1.3em\r\n    }\r\n    .tagline{\r\n        font-size: 0.9em\r\n    }\r\n    .subscribe{\r\n        width: 90%;\r\n    }\r\n    .subscribe>input{\r\n        height: 30px;\r\n        width: calc(100% - 230px);\r\n    }\r\n    button{\r\n        height: 28px;\r\n    }\r\n    .subscriptionBox{\r\n        width: 74%;\r\n        left: 13%;\r\n    }\r\n    \r\n }\r\n\r\n @media  (max-width:520px) and (min-width:450px) {\r\n    .followUs img{\r\n        width: 6%;\r\n        height: 6%;\r\n        margin-left: 1.5%;\r\n     }\r\n     .about{\r\n         width: 100%;\r\n         font-size: 0.9em\r\n     }\r\n     .contactUs{\r\n         font-size: 0.9em;\r\n     }\r\n     .blogName{\r\n         font-size: 1.3em\r\n     }\r\n     .tagline{\r\n         font-size: 0.85em\r\n     }\r\n     .subscribe{\r\n        width: 100%;\r\n    }\r\n    .subscribe>p{\r\n        width: 85px\r\n    }\r\n    button{\r\n        height: 25px;\r\n        width: 75px\r\n    }\r\n     .subscribe>input{\r\n         height: 25px;\r\n         width: calc(100% - 190px);\r\n     }\r\n     .subscriptionBox{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n }\r\n @media (max-width:450px) {\r\n    .followUs img{\r\n        width: 6%;\r\n        height: 6%;\r\n        margin-left: 1%;\r\n     }\r\n     .about{\r\n         width: 100%;\r\n         font-size: 0.9em\r\n     }\r\n     .contactUs{\r\n         font-size: 0.9em;\r\n     }\r\n     .blogName{\r\n         font-size: 1.3em\r\n     }\r\n     .tagline{\r\n         font-size: 0.85em\r\n     }\r\n    .subscribe{\r\n        width: 100%;\r\n    }\r\n    .subscribe>p{\r\n        width: 85px\r\n    }\r\n    button{\r\n        height: 25px;\r\n        width: 75px\r\n    }\r\n     .subscribe>input{\r\n         height: 25px;\r\n         width: calc(100% - 182px);\r\n     }\r\n     .subscriptionBox{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-footer/blog-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer >\n  <div class=\"subscribe\" #subscribeCard>\n    <p>\n      Subscribe\n    </p>\n    <input type=\"email\" placeholder=\"Enter your Email\" #subscriber  email>\n    <button  (click)=\"Subscribe()\">Submit</button>\n  </div>\n  <p  class=\"errorMessage\" *ngIf=\"errorMessage\">Email is Inavlid!!! Please enter correct Email</p>\n  <p class=\"blogName\" #blogName>Chase Your Sport</p>\n  <p class=\"tagline\" #tagline>The Sports Social Blog</p>\n  <p class=\"about\" #about> \n    'Chase Your Sport' blog provides Health, Fitness and\n     Sport information and other useful information to help everyone\n     to keep them active, healthy and fit .<br>\n     We are here to help you to follow your passion for sports. \n  </p>\n  <p class=\"contactUs\" #contactUs>\n    Contact Us: letstalk@sportsocial.in\n  </p>\n  <p class=\"editor\"> <a routerLink=\"/editorPanel\">Editor</a></p>\n  <p class=\"copyright\" >\n    <img src=\"/assets/images/copyright.png\" alt=\"\"> Sports Social \n  </p>\n  <p class=\"followUs\" >\n    Follow us on \n    <a href=\"https://www.facebook.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">\n        <img src=\"/assets/images/sports-social-facebook-logo-white.png\" alt=\"facebook_Logo\" >\n    </a> \n    <a href=\"https://www.twitter.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">\n        <img src=\"/assets/images/sports-social-twitter-logo-white.png\" alt=\"twitter_Logo\"  >\n    </a>\n    <a href=\"https://www.instagram.com/chaseyoursport\" target=\"_blank\" rel=\"noopener\">\n        <img src=\"/assets/images/sports-social-instagram-logo-white.png\" alt=\"insta_Logo\" >\n    </a>\n    <a href=\"https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network\" target=\"_blank\" rel=\"noopener\">\n        <img src=\"/assets/images/sports-social-quora-logo-white.png\" alt=\"quora_Logo\">\n    </a>\n    <a href=\"https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ\" target=\"_blank\" rel=\"noopener\">\n        <img src=\"/assets/images/sports-social-youtube-logo-white.png\" alt=\"youtube_Logo\">\n    </a>\n    <a href=\"https://www.pinterest.com/chaseyoursport\" target=\"_blank\" rel=\"noopener\">\n        <img src=\"/assets/images/sports-social-pinterest-logo-white.png\" alt=\"pintrest_Logo\">\n    </a>\n    \n  </p>\n</footer>\n\n\n<div class=\"subscriptionBox\" #subscriptionBox *ngIf=\"showSubscriptionBox\">\n    <div class=\"top\">\n        <img src=\"/assets/images/sports-social-cancel-black.png\" role=\"button\" class=\"closeMessage\"  (click)=\"close()\">\n    </div>\n    <div class=\"bottom\">\n        <p>Great</p>\n        <p>\n            You have Subscribed for our Newsletter and Blog updates.\n        </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog-footer/blog-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_status_service__ = __webpack_require__("../../../../../src/app/services/status.service.ts");
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



var BlogFooterComponent = /** @class */ (function () {
    function BlogFooterComponent(sendEmail, renderer, status) {
        this.sendEmail = sendEmail;
        this.renderer = renderer;
        this.status = status;
        this.showSubscriptionBox = false;
        this.errorMessage = false;
    }
    BlogFooterComponent.prototype.ngOnInit = function () {
        /*  if(window.innerWidth>1150){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','70%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','70%')
         }
         if(window.innerWidth<1150 && window.innerWidth>1080){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','68%')
         }
         if(window.innerWidth<1080 && window.innerWidth>980){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','66%')
         }
         if(window.innerWidth<980 && window.innerWidth>920){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','65%')
         }
         if(window.innerWidth<920 && window.innerWidth>865 ){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','64.5%')
         }
         if(window.innerWidth<865 && window.innerWidth>820 ){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','64%')
         }
         if(window.innerWidth<820 && window.innerWidth>750){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
         }
         if(window.innerWidth<750 && window.innerWidth>700){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
         }
         if(window.innerWidth<700 && window.innerWidth>660){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
           
         }
         if(window.innerWidth<660 && window.innerWidth>620){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
         }
         if(window.innerWidth<620 && window.innerWidth>540){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','58%')
           
         }
         if(window.innerWidth<540 && window.innerWidth>470){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','51%')
         }
         if(window.innerWidth<=470 && window.innerWidth>400){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','47%')
          
         }
         if(window.innerWidth<400){
           this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
           this.renderer.setStyle(this.subscriber.nativeElement,'width','42%')
          } */
    };
    BlogFooterComponent.prototype.Subscribe = function () {
        var _this = this;
        if (this.subscriber.nativeElement.validity.valid == true && this.subscriber.nativeElement.value) {
            this.sendEmail.ofUser(this.subscriber.nativeElement.value)
                .subscribe(function (res) {
                console.log(res.Status);
                if (res.Status == "Success") {
                    _this.showSubscriptionBox = true;
                    console.log(_this.showSubscriptionBox);
                    _this.subscriber.nativeElement.value = "";
                    _this.errorMessage = false;
                }
            });
        }
        else {
            this.subscriber.nativeElement.value = "";
            this.errorMessage = true;
        }
    };
    BlogFooterComponent.prototype.close = function () {
        this.showSubscriptionBox = false;
        console.log(this.showSubscriptionBox);
    };
    BlogFooterComponent.prototype.onresize = function () {
        /* if(window.innerWidth>1150){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','72%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','70%')
        }
        if(window.innerWidth<1150 && window.innerWidth>1080){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','68%')
        }
        if(window.innerWidth<1080 && window.innerWidth>980){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','66%')
        }
        if(window.innerWidth<980 && window.innerWidth>920){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','65%')
        }
        if(window.innerWidth<920 && window.innerWidth>865 ){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','80%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','64.5%')
        }
        if(window.innerWidth<865 && window.innerWidth>820 ){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','64%')
        }
        if(window.innerWidth<820 && window.innerWidth>750){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
        }
        if(window.innerWidth<750 && window.innerWidth>700){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','84%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
        }
        if(window.innerWidth<700 && window.innerWidth>660){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','62%')
          
        }
        if(window.innerWidth<660 && window.innerWidth>620){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','60%')
        }
        if(window.innerWidth<620 && window.innerWidth>540){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','58%')
          
        }
        if(window.innerWidth<540 && window.innerWidth>470){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','51%')
        }
        if(window.innerWidth<=470 && window.innerWidth>400){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','47%')
         
        }
        if(window.innerWidth<400){
          this.renderer.setStyle(this.subscribeCard.nativeElement,'width','95%')
          this.renderer.setStyle(this.subscriber.nativeElement,'width','42%')
         } */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('subscriber'),
        __metadata("design:type", Object)
    ], BlogFooterComponent.prototype, "subscriber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('subscribeCard'),
        __metadata("design:type", Object)
    ], BlogFooterComponent.prototype, "subscribeCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogFooterComponent.prototype, "onresize", null);
    BlogFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-blog-footer',
            template: __webpack_require__("../../../../../src/app/blog-footer/blog-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-footer/blog-footer.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _c || Object])
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
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\nheader{\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    position: fixed;\r\n    top:0px;\r\n    z-index: 10;\r\n    box-shadow: 1px 1px #bbbbbb\r\n}\r\n.left{\r\n    display: inline-block;\r\n    width:80%;\r\n    vertical-align: middle;\r\n}\r\n\r\nli{\r\n    display: inline-block;\r\n    list-style: none;\r\n    width: auto;\r\n    margin: 0.2% 0.1% 0.2% 0%;\r\n    vertical-align: top;\r\n   \r\n}\r\n.left>li{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 60%;\r\n    margin-left:3%;\r\n}\r\n.brand-image{\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left:2%;\r\n    display: inline-block;\r\n    vertical-align: middle\r\n}\r\nimg{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brand-title{\r\n   font-size: 1.4em;\r\n   font-weight: 700;\r\n   display: inline-block;\r\n   vertical-align: middle\r\n}\r\n.brand-title>span:first-child{\r\n    color: #024770;\r\n}\r\n.brand-title>span:nth-child(2){\r\n    color: #ffa600;\r\n}\r\n.brand-title>span:nth-child(3){\r\n    font-size: 60%;\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n.brand-title>p{\r\n    font-size: 55%;\r\n    color: #024770;\r\n    font-weight: 400;\r\n    text-align: left;\r\n    font-style: italic;\r\n    padding-left: 9%;\r\n}\r\n.right{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: right;\r\n    width:19%;\r\n}\r\n\r\ninput{\r\n    height: 35px;\r\n    background-image: url('/assets/images/sports-social-magnifying-glass.png');\r\n    border: none;\r\n    background-repeat: no-repeat;\r\n    background-position-y: 50%;\r\n    background-position-x: 2%;\r\n    background-size: 15px;\r\n    outline: #fafafa;\r\n    border-radius: 25px;\r\n    background-color: #e5e5e5;\r\n    text-align: center;\r\n    box-shadow: 1px 1px #bbbbbb\r\n}\r\n.mobileView{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: auto;\r\n    float: right;\r\n    padding: 1% ;\r\n}\r\n.menuImageHolder{\r\n    width: 30px;\r\n    height: 30px;   \r\n}\r\n.menuImageHolder img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.dropDown{\r\n  width: 80%;\r\n  background-color: #ffffff;\r\n  padding: 1% 1% 0% 1%;\r\n  position: fixed;\r\n  z-index: 50;\r\n  top:10%;\r\n  left:10%;\r\n}\r\n.dropDown .Close{\r\n    float: right;\r\n    width: 12px;\r\n    height: 12px;\r\n    padding:0.5% 1% 0% 0%;\r\n}\r\n.websiteLink{\r\n    display: block;\r\n    color: #024770;\r\n    text-align: center;\r\n    margin: 1%;\r\n}\r\n\r\n.search input{\r\n    display: inline-block;\r\n    border-radius: 0px;\r\n    border: none;\r\n    background-image: none;\r\n    width: 100%;\r\n   \r\n}\r\n.search button{\r\n    display: block;\r\n    width: 70%;\r\n    margin: 2% auto;\r\n    border-radius: 4px;\r\n    background-color: #ffa600;\r\n    color: #ffffff;\r\n    border: none;\r\n    padding: 1%\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    text-align: center;\r\n }\r\n \r\n :-moz-placeholder { \r\n    text-align: center;  \r\n }\r\n \r\n ::-moz-placeholder {  \r\n    text-align: center;  \r\n }\r\n \r\n :-ms-input-placeholder {  \r\n    text-align: center; \r\n }\r\n .suggestion{\r\n     position: absolute;\r\n     top: 45px;\r\n     width:51%;\r\n     background-color:white\r\n }\r\n .suggestion ul{\r\n     display: block;\r\n     border: 1px solid #bbbbbb;\r\n }\r\n .suggestion li {\r\n     padding: 1%;\r\n     display: block;\r\n     border-bottom: 1px solid   #bbbbbb\r\n }\r\n .mobileView .suggestion{\r\n     top:65px;\r\n     width: 100%;\r\n }\r\n .ngui-auto-complete {\r\n     border: 1px solid black;\r\n  }\r\n  a:hover{\r\n      text-decoration: none;\r\n  }\r\n  .websiteLink{\r\n      color: #024771;\r\n      font-weight: 700;\r\n  }\r\n .websiteLink>img{\r\n     width: 20px;\r\n     height: 20px;\r\n     padding: 1%\r\n}\r\n  .websiteLink:hover{\r\n      color: #ffa600;\r\n  }\r\n  .dropDown p{\r\n      width: 60%;\r\n      margin: auto\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-header/blog-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header #Header>\n  <ul class=\"left\" #left>\n    <a href=\"/\">\n      <li class=\"brand-image\">\n        <img src=\"/assets/images/sports-social-logo.png\" alt=\"Sports Social logo\">\n      </li>\n      <li class=\"brand-title\">\n        <span>Sports</span> <span>Social</span> <span>Blog</span>\n        <p>Chase your Sport</p>\n      </li>\n    </a>\n    <li  *ngIf=\"!mobileView\">\n      <input \n        ngui-auto-complete\n        [source]=\"keywords\"\n        [list-formatter]=\"autocompleListFormatter\"\n        type=\"text\" \n        placeholder=\"Search here the latest topics & trends in sports\" \n        (valueChanged)=\"valueChanged($event)\"\n        [max-num-list]=\"10\"\n        (keypress)=\"sendData($event)\"\n        #searchBox>  \n    </li>\n  </ul>\n  <ul class=\"right\" *ngIf=\"!mobileView\">\n    <li >\n      <a \n        href=\"http://testweb.sportsocial.in\" \n        target=\"_blank\" \n        class=\" websiteLink\" \n        (mouseover)=\"hover($event)\"\n        (mouseout)=\"removehoverColor($event)\">\n        <img src=\"/assets/images/sports-social-link-blue-symbol.png\" alt=\"sports-social-link-blue-symbol\" #linkImage>\n        Go to Website \n      </a>\n    </li>\n  </ul>\n  <div class=\"mobileView \" *ngIf=\"mobileView\">\n     <div class=\"menuImageHolder\">\n       <img src=\"/assets/images/sports-social-menu.png\" role=\"button\" (click)=\"openDropDown()\" alt=\"sports-social-menu\">\n     </div>\n     <div *ngIf=\"open\" class=\"dropDown\">\n        <img src=\"/assets/images/sports-social-cancel-black.png\" role=\"button\" (click)=\"closeDropDown()\" class=\"Close\" alt=\"sports-social-cancel-black\">\n        <p> \n          <a \n            href=\"http://testweb.sportsocial.in\" \n            target=\"_blank\" \n            class=\" websiteLink\" \n            (mouseover)=\"hover($event)\"\n            (mouseout)=\"removehoverColor($event)\">\n            <img src=\"/assets/images/sports-social-link-blue-symbol.png\" alt=\"\" #linkImage>\n            Go to Website \n         </a>\n        </p>\n      <div class=\"search\">\n         <input \n          ngui-auto-complete\n          [source]=\"keywords\"\n          [list-formatter]=\"autocompleListFormatter\"\n          type=\"text\" \n          placeholder=\"Search \" \n          (valueChanged)=\"valueChanged($event)\"\n          [max-num-list]=\"10\"\n          (keypress)=\"sendData($event)\"\n          #searchBox >\n          <button (click)=\"searchSportSocial()\">Search</button>\n      </div>\n      \n    </div>\n  </div> \n</header>\n"

/***/ }),

/***/ "../../../../../src/app/blog-header/blog-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_service__ = __webpack_require__("../../../../../src/app/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BlogHeaderComponent = /** @class */ (function () {
    function BlogHeaderComponent(sendHeight, renderer, send, get, elRef, http, _sanitizer, searchKeyword, router, sendKey, cd, zone) {
        var _this = this;
        this.sendHeight = sendHeight;
        this.renderer = renderer;
        this.send = send;
        this.get = get;
        this.elRef = elRef;
        this.http = http;
        this._sanitizer = _sanitizer;
        this.searchKeyword = searchKeyword;
        this.router = router;
        this.sendKey = sendKey;
        this.cd = cd;
        this.zone = zone;
        this.keywords = [];
        this.pageNumber = 1;
        this.mobileView = false;
        this.searchedTextPresent = false;
        this.open = false;
        this.search = false;
        this.autocompleListFormatter = function (data) {
            var html = "<span style='font-size:1.2em'>" + data + "</span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    BlogHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get.keywords()
            .subscribe(function (res) {
            for (var i in res) {
                _this.keywords.push(res[i].Keyword);
            }
        });
        this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
        if (window.innerWidth <= 750) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    BlogHeaderComponent.prototype.ngAfterViewChecked = function () {
        this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    };
    BlogHeaderComponent.prototype.reloadPage = function () {
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    BlogHeaderComponent.prototype.onresize = function () {
        this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
        if (window.innerWidth <= 750) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    BlogHeaderComponent.prototype.openDropDown = function () {
        this.open = true;
    };
    BlogHeaderComponent.prototype.closeDropDown = function () {
        this.open = false;
    };
    BlogHeaderComponent.prototype.valueChanged = function (newVal) {
        this.searchedTextPresent = true;
        console.log("Case 2: value is changed to ", newVal);
        this.open = false;
        this.router.navigate(['/' + newVal]);
        this.searchBox.nativeElement.value = "";
        this.reloadPage();
    };
    BlogHeaderComponent.prototype.searchSportSocial = function () {
        this.search = true;
    };
    BlogHeaderComponent.prototype.sendData = function (key) {
        var input = this.searchBox.nativeElement.value;
        if (key.code == "Enter" || this.search == true) {
            console.log(input);
            this.open = false;
            this.router.navigate(['/' + input]);
            this.searchBox.nativeElement.value = "";
            this.reloadPage();
        }
    };
    BlogHeaderComponent.prototype.hover = function (event) {
        this.linkImage.nativeElement.src = "/assets/images/sports-social-link-orange-symbol.png";
    };
    BlogHeaderComponent.prototype.removehoverColor = function (event) {
        this.linkImage.nativeElement.src = "/assets/images/sports-social-link-blue-symbol.png";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Header'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], BlogHeaderComponent.prototype, "Header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('left'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], BlogHeaderComponent.prototype, "left", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchBox'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
    ], BlogHeaderComponent.prototype, "searchBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('linkImage'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
    ], BlogHeaderComponent.prototype, "linkImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogHeaderComponent.prototype, "onresize", null);
    BlogHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocialBlog-header',
            template: __webpack_require__("../../../../../src/app/blog-header/blog-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-header/blog-header.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_service__["a" /* GetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_service__["a" /* GetService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _r || Object])
    ], BlogHeaderComponent);
    return BlogHeaderComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=blog-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/blog-open/blog-open.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family:'Roboto',sans-serif;\r\n}\r\n\r\n.Catagory{\r\n    width: 90%;\r\n    margin: auto;\r\n    padding: 1.5% 0% 0% 0%;\r\n}\r\n.Catagory>span:first-child{\r\n    font-weight: 500\r\n}\r\n.Catagory>span:first-child:hover{\r\n    font-weight: 700\r\n}\r\n.blogImageHolder{\r\n    position: relative;\r\n    width:90%;\r\n    margin: 1% auto;\r\n    max-height:400px;\r\n    box-shadow: 3px 3px #fafafa;\r\n    overflow: hidden;\r\n    background-image: url('')\r\n}\r\n\r\n.blogImage{\r\n    width:100%;\r\n}\r\n.zoom{\r\n    position: absolute;\r\n    bottom: 2%;\r\n    right: 2%;\r\n    widows: 20px;\r\n    height: 20px;\r\n}\r\n.count img{\r\n    width:15px;\r\n    height: 15px;\r\n}\r\n.title{\r\n    font-size: 2.2em;\r\n    font-weight: 900;\r\n    color: black;\r\n    margin-bottom: 1%\r\n}\r\n.facebook{\r\n    width:20px;\r\n    height: 20px;\r\n    margin: 1% 1% 1% 1%;\r\n}\r\n.twitterButton{\r\n    width:20px;\r\n    height:20px;\r\n    margin: 1% 1% 1% 1%;\r\n}\r\n.content{\r\n    width: 90%;\r\n    margin: 1% auto;\r\n    padding-top:2% \r\n}\r\n.blogInfo{\r\n    width:65%;\r\n    display: inline-block;\r\n    margin-right: 3.5%;\r\n    margin-top: -0.6%;\r\n}\r\n\r\n.bloggerImage{\r\n    \r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width:45px;\r\n    height: 45px;\r\n    border: 1px solid #bbbbbb;\r\n    border-radius: 50%;\r\n    background-image: url('/assets/images/user.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.bloggerImage>img{\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.blogger{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width:52%;\r\n    font-family: 'Roboto',Cambria, Cochin, Georgia, Times, Times New Roman, serif\r\n}\r\n.bloggerName>span{\r\n    font-weight:700\r\n}\r\n.writtenDate{\r\n    font-size: 0.9em;\r\n    font-weight: 700\r\n}\r\n.count{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: right;\r\n    width:38%;\r\n    padding: 1% 2% 1% 2%;\r\n}\r\n.count>span{\r\n    margin-left: 5%\r\n}\r\n.count>span>span{\r\n    color: #ffa600;\r\n    font-size: 1.1em\r\n}\r\n.count>span>img{\r\n    margin-right: 3%\r\n}\r\n\r\n.shareOn{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n    padding: 2% 0% 2% 0%;\r\n}\r\n.desc{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    line-height: 2em;\r\n    color: black;\r\n    padding-bottom: 2%;\r\n}\r\n.tags{\r\n    width:100%;\r\n}\r\n.tagHolder{\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.tagHolder>img{\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n.tags>a{\r\n    color: #ffa600;\r\n    padding: 0% 1% 0% 2% ;\r\n    text-decoration: underline\r\n}\r\n.social{\r\n    width: 28%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.follow{\r\n    padding: 5%;\r\n    border: 1px solid #bbbbbb;\r\n}\r\n.follow >p{\r\n    text-align: center;\r\n    color: #024771;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n}\r\n.follow img{\r\n    width:8%;\r\n    height:8%;\r\n    margin: 2.3%\r\n}\r\n.col-6{\r\n    width: 50%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding:0% 1.5% 2% 1.5%;\r\n}\r\n.social> .twitter{\r\n    border: 1px solid #bbbbbb;\r\n    margin-top:2%;\r\n}\r\n.twitter{\r\n    min-height: 700px\r\n}\r\n.twitter p{\r\n    padding: 1% 1% 1% 4%;\r\n    color: #024771;\r\n    font-size: 1em;\r\n    font-weight: 700;\r\n}\r\n.twitter img{\r\n    width:20px;\r\n    height: 20px;\r\n}\r\n.comments{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    border-top: 1px solid #444444;\r\n    padding: 2% 0% 2% 0%\r\n\r\n}\r\n.col-4{\r\n    width: 33%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 1%;\r\n}\r\n.mobileView .col-4{\r\n    width: 100%;\r\n}\r\n.relatedBlog{\r\n    width:90%;\r\n    min-height: 400px;\r\n    margin: 2% auto;\r\n    padding-top:4%;\r\n    border-top: 2px solid #024771\r\n}\r\n.relatedBlog>p{\r\n    width: 90%;\r\n    margin: auto;\r\n    margin-bottom: 2%;\r\n    text-align: center;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 2em;\r\n    color: #024771;\r\n    font-weight: 400;\r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.fullImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    top:0%;\r\n    left:0%;\r\n    z-index: 50;\r\n    box-shadow: 1px 1px #bbbbbb;\r\n    border: 1px solid #bbbbbb;\r\n    background-color: black;\r\n    opacity: 0.7;\r\n    background-repeat: no-repeat;\r\n    background-position: center\r\n}\r\n.fullImageHolder{\r\n    position: fixed;\r\n    width: 70%;\r\n    left: 15%;\r\n    top:0%;\r\n    z-index: 100;\r\n}\r\n.fullImageHolder>img{\r\n    display: block;\r\n    padding: 5%;\r\n    text-align: center;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.cancel{\r\n    position: absolute;\r\n    top:1%;\r\n    right:1%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 150\r\n}\r\n@media (max-width:800px) and (min-width:600px){\r\n    .fullImageHolder{\r\n        width: 80%;\r\n        left: 10%;\r\n    }\r\n}\r\n@media (max-width:600px) and (min-width:500px){\r\n    .fullImageHolder{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n    .blogger{\r\n        width:50%;\r\n    }\r\n    .title{\r\n        font-size: 2em\r\n    }\r\n}\r\n@media (max-width:500px) and (min-width:360px) {\r\n    .blogger{\r\n        width:45%;\r\n    }\r\n    .title{\r\n        font-size: 1.8em\r\n    }\r\n}\r\n@media (max-width:360px) {\r\n    .blogger{\r\n        width:42%;\r\n    }\r\n    .title{\r\n        font-size: 1.6em\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/blog-open/blog-open.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=openBlog>\n  <p #openBlog class=\"Catagory\">\n    <span role=\"button\" (click)=\"getblogs($event)\">{{Keywords[0]}}</span>\n    <span  *ngIf=\"blogDataRecieved\">|</span>\n    <span>{{blog.readingTime}}</span>\n  </p>\n  <div class=\"blogImageHolder\">\n    <img class=\"blogImage\" alt=\"blogImage\" src=\"{{blog.blogImage}}\"  (error)=\"setDefaultBlogImage()\" (load)=\"removeInitalImage()\" *ngIf=\"blogDataRecieved\" >\n    <img class=\"blogImage\"  alt=\"InitialblogImage\" src=\"/assets/images/default-image.png\"  *ngIf=\"loading\">\n    <img src=\"/assets/images/sports-social-zoom-out-orange.png\" alt=\"sports-social-zoom-out-orange\" role=\"button\" (click)=\"openfullImage()\"  class=\"zoom\">\n  </div>\n  \n  <div class=\"content\">\n    \n    <div class=\"blogInfo\" #BlogInfo>\n      <p [innerHtml]=\"blog.heading\"class=\"title\"></p>\n      <div class=\"bloggerImage\">\n        <img src=\"{{blog.bloggerImage}}\" alt=\"bloggerImage\" (error)=\"setDefault()\" >\n      </div>\n      <div class=\"blogger\" *ngIf=\"blogDataRecieved\">\n        <p  class=\"bloggerName\">Written by <span> {{blog.bloggerName}}</span></p>  \n        <p class=\"writtenDate\">\n          {{blog.exactDate}}\n        </p>\n      </div>\n      <div class=\"count\" *ngIf=\"blogDataRecieved\">\n        <span>\n          <img src=\"/assets/images/sports-social-view-orange.png\" alt=\"sports-social-view-orange\">\n          <span>{{blog.ViewCount}}</span>\n        </span>\n        <span>\n          <img src=\"/assets/images/sports-social-share-orange.png\" alt=\"sports-social-share-orange\">\n          <span>{{blog.ShareCount}}</span>\n        </span>\n      </div>\n      \n      <div class=\"shareOn\" *ngIf=\"blogDataRecieved\">\n        Share on \n        <img src=\"/assets/images/sports-social-facebook-logo-black.png\" role=\"button\" (click)=\"shareOnFacebook()\" class=\"facebook\" alt=\"sports-social-facebook-logo-black\">\n        <a href=\"https://twitter.com/share\" (click)=\"shareOnTwitter()\" #popup class=\"twitter\">\n          <img src=\"/assets/images/sports-social-twitter-logo-black.png\"  class=\"twitterButton\" alt=\"sports-social-twitter-logo-black\">\n        </a> \n      </div>\n      <p [innerHtml]=\"blog.Content\" class=\"desc\" *ngIf=\"blogDataRecieved\">\n      </p>\n      <div class=\"tags\" *ngIf=\"blogDataRecieved\" >\n        <div class=\"tagHolder\">\n          <img src=\"/assets/images/sports-social-tag.png\" alt=\"sports-social-tag\">\n        </div>\n        <a *ngFor=\"let key of Keywords;let i=index\" role=\"button\" (click)=\"getblogs($event)\">{{key}}</a>\n      </div>\n      <p class=\"shareOn\" *ngIf=\"blogDataRecieved\">\n        Share on \n        \n        <img src=\"/assets/images/sports-social-facebook-logo-black.png\" role=\"button\" (click)=\"shareOnFacebook()\" class=\"facebook\" alt=\"sports-social-facebook-logo-black\">\n        <a href=\"http://twitter.com/share\" (click)=\"shareOnTwitter()\" #popup class=\"twitter\">\n          <img src=\"/assets/images/sports-social-twitter-logo-black.png\"  class=\"twitterButton\" alt=\"sports-social-twitter-logo-black\">\n        </a> \n      </p>\n    </div>\n    <div class=\"social\" *ngIf=\"!removeSocial\">\n      <div class=\"follow\">\n        <p *ngIf=\"blogDataRecieved\">Follow us</p>\n        <a href=\"https://www.facebook.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">\n          <img src=\"/assets/images/sports-social-facebook-logo-blue.png\" alt=\"sports-social-facebook-logo-blue\">\n        </a> \n        <a href=\"https://www.instagram.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\"> \n          <img src=\"/assets/images/sports-social-instagram-logo-blue.png\" alt=\"sports-social-instagram-logo-blue\">\n        </a>\n        <a href=\"https://www.twitter.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">  \n          <img src=\"/assets/images/sports-social-twitter-logo-blue.png\" alt=\"sports-social-twitter-logo-blue\">\n        </a>\n        <a href=\"https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ\" target=\"_blank\"  rel=\"noopener\">  \n          <img src=\"/assets/images/sports-social-youtube-logo-blue.png\" alt=\"sports-social-youtube-logo-blue\">\n        </a>\n        <a href=\"https://www.pinterest.com/chaseyoursport\" target=\"_blank\"  rel=\"noopener\">  \n          <img src=\"/assets/images/sports-social-pinterest-logo-blue.png\" alt=\"sports-social-pinterest-logo-blue\">\n        </a>\n        <a href=\" https://in.linkedin.com/company/sports-social\" target=\"_blank\"  rel=\"noopener\">  \n          <img src=\"/assets/images/sports-social-linkedin-logo-blue.png\" alt=\"sports-social-linkedin-logo-blue\">\n        </a>\n        <a href=\"https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network\" target=\"_blank\"  rel=\"noopener\">  \n          <img src=\"/assets/images/sports-social-quora-logo-blue.png\" alt=\"sports-social-quora-logo-blue\">\n        </a>\n      </div>\n      <div class=\"twitter\">\n        <p>\n          <img src=\"/assets/images/sports-social-twitter-logo-blue.png\" alt=\"sports-social-twitter-logo-blue\">\n          Tweets by @chaseyoursport</p>\n        <a \n          class=\"twitter-timeline\" \n          href=\"https://twitter.com/chaseyoursport\"\n          data-width=\"450\"\n          data-height=\"700\"\n          data-chrome=\"noheader nofooter\">\n          Tweets by chaseyoursport\n        </a>\n        </div>\n    </div>\n  </div>\n  <div class=\"comments\" *ngIf=\"blogDataRecieved\">\n    <SportSocial-comments\n      [BlogId]=\"blogID\">\n    </SportSocial-comments>\n  </div>\n  <div>\n    <div  *ngIf=\"!mobileView\" class=\"relatedBlog\">\n      <p *ngIf=\"blogDataRecieved\">Related Articles</p>\n      <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecived\" class=\"loading\" >\n      <div TabViewAvailable class=\"col-4\" *ngFor=\"let data of relatedBlogDetails;let i=index\">\n        <SportSocial-normal-blog \n          [blogId]=\"data.blogId\"\n          [blogImage]=\"data.blogImage\"\n          [bloggerImage]=\"data.bloggerImage\"\n          [bloggerName]=\"data.bloggerName\"\n          [insertedDate]=\"data.insertedDate\"\n          [heading]=\"data.heading\"\n          [Content]=\"data.Content\"\n          [ViewCount]=\"data.ViewCount\"\n          [ShareCount]=\"data.ShareCount\"\n          [keywords]=\"data.keywords\"\n          [exactDate]=\"data.exactDate\"\n          [readingTime]=\"data.readingTime\">\n        </SportSocial-normal-blog>\n      </div>\n    </div>\n    <div *ngIf=\"mobileView\" class=\"mobileView relatedBlog\">\n      <p *ngIf=\"blogDataRecieved\">Related Articles</p>\n      <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecived\" class=\"loading\">\n      <div class=\"col-4\" *ngFor=\"let data of relatedBlogDetails;let i=index\">\n        <SportSocial-normal-blog \n            [blogId]=\"data.blogId\"\n            [blogImage]=\"data.blogImage\"\n            [bloggerImage]=\"data.bloggerImage\"\n            [bloggerName]=\"data.bloggerName\"\n            [insertedDate]=\"data.insertedDate\"\n            [heading]=\"data.heading\"\n            [Content]=\"data.Content\"\n            [ViewCount]=\"data.ViewCount\"\n            [ShareCount]=\"data.ShareCount\"\n            [keywords]=\"data.keywords\"\n            [exactDate]=\"data.exactDate\"\n            [readingTime]=\"data.readingTime\">\n        </SportSocial-normal-blog>\n    </div>\n    </div>\n  </div>\n  \n\n  \n</div> \n<SportSocial-blog-footer></SportSocial-blog-footer>\n\n<div class=\"fullImage\" #fullImage *ngIf=\"openFullImage\">\n  <img \n   src=\"/assets/images/sports-social-cancel-white.png\" \n   class=\"cancel\" role=\"button\" (click)=\"closeFullImage()\">   \n   \n </div>\n <div class=\"fullImageHolder\" *ngIf=\"openFullImage\" #fullImageHolder>\n   <img src=\"{{blog.blogImage}}\" >\n </div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BlogOpenComponent = /** @class */ (function () {
    function BlogOpenComponent(recieve, recieveHeight, renderer, route, fb, http, getRelated, sendKey, router, post, send, metaService, load, zone) {
        this.recieve = recieve;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.getRelated = getRelated;
        this.sendKey = sendKey;
        this.router = router;
        this.post = post;
        this.send = send;
        this.metaService = metaService;
        this.load = load;
        this.zone = zone;
        this.removeSocial = false;
        this.isConnectedWithFacebook = false;
        this.mobileView = false;
        this.dataRecived = false;
        this.openFullImage = false;
        this.relatedArticles = false;
        this.blogDataRecieved = false;
        this.Keywords = [];
        this.loading = true;
        this.relatedBlogDetails = [];
        this.blogID = this.route.snapshot.url[2].path;
        this.scriptOfTwitter();
        fb.init({
            appId: '1750709328507665',
            version: 'v2.10'
        });
    }
    BlogOpenComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.url[2].path, " ngOnit");
        this.scriptOfTwitter();
        this.loadBlogFromSendData();
        console.log(this.blog, " ngOnit");
        if (this.blog == undefined) {
            this.loadBlogFromUrl();
        }
        this.setTopMargin();
        this.setMobileView();
    };
    BlogOpenComponent.prototype.sendViewCount = function () {
        this.send.viewCountOfBlog(this.blogID, this.ViewCount).subscribe(function (data) {
            console.log(data, " view");
        });
    };
    BlogOpenComponent.prototype.setMetaTags = function () {
        this.metaService.addTags([
            { name: 'twitter:title', content: this.blog.heading },
            { property: 'fb:app_id', content: '1750709328507665' },
            { property: 'og:url', content: 'https://www.chaseyoursport.com/' + this.route.snapshot.url[0].path + '/' + this.route.snapshot.url[1].path + '/' + this.route.snapshot.url[2].path },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: this.blog.heading },
            { property: 'og:description', content: this.blog.Content },
            { property: 'og:image', content: this.blog.blogImage },
            { name: 'twitter:image', content: this.blog.blogImage },
        ]);
    };
    BlogOpenComponent.prototype.loadBlogFromSendData = function () {
        var _this = this;
        this.recieve.detailsofBlog.subscribe(function (data) {
            _this.blogDataRecieved = true;
            _this.blog = {
                blogId: data['blogId'],
                blogImage: data['blogImage'],
                bloggerName: data['bloggerName'],
                bloggerImage: data['bloggerImage'],
                heading: data['heading'],
                Content: data['Content'],
                insertedDate: data['insertedDate'],
                ViewCount: data['ViewCount'],
                ShareCount: data['ShareCount'],
                keywords: data['keywords'],
                exactDate: data['exactDate'],
                readingTime: data['readingTime']
            };
            _this.ShareCount = +_this.blog.ShareCount;
            _this.ViewCount = +(_this.blog.ViewCount);
            _this.sendViewCount();
            _this.Keywords = _this.blog.keywords;
            _this.getRelatedBlogs();
            _this.setMetaTags();
        });
    };
    BlogOpenComponent.prototype.loadBlogFromUrl = function () {
        var _this = this;
        this.load.dataOfsingleBlog(this.blogID).subscribe(function (res) {
            var data = res[0];
            console.log(data, " t");
            _this.blogDataRecieved = true;
            console.log(_this.blogDataRecieved, "  true");
            _this.blog = {
                blogId: data.blogId,
                blogImage: data.blogImage,
                bloggerName: data.bloggerName,
                bloggerImage: data.bloggerImage,
                heading: data.heading,
                Content: data.Content,
                insertedDate: _this.timePassed(data.insertedDate),
                ViewCount: data.ViewCount,
                ShareCount: data.ShareCount,
                keywords: data.keys.split(","),
                exactDate: _this.ExactDate(data.insertedDate),
                readingTime: _this.timeToRead(data.Content)
            };
            _this.ShareCount = +_this.blog.ShareCount;
            _this.ViewCount = +(_this.blog.ViewCount);
            _this.sendViewCount();
            _this.Keywords = _this.blog.keywords;
            window.scrollTo(0, 0);
            _this.getRelatedBlogs();
            _this.setMetaTags();
        });
    };
    BlogOpenComponent.prototype.timeToRead = function (s) {
        var words = s.split(" ");
        var time = Math.round(words.length / 180);
        if (time > 0) {
            return time + " min read";
        }
        else {
            return "1 min read";
        }
    };
    BlogOpenComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(i);
        var presentDate = new Date();
        console.log(writtenDate.getDate(), presentDate.getDate(), " Date");
        if (writtenDate.getFullYear() == presentDate.getFullYear()) {
            if (writtenDate.getMonth() == presentDate.getMonth()) {
                if (writtenDate.getDate() == presentDate.getDate()) {
                    return "Today";
                }
                else {
                    return presentDate.getDate() - writtenDate.getDate() + " day ago";
                }
            }
            else {
                return presentDate.getMonth() - writtenDate.getMonth() + " month ago";
            }
        }
        else {
            return presentDate.getFullYear() - writtenDate.getFullYear() + " year ago";
        }
    };
    BlogOpenComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i);
        console.log(writtenDate, " wDate");
        return writtenDate.toDateString();
    };
    BlogOpenComponent.prototype.setDefault = function (event) {
        this.blog.bloggerImage = "/assets/images/user.png";
    };
    BlogOpenComponent.prototype.removeInitalImage = function () {
        this.loading = false;
    };
    BlogOpenComponent.prototype.setDefaultBlogImage = function () {
        this.blog.blogImage = "/assets/images/default-image.png";
    };
    BlogOpenComponent.prototype.setMobileView = function () {
        if (window.innerWidth > 950) {
            this.mobileView = false;
            this.removeSocial = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '68%');
        }
        if (window.innerWidth <= 950 && window.innerWidth > 700) {
            this.removeSocial = true;
            this.mobileView = false;
            this.renderer.setStyle(this.BlogInfo.nativeElement, 'width', '100%');
        }
        if (window.innerWidth < 700) {
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
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    BlogOpenComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.openBlog.nativeElement, "margin-top", this.topMargin + "px");
    };
    BlogOpenComponent.prototype.onresize = function () {
        this.scriptOfTwitter();
        this.setMobileView();
        this.setTopMargin();
    };
    BlogOpenComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    BlogOpenComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    BlogOpenComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    BlogOpenComponent.prototype.loginOnFacebook = function () {
        this.fb.login()
            .then(function (res) {
            console.log('Logged in', res);
        })
            .catch(this.handleError);
    };
    BlogOpenComponent.prototype.getLoginStatusofFacebook = function () {
        var _this = this;
        this.fb.getLoginStatus()
            .then(function (res) {
            if (res.status == "connected") {
                _this.isConnectedWithFacebook = true;
            }
            else {
                _this.loginOnFacebook();
                _this.isConnectedWithFacebook = true;
            }
        })
            .catch(console.error.bind(console));
    };
    BlogOpenComponent.prototype.sendShareCount = function () {
        this.post.shareCountOfBlog(this.blog.blogId, this.ShareCount).subscribe(function (data) {
            console.log(data, "sharedOnFacebook");
        });
    };
    BlogOpenComponent.prototype.shareOnFacebook = function () {
        this.sendShareCount();
        var options = {
            method: 'share',
            href: 'https://www.chaseyoursport.com/' + this.route.snapshot.url[0].path + '/' + this.route.snapshot.url[1].path + '/' + this.route.snapshot.url[2].path
        };
        console.log(this.isConnectedWithFacebook);
        this.fb.ui(options)
            .then(function (res) {
            console.log('Got the users profile', res);
        })
            .catch(this.handleError);
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
    BlogOpenComponent.prototype.getRelatedBlogs = function () {
        var _this = this;
        this.getRelated.blogData(1, this.blog.keywords[this.blog.keywords.length - 1]).subscribe(function (data) {
            _this.dataRecived = true;
            console.log(data, " related");
            for (var i = 0; i < 3; i++) {
                _this.relatedBlogDetails.push({
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
            console.log(_this.relatedBlogDetails, " checkarticle");
        });
    };
    BlogOpenComponent.prototype.getblogs = function (event) {
        var key = event.toElement.innerText;
        this.router.navigate(['/' + key]);
        this.sendKey.ofBlogCard.next(key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openBlog'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "openBlog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Social'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "Social", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('BlogInfo'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "BlogInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popup'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "popup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullImage'),
        __metadata("design:type", Object)
    ], BlogOpenComponent.prototype, "fullImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogOpenComponent.prototype, "onresize", null);
    BlogOpenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-blog-open',
            template: __webpack_require__("../../../../../src/app/blogContent/blog-open/blog-open.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/blog-open/blog-open.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["b" /* FacebookService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_post_service__["a" /* PostService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _p || Object])
    ], BlogOpenComponent);
    return BlogOpenComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=blog-open.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/blogs/blogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.blog{\r\n    padding: 0.3% 1.5% 1.5% 1.5%;\r\n}\r\n.col-6{\r\n    width: 50%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding:0% 1.5% 2% 1.5%;\r\n}\r\n.col-12{\r\n    width: 100%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 0% 0.5% 0% 0.5%\r\n   \r\n}\r\n.latestBlog{\r\n    padding: 0% 2% 0% 2%;\r\n}\r\n.col-4,.trendingBlogs{\r\n    width: 33%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 1%;\r\n}\r\n.col-8{\r\n    width: 66.2%;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 1%;\r\n    \r\n}\r\n.mobileView>.latest{\r\n    height: auto !important\r\n}\r\n.mobileView .col-4{\r\n    width: 100%;\r\n}\r\n.suscribeCard{\r\n    border: 1px solid #bbbbbb;\r\n    box-shadow: 3px 3px #fafafa;\r\n    border-radius: 4px;\r\n}\r\nbutton{\r\n    display: block;\r\n    margin: 1% auto;\r\n    width: 30%;\r\n    background-color: #ffa600;\r\n    border:none;\r\n    color: #ffffff;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 700;\r\n    font-size: 1.2em;\r\n    padding: 0.5%;\r\n}\r\n.loading{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.noMoreData{\r\n    width: 100%;\r\n    color: #024771;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.5em;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<SportSocialBlog-keywords></SportSocialBlog-keywords>\n<div class=\"blog\" #blog *ngIf=\"!mobileView\">\n    <div class=\"col-12 latestBlog\" *ngFor=\"let data of latestBlogDetails;let i=index\">\n        <SportSocial-latest-blog \n            [blogId]=\"data.blogId\"\n            [blogImage]=\"data.blogImage\"\n            [bloggerImage]=\"data.bloggerImage\"\n            [bloggerName]=\"data.bloggerName\"\n            [insertedDate]=\"data.insertedDate\"\n            [heading]=\"data.heading\"\n            [Content]=\"data.Content\"\n            [ViewCount]=\"data.ViewCount\"\n            [ShareCount]=\"data.ShareCount\"\n            [keywords]=\"data.keywords\"\n            [exactDate]=\"data.exactDate\"\n            [readingTime]=\"data.readingTime\">\n        </SportSocial-latest-blog>\n    </div>\n    <div class=\"col-8\" TabViewAvailable >\n        <div  \n            *ngFor=\"let data of topBlogDetails;let i=index\" \n            [ngClass]=\"{'col-6':i!=2,'col-12':i===2}\">\n            <SportSocial-normal-blog \n                [blogId]=\"data.blogId\"\n                [blogImage]=\"data.blogImage\"\n                [bloggerImage]=\"data.bloggerImage\"\n                [bloggerName]=\"data.bloggerName\"\n                [insertedDate]=\"data.insertedDate\"\n                [heading]=\"data.heading\"\n                [Content]=\"data.Content\"\n                [ViewCount]=\"data.ViewCount\"\n                [ShareCount]=\"data.ShareCount\"\n                [keywords]=\"data.keywords\"\n                [exactDate]=\"data.exactDate\"\n                [readingTime]=\"data.readingTime\">\n            </SportSocial-normal-blog>\n        </div>\n    </div>        \n    <div class=\"trendingBlogs\" *ngIf=\"showTrendingBlock()\" >\n            <SportSocial-trending-blog></SportSocial-trending-blog>\n    </div>\n    <div  TabViewAvailable \n        *ngFor=\"let data of restBlogDetails;let i=index\"\n        [ngClass]=\"{'col-8':i%5===0 ,'col-4': i%5!=0}\">\n        <SportSocial-normal-blog\n            [blogId]=\"data.blogId\"\n            [blogImage]=\"data.blogImage\"\n            [bloggerImage]=\"data.bloggerImage\"\n            [bloggerName]=\"data.bloggerName\"\n            [insertedDate]=\"data.insertedDate\"\n            [heading]=\"data.heading\"\n            [Content]=\"data.Content\"\n            [ViewCount]=\"data.ViewCount\"\n            [ShareCount]=\"data.ShareCount\"\n            [keywords]=\"data.keywords\"\n            [exactDate]=\"data.exactDate\"\n            [readingTime]=\"data.readingTime\">\n        </SportSocial-normal-blog>\n    </div>\n    \n</div> \n        \n<div class=\"blog mobileView\" *ngIf=\"mobileView\" #blog>\n    <div  *ngFor=\"let data of latestBlogDetails;let i=index\" >\n        <SportSocial-latest-blog\n            [blogId]=\"data.blogId\"\n            [blogImage]=\"data.blogImage\"\n            [bloggerImage]=\"data.bloggerImage\"\n            [bloggerName]=\"data.bloggerName\"\n            [insertedDate]=\"data.insertedDate\"\n            [heading]=\"data.heading\"\n            [Content]=\"data.Content\"\n            [ViewCount]=\"data.ViewCount\"\n            [ShareCount]=\"data.ShareCount\"\n            [keywords]=\"data.keywords\"\n            [exactDate]=\"data.exactDate\"\n            [readingTime]=\"data.readingTime\">\n        </SportSocial-latest-blog>\n    </div>\n    <div class=\"col-4\" *ngFor=\"let data of topBlogDetails;let i=index\">\n        <SportSocial-normal-blog\n            [blogId]=\"data.blogId\"\n            [blogImage]=\"data.blogImage\"\n            [bloggerImage]=\"data.bloggerImage\"\n            [bloggerName]=\"data.bloggerName\"\n            [insertedDate]=\"data.insertedDate\"\n            [heading]=\"data.heading\"\n            [Content]=\"data.Content\"\n            [ViewCount]=\"data.ViewCount\"\n            [ShareCount]=\"data.ShareCount\"\n            [keywords]=\"data.keywords\"\n            [exactDate]=\"data.exactDate\"\n            [readingTime]=\"data.readingTime\">\n        </SportSocial-normal-blog>\n    </div>\n    <div class=\"suscribeCard\" *ngIf=\"show\">\n        <SportSocial-subscribe-card></SportSocial-subscribe-card>\n    </div>\n    <div class=\"col-4\" *ngFor=\"let data of restBlogDetails;let i=index\">\n        <SportSocial-normal-blog \n            [blogId]=\"data.blogId\"\n            [blogImage]=\"data.blogImage\"\n            [bloggerImage]=\"data.bloggerImage\"\n            [bloggerName]=\"data.bloggerName\"\n            [insertedDate]=\"data.insertedDate\"\n            [heading]=\"data.heading\"\n            [Content]=\"data.Content\"\n            [ViewCount]=\"data.ViewCount\"\n            [ShareCount]=\"data.ShareCount\"\n            [keywords]=\"data.keywords\"\n            [exactDate]=\"data.exactDate\"\n            [readingTime]=\"data.readingTime\">\n        </SportSocial-normal-blog>\n    </div>\n</div>\n\n    <div *ngIf=\"haveData\">\n        <button (click)=\"nextPage()\" *ngIf=\"dataRecived\">Load More</button>\n        <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecived\" class=\"loading\">\n    </div>\n    <p *ngIf=\"!haveData\" class=\"noMoreData\"> !!!</p>\n    <SportSocial-blog-footer *ngIf=\"show\"></SportSocial-blog-footer> \n          \n       "

/***/ }),

/***/ "../../../../../src/app/blogContent/blogs/blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
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



var BlogsComponent = /** @class */ (function () {
    function BlogsComponent(reciveHeight, renderer, get, cd) {
        this.reciveHeight = reciveHeight;
        this.renderer = renderer;
        this.get = get;
        this.cd = cd;
        this.latestBlogDetails = [];
        this.blogDetails = [];
        this.topBlogDetails = [];
        this.restBlogDetails = [];
        this.removeTrendingBlock = false;
        this.mobileView = false;
        this.nextPageNumber = 1;
        this.defaultKey = "dfg";
        this.show = false;
        this.dataRecived = false;
        this.haveData = true;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        sessionStorage.removeItem('Blog');
        sessionStorage.removeItem('pageNumber');
        sessionStorage.removeItem('searchedBlog');
        sessionStorage.removeItem('key');
        if (window.innerWidth > 950) {
            this.removeTrendingBlock = false;
            this.mobileView = false;
        }
        if (window.innerWidth > 600 && window.innerWidth <= 950) {
            this.removeTrendingBlock = true;
            this.mobileView = false;
        }
        if (window.innerWidth <= 600) {
            this.removeTrendingBlock = true;
            this.mobileView = true;
        }
        this.nextPageNumber = JSON.parse(sessionStorage.getItem('blogPageNumber'));
        console.log(this.nextPageNumber, " try");
        if (this.nextPageNumber == null) {
            this.nextPageNumber = 1;
        }
        if (this.nextPageNumber == 1) {
            this.get.blogData(this.nextPageNumber, this.defaultKey).subscribe(function (data) {
                console.log(data);
                _this.show = true;
                _this.dataRecived = true;
                for (var i_1 in data) {
                    _this.blogDetails.push({
                        blogId: data[i_1].blogId,
                        blogImage: data[i_1].blogImage,
                        bloggerName: data[i_1].bloggerName,
                        bloggerImage: data[i_1].bloggerImage,
                        heading: data[i_1].heading,
                        Content: data[i_1].Content,
                        insertedDate: _this.timePassed(data[i_1].insertedDate),
                        ViewCount: data[i_1].ViewCount,
                        ShareCount: data[i_1].ShareCount,
                        keywords: data[i_1].keywords.split(","),
                        exactDate: _this.ExactDate(data[i_1].insertedDate),
                        readingTime: _this.timeToRead(data[i_1].Content)
                    });
                }
                console.log(_this.blogDetails, " tfd");
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
                    readingTime: _this.blogDetails[0].readingTime
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
                        readingTime: _this.blogDetails[i].readingTime
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
                        readingTime: _this.blogDetails[i].readingTime
                    });
                }
            });
        }
        else {
            this.blogDetails = JSON.parse(sessionStorage.getItem('blogData'));
            console.log(this.blogDetails, " mus");
            this.latestBlogDetails.push({
                blogId: this.blogDetails[0].blogId,
                blogImage: this.blogDetails[0].blogImage,
                bloggerName: this.blogDetails[0].bloggerName,
                bloggerImage: this.blogDetails[0].bloggerImage,
                heading: this.blogDetails[0].heading,
                Content: this.blogDetails[0].Content,
                insertedDate: this.blogDetails[0].insertedDate,
                ViewCount: this.blogDetails[0].ViewCount,
                ShareCount: this.blogDetails[0].ShareCount,
                keywords: this.blogDetails[0].keywords,
                exactDate: this.blogDetails[0].exactDate,
                readingTime: this.blogDetails[0].readingTime
            });
            for (var i = 1; i < 4; i++) {
                this.topBlogDetails.push({
                    blogId: this.blogDetails[i].blogId,
                    blogImage: this.blogDetails[i].blogImage,
                    bloggerName: this.blogDetails[i].bloggerName,
                    bloggerImage: this.blogDetails[i].bloggerImage,
                    heading: this.blogDetails[i].heading,
                    Content: this.blogDetails[i].Content,
                    insertedDate: this.blogDetails[i].insertedDate,
                    ViewCount: this.blogDetails[i].ViewCount,
                    ShareCount: this.blogDetails[i].ShareCount,
                    keywords: this.blogDetails[i].keywords,
                    exactDate: this.blogDetails[i].exactDate,
                    readingTime: this.blogDetails[i].readingTime
                });
            }
            for (var i = 4; i < this.blogDetails.length; i++) {
                this.restBlogDetails.push({
                    blogId: this.blogDetails[i].blogId,
                    blogImage: this.blogDetails[i].blogImage,
                    bloggerName: this.blogDetails[i].bloggerName,
                    bloggerImage: this.blogDetails[i].bloggerImage,
                    heading: this.blogDetails[i].heading,
                    Content: this.blogDetails[i].Content,
                    insertedDate: this.blogDetails[i].insertedDate,
                    ViewCount: this.blogDetails[i].ViewCount,
                    ShareCount: this.blogDetails[i].ShareCount,
                    keywords: this.blogDetails[i].keywords,
                    exactDate: this.blogDetails[i].exactDate,
                    readingTime: this.blogDetails[i].readingTime
                });
            }
            this.show = true;
            this.dataRecived = true;
        }
    };
    BlogsComponent.prototype.showTrendingBlock = function () {
        if (this.blogDetails.length == 0 || window.innerWidth < 950) {
            return false;
        }
        if (this.blogDetails.length >= 0 && window.innerWidth > 950) {
            return true;
        }
    };
    BlogsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + "px");
    };
    BlogsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + "px");
    };
    BlogsComponent.prototype.onresize = function () {
        var _this = this;
        this.reciveHeight.ofKeyWords.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.blog.nativeElement, 'margin-top', this.topMargin + "px");
        if (window.innerWidth > 950) {
            this.removeTrendingBlock = false;
            this.mobileView = false;
        }
        if (window.innerWidth > 600 && window.innerWidth <= 950) {
            this.removeTrendingBlock = true;
            this.mobileView = false;
        }
        if (window.innerWidth <= 600) {
            this.removeTrendingBlock = true;
            this.mobileView = true;
        }
        if (this.blogDetails.length > 0) {
            this.show = true;
        }
    };
    BlogsComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(i);
        var presentDate = new Date();
        // console.log(writtenDate.getDate(),presentDate.getDate() ," date")
        if (writtenDate.getFullYear() == presentDate.getFullYear()) {
            if (writtenDate.getMonth() == presentDate.getMonth()) {
                if (writtenDate.getDate() == presentDate.getDate()) {
                    return "Today";
                }
                else {
                    return presentDate.getDate() - writtenDate.getDate() + " day ago";
                }
            }
            else {
                return presentDate.getMonth() - writtenDate.getMonth() + " month ago";
            }
        }
        else {
            return presentDate.getFullYear() - writtenDate.getFullYear() + " year ago";
        }
    };
    BlogsComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i);
        console.log(i, writtenDate, writtenDate.toDateString());
        return writtenDate.toDateString();
    };
    BlogsComponent.prototype.timeToRead = function (s) {
        var words = s.split(" ");
        var time = Math.round(words.length / 180);
        if (time > 0) {
            return time + " min read";
        }
        else {
            return "1 min read";
        }
    };
    BlogsComponent.prototype.nextPage = function () {
        var _this = this;
        this.dataRecived = false;
        this.nextPageNumber++;
        if (this.nextPageNumber > 1) {
            this.get.blogData((this.nextPageNumber), this.defaultKey).subscribe(function (data) {
                _this.dataRecived = true;
                console.log(data.length);
                if (data.length == 0) {
                    _this.haveData = false;
                }
                else {
                    _this.haveData = true;
                }
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
                        keywords: data[i].keywords.split(","),
                        exactDate: _this.ExactDate(data[i].insertedDate),
                        readingTime: _this.timeToRead(data[i].Content)
                    });
                }
                console.log(_this.restBlogDetails.concat(_this.topBlogDetails).concat(_this.latestBlogDetails), "  hr");
                sessionStorage.setItem('blogData', JSON.stringify((_this.latestBlogDetails).concat(_this.topBlogDetails).concat(_this.restBlogDetails)));
            });
        }
        sessionStorage.setItem('blogPageNumber', JSON.stringify(this.nextPageNumber));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blog'),
        __metadata("design:type", Object)
    ], BlogsComponent.prototype, "blog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogsComponent.prototype, "onresize", null);
    BlogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-blogs',
            template: __webpack_require__("../../../../../src/app/blogContent/blogs/blogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/blogs/blogs.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
    ], BlogsComponent);
    return BlogsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/latest-blog/latest-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-size: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.latest{\r\n    display: inline-block;\r\n    width: 100%;\r\n    max-height: 500px;\r\n    box-shadow: 3px 3px #fafafa;\r\n    position: relative;\r\n    background-color: #000000;\r\n    overflow: hidden;\r\n    border-radius: 5px;\r\n}\r\n.blogImg{\r\n    opacity: 0.5\r\n}\r\nimg{\r\n    width: 100%;\r\n}\r\n.desc{\r\n    width: 100%;\r\n    height:70%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left:0px;\r\n}\r\n.desc>div{\r\n    width: 71%;\r\n    height: auto;\r\n    margin:5px auto;\r\n}\r\n.desc>div>div{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.desc span{\r\n    color: white;\r\n    font-size: 0.9em;\r\n    padding: 0.8%;\r\n    font-weight: 400;\r\n}\r\n.count{\r\n    position: absolute;\r\n    top:5%;\r\n    right: 2%;\r\n    width:100%;\r\n    text-align: right\r\n}\r\n.count>img{\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-left: 1%\r\n}\r\n.count>span{\r\n    display: inline-block;\r\n    color: white;\r\n    font-size: 0.9em\r\n}\r\n.desc>p {\r\n    width: 70%;\r\n    height: auto;\r\n    margin:5px auto;\r\n}\r\n.heading{\r\n    margin: auto;\r\n    max-width:70%;\r\n    color: #ffffff;\r\n    font-size: 2.2em;\r\n    text-align: left;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    font-weight: 700\r\n   \r\n}\r\n.bloggerImage{\r\n    display: inline-block;\r\n    padding: 0px;\r\n    width: 20px !important;\r\n    height: 20px !important;\r\n    margin-right: 5px;\r\n}\r\n.bloggerImage >img{\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 0px;\r\n}\r\n.bloggerName{\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n    color: white;\r\n    font-size: 0.9em;\r\n    font-weight: 700;\r\n}\r\n.Blogger{\r\n    padding: 1% 0% 1%  0%;\r\n}\r\n.smallDesc{\r\n    color: white;\r\n    font-size: 1.2em;\r\n    text-align: left;\r\n    font-weight: 500;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    padding: 1% 0% 1%  0%;\r\n}\r\n.readMore >a{\r\n    color: white;\r\n    font-size: 1.2em;\r\n    text-align: left;\r\n    font-weight: 500;\r\n}\r\n\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.fullImage{\r\n    width: 40%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    top:13%;\r\n    left:30%;\r\n    z-index: 50;\r\n    box-shadow: 1px 1px #bbbbbb;\r\n    border: 1px solid #bbbbbb;\r\n}\r\n.fullImageHolder{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.fullImageHolder>img{\r\n    max-width: 100%;\r\n}\r\n.cancel{\r\n    position: absolute;\r\n    top:1%;\r\n    right:1%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 150\r\n}\r\n@media (max-width:800px) and (min-width:600){\r\n    .fullImage{\r\n        width: 70%;\r\n        left: 15%;\r\n    }\r\n}\r\n@media (max-width:600px){\r\n    .fullImage{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/latest-blog/latest-blog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"latest\" MaintainHeightWidthRatio #latest>\n  <a routerLink=\"/{{keywords[0]}}/{{heading}}/{{blogId}}\" (click)=\"send()\">\n    <img src=\"{{blogImage}}\" class=\"blogImg\" (error)=\"setDefault()\" (load)=\"removeInitialImage()\" alt=\"blogImage\">\n    <img src=\"/assets/images/default-image.png\" alt=\"InitialblogImage\" *ngIf=\"isloading\">\n    <div class=\"count\">\n      <img src=\"/assets/images/sports-social-view-white.png\" alt=\"sports-social-view-white\">\n      <span>{{ViewCount}}</span> \n      <img src=\"/assets/images/sports-social-share-white.png\" alt=\"sports-social-share-white\">\n      <span>{{ShareCount}}</span>\n    </div> \n    <div class=\"desc\" #Desc>\n      <div>\n        <span>{{insertedDate}}</span>\n        <span>|</span>\n        <span>{{readingTime}}</span>\n        <span>{{keywords[0]}}</span>\n      </div>\n      <p class=\"heading\" [innerHtml]=\"heading\" #latestTitle> </p>\n      <p [innerHtml]=\"Content\" class=\"smallDesc\" #latestDesc></p>\n      <div class=\"Blogger\">\n        <div class=\"bloggerImage\" #BloggerImage>\n            <img src=\"/assets/images/sports-social-blogger-white.png\" alt=\"sports-social-blogger-white\" >\n        </div>  \n        <p class=\"bloggerName\">{{bloggerName}}</p>\n      </div>\n      \n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blogContent/latest-blog/latest-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlogComponent; });
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



var LatestBlogComponent = /** @class */ (function () {
    function LatestBlogComponent(Send, renderer, post, zone) {
        this.Send = Send;
        this.renderer = renderer;
        this.post = post;
        this.zone = zone;
        this.openFullImage = false;
        this.isloading = true;
    }
    LatestBlogComponent.prototype.ngOnInit = function () {
        console.log(this.latest);
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
        if (window.innerWidth >= 1000) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '70%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '2.2em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 800 && window.innerWidth < 1000) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '75%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.8em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth < 800 && window.innerWidth >= 600) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '85%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.1em');
        }
        if (window.innerWidth < 600) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '75%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.6em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.3em');
        }
    };
    LatestBlogComponent.prototype.removeInitialImage = function () {
        this.isloading = false;
    };
    LatestBlogComponent.prototype.setDefault = function () {
        this.blogImage = "/assets/images/default-image.png";
    };
    LatestBlogComponent.prototype.reloadPage = function () {
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    LatestBlogComponent.prototype.send = function () {
        this.reloadPage();
        this.Send.detailsofBlog.next(this.blog);
        window.scrollTo(0, 0);
    };
    LatestBlogComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    LatestBlogComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    LatestBlogComponent.prototype.onresize = function () {
        if (window.innerWidth >= 1000) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '70%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '2.2em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 800 && window.innerWidth < 1000) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '75%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.8em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth < 800 && window.innerWidth >= 600) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '85%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.1em');
        }
        if (window.innerWidth < 600) {
            this.renderer.setStyle(this.Desc.nativeElement, 'height', '75%');
            this.renderer.setStyle(this.latestTitle.nativeElement, 'font-size', '1.4em');
            this.renderer.setStyle(this.latestDesc.nativeElement, 'font-size', '1.1em');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "ViewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "ShareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LatestBlogComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "exactDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlogComponent.prototype, "readingTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Desc'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "Desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('latestTitle'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "latestTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('latestDesc'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "latestDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('readmore'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "readmore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('BloggerImage'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "Bloggerimage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('latest'),
        __metadata("design:type", Object)
    ], LatestBlogComponent.prototype, "latest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LatestBlogComponent.prototype, "onresize", null);
    LatestBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-latest-blog',
            template: __webpack_require__("../../../../../src/app/blogContent/latest-blog/latest-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/latest-blog/latest-blog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
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
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.blog{\r\n    width: 100%;\r\n    height: 400px;\r\n    border-radius: 5px;\r\n    margin: 0px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 100%;\r\n    border: 1px solid #bbbbbb;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.blogImageHolder{\r\n    width: 100%;\r\n    max-height:72%;\r\n    min-height: 60%;\r\n    overflow: hidden;\r\n    border-radius: 5px;   \r\n    border-bottom: 1px solid #bbbbbb;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    background-image: url('/assets/images/default-image.png');\r\n    background-repeat: no-repeat\r\n}\r\n.blogImageHolder img{\r\n    width: 100%;\r\n    border-radius: 5px;   \r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.blogFooter{\r\n   \r\n    min-height: 28%;\r\n    border-radius: 5px;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n}\r\n.blogFooter p{\r\n    width: 95%;\r\n    margin:0.8% auto;\r\n}\r\n.blogFooter>p:first-child{\r\n    font-size: 0.8em;\r\n    font-weight: 400;\r\n    color: black;\r\n    text-align: left;\r\n    width: 95%;\r\n}\r\nspan >img{\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-right: 2%;\r\n}\r\n.blogFooter>p:first-child>span{\r\n    padding-right: 4px;\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: top;\r\n}\r\n.blogFooter>p:first-child>span:last-child{\r\n    width: 20%;\r\n    float: right;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n    color: #ffa600;\r\n    font-weight: 500\r\n}\r\n.blogFooter>p:nth-of-type(2){\r\n    text-align: left;\r\n    margin: 1% auto;\r\n    overflow: hidden;\r\n    font-weight: 700;\r\n    font-size:1.2em;\r\n    text-overflow: ellipsis;\r\n    color: black;\r\n    white-space: nowrap;\r\n}\r\n.blogFooter>p:last-child{\r\n    position:absolute ;\r\n    bottom:2%;\r\n    left: 2.5%;\r\n    color: #444444;\r\n    font-weight: 500;\r\n    font-size:0.8em;\r\n}\r\np>img{\r\n  width: 12px;\r\n  height: 12px;\r\n  margin-right: 2%;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n.fullImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    top:0%;\r\n    left:0%;\r\n    z-index: 50;\r\n    box-shadow: 1px 1px #bbbbbb;\r\n    border: 1px solid #bbbbbb;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n}\r\n.fullImageHolder{\r\n    position: fixed;\r\n    width: 70%;\r\n    left: 15%;\r\n    top:0%;\r\n    z-index: 100;\r\n}\r\n.fullImageHolder>img{\r\n    display: block;\r\n    text-align: center;\r\n    padding: 5%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n.cancel{\r\n    position: absolute;\r\n    top:1%;\r\n    right:1%;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 150\r\n}\r\n@media (max-width:800px) and (min-width:600px){\r\n    .fullImageHolder{\r\n        width: 80%;\r\n        left: 10%;\r\n    }\r\n}\r\n@media (max-width:600px){\r\n    .fullImageHolder{\r\n        width: 90%;\r\n        left: 5%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/normal-blog/normal-blog.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"blog\" MaintainHeightWidthRatio >\n    <a routerLink=\"/{{keywords[0]}}/{{heading}}/{{blogId}}\" (click)=\"send()\">\n        <div class=\"blogImageHolder\" #holder>\n          <img src=\"{{blogImage}}\" (load)=\"setInitialImage()\"  (error)=\"setDefault()\" alt=\"blogImage\" >\n        </div>\n        <div class=\"blogFooter\">\n          <p>\n            <span>{{insertedDate}}</span>\n            <span>|</span>\n            <span>{{readingTime}}</span>\n            <span>\n              <img src=\"/assets/images/sports-social-view-orange.png\" alt=\"sports-social-view-orange\" >\n              {{ViewCount}}\n            </span>\n          </p>\n          <p [innerHtml]=\"heading\" #blogTitle></p>\n  \n          <p>\n            <img src=\"/assets/images/sports-social-blogger-black.png\"  alt=\"sports-social-blogger-black\">\n            {{bloggerName}}\n          </p>\n        </div>\n      </a>\n  </div>\n\n <!--  <div class=\"fullImage\" #fullImage *ngIf=\"openFullImage\">\n   <img \n    src=\"/assets/images/sports-social-cancel-white.png\" \n    class=\"cancel\" role=\"button\" (click)=\"closeFullImage()\">   \n    \n  </div>\n  <div class=\"fullImageHolder\" *ngIf=\"openFullImage\">\n    <img src=\"{{blogImage}}\" >\n  </div>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/blogContent/normal-blog/normal-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalBlogComponent; });
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



var NormalBlogComponent = /** @class */ (function () {
    function NormalBlogComponent(Send, renderer, post, zone) {
        this.Send = Send;
        this.renderer = renderer;
        this.post = post;
        this.zone = zone;
        this.loading = true;
        this.openFullImage = false;
    }
    NormalBlogComponent.prototype.ngOnInit = function () {
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
        if (window.innerWidth > 1100) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth < 1100 && window.innerWidth > 1000) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth < 1000 && window.innerWidth > 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (window.innerWidth > 700 && window.innerWidth < 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (window.innerWidth > 600 && window.innerWidth < 700) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 600 && window.innerWidth < 500) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth > 500 && window.innerWidth < 600) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 300 && window.innerWidth < 400) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
    };
    NormalBlogComponent.prototype.reloadPage = function () {
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    NormalBlogComponent.prototype.send = function () {
        this.reloadPage();
        this.Send.detailsofBlog.next(this.blog);
        window.scrollTo(0, 0);
    };
    NormalBlogComponent.prototype.setDefault = function (event) {
        this.blogImage = "/assets/images/default-image.png";
    };
    NormalBlogComponent.prototype.setInitialImage = function () {
        this.renderer.removeStyle(this.holder.nativeElement, 'background-image');
    };
    NormalBlogComponent.prototype.onresize = function () {
        if (window.innerWidth > 1100) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth < 1100 && window.innerWidth > 1000) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth < 1000 && window.innerWidth > 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (window.innerWidth > 700 && window.innerWidth < 950) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.25em');
        }
        if (window.innerWidth > 600 && window.innerWidth < 700) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 600 && window.innerWidth < 500) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.3em');
        }
        if (window.innerWidth > 500 && window.innerWidth < 600) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.2em');
        }
        if (window.innerWidth > 300 && window.innerWidth < 400) {
            this.renderer.setStyle(this.blogTitle.nativeElement, 'font-size', '1.1em');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "ViewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "ShareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NormalBlogComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "exactDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NormalBlogComponent.prototype, "readingTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blogTitle'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "blogTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('holder'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "holder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullImage'),
        __metadata("design:type", Object)
    ], NormalBlogComponent.prototype, "fullImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NormalBlogComponent.prototype, "onresize", null);
    NormalBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-normal-blog',
            template: __webpack_require__("../../../../../src/app/blogContent/normal-blog/normal-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/normal-blog/normal-blog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
    ], NormalBlogComponent);
    return NormalBlogComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=normal-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trending{\r\n    width: 96%;\r\n    height: 23.5%;\r\n    margin:1% auto;\r\n    background-color: #000000;\r\n    position: relative;\r\n    font-family: 'Roboto',sans-serif;\r\n    color: white;\r\n    border-radius: 7px;\r\n    overflow: hidden;\r\n    box-shadow: 3px 3px #fafafa\r\n}\r\n.blogImg{\r\n    opacity: 0.5;\r\n    border-radius: 7px;\r\n}\r\nimg{\r\n    width: 100%;\r\n}\r\n.desc{\r\n    width: 100%;\r\n    height: 40%;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left:0px;\r\n}\r\n.desc>a>p{\r\n    width: 90%;\r\n    margin: auto;\r\n    text-align: left;\r\n    color: #ffffff\r\n}\r\nspan>img{\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n.desc>p:last-child{\r\n    text-align: right;\r\n    padding-right: 2%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"trending\">\n  <img src=\"/assets/images/2.jpg\" class=\"blogImg\" alt=\"blogImage\">\n  <div class=\"desc\">\n    <a routerLink=\"/blogOpen\">\n      <p>The passion will kept me driving through my journey from banking to cycling</p>\n    </a>\n    <p>\n      <span class=\"views\">\n        <img src=\"/assets/images/sports-social-view-white.png\" alt=\"sports-social-view-white\">\n        340\n      </span>\n      <span class=\"share\">\n        <img src=\"/assets/images/sports-social-share-white.png\" alt=\"sports-social-share-white\"  >\n        340\n      </span>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingBlogCardComponent; });
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

var TrendingBlogCardComponent = /** @class */ (function () {
    function TrendingBlogCardComponent() {
    }
    TrendingBlogCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "Content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "ViewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "ShareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TrendingBlogCardComponent.prototype, "keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrendingBlogCardComponent.prototype, "exactDate", void 0);
    TrendingBlogCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-trending-blog-card',
            template: __webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrendingBlogCardComponent);
    return TrendingBlogCardComponent;
}());

//# sourceMappingURL=trending-blog-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    width: 100%;\r\n    height: 800px;\r\n    border: 1px solid  #bbbbbb;\r\n    border-radius: 5px;\r\n    box-shadow: 3px 3px #fafafa\r\n}\r\np:last-child{\r\n    text-align: right;\r\n    margin-right: 2%;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n.popular{\r\n    text-align: left;\r\n    margin-left: 2%;\r\n    font-family: 'Roboto',sans-serif;\r\n    font-weight: 500;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div MaintainHeightWidthRatio>\n    <SportSocial-subscribe-card></SportSocial-subscribe-card>\n    <a href=\"#\" class=\"popular\">\n       Most Popular >>\n    </a>\n    <SportSocial-trending-blog-card></SportSocial-trending-blog-card>\n    <SportSocial-trending-blog-card></SportSocial-trending-blog-card>\n    <SportSocial-trending-blog-card></SportSocial-trending-blog-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blogContent/trending-blog/trending-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendingBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_service__ = __webpack_require__("../../../../../src/app/services/get.service.ts");
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
    };
    TrendingBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-trending-blog',
            template: __webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blogContent/trending-blog/trending-blog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */]) === "function" && _a || Object])
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
exports.push([module.i, ".comment{\r\n    width:100%;\r\n}\r\n.imageHolder{\r\n    display: inline-block;\r\n    width:50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-image: url('/assets/images/user.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.imageHolder> img {\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n.commentBox{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: calc(60% - 55px);\r\n    border: 1px solid #888888;\r\n}\r\n.text{\r\n    width: 100%;\r\n    padding: 1%;\r\n    min-height: 60px;\r\n    outline: none;\r\n    resize: none;\r\n    border: none;\r\n}\r\n.commentButton{\r\n   border-top: 1px solid #888888;\r\n   padding: 1%;\r\n   text-align:right\r\n}\r\nbutton{\r\n    background-color: #024771;\r\n    border: none;\r\n    color: white;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 1% 2% 1% 2%;\r\n    white-space: nowrap;\r\n    width:auto;\r\n}\r\n.loadComment{\r\n    margin-top: 2%;\r\n}\r\n.loadComment>.imageHolder{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.loadComment>.commentBox{\r\n    margin-left: 1%;\r\n    width: 85%;\r\n    border:none;\r\n}\r\n.commentDate{\r\n    padding-left: 2%;\r\n}\r\n.userName{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1em;\r\n    color: #024771;\r\n    font-weight: 700;\r\n}\r\n.userComment{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 0.9em;\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n\r\n@media (max-width:950px) {\r\n    .commentBox{\r\n        width: calc(90% - 55px);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment\" #commentBox>\n  <div class=\"imageHolder\">\n    <img src=\"{{profilePicture}}\" (error)=\"setDefault()\">\n  </div>\n  <div class=\"commentBox \">\n    <textarea   class=\"text\" ngModel name=\"desc\" required placeholder=\"Add a Comment...\" #textArea></textarea>\n    <div class=\"commentButton\">\n      <button (click)=\"post()\"> {{isConnected ? 'Comment' : 'Login to Comment'}}</button>\n    </div>\n  </div>\n</div>\n<div class=\"loadComment\" *ngFor=\"let data of recivedComment.reverse();let i = index\">\n  <div class=\"imageHolder\">\n    <img src=\"{{data.image}}\" alt=\"\">\n  </div>\n  <div class=\"commentBox\">\n    <p class=\"userName\">\n       {{data.userName}}\n       <span class=\"commentDate\">{{data.commentDate}}</span>\n    </p>\n   \n    <p class=\"userComment\">\n      {{data.comment}}\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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




var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(renderer, fb, http, sendUserInfo, send, loadComment) {
        this.renderer = renderer;
        this.fb = fb;
        this.http = http;
        this.sendUserInfo = sendUserInfo;
        this.send = send;
        this.loadComment = loadComment;
        this.isConnected = false;
        this.recivedComment = [];
        fb.init({
            appId: '1750709328507665',
            version: 'v2.10'
        });
    }
    CommentsComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLoginStatus();
        this.loadComment.ofBlog(this.BlogId).subscribe(function (res) {
            console.log("aman");
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
    CommentsComponent.prototype.setDefault = function (event) {
        this.profilePicture = "/assets/images/user.png";
    };
    CommentsComponent.prototype.getLoginStatus = function () {
        var _this = this;
        this.fb.getLoginStatus()
            .then(function (Log) {
            console.log(Log);
            if (Log.status == "unknown" || Log.status == "not_authorized") {
                _this.isConnected = false;
                _this.profilePicture = "/assets/images/user.png";
            }
            if (Log.status == "connected") {
                _this.isConnected = true;
                _this.getProfile();
            }
        })
            .catch(console.error.bind(console));
    };
    CommentsComponent.prototype.getDate = function (i) {
        var commentDate = new Date(i);
        var presentDate = new Date();
        // console.log('p: ',"y= ",presentDate.getFullYear(),"mon= ",presentDate.getMonth(),"d= ",presentDate.getDate(),"h= ",presentDate.getHours(),"s= ",presentDate.getSeconds(),'t= ',presentDate.toDateString())
        //console.log('c: ',"y= ",commentDate.getFullYear(),"mon= ",commentDate.getMonth(),"d= ",commentDate.getDate(),"h= ",commentDate.getHours(),"s= ",commentDate.getSeconds(),'t= ',commentDate.toDateString())
        if (commentDate.getFullYear() == presentDate.getFullYear()) {
            if (commentDate.getMonth() == presentDate.getMonth()) {
                if (presentDate.getDate() == commentDate.getDate()) {
                    if (presentDate.getHours() == commentDate.getHours()) {
                        if (presentDate.getMinutes() == commentDate.getMinutes()) {
                            if (presentDate.getSeconds() == commentDate.getSeconds()) {
                                return "Just Now";
                            }
                            else {
                                return presentDate.getSeconds() - commentDate.getSeconds() + " s";
                            }
                        }
                        else {
                            return presentDate.getMinutes() - commentDate.getMinutes() + " min";
                        }
                    }
                    else {
                        presentDate.getHours() - commentDate.getHours() + " h";
                    }
                }
                else {
                    return presentDate.getDate() - commentDate.getDate() + " d";
                }
            }
            else {
                return presentDate.getMonth() - commentDate.getMonth() + " month";
            }
        }
        else {
            return presentDate.getFullYear() - commentDate.getFullYear() + " yr";
        }
    };
    CommentsComponent.prototype.getProfile = function () {
        var _this = this;
        this.fb.api('/me', "get", { fields: 'email,name' })
            .then(function (res) {
            console.log('Got the users profile', res);
            _this.profilePicture = 'http://graph.facebook.com/' + res.id + '/picture?type=large';
            _this.sendUserInfo.ofFacebookUser(res.id, res.name, res.email, _this.profilePicture).subscribe(function (res) {
                console.log(res, " login");
                //console.log(res[0].UserId)
                _this.userId = res[0].UserId;
            });
        })
            .catch(this.handleError);
    };
    CommentsComponent.prototype.post = function () {
        var _this = this;
        console.log(this.isConnected);
        console.log(this.textArea);
        var loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,user_friends,email,pages_show_list'
        };
        if (this.isConnected == false) {
            this.fb.login(loginOptions)
                .then(function (res) {
                console.log('Logged in', res);
                if (res.status == "connected") {
                    _this.isConnected = true;
                    _this.getProfile();
                }
            })
                .catch(this.handleError);
        }
        if (this.isConnected == true) {
            this.send.userComment(this.BlogId, this.userId, this.textArea.nativeElement.value).subscribe(function (res) {
                console.log(res, "c");
                _this.textArea.nativeElement.value = "";
                _this.newComment = {
                    userName: res[res.length - 1].Name,
                    image: res[res.length - 1].Image,
                    comment: res[res.length - 1].Comment,
                    commentDate: _this.getDate(res[res.length - 1].InsertedDate)
                };
                console.log(_this.newComment, " new comment");
                _this.recivedComment.push(_this.newComment);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('commentBox'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "commentBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textArea'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "textArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('profileImage'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "profileImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "BlogId", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _f || Object])
    ], CommentsComponent);
    return CommentsComponent;
    var _a, _b, _c, _d, _e, _f;
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

module.exports = "<p>\n  custom-url works!\n</p>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintainHeightWidthRatioDirective = /** @class */ (function () {
    function MaintainHeightWidthRatioDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.width = this.elRef.nativeElement.getBoundingClientRect().width;
        // console.log(this.elRef.nativeElement.parentNode.className)
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-8') {
            this.height = -(.536231884057 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-4') {
            this.height = -(.063889538965 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-6') {
            this.height = -(.048751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-12') {
            this.height = -(.531555929660 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'trendingBlogs') {
            this.height = (.9193700617283 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className == 'col-12 latestBlog') {
            this.height = -(.631555929660 * (this.width)) + this.width;
            console.log("hello", this.elRef);
        }
        /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
          this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
         } */
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth < 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
            this.width = this.elRef.nativeElement.getBoundingClientRect().width;
            this.height = -(.548751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth >= 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', "23.5%");
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + "px");
    }
    MaintainHeightWidthRatioDirective.prototype.ngAfterViewInit = function () {
        this.width = this.elRef.nativeElement.getBoundingClientRect().width;
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-8') {
            this.height = -(.536231884057 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-4') {
            this.height = -(.063889538965 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-6') {
            this.height = -(.048751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-12') {
            this.height = -(.531555929660 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'trendingBlogs') {
            this.height = (.9193700617283 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className == 'col-12 latestBlog') {
            this.height = -(.631555929660 * (this.width)) + this.width;
        }
        /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
          this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
        } */
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth < 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
            this.width = this.elRef.nativeElement.getBoundingClientRect().width;
            this.height = -(.548751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth >= 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', "23.5%");
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + "px");
    };
    MaintainHeightWidthRatioDirective.prototype.ngAfterViewChecked = function () {
        this.width = this.elRef.nativeElement.getBoundingClientRect().width;
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-8') {
            this.height = -(.536231884057 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-4') {
            this.height = -(.063889538965 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-6') {
            this.height = -(.048751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-12') {
            this.height = -(.531555929660 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'trendingBlogs') {
            this.height = (.9193700617283 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className == 'col-12 latestBlog') {
            this.height = -(.631555929660 * (this.width)) + this.width;
        }
        /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
          this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
         } */
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth < 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
            this.width = this.elRef.nativeElement.getBoundingClientRect().width;
            this.height = -(.548751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth >= 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', "23.5%");
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + "px");
    };
    MaintainHeightWidthRatioDirective.prototype.onresize = function () {
        this.width = this.elRef.nativeElement.getBoundingClientRect().width;
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-8') {
            this.height = -(.536231884057 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-4') {
            this.height = -(.063889538965 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-6') {
            this.height = -(.048751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-12') {
            this.height = -(.531555929660 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'trendingBlogs') {
            this.height = (.9552700617283 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className == 'col-12 latestBlog') {
            this.height = -(.631555929660 * (this.width)) + this.width;
        }
        /* if(this.elRef.nativeElement.className=='latest' && this.elRef.nativeElement.parentNode.parentNode.className=='col-4'){
          this.renderer.setStyle(this.elRef.nativeElement,'max-height','500px')
         } */
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth < 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
            this.width = this.elRef.nativeElement.getBoundingClientRect().width;
            this.height = -(.548751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className == 'subscribeCard' && window.innerWidth >= 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', "23.5%");
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + "px");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaintainHeightWidthRatioDirective.prototype, "onresize", null);
    MaintainHeightWidthRatioDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[MaintainHeightWidthRatio]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
    ], MaintainHeightWidthRatioDirective);
    return MaintainHeightWidthRatioDirective;
    var _a, _b;
}());

//# sourceMappingURL=maintain-height-width-ratio.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/tab-view-available.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabViewAvailableDirective; });
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

var TabViewAvailableDirective = /** @class */ (function () {
    function TabViewAvailableDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className == 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
                this.renderer.setStyle(this.elRef.nativeElement, 'padding-bottom', '2%');
            }
            if (this.className == 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    }
    TabViewAvailableDirective.prototype.ngAfterViewInit = function () {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className == 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
                this.renderer.setStyle(this.elRef.nativeElement, 'padding-bottom', '2%');
            }
            if (this.className == 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    };
    TabViewAvailableDirective.prototype.ngAfterContentInit = function () {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className == 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
                this.renderer.setStyle(this.elRef.nativeElement, 'padding-bottom', '2%');
            }
            if (this.className == 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    };
    TabViewAvailableDirective.prototype.onresize = function () {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth > 950) {
            this.className = this.elRef.nativeElement.className;
            if (this.className == 'col-12') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-8');
            }
            if (this.className == 'col-6') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-4');
            }
        }
        if (this.windowWidth < 950 && this.windowWidth > 600) {
            this.className = this.elRef.nativeElement.className;
            if (this.className == 'col-8') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-12');
                this.renderer.setStyle(this.elRef.nativeElement, 'padding-bottom', '2%');
            }
            if (this.className == 'col-4') {
                this.renderer.removeClass(this.elRef.nativeElement, this.className);
                this.renderer.addClass(this.elRef.nativeElement, 'col-6');
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabViewAvailableDirective.prototype, "onresize", null);
    TabViewAvailableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[TabViewAvailable]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
    ], TabViewAvailableDirective);
    return TabViewAvailableDirective;
    var _a, _b;
}());

//# sourceMappingURL=tab-view-available.directive.js.map

/***/ }),

/***/ "../../../../../src/app/editor-panel/editor-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor-panel/editor-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" #form>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form  #f=\"ngForm\">\r\n        <div id=\"blog-data\" ngModelGroup=\"blogData\" #userData=\"ngModelGroup\">\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Name</label>\r\n            <input type=\"text\" id=\"username\" class=\"form-control\" ngModel name=\"name\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"bloggerImage\">Blogger Image</label>\r\n            <input type=\"file\" id=\"bloggerImage\" class=\"form-control\" ngModel name=\"bloggerImage\" #bloggerImage>\r\n            <div class=\"imgTest\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"date\">Date </label>\r\n            <input type=\"date\" id=\"datetime\" class=\"form-control\" ngModel name=\"date\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Title\">Title</label>\r\n            <input type=\"text\" id=\"title\" class=\"form-control\" ngModel name=\"Title\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"keywords\">Keywords</label>\r\n            <input type=\"text\" id=\"keywords\" class=\"form-control\" ngModel name=\"keywords\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"blogImage\">Blog Image</label>\r\n            <input type=\"file\" id=\"blogImage\" class=\"form-control\" ngModel name=\"blogMainImage\" #blogImage>\r\n            <div class=\"imgTest\"></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"desc\">Desc  </label>\r\n            <textarea rows=\"50\" id=\"desc\" class=\"form-control\" ngModel name=\"desc\" required >\r\n              <b>hello</b>\r\n            </textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <button class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isDisabled\" >Upload</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/editor-panel/editor-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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




var EditorPanelComponent = /** @class */ (function () {
    function EditorPanelComponent(http, recieveHeight, renderer) {
        this.http = http;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.files = [];
        this.imageName = [];
        this.isDisabled = false;
        this.filesToUpload = [];
    }
    EditorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + "px");
    };
    EditorPanelComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        this.imageName = ["bloggerImage", "blogImage"];
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(_this.imageName[i], files[i]);
            }
            formData.append("bloggerName", _this.blog.bloggerName);
            formData.append("blogrTitle", _this.blog.blogTitle);
            formData.append("blogDesc", _this.blog.blogDesc);
            formData.append("blogDate", _this.blog.blogDate);
            formData.append("keywords", _this.blog.keywords);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    EditorPanelComponent.prototype.upload = function () {
        var _this = this;
        this.isDisabled = true;
        this.files = [this.bloggerImage, this.blogImage];
        this.blog = {
            bloggerName: this.signupForm.value.blogData.name,
            blogDate: this.signupForm.value.blogData.date,
            blogTitle: this.signupForm.value.blogData.Title,
            blogDesc: this.signupForm.value.blogData.desc,
            keywords: this.signupForm.value.blogData.keywords.split(",")
        };
        this.imageName = ["bloggerImage", "blogImage"];
        for (var i = 0; i < this.files.length; i++) {
            this.filesToUpload.push(this.files[i].nativeElement.files[0]);
        }
        this.makeFileRequest("https://admin.chaseyoursport.com/blog/saveNewBlog", [], this.filesToUpload)
            .then(function (result) {
            _this.Result = result;
            console.log(result);
            if (_this.Result.Status == "Success") {
                _this.isDisabled = false;
            }
        }, function (error) {
            console.error(error);
            if (error) {
                _this.isDisabled = false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgForm"]) === "function" && _a || Object)
    ], EditorPanelComponent.prototype, "signupForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bloggerImage'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "bloggerImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blogImage'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", Object)
    ], EditorPanelComponent.prototype, "panel", void 0);
    EditorPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocialBlog-editor-panel',
            template: __webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _d || Object])
    ], EditorPanelComponent);
    return EditorPanelComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=editor-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/keywords/keyword/keyword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: 'Roboto',sans-serif\r\n}\r\n.keyword{\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: top;\r\n    border: 1px solid #024771;\r\n    border-radius: 4px;\r\n    margin: 0.5% 0.15% 0.5% 0.15%;\r\n     \r\n}\r\n.image{\r\n    background-repeat:no-repeat ;\r\n    background-size: 100%;\r\n}\r\n.title{\r\n   \r\n    display: inline-block;\r\n    width: auto;       \r\n}\r\n.title p{\r\n    padding: 6px 14px 6px 14px;\r\n    display: inline-block;\r\n    width: auto;\r\n    font-size: 0.9em;\r\n    color: #024771;\r\n    text-align: left;\r\n    font-weight: 500;\r\n}\r\n.keyword:hover{\r\n    background-color: #024771;\r\n    border:none;\r\n    \r\n}\r\n.title p:hover{\r\n    color: white\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keywords/keyword/keyword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"keyword\" #Keyword>\n  <div class=\"title\">\n    <p>{{title}}</p>\n  </div>\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], KeywordComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Keyword'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], KeywordComponent.prototype, "Keyword", void 0);
    KeywordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocialBlog-keyword',
            template: __webpack_require__("../../../../../src/app/keywords/keyword/keyword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keywords/keyword/keyword.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
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
exports.push([module.i, ".keywords{\r\n   \r\n    width: 100%;\r\n    z-index: 1;\r\n    background-color: #ffffff;\r\n    white-space: nowrap !important;\r\n    \r\n    \r\n}\r\n.keywords div{\r\n    text-align: center;\r\n    overflow-x: scroll;\r\n    max-width: 100%;\r\n    margin: 2px auto;\r\n}\r\n.keywords div::-webkit-scrollbar{\r\n   display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/keywords/keywords.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"keywords\" #Keywords>\n  <div>\n    <SportSocialBlog-keyword *ngFor=\"let keyword of keywords;let i=index\" \n      [title]=\"keyword.name\" class=\"keyword\" role=\"button\" (click)=\"send(i)\">\n    </SportSocialBlog-keyword>\n  </div>\n</div>\n"

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeywordsComponent = /** @class */ (function () {
    function KeywordsComponent(renderer, recieveHeight, sendHeight, searched, sendSearchedData, router, sendKey, get) {
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
        console.log(this.keywords, " check");
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', "fixed");
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + "px");
    };
    KeywordsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', "fixed");
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + "px");
        this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
    };
    KeywordsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', "fixed");
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + "px");
        this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
    };
    KeywordsComponent.prototype.send = function (i) {
        /* this.searched.blogData(this.pageNumber,this.keywords[i].name).subscribe(
          res=>{
            console.log(res)
            this.sendSearchedData.ofsearchBlog.next(res);
          }
        ) */
        this.path = "/" + this.keywords[i].name;
        this.router.navigate([this.path]);
        //this.sendKey.ofBlogCard.next(this.keywords[i].name)
    };
    KeywordsComponent.prototype.onresize = function () {
        var _this = this;
        this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
        this.recieveHeight.ofHeader.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', "fixed");
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + "px");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Keywords'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], KeywordsComponent.prototype, "Keywords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], KeywordsComponent.prototype, "onresize", null);
    KeywordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocialBlog-keywords',
            template: __webpack_require__("../../../../../src/app/keywords/keywords.component.html"),
            styles: [__webpack_require__("../../../../../src/app/keywords/keywords.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__services_get_service__["a" /* GetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_get_service__["a" /* GetService */]) === "function" && _j || Object])
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
exports.push([module.i, ".login{\r\n    margin: 20% auto;\r\n    border: 1px  solid #bbbbbb;\r\n    background-color: #fafafa;\r\n    width: 30%;\r\n}\r\np{\r\n    display: inline-block;\r\n    width: 20%;\r\n    margin: 1%;\r\n}\r\ninput{\r\n    display:inline-block;\r\n    margin: 1%;\r\n    border-radius:25px;\r\n    background-color: #fafafa;\r\n    width: 70%;\r\n    padding-left: 2%;\r\n    outline: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <p>User Name:</p> <input type=\"text\" name=\"userName\" id=\"#uname\">\n  <p>Password:</p> <input type=\"password\" name=\"password\" id=\"#password\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
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

var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocialBlog-login-page',
            template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginPageComponent);
    return LoginPageComponent;
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

module.exports = "<div class=\"subscriptionBox\" #subscriptionBox *ngIf=\"showSubscriptionBox\">\n    <button type=\"button\" (click)=\"close()\">&times;</button>\n  You have subscribed\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('subscriptionBox'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "subscriptionBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "showSubscriptionBox", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_status_service__["a" /* StatusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
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

module.exports = "<div class=\"fullImage\" #fullImage *ngIf=\"openFullImage\">\n  <img \n   src=\"/assets/images/sports-social-cancel-white.png\" \n   class=\"cancel\" role=\"button\" (click)=\"closeFullImage()\">   \n   \n </div>\n <div class=\"fullImageHolder\" *ngIf=\"openFullImage\" #fullImageHolder>\n   <img src=\"{{blog.blogImage}}\" >\n </div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_panel_editor_panel_component__ = __webpack_require__("../../../../../src/app/editor-panel/editor-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoute = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__blogContent_blogs_blogs_component__["a" /* BlogsComponent */] },
    { path: "editorPanel", component: __WEBPACK_IMPORTED_MODULE_3__editor_panel_editor_panel_component__["a" /* EditorPanelComponent */] },
    { path: ":tag", component: __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */] },
    { path: ':tag/:title/:blogId', component: __WEBPACK_IMPORTED_MODULE_2__blogContent_blog_open_blog_open_component__["a" /* BlogOpenComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot(appRoute)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */]]
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

module.exports = "<div #searchPage>\n\n  <h2 class=\"topic\">{{recievedKey}} blogs</h2>\n  <p class=\"topicDetails\">Read the latest articles, blogs, news and other informations related to {{recievedKey}}</p>\n  <div class=\"Row\"  *ngIf=\"!mobileView\">\n      \n    <div TabViewAvailable class=\"col-4\" *ngFor=\"let data of blogDetails\">\n      <SportSocial-normal-blog \n        [blogId]=\"data.blogId\"\n        [blogImage]=\"data.blogImage\"\n        [bloggerImage]=\"data.bloggerImage\"\n        [bloggerName]=\"data.bloggerName\"\n        [insertedDate]=\"data.insertedDate\"\n        [heading]=\"data.heading\"\n        [Content]=\"data.Content\"\n        [ViewCount]=\"data.ViewCount\"\n        [ShareCount]=\"data.ShareCount\"\n        [keywords]=\"data.keywords\"\n        [exactDate]=\"data.exactDate\"\n        [readingTime]=\"data.readingTime\">\n      </SportSocial-normal-blog>\n    </div>\n    \n  </div>\n  <div class=\"Row mobileView\" *ngIf=\"mobileView\" >\n      <div class=\"col-4\" *ngFor=\"let data of blogDetails;let i=index\">\n          <SportSocial-normal-blog \n              [blogId]=\"data.blogId\"\n              [blogImage]=\"data.blogImage\"\n              [bloggerImage]=\"data.bloggerImage\"\n              [bloggerName]=\"data.bloggerName\"\n              [insertedDate]=\"data.insertedDate\"\n              [heading]=\"data.heading\"\n              [Content]=\"data.Content\"\n              [ViewCount]=\"data.ViewCount\"\n              [ShareCount]=\"data.ShareCount\"\n              [keywords]=\"data.keywords\"\n              [exactDate]=\"data.exactDate\"\n              [readingTime]=\"data.readingTime\">\n          </SportSocial-normal-blog>\n      </div>\n  </div>\n</div>\n<div *ngIf=\"haveData\">\n    <button (click)=\"nextPage()\" *ngIf=\"dataRecieved\">Load More</button>\n    <img src=\"/assets/images/sports-social-loading.gif\" *ngIf=\"!dataRecieved\" class=\"loading\">\n</div>\n<p *ngIf=\"!haveData\" class=\"noMoreData\" >No More Data !!!</p>         \n<SportSocial-blog-footer *ngIf=\"show\"></SportSocial-blog-footer> "

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_service__ = __webpack_require__("../../../../../src/app/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(recieveHeight, renderer, recieveData, recievekey, get, route, zone) {
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.recieveData = recieveData;
        this.recievekey = recievekey;
        this.get = get;
        this.route = route;
        this.zone = zone;
        this.dataRecieved = false;
        this.show = false;
        this.tempBlog = [];
        this.blogDetails = [];
        this.pageNumber = 1;
        this.mobileView = false;
        this.haveData = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTopMargin();
        this.recievekeyFromUrl();
        this.setMobileView();
        this.pageNumber = JSON.parse(sessionStorage.getItem('pageNumber'));
        if (this.pageNumber == null) {
            this.pageNumber = 1;
        }
        console.log(this.recievedKey, this.pageNumber, "rt");
        if (this.pageNumber == 1) {
            this.get.blogData(this.pageNumber, this.recievedKey).subscribe(function (data) {
                if (data.length > 0) {
                    _this.haveData = true;
                }
                else {
                    _this.haveData = false;
                }
                if (data.length == 0 && _this.pageNumber == 1) {
                }
                _this.show = true;
                _this.dataRecieved = true;
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
                        keywords: data[i].keywords.split(","),
                        exactDate: _this.ExactDate(data[i].insertedDate),
                        readingTime: _this.timeToRead(data[i].Content)
                    });
                }
                console.log(_this.blogDetails);
            });
        }
        else {
            this.show = true;
            this.dataRecieved = true;
            this.blogDetails = JSON.parse(sessionStorage.getItem('searchedBlog'));
            console.log(this.blogDetails, " vtds");
        }
    };
    SearchComponent.prototype.recievekeyFromUrl = function () {
        var _this = this;
        this.recievedKey = this.route.snapshot.url[0].path.replace(/-/g, " ");
        this.route.params.subscribe(function (params) {
            console.log(params, " params");
            _this.recievedKey = params.tag.replace(/-/g, " ");
        });
    };
    SearchComponent.prototype.setMobileView = function () {
        if (window.innerWidth < 700) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    SearchComponent.prototype.timeToRead = function (s) {
        var words = s.split(" ");
        var time = Math.round(words.length / 180);
        if (time > 0) {
            return time + " min read";
        }
        else {
            return "1 min read";
        }
    };
    SearchComponent.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i);
        return writtenDate.toDateString();
    };
    SearchComponent.prototype.timePassed = function (i) {
        var writtenDate = new Date(i);
        var presentDate = new Date();
        if (writtenDate.getFullYear() == presentDate.getFullYear()) {
            if (writtenDate.getMonth() == presentDate.getMonth()) {
                if (writtenDate.getDate() == presentDate.getDate()) {
                    return "Today";
                }
                else {
                    return presentDate.getDate() - writtenDate.getDate() + " day ago";
                }
            }
            else {
                return presentDate.getMonth() - writtenDate.getMonth() + " month ago";
            }
        }
        else {
            return presentDate.getFullYear() - writtenDate.getFullYear() + " year ago";
        }
    };
    SearchComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.searchPage.nativeElement, 'margin-top', this.topMargin + "px");
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        this.setTopMargin();
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
            console.log(data, " nm");
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
                    keywords: data[i].keywords.split(","),
                    exactDate: _this.ExactDate(data[i].insertedDate),
                    readingTime: _this.timeToRead(data[i].Content)
                });
            }
            sessionStorage.setItem('searchedBlog', JSON.stringify(_this.blogDetails));
        });
        sessionStorage.setItem('pageNumber', JSON.stringify(this.pageNumber));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchPage'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blog'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "blog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchComponent.prototype, "onresize", null);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_service__["a" /* PropertyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/get.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
        return this.http.get(' https://admin.chaseyoursport.com/blog/getKeywords ')
            .map(function (res) { return res.json(); });
    };
    GetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], GetService);
    return GetService;
    var _a;
}());

//# sourceMappingURL=get.service.js.map

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
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
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
        this.ofHeader = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
        this.ofKeyWords = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
        this.ofBlogCard = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
        this.detailsofBlog = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
        this.saveDetailsOfBlog = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
        this.ofsearchBlog = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
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
        this.detailsOfBlog = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this.blog = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    SaveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
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
        this.ofSubscrition = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    StatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StatusService);
    return StatusService;
}());

//# sourceMappingURL=status.service.js.map

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

module.exports = "<div class=\"subscribeCard\" MaintainHeightWidthRatio>\n  <p class=\"heading\">Subscribe via Email</p>\n  <input type=\"email\" name=\"Email\" placeholder=\"Enter your Email\"  #subscriber email >\n  <p  class=\"errorMessage\" *ngIf=\"errorMessage\">Email is Inavlid!!! Please enter correct Email</p>\n  <button (click)=\"Subscribe()\" type=\"submit\" #button>Submit</button>\n</div>\n<div class=\"subscriptionBox\" #subscriptionBox *ngIf=\"showSubscriptionBox\">\n    <div class=\"top\">\n        <img src=\"/assets/images/sports-social-cancel-black.png\" role=\"button\" class=\"closeMessage\"  (click)=\"close()\">\n    </div>\n    <div class=\"bottom\">\n        <p>Great</p>\n        <p>\n            You have Subscribed for our Newsletter and Blog updates.\n        </p>\n    </div>\n</div>"

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
                console.log(res.Status);
                if (res.Status == "Success") {
                    _this.showSubscriptionBox = true;
                    console.log(_this.showSubscriptionBox);
                    _this.subscriber.nativeElement.value = "";
                    _this.errorMessage = false;
                    _this.renderer.setStyle(_this.button.nativeElement, 'margin', '5% auto');
                }
            });
        }
        else {
            this.subscriber.nativeElement.value = "";
            this.errorMessage = true;
            this.renderer.setStyle(this.button.nativeElement, 'margin', '1% auto');
        }
    };
    SubscribeCardComponent.prototype.close = function () {
        this.showSubscriptionBox = false;
        console.log(this.showSubscriptionBox);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('subscriber'),
        __metadata("design:type", Object)
    ], SubscribeCardComponent.prototype, "subscriber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('button'),
        __metadata("design:type", Object)
    ], SubscribeCardComponent.prototype, "button", void 0);
    SubscribeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-subscribe-card',
            template: __webpack_require__("../../../../../src/app/subscribe-card/subscribe-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscribe-card/subscribe-card.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_status_service__["a" /* StatusService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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