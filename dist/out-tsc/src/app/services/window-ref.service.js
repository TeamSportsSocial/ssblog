"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function _window() {
    return window;
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    WindowRefService.ctorParameters = function () { return []; };
    return WindowRefService;
}());
exports.WindowRefService = WindowRefService;
//# sourceMappingURL=window-ref.service.js.map