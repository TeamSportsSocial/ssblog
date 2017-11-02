"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlogPreviewComponent = /** @class */ (function () {
    function BlogPreviewComponent() {
        this.Preview = true;
    }
    BlogPreviewComponent.prototype.ngOnInit = function () {
    };
    BlogPreviewComponent.prototype.closePreview = function () {
    };
    BlogPreviewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sportsocial-blog-preview',
                    templateUrl: './blog-preview.component.html',
                    styleUrls: ['./blog-preview.component.css']
                },] },
    ];
    /** @nocollapse */
    BlogPreviewComponent.ctorParameters = function () { return []; };
    BlogPreviewComponent.propDecorators = {
        'Preview': [{ type: core_1.Input },],
    };
    return BlogPreviewComponent;
}());
exports.BlogPreviewComponent = BlogPreviewComponent;
//# sourceMappingURL=blog-preview.component.js.map