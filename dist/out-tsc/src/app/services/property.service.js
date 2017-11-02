"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var Subject_1 = require("rxjs/Subject");
var PropertyService = /** @class */ (function () {
    function PropertyService() {
        this.ofHeader = new ReplaySubject_1.ReplaySubject();
        this.ofKeyWords = new ReplaySubject_1.ReplaySubject();
        this.ofBlogCard = new ReplaySubject_1.ReplaySubject();
        this.detailsofBlog = new ReplaySubject_1.ReplaySubject();
        this.saveDetailsOfBlog = new ReplaySubject_1.ReplaySubject();
        this.ofsearchBlog = new Subject_1.Subject();
    }
    PropertyService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PropertyService.ctorParameters = function () { return []; };
    return PropertyService;
}());
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map