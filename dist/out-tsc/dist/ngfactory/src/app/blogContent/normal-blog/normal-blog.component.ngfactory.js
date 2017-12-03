"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./normal-blog.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../../src/app/directives/maintain-height-width-ratio.directive");
var i3 = require("../../../../../../src/app/services/property.service");
var i4 = require("../../../../../../src/app/blogContent/normal-blog/normal-blog.component");
var i5 = require("@angular/router");
var i6 = require("@angular/common");
var i7 = require("../../../../../../src/app/services/post.service");
var styles_NormalBlogComponent = [i0.styles];
exports.RenderType_NormalBlogComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_NormalBlogComponent, data: {} });
function View_NormalBlogComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [['initialImage', 1]], null, 0, 'img', [['alt', 'InitialblogImage'], ['src', '/assets/images/default-image.png']], null, null, null, null, null))], null, null);
}
function View_NormalBlogComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, 'img', [['alt',
                'blogImage']], [[8, 'src', 4], [8, 'title', 0]], [[null, 'load'], [null,
                'error']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('load' === en)) {
                var pd_0 = (_co.removeInitialImage() !== false);
                ad = (pd_0 && ad);
            }
            if (('error' === en)) {
                var pd_1 = (_co.setDefault() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _co.blogImage, '');
        var currVal_1 = i1.ɵinlineInterpolate(1, '', _co.ImageDesc, '');
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
function View_NormalBlogComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { blogTitle: 0 }), i1.ɵqud(402653184, 2, { holder: 0 }),
        i1.ɵqud(402653184, 3, { fullImage: 0 }), i1.ɵqud(402653184, 4, { Blog: 0 }), i1.ɵqud(402653184, 5, { footer: 0 }), i1.ɵqud(402653184, 6, { blogOpen: 0 }), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵeld(7, 0, [[4, 0], ['blog', 1]], null, 44, 'div', [['MaintainHeightWidthRatio', ''], ['class', 'blog']], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 8).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(8, 4210688, null, 0, i2.MaintainHeightWidthRatioDirective, [i1.ElementRef, i1.Renderer2, i1.PLATFORM_ID, i3.PropertyService], null, null), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(10, 0, null, null, 40, 'a', [], [[1, 'target', 0], [8, 'href',
                4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.send() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(11, 671744, null, 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i6.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(),
            i1.ɵeld(13, 0, [[2, 0], ['holder', 1]], null, 7, 'div', [['class', 'blogImageHolder']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NormalBlogComponent_1)),
        i1.ɵdid(16, 16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n          '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NormalBlogComponent_2)),
        i1.ɵdid(19, 16384, null, 0, i6.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(22, 0, [[5, 0],
            ['footer', 1]], null, 27, 'div', [['class', 'blogFooter']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵeld(24, 0, null, null, 15, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(),
            i1.ɵeld(26, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(27, null, ['', ''])), (_l()(), i1.ɵted(-1, null, ['\n            '])),
        (_l()(), i1.ɵeld(29, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['|'])), (_l()(), i1.ɵted(-1, null, ['\n            '])),
        (_l()(), i1.ɵeld(32, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(33, null, ['', ''])), (_l()(), i1.ɵted(-1, null, ['\n            '])),
        (_l()(), i1.ɵeld(35, 0, null, null, 3, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n              '])), (_l()(), i1.ɵeld(37, 0, null, null, 0, 'img', [['alt', 'sports-social-view-orange'], ['src', '/assets/images/sports-social-view-orange.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(38, null, ['\n              ', '\n            '])), (_l()(),
            i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵeld(41, 0, [[1, 0], ['blogTitle', 1]], null, 0, 'p', [], [[8, 'innerHTML', 1]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(),
            i1.ɵeld(43, 0, null, null, 0, 'p', [['class', 'content']], [[8,
                    'innerHTML', 1]], null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵeld(45, 0, null, null, 3, 'p', [['class', 'bloggerName']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(47, 0, null, null, 0, 'img', [['alt', 'sports-social-blogger-black'], ['src', '/assets/images/sports-social-blogger-black.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(48, null, ['\n            ', '\n          '])), (_l()(),
            i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵted(-1, null, ['\n\n ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = i1.ɵinlineInterpolate(3, '/', _co.primaryKeyword, '/', _co.heading, '/', _co.blogId, '');
        _ck(_v, 11, 0, currVal_2);
        var currVal_3 = _co.isloading;
        _ck(_v, 16, 0, currVal_3);
        var currVal_4 = _co.dataRecieved;
        _ck(_v, 19, 0, currVal_4);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 11).target;
        var currVal_1 = i1.ɵnov(_v, 11).href;
        _ck(_v, 10, 0, currVal_0, currVal_1);
        var currVal_5 = _co.insertedDate;
        _ck(_v, 27, 0, currVal_5);
        var currVal_6 = _co.primaryKeyword;
        _ck(_v, 33, 0, currVal_6);
        var currVal_7 = _co.viewCount;
        _ck(_v, 38, 0, currVal_7);
        var currVal_8 = _co.heading;
        _ck(_v, 41, 0, currVal_8);
        var currVal_9 = _co.metaDesc;
        _ck(_v, 43, 0, currVal_9);
        var currVal_10 = _co.bloggerName;
        _ck(_v, 48, 0, currVal_10);
    });
}
exports.View_NormalBlogComponent_0 = View_NormalBlogComponent_0;
function View_NormalBlogComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'SportSocial-normal-blog', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_NormalBlogComponent_0, exports.RenderType_NormalBlogComponent)), i1.ɵdid(1, 4308992, null, 0, i4.NormalBlogComponent, [i3.PropertyService, i3.PropertyService,
            i1.Renderer2, i7.PostService, i3.PropertyService, i1.NgZone, i1.PLATFORM_ID], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_NormalBlogComponent_Host_0 = View_NormalBlogComponent_Host_0;
exports.NormalBlogComponentNgFactory = i1.ɵccf('SportSocial-normal-blog', i4.NormalBlogComponent, View_NormalBlogComponent_Host_0, { blogId: 'blogId', blogImage: 'blogImage',
    bloggerImage: 'bloggerImage', bloggerName: 'bloggerName', heading: 'heading', insertedDate: 'insertedDate',
    content: 'content', viewCount: 'viewCount', shareCount: 'shareCount', keywords: 'keywords',
    exactDate: 'exactDate', readingTime: 'readingTime', metaDesc: 'metaDesc', imageDesc: 'imageDesc',
    primaryKeyword: 'primaryKeyword', shortTitle: 'shortTitle' }, {}, []);
//# sourceMappingURL=normal-blog.component.ngfactory.js.map