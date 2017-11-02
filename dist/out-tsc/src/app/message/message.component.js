"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var status_service_1 = require(".././services/status.service");
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
    MessageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-message',
                    templateUrl: './message.component.html',
                    styleUrls: ['./message.component.css']
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return [
        { type: status_service_1.StatusService, },
        { type: core_1.Renderer2, },
    ]; };
    MessageComponent.propDecorators = {
        'subscriptionBox': [{ type: core_1.ViewChild, args: ['subscriptionBox',] },],
        'showSubscriptionBox': [{ type: core_1.Input },],
    };
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map