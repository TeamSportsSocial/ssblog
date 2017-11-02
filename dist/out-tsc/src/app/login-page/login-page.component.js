"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.wrongPassword = false;
        this.loading = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginPageComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.code === "Enter") {
            this.checkLogin();
        }
    };
    LoginPageComponent.prototype.checkLogin = function () {
        var UserName = this.userName.nativeElement.value;
        var Password = this.password.nativeElement.value;
        console.log(typeof (UserName), typeof (Password));
        if (UserName == "sportsocial" && Password == "cys") {
            this.wrongPassword = false;
            this.authService.login();
            this.router.navigate(['/' + this.returnUrl]);
        }
        else {
            this.wrongPassword = true;
        }
    };
    LoginPageComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocialBlog-login-page',
                    templateUrl: './login-page.component.html',
                    styleUrls: ['./login-page.component.css']
                },] },
    ];
    /** @nocollapse */
    LoginPageComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: router_1.Router, },
        { type: auth_service_1.AuthService, },
    ]; };
    LoginPageComponent.propDecorators = {
        'userName': [{ type: core_1.ViewChild, args: ['userName',] },],
        'password': [{ type: core_1.ViewChild, args: ['password',] },],
        'handleKeyboardEvent': [{ type: core_1.HostListener, args: ['document:keypress', ['$event'],] },],
    };
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map