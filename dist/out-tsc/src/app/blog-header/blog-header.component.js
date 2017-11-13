"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../services/property.service");
var get_service_1 = require("../services/get.service");
var post_service_1 = require("../services/post.service");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var common_1 = require("@angular/common");
var BlogHeaderComponent = /** @class */ (function () {
    function BlogHeaderComponent(sendHeight, renderer, send, get, elRef, _sanitizer, searchKeyword, router, sendKey, zone, platformId) {
        this.sendHeight = sendHeight;
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
        this.searchKey = new ReplaySubject_1.ReplaySubject();
        this.isBrowser = common_1.isPlatformBrowser(platformId);
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
        if (this.isBrowser) {
            if (window.innerWidth <= 750) {
                this.mobileView = true;
            }
            else {
                this.mobileView = false;
            }
        }
    };
    BlogHeaderComponent.prototype.ngAfterViewChecked = function () {
        if (this.isBrowser) {
            this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
        }
    };
    BlogHeaderComponent.prototype.onclick = function () {
        this.haveresult = false;
        if (this.searchBox) {
            this.searchBox.nativeElement.value = '';
        }
    };
    BlogHeaderComponent.prototype.onresize = function () {
        if (this.resultBox) {
            this.setStyleOfResultBox();
        }
        this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
        if (this.isBrowser) {
            if (window.innerWidth <= 750) {
                this.mobileView = true;
            }
            else {
                this.mobileView = false;
            }
        }
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
    BlogHeaderComponent.prototype.sendData = function (event) {
        var _this = this;
        // console.clear();
        // console.log(event);
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
    BlogHeaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocialBlog-header',
                    templateUrl: './blog-header.component.html',
                    styleUrls: ['./blog-header.component.css'],
                },] },
    ];
    /** @nocollapse */
    BlogHeaderComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: property_service_1.PropertyService, },
        { type: get_service_1.GetService, },
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
        { type: post_service_1.PostService, },
        { type: router_1.Router, },
        { type: property_service_1.PropertyService, },
        { type: core_1.NgZone, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    BlogHeaderComponent.propDecorators = {
        'Header': [{ type: core_1.ViewChild, args: ['Header',] },],
        'searchBox': [{ type: core_1.ViewChild, args: ['searchBox',] },],
        'resultBox': [{ type: core_1.ViewChild, args: ['resultBox',] },],
        'linkImage': [{ type: core_1.ViewChild, args: ['linkImage',] },],
        'onclick': [{ type: core_1.HostListener, args: ['window:click', [],] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return BlogHeaderComponent;
}());
exports.BlogHeaderComponent = BlogHeaderComponent;
//# sourceMappingURL=blog-header.component.js.map