"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OpenFullImageComponent = /** @class */ (function () {
    function OpenFullImageComponent() {
        this.openFullImage = false;
    }
    OpenFullImageComponent.prototype.ngOnInit = function () {
    };
    OpenFullImageComponent.prototype.openfullImage = function () {
        this.openFullImage = true;
    };
    OpenFullImageComponent.prototype.closeFullImage = function () {
        this.openFullImage = false;
    };
    OpenFullImageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-open-full-image',
                    templateUrl: './open-full-image.component.html',
                    styleUrls: ['./open-full-image.component.css']
                },] },
    ];
    /** @nocollapse */
    OpenFullImageComponent.ctorParameters = function () { return []; };
    return OpenFullImageComponent;
}());
exports.OpenFullImageComponent = OpenFullImageComponent;
//# sourceMappingURL=open-full-image.component.js.map