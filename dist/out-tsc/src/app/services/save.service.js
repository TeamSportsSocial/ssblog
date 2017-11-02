"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var SaveService = /** @class */ (function () {
    function SaveService() {
        this.detailsOfBlog = new ReplaySubject_1.ReplaySubject();
        this.blog = new ReplaySubject_1.ReplaySubject();
    }
    SaveService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SaveService.ctorParameters = function () { return []; };
    return SaveService;
}());
exports.SaveService = SaveService;
//# sourceMappingURL=save.service.js.map