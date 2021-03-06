"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./blog-header.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/router");
var i3 = require("@angular/common");
var i4 = require("../../../../../src/app/blog-header/blog-header.component");
var i5 = require("../../../../../src/app/services/property.service");
var i6 = require("../../../../../src/app/services/get.service");
var i7 = require("@angular/platform-browser");
var i8 = require("../../../../../src/app/services/post.service");
var styles_BlogHeaderComponent = [i0.styles];
exports.RenderType_BlogHeaderComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_BlogHeaderComponent, data: {} });
function View_BlogHeaderComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(2, 0, null, null, 2, 'a', [], [[1, 'target', 0], [8, 'href', 4]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(4, null, ['\n              ', '\n            '])),
        (_l()(), i1.ɵted(-1, null, ['\n          ']))], function (_ck, _v) {
        var currVal_2 = i1.ɵinlineInterpolate(1, '/', _v.context.$implicit, '');
        _ck(_v, 3, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 3).target;
        var currVal_1 = i1.ɵnov(_v, 3).href;
        _ck(_v, 2, 0, currVal_0, currVal_1);
        var currVal_3 = _v.context.$implicit;
        _ck(_v, 4, 0, currVal_3);
    });
}
function View_BlogHeaderComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [[3, 0], ['resultBox', 1]], null, 5, 'ul', [['class', 'searchResult']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(),
            i1.ɵand(16777216, null, null, 2, null, View_BlogHeaderComponent_4)),
        i1.ɵdid(3, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), i1.ɵpid(0, i3.SlicePipe, []), (_l()(), i1.ɵted(-1, null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵunv(_v, 3, 0, i1.ɵnov(_v, 4).transform(_co.results, 0, 9));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_BlogHeaderComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(2, 0, [[2, 0], ['searchBox',
                1]], null, 0, 'input', [['placeholder', 'Search here the latest topics & trends in sports'],
            ['type', 'text']], null, [[null, 'keyup']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('keyup' === en)) {
                var pd_0 = (_co.sendData($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, [' \n        '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_3)),
        i1.ɵdid(5, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, [' \n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.haveresult;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
function View_BlogHeaderComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 13, 'ul', [['class',
                'right']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(2, 0, null, null, 4, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n      '])),
        (_l()(), i1.ɵeld(4, 0, null, null, 1, 'a', [['class', ' websiteLink'],
            ['href', 'https://www.sportsocial.in'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        Website \n      '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(8, 0, null, null, 4, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(10, 0, null, null, 1, 'a', [['class',
                ' websiteLink'], ['href', 'https://goo.gl/qrgCz5'], ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        App\n      '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n  ']))], null, null);
}
function View_BlogHeaderComponent_9(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['\n                '])), (_l()(), i1.ɵeld(2, 0, null, null, 2, 'a', [], [[1, 'target', 0], [8, 'href', 4]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.navigate() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(4, null, ['\n                  ', '\n                '])),
        (_l()(), i1.ɵted(-1, null, ['\n              ']))], function (_ck, _v) {
        var currVal_2 = i1.ɵinlineInterpolate(1, '/', _v.context.$implicit, '');
        _ck(_v, 3, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 3).target;
        var currVal_1 = i1.ɵnov(_v, 3).href;
        _ck(_v, 2, 0, currVal_0, currVal_1);
        var currVal_3 = _v.context.$implicit;
        _ck(_v, 4, 0, currVal_3);
    });
}
function View_BlogHeaderComponent_8(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [[3, 0], ['resultBox', 1]], null, 5, 'ul', [['class', 'searchResult']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n              '])), (_l()(),
            i1.ɵand(16777216, null, null, 2, null, View_BlogHeaderComponent_9)),
        i1.ɵdid(3, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), i1.ɵpid(0, i3.SlicePipe, []), (_l()(), i1.ɵted(-1, null, ['\n          ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵunv(_v, 3, 0, i1.ɵnov(_v, 4).transform(_co.results, 0, 9));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_BlogHeaderComponent_7(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 27, 'div', [['class',
                'dropDown']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(2, 0, null, null, 0, 'img', [['alt', 'sports-social-cancel-black'], ['class', 'Close'],
            ['role', 'button'], ['src', '/assets/images/sports-social-cancel-black.png']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.closeDropDown() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵeld(4, 0, null, null, 4, 'p', [['class', 'website']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, [' \n          '])), (_l()(), i1.ɵeld(6, 0, null, null, 1, 'a', [['class', ' websiteLink'], ['href', 'https://www.sportsocial.in'],
            ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n             Website \n         '])),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(10, 0, null, null, 5, 'p', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, [' \n          '])), (_l()(), i1.ɵeld(12, 0, null, null, 2, 'a', [['class', ' websiteLink'], ['href', 'https://goo.gl/qrgCz5'],
            ['target', '_blank']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(),
            i1.ɵted(-1, null, ['\n            App\n         '])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n      '])),
        (_l()(), i1.ɵeld(17, 0, null, null, 9, 'div', [['class', 'search']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n         '])), (_l()(), i1.ɵeld(19, 0, [[2,
                0], ['searchBox', 1]], null, 0, 'input', [['placeholder', 'Search '], ['type',
                'text']], null, [[null, 'keyup']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('keyup' === en)) {
                var pd_0 = (_co.sendData($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_8)),
        i1.ɵdid(22, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, [' \n          '])),
        (_l()(), i1.ɵeld(24, 0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.searchSportSocial() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['Search'])),
        (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n      \n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.haveresult;
        _ck(_v, 22, 0, currVal_0);
    }, null);
}
function View_BlogHeaderComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, 'div', [['class',
                'mobileView ']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n     '])), (_l()(), i1.ɵeld(2, 0, null, null, 3, 'div', [['class', 'menuImageHolder']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n       '])), (_l()(), i1.ɵeld(4, 0, null, null, 0, 'img', [['alt', 'sports-social-menu'], ['role', 'button'], ['src', '/assets/images/sports-social-menu.png']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.openDropDown() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n     '])),
        (_l()(), i1.ɵted(-1, null, ['\n     '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_7)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n  ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.open;
        _ck(_v, 8, 0, currVal_0);
    }, null);
}
function View_BlogHeaderComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 39, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵeld(2, 0, [['left', 1]], null, 30, 'ul', [['class', 'left']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n    '])),
        (_l()(), i1.ɵeld(4, 0, null, null, 24, 'a', [['href', '/']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(6, 0, null, null, 3, 'li', [['class', 'brand-image']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵeld(8, 0, null, null, 0, 'img', [['alt', 'Sports Social logo'],
            ['src', '/assets/images/sports-social-logo.png']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(11, 0, null, null, 16, 'li', [['class', 'brand-title']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(13, 0, null, null, 13, 'h1', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(),
            i1.ɵeld(15, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Sports'])), (_l()(), i1.ɵted(-1, null, [' '])), (_l()(),
            i1.ɵeld(18, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Social'])), (_l()(), i1.ɵted(-1, null, [' '])), (_l()(),
            i1.ɵeld(21, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Blog'])), (_l()(), i1.ɵted(-1, null, ['\n          '])),
        (_l()(), i1.ɵeld(24, 0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Chase your Sport'])), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_2)),
        i1.ɵdid(31, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n  '])),
        (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_5)), i1.ɵdid(35, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_6)),
        i1.ɵdid(38, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, [' \n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.mobileView;
        _ck(_v, 31, 0, currVal_0);
        var currVal_1 = !_co.mobileView;
        _ck(_v, 35, 0, currVal_1);
        var currVal_2 = _co.mobileView;
        _ck(_v, 38, 0, currVal_2);
    }, null);
}
function View_BlogHeaderComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { Header: 0 }), i1.ɵqud(671088640, 2, { searchBox: 0 }),
        i1.ɵqud(671088640, 3, { resultBox: 0 }), i1.ɵqud(402653184, 4, { linkImage: 0 }), (_l()(),
            i1.ɵeld(4, 0, [[1, 0], ['Header', 1]], null, 4, 'header', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogHeaderComponent_1)), i1.ɵdid(7, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isBrowser;
        _ck(_v, 7, 0, currVal_0);
    }, null);
}
exports.View_BlogHeaderComponent_0 = View_BlogHeaderComponent_0;
function View_BlogHeaderComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'SportSocialBlog-header', [], null, [['window', 'click'], ['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onclick() !== false);
                ad = (pd_0 && ad);
            }
            if (('window:resize' === en)) {
                var pd_1 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, View_BlogHeaderComponent_0, exports.RenderType_BlogHeaderComponent)), i1.ɵdid(1, 8503296, null, 0, i4.BlogHeaderComponent, [i5.PropertyService, i5.PropertyService,
            i1.Renderer2, i5.PropertyService, i6.GetService, i1.ElementRef, i7.DomSanitizer,
            i8.PostService, i2.Router, i5.PropertyService, i1.NgZone, i1.PLATFORM_ID], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_BlogHeaderComponent_Host_0 = View_BlogHeaderComponent_Host_0;
exports.BlogHeaderComponentNgFactory = i1.ɵccf('SportSocialBlog-header', i4.BlogHeaderComponent, View_BlogHeaderComponent_Host_0, {}, {}, []);
//# sourceMappingURL=blog-header.component.ngfactory.js.map