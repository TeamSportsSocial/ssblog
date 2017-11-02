"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./subscribe-card.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../src/app/directives/maintain-height-width-ratio.directive");
var i3 = require("@angular/common");
var i4 = require("../../../../../src/app/subscribe-card/subscribe-card.component");
var i5 = require("../../../../../src/app/services/post.service");
var i6 = require("../../../../../src/app/services/status.service");
var styles_SubscribeCardComponent = [i0.styles];
exports.RenderType_SubscribeCardComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_SubscribeCardComponent, data: {} });
function View_SubscribeCardComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class',
                'errorMessage']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Email is Inavlid!!! Please enter correct Email']))], null, null);
}
function View_SubscribeCardComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, [['subscriptionBox', 1]], null, 15, 'div', [['class', 'subscriptionBox']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'top']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['class', 'closeMessage'],
            ['role', 'button'], ['src', '/assets/images/sports-social-cancel-black.png']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class', 'bottom']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Great'])), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n            You have Subscribed for our Newsletter and Blog updates.\n        '])),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n']))], null, null);
}
function View_SubscribeCardComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { subscriber: 0 }), i1.ɵqud(402653184, 2, { button: 0 }),
        (_l()(), i1.ɵeld(0, null, null, 13, 'div', [['MaintainHeightWidthRatio',
                ''], ['class', 'subscribeCard']], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(4210688, null, 0, i2.MaintainHeightWidthRatioDirective, [i1.ElementRef, i1.Renderer2], null, null), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class',
                'heading']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Subscribe via Email'])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, [[1, 0], ['subscriber', 1]], null, 0, 'input', [['email', ''], ['name', 'Email'], ['placeholder', 'Enter your Email'], ['type',
                'email']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SubscribeCardComponent_1)), i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, [[2, 0], ['button', 1]], null, 1, 'button', [['type', 'submit']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.Subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Submit'])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SubscribeCardComponent_2)),
        i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.errorMessage;
        _ck(_v, 11, 0, currVal_0);
        var currVal_1 = _co.showSubscriptionBox;
        _ck(_v, 18, 0, currVal_1);
    }, null);
}
exports.View_SubscribeCardComponent_0 = View_SubscribeCardComponent_0;
function View_SubscribeCardComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-subscribe-card', [], null, null, null, View_SubscribeCardComponent_0, exports.RenderType_SubscribeCardComponent)), i1.ɵdid(114688, null, 0, i4.SubscribeCardComponent, [i5.PostService, i6.StatusService, i1.Renderer2], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_SubscribeCardComponent_Host_0 = View_SubscribeCardComponent_Host_0;
exports.SubscribeCardComponentNgFactory = i1.ɵccf('SportSocial-subscribe-card', i4.SubscribeCardComponent, View_SubscribeCardComponent_Host_0, {}, {}, []);
//# sourceMappingURL=subscribe-card.component.ngfactory.js.map