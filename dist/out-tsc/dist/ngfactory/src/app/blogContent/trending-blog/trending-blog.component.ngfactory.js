"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./trending-blog.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("./trending-blog-card/trending-blog-card.component.ngfactory");
var i3 = require("../../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component");
var i4 = require("../../../../../../src/app/services/property.service");
var i5 = require("../../../../../../src/app/services/window-ref.service");
var i6 = require("../../../../../../src/app/directives/maintain-height-width-ratio.directive");
var i7 = require("../../subscribe-card/subscribe-card.component.ngfactory");
var i8 = require("../../../../../../src/app/subscribe-card/subscribe-card.component");
var i9 = require("../../../../../../src/app/services/post.service");
var i10 = require("../../../../../../src/app/services/status.service");
var i11 = require("@angular/common");
var i12 = require("../../../../../../src/app/blogContent/trending-blog/trending-blog.component");
var styles_TrendingBlogComponent = [i0.styles];
exports.RenderType_TrendingBlogComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_TrendingBlogComponent, data: {} });
function View_TrendingBlogComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 5, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 2, 'SportSocial-trending-blog-card', [], null, null, null, i2.View_TrendingBlogCardComponent_0, i2.RenderType_TrendingBlogCardComponent)),
        i1.ɵdid(4308992, null, 0, i3.TrendingBlogCardComponent, [i4.PropertyService,
            i5.WindowRefService], { blogId: [0, 'blogId'], blogImage: [1, 'blogImage'], bloggerImage: [2,
                'bloggerImage'], bloggerName: [3, 'bloggerName'], heading: [4, 'heading'], insertedDate: [5,
                'insertedDate'], Content: [6, 'Content'], ViewCount: [7, 'ViewCount'], ShareCount: [8,
                'ShareCount'], keywords: [9, 'keywords'], exactDate: [10, 'exactDate'], readingTime: [11,
                'readingTime'] }, null), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
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
function View_TrendingBlogComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 11, 'div', [['MaintainHeightWidthRatio',
                '']], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(4210688, null, 0, i6.MaintainHeightWidthRatioDirective, [i1.ElementRef, i1.Renderer2], null, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-subscribe-card', [], null, null, null, i7.View_SubscribeCardComponent_0, i7.RenderType_SubscribeCardComponent)), i1.ɵdid(114688, null, 0, i8.SubscribeCardComponent, [i9.PostService, i10.StatusService, i1.Renderer2], null, null),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['class', 'popular'], ['href', '#']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n       Most Popular >>\n    '])),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TrendingBlogComponent_1)), i1.ɵdid(802816, null, 0, i11.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n   \n']))], function (_ck, _v) {
        var _co = _v.component;
        _ck(_v, 4, 0);
        var currVal_0 = _co.blogDetails;
        _ck(_v, 10, 0, currVal_0);
    }, null);
}
exports.View_TrendingBlogComponent_0 = View_TrendingBlogComponent_0;
function View_TrendingBlogComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-trending-blog', [], null, null, null, View_TrendingBlogComponent_0, exports.RenderType_TrendingBlogComponent)), i1.ɵdid(114688, null, 0, i12.TrendingBlogComponent, [i9.PostService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_TrendingBlogComponent_Host_0 = View_TrendingBlogComponent_Host_0;
exports.TrendingBlogComponentNgFactory = i1.ɵccf('SportSocial-trending-blog', i12.TrendingBlogComponent, View_TrendingBlogComponent_Host_0, {}, {}, []);
//# sourceMappingURL=trending-blog.component.ngfactory.js.map