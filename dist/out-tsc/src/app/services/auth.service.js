"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loggedIn = true;
        console.log(this.loggedIn, " login");
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    AuthService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return []; };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map