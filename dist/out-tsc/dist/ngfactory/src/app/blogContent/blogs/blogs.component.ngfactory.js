"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./blogs.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../latest-blog/latest-blog.component.ngfactory");
var i3 = require("../../../../../../src/app/blogContent/latest-blog/latest-blog.component");
var i4 = require("../../../../../../src/app/services/property.service");
var i5 = require("../../../../../../src/app/services/post.service");
var i6 = require("../../../../../../src/app/services/window-ref.service");
var i7 = require("@angular/common");
var i8 = require("../normal-blog/normal-blog.component.ngfactory");
var i9 = require("../../../../../../src/app/blogContent/normal-blog/normal-blog.component");
var i10 = require("../trending-blog/trending-blog.component.ngfactory");
var i11 = require("../../../../../../src/app/blogContent/trending-blog/trending-blog.component");
var i12 = require("../../../../../../src/app/directives/tab-view-available.directive");
var i13 = require("../../subscribe-card/subscribe-card.component.ngfactory");
var i14 = require("../../../../../../src/app/subscribe-card/subscribe-card.component");
var i15 = require("../../../../../../src/app/services/status.service");
var i16 = require("../../blog-footer/blog-footer.component.ngfactory");
var i17 = require("../../../../../../src/app/blog-footer/blog-footer.component");
var i18 = require("../../keywords/keywords.component.ngfactory");
var i19 = require("../../../../../../src/app/keywords/keywords.component");
var i20 = require("@angular/router");
var i21 = require("../../../../../../src/app/services/get.service");
var i22 = require("../../../../../../src/app/blogContent/blogs/blogs.component");
var i23 = require("@angular/platform-browser");
var styles_BlogsComponent = [i0.styles];
exports.RenderType_BlogsComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_BlogsComponent, data: {} });
function View_BlogsComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 5, 'div', [['class',
                'latestBlog']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-latest-blog', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_LatestBlogComponent_0, i2.RenderType_LatestBlogComponent)), i1.ɵdid(4308992, null, 0, i3.LatestBlogComponent, [i4.PropertyService, i1.Renderer2,
            i5.PostService, i6.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerName: [2, 'bloggerName'], bloggerImage: [3, 'bloggerImage'],
            heading: [4, 'heading'], Content: [5, 'Content'], insertedDate: [6, 'insertedDate'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'] }, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.blogId;
        var currVal_1 = _v.context.$implicit.blogImage;
        var currVal_2 = _v.context.$implicit.bloggerName;
        var currVal_3 = _v.context.$implicit.bloggerImage;
        var currVal_4 = _v.context.$implicit.heading;
        var currVal_5 = _v.context.$implicit.Content;
        var currVal_6 = _v.context.$implicit.insertedDate;
        var currVal_7 = _v.context.$implicit.ViewCount;
        var currVal_8 = _v.context.$implicit.ShareCount;
        var currVal_9 = _v.context.$implicit.keywords;
        var currVal_10 = _v.context.$implicit.exactDate;
        var currVal_11 = _v.context.$implicit.readingTime;
        _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]);
    }, null);
}
function View_BlogsComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)), i1.ɵdid(278528, null, 0, i7.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef,
            i1.Renderer], { ngClass: [0, 'ngClass'] }, null), i1.ɵpod({ 'col-6': 0, 'col-12': 1 }),
        (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-normal-blog', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 5).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i8.View_NormalBlogComponent_0, i8.RenderType_NormalBlogComponent)), i1.ɵdid(4308992, null, 0, i9.NormalBlogComponent, [i4.PropertyService, i1.Renderer2,
            i5.PostService, i1.NgZone, i6.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerImage: [2, 'bloggerImage'], bloggerName: [3, 'bloggerName'],
            heading: [4, 'heading'], insertedDate: [5, 'insertedDate'], Content: [6, 'Content'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'] }, null),
        (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, (_v.context.index != 2), (_v.context.index === 2));
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.blogId;
        var currVal_2 = _v.context.$implicit.blogImage;
        var currVal_3 = _v.context.$implicit.bloggerImage;
        var currVal_4 = _v.context.$implicit.bloggerName;
        var currVal_5 = _v.context.$implicit.heading;
        var currVal_6 = _v.context.$implicit.insertedDate;
        var currVal_7 = _v.context.$implicit.Content;
        var currVal_8 = _v.context.$implicit.ViewCount;
        var currVal_9 = _v.context.$implicit.ShareCount;
        var currVal_10 = _v.context.$implicit.keywords;
        var currVal_11 = _v.context.$implicit.exactDate;
        var currVal_12 = _v.context.$implicit.readingTime;
        _ck(_v, 5, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7,
            currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]);
    }, null);
}
function View_BlogsComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'trendingBlogs']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-trending-blog', [], null, null, null, i10.View_TrendingBlogComponent_0, i10.RenderType_TrendingBlogComponent)),
        i1.ɵdid(114688, null, 0, i11.TrendingBlogComponent, [i5.PostService], null, null), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        _ck(_v, 3, 0);
    }, null);
}
function View_BlogsComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 8, 'div', [['TabViewAvailable',
                '']], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i7.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { ngClass: [0, 'ngClass'] }, null),
        i1.ɵpod({ 'col-8': 0, 'col-4': 1 }), i1.ɵdid(5259264, null, 0, i12.TabViewAvailableDirective, [i1.ElementRef, i1.Renderer2, i6.WindowRefService], null, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-normal-blog', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 6).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i8.View_NormalBlogComponent_0, i8.RenderType_NormalBlogComponent)), i1.ɵdid(4308992, null, 0, i9.NormalBlogComponent, [i4.PropertyService, i1.Renderer2,
            i5.PostService, i1.NgZone, i6.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerImage: [2, 'bloggerImage'], bloggerName: [3, 'bloggerName'],
            heading: [4, 'heading'], insertedDate: [5, 'insertedDate'], Content: [6, 'Content'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'] }, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, ((_v.context.index % 5) === 0), ((_v.context.index % 5) != 0));
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.blogId;
        var currVal_2 = _v.context.$implicit.blogImage;
        var currVal_3 = _v.context.$implicit.bloggerImage;
        var currVal_4 = _v.context.$implicit.bloggerName;
        var currVal_5 = _v.context.$implicit.heading;
        var currVal_6 = _v.context.$implicit.insertedDate;
        var currVal_7 = _v.context.$implicit.Content;
        var currVal_8 = _v.context.$implicit.ViewCount;
        var currVal_9 = _v.context.$implicit.ShareCount;
        var currVal_10 = _v.context.$implicit.keywords;
        var currVal_11 = _v.context.$implicit.exactDate;
        var currVal_12 = _v.context.$implicit.readingTime;
        _ck(_v, 6, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7,
            currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]);
    }, null);
}
function View_BlogsComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, [[1, 0], ['blog', 1]], null, 17, 'div', [['class',
                'blog']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_2)), i1.ɵdid(802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 5, 'div', [['TabViewAvailable', ''],
            ['class', 'col-8']], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 6).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(5259264, null, 0, i12.TabViewAvailableDirective, [i1.ElementRef, i1.Renderer2, i6.WindowRefService], null, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_3)), i1.ɵdid(802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵted(null, ['        \n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_4)), i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_5)), i1.ɵdid(802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n    \n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.latestBlogDetails;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.topBlogDetails;
        _ck(_v, 9, 0, currVal_1);
        var currVal_2 = _co.showTrendingBlock();
        _ck(_v, 13, 0, currVal_2);
        var currVal_3 = _co.restBlogDetails;
        _ck(_v, 16, 0, currVal_3);
    }, null);
}
function View_BlogsComponent_7(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 5, 'div', [['class',
                'latestBlog col-4']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-latest-blog', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_LatestBlogComponent_0, i2.RenderType_LatestBlogComponent)), i1.ɵdid(4308992, null, 0, i3.LatestBlogComponent, [i4.PropertyService, i1.Renderer2, i5.PostService,
            i6.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1, 'blogImage'], bloggerName: [2,
                'bloggerName'], bloggerImage: [3, 'bloggerImage'], heading: [4, 'heading'], Content: [5,
                'Content'], insertedDate: [6, 'insertedDate'], ViewCount: [7, 'ViewCount'], ShareCount: [8,
                'ShareCount'], keywords: [9, 'keywords'], exactDate: [10, 'exactDate'], readingTime: [11,
                'readingTime'] }, null), (_l()(), i1.ɵted(null, ['\n        '])),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.blogId;
        var currVal_1 = _v.context.$implicit.blogImage;
        var currVal_2 = _v.context.$implicit.bloggerName;
        var currVal_3 = _v.context.$implicit.bloggerImage;
        var currVal_4 = _v.context.$implicit.heading;
        var currVal_5 = _v.context.$implicit.Content;
        var currVal_6 = _v.context.$implicit.insertedDate;
        var currVal_7 = _v.context.$implicit.ViewCount;
        var currVal_8 = _v.context.$implicit.ShareCount;
        var currVal_9 = _v.context.$implicit.keywords;
        var currVal_10 = _v.context.$implicit.exactDate;
        var currVal_11 = _v.context.$implicit.readingTime;
        _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]);
    }, null);
}
function View_BlogsComponent_8(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 5, 'div', [['class',
                'col-4']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-normal-blog', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i8.View_NormalBlogComponent_0, i8.RenderType_NormalBlogComponent)), i1.ɵdid(4308992, null, 0, i9.NormalBlogComponent, [i4.PropertyService, i1.Renderer2,
            i5.PostService, i1.NgZone, i6.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerImage: [2, 'bloggerImage'], bloggerName: [3, 'bloggerName'],
            heading: [4, 'heading'], insertedDate: [5, 'insertedDate'], Content: [6, 'Content'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'] }, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
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
        _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]);
    }, null);
}
function View_BlogsComponent_9(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'suscribeCard']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-subscribe-card', [], null, null, null, i13.View_SubscribeCardComponent_0, i13.RenderType_SubscribeCardComponent)),
        i1.ɵdid(114688, null, 0, i14.SubscribeCardComponent, [i5.PostService, i15.StatusService,
            i1.Renderer2], null, null), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        _ck(_v, 3, 0);
    }, null);
}
function View_BlogsComponent_10(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 5, 'div', [['class',
                'col-4']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-normal-blog', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i8.View_NormalBlogComponent_0, i8.RenderType_NormalBlogComponent)), i1.ɵdid(4308992, null, 0, i9.NormalBlogComponent, [i4.PropertyService, i1.Renderer2,
            i5.PostService, i1.NgZone, i6.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1,
                'blogImage'], bloggerImage: [2, 'bloggerImage'], bloggerName: [3, 'bloggerName'],
            heading: [4, 'heading'], insertedDate: [5, 'insertedDate'], Content: [6, 'Content'],
            ViewCount: [7, 'ViewCount'], ShareCount: [8, 'ShareCount'], keywords: [9, 'keywords'],
            exactDate: [10, 'exactDate'], readingTime: [11, 'readingTime'] }, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
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
        _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]);
    }, null);
}
function View_BlogsComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, [[1, 0], ['blog', 1]], null, 13, 'div', [['class',
                'blog mobileView']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_7)), i1.ɵdid(802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_8)),
        i1.ɵdid(802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_9)), i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_10)), i1.ɵdid(802816, null, 0, i7.NgForOf, [i1.ViewContainerRef,
            i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null),
        (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.latestBlogDetails;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.topBlogDetails;
        _ck(_v, 6, 0, currVal_1);
        var currVal_2 = _co.show;
        _ck(_v, 9, 0, currVal_2);
        var currVal_3 = _co.restBlogDetails;
        _ck(_v, 12, 0, currVal_3);
    }, null);
}
function View_BlogsComponent_12(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.nextPage() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Load More']))], null, null);
}
function View_BlogsComponent_13(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 0, 'img', [['class',
                'loading'], ['src', '/assets/images/sports-social-loading.gif']], null, null, null, null, null))], null, null);
}
function View_BlogsComponent_11(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_12)), i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_13)), i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.dataRecived;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = !_co.dataRecived;
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
function View_BlogsComponent_14(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class',
                'noMoreData']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' !!!']))], null, null);
}
function View_BlogsComponent_15(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-blog-footer', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i16.View_BlogFooterComponent_0, i16.RenderType_BlogFooterComponent)), i1.ɵdid(114688, null, 0, i17.BlogFooterComponent, [i5.PostService, i1.Renderer2, i15.StatusService,
            i6.WindowRefService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
function View_BlogsComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(671088640, 1, { blog: 0 }), (_l()(), i1.ɵeld(0, null, null, 1, 'SportSocialBlog-keywords', [], null, [['window',
                'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 2).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i18.View_KeywordsComponent_0, i18.RenderType_KeywordsComponent)), i1.ɵdid(12697600, null, 0, i19.KeywordsComponent, [i1.Renderer2, i4.PropertyService, i4.PropertyService,
            i5.PostService, i4.PropertyService, i20.Router, i4.PropertyService, i21.GetService], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_1)),
        i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, [' \n        \n'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_6)),
        i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_11)),
        i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_14)),
        i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_BlogsComponent_15)),
        i1.ɵdid(16384, null, 0, i7.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, [' \n          \n       ']))], function (_ck, _v) {
        var _co = _v.component;
        _ck(_v, 2, 0);
        var currVal_0 = !_co.mobileView;
        _ck(_v, 5, 0, currVal_0);
        var currVal_1 = _co.mobileView;
        _ck(_v, 8, 0, currVal_1);
        var currVal_2 = _co.haveData;
        _ck(_v, 11, 0, currVal_2);
        var currVal_3 = !_co.haveData;
        _ck(_v, 14, 0, currVal_3);
        var currVal_4 = _co.show;
        _ck(_v, 17, 0, currVal_4);
    }, null);
}
exports.View_BlogsComponent_0 = View_BlogsComponent_0;
function View_BlogsComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-blogs', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_BlogsComponent_0, exports.RenderType_BlogsComponent)), i1.ɵdid(12697600, null, 0, i22.BlogsComponent, [i4.PropertyService, i1.Renderer2, i5.PostService, i23.Meta,
            i6.WindowRefService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_BlogsComponent_Host_0 = View_BlogsComponent_Host_0;
exports.BlogsComponentNgFactory = i1.ɵccf('SportSocial-blogs', i22.BlogsComponent, View_BlogsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=blogs.component.ngfactory.js.map