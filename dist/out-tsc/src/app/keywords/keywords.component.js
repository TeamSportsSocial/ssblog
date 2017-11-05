"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../services/property.service");
var post_service_1 = require("../services/post.service");
var get_service_1 = require("../services/get.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
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
        this.isBrowser = common_1.isPlatformBrowser(platformId);
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
        console.log(this.keywords, ' check');
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
        this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
    };
    KeywordsComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + 'px');
        this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
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
        this.sendHeight.ofKeyWords.next(this.Keywords.nativeElement.getBoundingClientRect().bottom);
        this.recieveHeight.ofHeader.subscribe(function (margin) { return _this.topMargin = margin; });
        this.renderer.setStyle(this.Keywords.nativeElement, 'position', 'fixed');
        this.renderer.setStyle(this.Keywords.nativeElement, 'top', this.topMargin + 'px');
    };
    KeywordsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocialBlog-keywords',
                    templateUrl: './keywords.component.html',
                    styleUrls: ['./keywords.component.css']
                },] },
    ];
    /** @nocollapse */
    KeywordsComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: core_1.Renderer2, },
        { type: property_service_1.PropertyService, },
        { type: property_service_1.PropertyService, },
        { type: post_service_1.PostService, },
        { type: property_service_1.PropertyService, },
        { type: router_1.Router, },
        { type: property_service_1.PropertyService, },
        { type: get_service_1.GetService, },
    ]; };
    KeywordsComponent.propDecorators = {
        'Keywords': [{ type: core_1.ViewChild, args: ['Keywords',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return KeywordsComponent;
}());
exports.KeywordsComponent = KeywordsComponent;
//# sourceMappingURL=keywords.component.js.map