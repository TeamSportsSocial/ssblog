"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@angular/core");
var FacebookService = /** @class */ (function () {
    function FacebookService(platformId) {
        this.connected = false;
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        if (common_1.isPlatformBrowser(platformId)) {
            if (window.FB) {
                window.FB.XFBML.parse();
            }
        }
    }
    FacebookService.prototype.init = function () {
        if (this.isBrowser) {
            FB.init({
                appId: '1750709328507665',
                cookie: false,
                xfbml: true,
                version: 'v2.10'
            });
        }
    };
    FacebookService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_2.PLATFORM_ID,] },] },
    ]; };
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map