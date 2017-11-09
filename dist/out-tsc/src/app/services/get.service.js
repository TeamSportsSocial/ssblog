"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
    }
    GetService.prototype.keywords = function () {
        return this.http.get('https://admin.chaseyoursport.com/blog/getKeywords')
            .map(function (res) { return res.json(); });
    };
    GetService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    GetService.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return GetService;
}());
exports.GetService = GetService;
//# sourceMappingURL=get.service.js.map