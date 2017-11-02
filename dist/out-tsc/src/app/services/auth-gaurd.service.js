"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            console.log(authenticated, " init");
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            }
        });
    };
    /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    } */
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: auth_service_1.AuthService, },
        { type: router_1.Router, },
    ]; };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth-gaurd.service.js.map