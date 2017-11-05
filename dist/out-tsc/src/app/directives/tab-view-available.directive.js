"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var TabViewAvailableDirective = /** @class */ (function () {
    function TabViewAvailableDirective(elRef, renderer, platformId) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.windowWidth = window.innerWidth;
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
    }
    TabViewAvailableDirective.prototype.ngAfterViewInit = function () {
        if (this.isBrowser) {
            this.windowWidth = window.innerWidth;
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
        }
    };
    TabViewAvailableDirective.prototype.ngAfterContentInit = function () {
        if (this.isBrowser) {
            this.windowWidth = window.innerWidth;
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
        }
    };
    TabViewAvailableDirective.prototype.onresize = function () {
        if (this.isBrowser) {
            this.windowWidth = window.innerWidth;
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
                    // this.renderer.setStyle(this.elRef.nativeElement,'padding-bottom','2%')
                }
                if (this.className == 'col-4') {
                    this.renderer.removeClass(this.elRef.nativeElement, this.className);
                    this.renderer.addClass(this.elRef.nativeElement, 'col-6');
                }
            }
        }
    };
    TabViewAvailableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[TabViewAvailable]'
                },] },
    ];
    /** @nocollapse */
    TabViewAvailableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    TabViewAvailableDirective.propDecorators = {
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return TabViewAvailableDirective;
}());
exports.TabViewAvailableDirective = TabViewAvailableDirective;
//# sourceMappingURL=tab-view-available.directive.js.map