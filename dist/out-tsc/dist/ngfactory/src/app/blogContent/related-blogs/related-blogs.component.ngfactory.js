"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./related-blogs.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../../src/app/directives/tab-view-available.directive");
var i3 = require("../normal-blog/normal-blog.component.ngfactory");
var i4 = require("../../../../../../src/app/blogContent/normal-blog/normal-blog.component");
var i5 = require("../../../../../../src/app/services/property.service");
var i6 = require("../../../../../../src/app/services/post.service");
var i7 = require("@angular/common");
var i8 = require("../../../../../../src/app/blogContent/related-blogs/related-blogs.component");
var styles_RelatedBlogsComponent = [i0.styles];
exports.RenderType_RelatedBlogsComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_RelatedBlogsComponent, data: {} });
function View_RelatedBlogsComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, 'img', [['class',
                'loading'], ['src', '/assets/images/sports-social-loading.gif']], null, null, null, null, null))], null, null);
}
function View_RelatedBlogsComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, 'div', [['TabViewAvailable',
                ''], ['class', 'col-4']], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(1, 5259264, null, 0, i2.TabViewAvailableDirective, [i1.ElementRef, i1.Renderer2, i1.PLATFORM_ID], null, null), (_l()(),
            i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(3, 0, null, null, 2, 'SportSocial-normal-blog', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 4).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i3.View_NormalBlogComponent_0, i3.RenderType_NormalBlogComponent)), i1.ɵdid(4, 4308992, null, 0, i4.NormalBlogComponent, [i5.PropertyService, i1.Renderer2,
            i6.PostService, i1.NgZone, i1.PLATFORM_ID], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerImage: [2, 'bloggerImage'], bloggerName: [3, 'bloggerName'],
            heading: [4, 'heading'], insertedDate: [5, 'insertedDate'], Content: [6, 'Content'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'], MetaDesc: [12, 'MetaDesc'],
            ImageDesc: [13, 'ImageDesc'] }, null), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n    ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.blogId;
        var currVal_1 = _v.context.$implicit.blogImage;
        var currVal_2 = _v.context.$implicit.bloggerImage;
        var currVal_3 = _v.context.$implicit.bloggerName;
        var currVal_4 = _v.context.$implicit.heading;
        var currVal_5 = _v.context.$implicit.insertedDate;
        var currVal_6 = _v.context.$implicit.Content;
        var currVal_7 = _v.context.$implicit.ViewCount;
        var currVal_8 = _v.context.$implicit.ShareCount;
        var currVal_9 = _v.context.$implicit.keywords;
        var currVal_10 = _v.context.$implicit.exactDate;
        var currVal_11 = _v.context.$implicit.readingTime;
        var currVal_12 = _v.context.$implicit.MetaDesc;
        var currVal_13 = _v.context.$implicit.ImageDesc;
        _ck(_v, 4, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]);
    }, null);
}
function View_RelatedBlogsComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, 'div', [['class',
                'relatedBlog']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(2, 0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Related Articles'])),
        (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RelatedBlogsComponent_2)), i1.ɵdid(6, 16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RelatedBlogsComponent_3)),
        i1.ɵdid(9, 802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n  ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.dataRecived;
        _ck(_v, 6, 0, currVal_0);
        var currVal_1 = _co.relatedBlogDetails;
        _ck(_v, 9, 0, currVal_1);
    }, null);
}
function View_RelatedBlogsComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, 'img', [['class',
                'loading'], ['src', '/assets/images/sports-social-loading.gif']], null, null, null, null, null))], null, null);
}
function View_RelatedBlogsComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, 'div', [['class',
                'col-4']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(2, 0, null, null, 2, 'SportSocial-normal-blog', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i3.View_NormalBlogComponent_0, i3.RenderType_NormalBlogComponent)), i1.ɵdid(3, 4308992, null, 0, i4.NormalBlogComponent, [i5.PropertyService, i1.Renderer2,
            i6.PostService, i1.NgZone, i1.PLATFORM_ID], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerImage: [2, 'bloggerImage'], bloggerName: [3, 'bloggerName'],
            heading: [4, 'heading'], insertedDate: [5, 'insertedDate'], Content: [6, 'Content'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'], MetaDesc: [12,
                'MetaDesc'], ImageDesc: [13, 'ImageDesc'] }, null), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n  ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.blogId;
        var currVal_1 = _v.context.$implicit.blogImage;
        var currVal_2 = _v.context.$implicit.bloggerImage;
        var currVal_3 = _v.context.$implicit.bloggerName;
        var currVal_4 = _v.context.$implicit.heading;
        var currVal_5 = _v.context.$implicit.insertedDate;
        var currVal_6 = _v.context.$implicit.Content;
        var currVal_7 = _v.context.$implicit.ViewCount;
        var currVal_8 = _v.context.$implicit.ShareCount;
        var currVal_9 = _v.context.$implicit.keywords;
        var currVal_10 = _v.context.$implicit.exactDate;
        var currVal_11 = _v.context.$implicit.readingTime;
        var currVal_12 = _v.context.$implicit.MetaDesc;
        var currVal_13 = _v.context.$implicit.ImageDesc;
        _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]);
    }, null);
}
function View_RelatedBlogsComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, 'div', [['class',
                'mobileView relatedBlog']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(2, 0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Related Articles'])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_RelatedBlogsComponent_5)),
        i1.ɵdid(6, 16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n    '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RelatedBlogsComponent_6)),
        i1.ɵdid(9, 802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n  ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.dataRecived;
        _ck(_v, 6, 0, currVal_0);
        var currVal_1 = _co.relatedBlogDetails;
        _ck(_v, 9, 0, currVal_1);
    }, null);
}
function View_RelatedBlogsComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RelatedBlogsComponent_1)), i1.ɵdid(3, 16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RelatedBlogsComponent_4)), i1.ɵdid(6, 16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.mobileView;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.mobileView;
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
exports.View_RelatedBlogsComponent_0 = View_RelatedBlogsComponent_0;
function View_RelatedBlogsComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'SportSocial-related-blogs', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_RelatedBlogsComponent_0, exports.RenderType_RelatedBlogsComponent)), i1.ɵdid(1, 114688, null, 0, i8.RelatedBlogsComponent, [i6.PostService, i5.PropertyService,
            i1.PLATFORM_ID], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_RelatedBlogsComponent_Host_0 = View_RelatedBlogsComponent_Host_0;
exports.RelatedBlogsComponentNgFactory = i1.ɵccf('SportSocial-related-blogs', i8.RelatedBlogsComponent, View_RelatedBlogsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=related-blogs.component.ngfactory.js.map