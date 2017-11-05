"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var MaintainHeightWidthRatioDirective = /** @class */ (function () {
    function MaintainHeightWidthRatioDirective(elRef, renderer, platformId) {
        this.elRef = elRef;
        this.renderer = renderer;
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
        if (this.isBrowser) {
            this.width = this.elRef.nativeElement.getBoundingClientRect().width;
            if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-8') {
                this.height = 0.47 * (this.width);
            }
            if (this.elRef.nativeElement.parentNode.parentNode.className === 'col-4') {
                this.height = (1) * this.width;
            }
            if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-6') {
                this.height = (1) * this.width;
            }
            if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-12') {
                this.height = 0.47 * (this.width);
            }
            if (this.elRef.nativeElement.parentNode.parentNode.className == 'trendingBlogs') {
                this.height = (1.9) * this.width;
            }
            if (this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className != "latestBlog col-4") {
                this.height = (0.3) * this.width;
            }
            if (this.elRef.nativeElement.className == 'latest' && this.elRef.nativeElement.parentNode.parentNode.className == 'latestBlog col-4') {
                this.height = (0.64) * (this.width);
            }
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
    ]; };
    MaintainHeightWidthRatioDirective.propDecorators = {
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return MaintainHeightWidthRatioDirective;
}());
exports.MaintainHeightWidthRatioDirective = MaintainHeightWidthRatioDirective;
//# sourceMappingURL=maintain-height-width-ratio.directive.js.map