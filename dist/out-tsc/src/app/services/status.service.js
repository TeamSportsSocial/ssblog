"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var StatusService = /** @class */ (function () {
    function StatusService() {
        this.ofSubscrition = new ReplaySubject_1.ReplaySubject();
    }
    StatusService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    StatusService.ctorParameters = function () { return []; };
    return StatusService;
}());
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map