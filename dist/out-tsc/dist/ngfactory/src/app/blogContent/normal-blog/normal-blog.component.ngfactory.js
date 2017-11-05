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
var i3 = require("../../../../../../src/app/blogContent/normal-blog/normal-blog.component");
var i4 = require("@angular/router");
var i5 = require("@angular/common");
var i6 = require("../../../../../../src/app/services/property.service");
var i7 = require("../../../../../../src/app/services/post.service");
var styles_NormalBlogComponent = [i0.styles];
exports.RenderType_NormalBlogComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_NormalBlogComponent, data: {} });
function View_NormalBlogComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, [['initialImage', 1]], null, 0, 'img', [['alt',
                'InitialblogImage'], ['src', '/assets/images/default-image.png']], null, null, null, null, null))], null, null);
}
function View_NormalBlogComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt',
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
        i1.ɵqud(402653184, 3, { fullImage: 0 }), i1.ɵqud(402653184, 4, { Blog: 0 }), i1.ɵqud(402653184, 5, { footer: 0 }), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, [[4, 0], ['blog', 1]], null, 44, 'div', [['MaintainHeightWidthRatio', ''],
            ['class', 'blog']], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 7).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(4210688, null, 0, i2.MaintainHeightWidthRatioDirective, [i1.ElementRef, i1.Renderer2, i1.PLATFORM_ID], null, null),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 40, 'a', [], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.send() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, [[2, 0], ['holder', 1]], null, 7, 'div', [['class', 'blogImageHolder']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NormalBlogComponent_1)), i1.ɵdid(16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n          '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_NormalBlogComponent_2)),
        i1.ɵdid(16384, null, 0, i5.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(),
            i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, [[5, 0], ['footer',
                1]], null, 27, 'div', [['class', 'blogFooter']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵeld(0, null, null, 15, 'p', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(),
            i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['|'])), (_l()(),
            i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(),
            i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n              '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'sports-social-view-orange'],
            ['src', '/assets/images/sports-social-view-orange.png']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n              ', '\n            '])), (_l()(), i1.ɵted(null, ['\n          '])),
        (_l()(), i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵeld(0, [[1, 0], ['blogTitle',
                1]], null, 0, 'p', [], [[8, 'innerHTML', 1]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵeld(0, null, null, 0, 'p', [['class',
                'content']], [[8, 'innerHTML', 1]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n          '])), (_l()(),
            i1.ɵeld(0, null, null, 3, 'p', [['class', 'bloggerName']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', 'sports-social-blogger-black'], ['src', '/assets/images/sports-social-blogger-black.png']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n            ', '\n          '])), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n\n '])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = i1.ɵinlineInterpolate(3, '/', _co.keywords[0], '/', _co.heading, '/', _co.blogId, '');
        _ck(_v, 10, 0, currVal_2);
        var currVal_3 = _co.isloading;
        _ck(_v, 15, 0, currVal_3);
        var currVal_4 = _co.dataRecieved;
        _ck(_v, 18, 0, currVal_4);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 10).target;
        var currVal_1 = i1.ɵnov(_v, 10).href;
        _ck(_v, 9, 0, currVal_0, currVal_1);
        var currVal_5 = _co.insertedDate;
        _ck(_v, 26, 0, currVal_5);
        var currVal_6 = _co.keywords[0];
        _ck(_v, 32, 0, currVal_6);
        var currVal_7 = _co.ViewCount;
        _ck(_v, 37, 0, currVal_7);
        var currVal_8 = _co.heading;
        _ck(_v, 40, 0, currVal_8);
        var currVal_9 = _co.content;
        _ck(_v, 42, 0, currVal_9);
        var currVal_10 = _co.bloggerName;
        _ck(_v, 47, 0, currVal_10);
    });
}
exports.View_NormalBlogComponent_0 = View_NormalBlogComponent_0;
function View_NormalBlogComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-normal-blog', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_NormalBlogComponent_0, exports.RenderType_NormalBlogComponent)), i1.ɵdid(4308992, null, 0, i3.NormalBlogComponent, [i6.PropertyService, i1.Renderer2, i7.PostService,
            i1.NgZone, i1.PLATFORM_ID], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_NormalBlogComponent_Host_0 = View_NormalBlogComponent_Host_0;
exports.NormalBlogComponentNgFactory = i1.ɵccf('SportSocial-normal-blog', i3.NormalBlogComponent, View_NormalBlogComponent_Host_0, { blogId: 'blogId', blogImage: 'blogImage',
    bloggerImage: 'bloggerImage', bloggerName: 'bloggerName', heading: 'heading', insertedDate: 'insertedDate',
    Content: 'Content', ViewCount: 'ViewCount', ShareCount: 'ShareCount', keywords: 'keywords',
    exactDate: 'exactDate', readingTime: 'readingTime', MetaDesc: 'MetaDesc', ImageDesc: 'ImageDesc' }, {}, []);
//# sourceMappingURL=normal-blog.component.ngfactory.js.map