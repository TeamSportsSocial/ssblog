"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var status_service_1 = require(".././services/status.service");
var post_service_1 = require(".././services/post.service");
var platform_browser_1 = require("@angular/platform-browser");
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
        var width = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.footer.nativeElement).width;
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
    BlogFooterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-blog-footer',
                    templateUrl: './blog-footer.component.html',
                    styleUrls: ['./blog-footer.component.css']
                },] },
    ];
    /** @nocollapse */
    BlogFooterComponent.ctorParameters = function () { return [
        { type: post_service_1.PostService, },
        { type: core_1.Renderer2, },
        { type: status_service_1.StatusService, },
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    ]; };
    BlogFooterComponent.propDecorators = {
        'followUs': [{ type: core_1.ViewChild, args: ['followUs',] },],
        'copyright': [{ type: core_1.ViewChild, args: ['copyright',] },],
        'subscriber': [{ type: core_1.ViewChild, args: ['subscriber',] },],
        'footer': [{ type: core_1.ViewChild, args: ['footer',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return BlogFooterComponent;
}());
exports.BlogFooterComponent = BlogFooterComponent;
//# sourceMappingURL=blog-footer.component.js.map