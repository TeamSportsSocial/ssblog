"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require(".././services/post.service");
var status_service_1 = require(".././services/status.service");
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
                if (res.Status == 'Success') {
                    _this.showSubscriptionBox = true;
                    console.log(_this.showSubscriptionBox);
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
    SubscribeCardComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-subscribe-card',
                    templateUrl: './subscribe-card.component.html',
                    styleUrls: ['./subscribe-card.component.css']
                },] },
    ];
    /** @nocollapse */
    SubscribeCardComponent.ctorParameters = function () { return [
        { type: post_service_1.PostService, },
        { type: status_service_1.StatusService, },
        { type: core_1.Renderer2, },
    ]; };
    SubscribeCardComponent.propDecorators = {
        'subscriber': [{ type: core_1.ViewChild, args: ['subscriber',] },],
        'button': [{ type: core_1.ViewChild, args: ['button',] },],
    };
    return SubscribeCardComponent;
}());
exports.SubscribeCardComponent = SubscribeCardComponent;
//# sourceMappingURL=subscribe-card.component.js.map