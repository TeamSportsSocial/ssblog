"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var property_service_1 = require("../services/property.service");
var TabViewAvailableDirective = /** @class */ (function () {
    function TabViewAvailableDirective(elRef, renderer, recieveWidth, platformId) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.recieveWidth = recieveWidth;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
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
    TabViewAvailableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[TabViewAvailable]'
                },] },
    ];
    /** @nocollapse */
    TabViewAvailableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
        { type: property_service_1.PropertyService, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    TabViewAvailableDirective.propDecorators = {
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return TabViewAvailableDirective;
}());
exports.TabViewAvailableDirective = TabViewAvailableDirective;
//# sourceMappingURL=tab-view-available.directive.js.map