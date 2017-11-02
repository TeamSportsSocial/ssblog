"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaintainHeightWidthRatioDirective = /** @class */ (function () {
    function MaintainHeightWidthRatioDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.setHeight();
    }
    MaintainHeightWidthRatioDirective.prototype.ngAfterViewInit = function () {
        this.setHeight();
    };
    MaintainHeightWidthRatioDirective.prototype.onresize = function () {
        this.setHeight();
    };
    MaintainHeightWidthRatioDirective.prototype.setHeight = function () {
        this.width = this.elRef.nativeElement.getBoundingClientRect().width;
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-8') {
            this.height = 0.47 * (this.width);
        }
        if (this.elRef.nativeElement.parentNode.parentNode.className == 'col-4') {
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
    ]; };
    MaintainHeightWidthRatioDirective.propDecorators = {
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return MaintainHeightWidthRatioDirective;
}());
exports.MaintainHeightWidthRatioDirective = MaintainHeightWidthRatioDirective;
//# sourceMappingURL=maintain-height-width-ratio.directive.js.map