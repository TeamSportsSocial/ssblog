"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./blog-footer.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../src/app/blog-footer/blog-footer.component");
var i3 = require("@angular/common");
var i4 = require("../../../../../src/app/services/post.service");
var i5 = require("../../../../../src/app/services/status.service");
var i6 = require("../../../../../src/app/services/window-ref.service");
var styles_BlogFooterComponent = [i0.styles];
exports.RenderType_BlogFooterComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_BlogFooterComponent, data: {} });
function View_BlogFooterComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class',
                'errorMessage']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Email is Inavlid!!! Please enter correct Email']))], null, null);
}
function View_BlogFooterComponent_2(_l) {
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
function View_BlogFooterComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { followUs: 0 }), i1.ɵqud(402653184, 2, { copyright: 0 }),
        i1.ɵqud(402653184, 3, { subscriber: 0 }), (_l()(), i1.ɵeld(0, null, null, 68, 'footer', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'subscribe']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n      Subscribe\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, [[3, 0], ['subscriber', 1]], null, 0, 'input', [['email', ''], ['placeholder', 'Enter your Email'], ['type', 'email']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.Subscribe() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Submit'])),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogFooterComponent_1)),
        i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(),
            i1.ɵeld(0, [['blogName', 1]], null, 1, 'p', [['class', 'blogName']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Chase Your Sport'])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(),
            i1.ɵeld(0, [['tagline', 1]], null, 1, 'p', [['class', 'tagline']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['The Sports Social Blog'])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(),
            i1.ɵeld(0, [['about', 1]], null, 3, 'p', [['class', 'about']], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' \n    \'Chase Your Sport\' blog provides Health, Fitness and\n     Sport information and other useful information to help everyone\n     to keep them active, healthy and fit .'])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n     We are here to help you to follow your passion for sports. \n  '])),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, [['contactUs', 1]], null, 1, 'p', [['class', 'contactUs']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    Contact Us: letstalk@sportsocial.in\n  '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n  \n  '])), (_l()(), i1.ɵeld(0, [[1, 0], ['followUs', 1]], null, 31, 'p', [['class', 'followUs']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    Follow us on \n    '])), (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['href', 'https://www.facebook.com/chaseyoursport'], ['rel', 'noopener'],
            ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'facebook_Logo'], ['src', '/assets/images/sports-social-facebook-logo-white.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, [' \n    '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['href', 'https://www.twitter.com/chaseyoursport'],
            ['rel', 'noopener'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'twitter_Logo'],
            ['src', '/assets/images/sports-social-twitter-logo-white.png']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['href', 'https://www.instagram.com/chaseyoursport'],
            ['rel', 'noopener'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt',
                'insta_Logo'], ['src', '/assets/images/sports-social-instagram-logo-white.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['href', 'https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network'],
            ['rel', 'noopener'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'quora_Logo'],
            ['src', '/assets/images/sports-social-quora-logo-white.png']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['href', 'https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ'],
            ['rel', 'noopener'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt',
                'youtube_Logo'], ['src', '/assets/images/sports-social-youtube-logo-white.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['href', 'https://www.pinterest.com/chaseyoursport'],
            ['rel', 'noopener'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'pintrest_Logo'],
            ['src', '/assets/images/sports-social-pinterest-logo-white.png']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    \n  '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, [[2, 0], ['copyright', 1]], null, 3, 'p', [['class', 'copyright']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    Copyright '])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'img', [['src', '/assets/images/copyright.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' 2017 CnP Sports Services Private Limited | All Rights Reserved\n  '])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n\n'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogFooterComponent_2)),
        i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.errorMessage;
        _ck(_v, 17, 0, currVal_0);
        var currVal_1 = _co.showSubscriptionBox;
        _ck(_v, 74, 0, currVal_1);
    }, null);
}
exports.View_BlogFooterComponent_0 = View_BlogFooterComponent_0;
function View_BlogFooterComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-blog-footer', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_BlogFooterComponent_0, exports.RenderType_BlogFooterComponent)), i1.ɵdid(114688, null, 0, i2.BlogFooterComponent, [i4.PostService, i1.Renderer2, i5.StatusService,
            i6.WindowRefService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_BlogFooterComponent_Host_0 = View_BlogFooterComponent_Host_0;
exports.BlogFooterComponentNgFactory = i1.ɵccf('SportSocial-blog-footer', i2.BlogFooterComponent, View_BlogFooterComponent_Host_0, {}, {}, []);
//# sourceMappingURL=blog-footer.component.ngfactory.js.map