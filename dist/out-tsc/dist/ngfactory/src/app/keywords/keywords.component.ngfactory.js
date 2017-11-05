"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./keywords.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("./keyword/keyword.component.ngfactory");
var i3 = require("../../../../../src/app/keywords/keyword/keyword.component");
var i4 = require("@angular/common");
var i5 = require("../../../../../src/app/keywords/keywords.component");
var i6 = require("../../../../../src/app/services/property.service");
var i7 = require("../../../../../src/app/services/post.service");
var i8 = require("@angular/router");
var i9 = require("../../../../../src/app/services/get.service");
var styles_KeywordsComponent = [i0.styles];
exports.RenderType_KeywordsComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_KeywordsComponent, data: {} });
function View_KeywordsComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 2, 'SportSocialBlog-keyword', [['class', 'keyword'], ['role', 'button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.send(_v.context.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_KeywordComponent_0, i2.RenderType_KeywordComponent)), i1.ɵdid(114688, null, 0, i3.KeywordComponent, [i1.Renderer2], { title: [0, 'title'] }, null),
        (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
function View_KeywordsComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { Keywords: 0 }), (_l()(), i1.ɵeld(0, [[1, 0], ['Keywords',
                1]], null, 7, 'div', [['class', 'keywords']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵeld(0, null, null, 4, 'div', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_KeywordsComponent_1)), i1.ɵdid(802816, null, 0, i4.NgForOf, [i1.ViewContainerRef,
            i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.keywords;
        _ck(_v, 6, 0, currVal_0);
    }, null);
}
exports.View_KeywordsComponent_0 = View_KeywordsComponent_0;
function View_KeywordsComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocialBlog-keywords', [], null, [['window', 'resize']], function (_v, en, $event) {
            var ad = true;
            if (('window:resize' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_KeywordsComponent_0, exports.RenderType_KeywordsComponent)), i1.ɵdid(12697600, null, 0, i5.KeywordsComponent, [i1.PLATFORM_ID, i1.Renderer2, i6.PropertyService, i6.PropertyService,
            i7.PostService, i6.PropertyService, i8.Router, i6.PropertyService, i9.GetService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_KeywordsComponent_Host_0 = View_KeywordsComponent_Host_0;
exports.KeywordsComponentNgFactory = i1.ɵccf('SportSocialBlog-keywords', i5.KeywordsComponent, View_KeywordsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=keywords.component.ngfactory.js.map