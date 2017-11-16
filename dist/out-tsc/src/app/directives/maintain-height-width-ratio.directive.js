"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var property_service_1 = require("../services/property.service");
var MaintainHeightWidthRatioDirective = /** @class */ (function () {
    function MaintainHeightWidthRatioDirective(elRef, renderer, platformId, recieveWidth) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.recieveWidth = recieveWidth;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        this.setHeight();
    }
    MaintainHeightWidthRatioDirective.prototype.ngAfterViewInit = function () {
        this.setHeight();
    };
    MaintainHeightWidthRatioDirective.prototype.onresize = function () {
        this.setHeight();
    };
    MaintainHeightWidthRatioDirective.prototype.setHeight = function () {
        this.width = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.elRef.nativeElement).width;
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
            this.width = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.elRef.nativeElement).width;
            this.height = -(.548751486325 * (this.width)) + this.width;
        }
        if (this.elRef.nativeElement.className === 'subscribeCard' && windowWidth >= 950) {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', '23.5%');
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'height', this.height + 'px');
    };
    MaintainHeightWidthRatioDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[MaintainHeightWidthRatio]'
                },] },
    ];
    /** @nocollapse */
    MaintainHeightWidthRatioDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: property_service_1.PropertyService, },
    ]; };
    MaintainHeightWidthRatioDirective.propDecorators = {
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return MaintainHeightWidthRatioDirective;
}());
exports.MaintainHeightWidthRatioDirective = MaintainHeightWidthRatioDirective;
//# sourceMappingURL=maintain-height-width-ratio.directive.js.map