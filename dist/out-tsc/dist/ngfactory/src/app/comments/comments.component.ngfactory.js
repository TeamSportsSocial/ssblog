"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./comments.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../src/app/comments/comments.component");
var i3 = require("@angular/forms");
var i4 = require("@angular/common");
var i5 = require("../../../../../src/app/services/facebook.service");
var i6 = require("@angular/http");
var i7 = require("../../../../../src/app/services/post.service");
var styles_CommentsComponent = [i0.styles];
exports.RenderType_CommentsComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_CommentsComponent, data: {} });
function View_CommentsComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 18, 'div', [['class',
                'loadComment']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'imageHolder']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'img', [['alt', '']], [[8, 'src',
                4]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'commentBox']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 4, 'p', [['class',
                'userName']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n       ', '\n       '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [['class', 'commentDate']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n   \n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class',
                'userComment']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n      ', '\n    '])), (_l()(),
            i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n']))], null, function (_ck, _v) {
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit.image, '');
        _ck(_v, 4, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.userName;
        _ck(_v, 10, 0, currVal_1);
        var currVal_2 = _v.context.$implicit.commentDate;
        _ck(_v, 12, 0, currVal_2);
        var currVal_3 = _v.context.$implicit.comment;
        _ck(_v, 16, 0, currVal_3);
    });
}
function View_CommentsComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { commentBox: 0 }), i1.ɵqud(402653184, 2, { textArea: 0 }),
        i1.ɵqud(402653184, 3, { profileImage: 0 }), (_l()(), i1.ɵeld(0, [[1, 0], ['commentBox',
                1]], null, 24, 'div', [['class', 'comment']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class',
                'imageHolder']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [], [[8, 'src', 4]], [[null,
                'error']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('error' === en)) {
                var pd_0 = (_co.setDefault() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 16, 'div', [['class', 'commentBox ']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, [[2, 0], ['textArea', 1]], null, 7, 'textarea', [['class',
                'text'], ['name', 'desc'], ['ngModel', ''], ['placeholder', 'Add a Comment...'],
            ['required', '']], [[1, 'required', 0], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 13)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 13).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 13)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 13)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(16384, null, 0, i3.RequiredValidator, [], { required: [0, 'required'] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [i3.RequiredValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.NgModel, [[8,
                null], [2, i3.NG_VALIDATORS], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'], model: [1, 'model'] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.NgModel]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'commentButton']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.post() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, [' ', ''])),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CommentsComponent_1)),
        i1.ɵdid(802816, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_9 = '';
        _ck(_v, 14, 0, currVal_9);
        var currVal_10 = 'desc';
        var currVal_11 = '';
        _ck(_v, 17, 0, currVal_10, currVal_11);
        var currVal_13 = _co.recivedComment.reverse();
        _ck(_v, 30, 0, currVal_13);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _co.profilePicture, '');
        _ck(_v, 7, 0, currVal_0);
        var currVal_1 = (i1.ɵnov(_v, 14).required ? '' : null);
        var currVal_2 = i1.ɵnov(_v, 19).ngClassUntouched;
        var currVal_3 = i1.ɵnov(_v, 19).ngClassTouched;
        var currVal_4 = i1.ɵnov(_v, 19).ngClassPristine;
        var currVal_5 = i1.ɵnov(_v, 19).ngClassDirty;
        var currVal_6 = i1.ɵnov(_v, 19).ngClassValid;
        var currVal_7 = i1.ɵnov(_v, 19).ngClassInvalid;
        var currVal_8 = i1.ɵnov(_v, 19).ngClassPending;
        _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_12 = (_co.isConnected ? 'Comment' : 'Login to Comment');
        _ck(_v, 24, 0, currVal_12);
    });
}
exports.View_CommentsComponent_0 = View_CommentsComponent_0;
function View_CommentsComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'SportSocial-comments', [], null, null, null, View_CommentsComponent_0, exports.RenderType_CommentsComponent)), i1.ɵdid(114688, null, 0, i2.CommentsComponent, [i1.Renderer2, i5.FacebookService, i6.Http, i7.PostService, i7.PostService, i7.PostService,
            i1.NgZone, i1.PLATFORM_ID], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_CommentsComponent_Host_0 = View_CommentsComponent_Host_0;
exports.CommentsComponentNgFactory = i1.ɵccf('SportSocial-comments', i2.CommentsComponent, View_CommentsComponent_Host_0, { BlogId: 'BlogId' }, {}, []);
//# sourceMappingURL=comments.component.ngfactory.js.map