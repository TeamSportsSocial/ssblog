"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var KeywordComponent = /** @class */ (function () {
    function KeywordComponent(renderer) {
        this.renderer = renderer;
    }
    KeywordComponent.prototype.ngOnInit = function () {
    };
    KeywordComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocialBlog-keyword',
                    templateUrl: './keyword.component.html',
                    styleUrls: ['./keyword.component.css']
                },] },
    ];
    /** @nocollapse */
    KeywordComponent.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
    ]; };
    KeywordComponent.propDecorators = {
        'title': [{ type: core_1.Input },],
        'Keyword': [{ type: core_1.ViewChild, args: ['Keyword',] },],
    };
    return KeywordComponent;
}());
exports.KeywordComponent = KeywordComponent;
//# sourceMappingURL=keyword.component.js.map