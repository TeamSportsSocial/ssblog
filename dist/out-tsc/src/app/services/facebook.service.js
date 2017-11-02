"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FacebookService = /** @class */ (function () {
    function FacebookService() {
        this.connected = false;
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }
    FacebookService.prototype.init = function () {
        FB.init({
            appId: '1750709328507665',
            cookie: false,
            xfbml: true,
            version: 'v2.10'
        });
    };
    FacebookService.prototype.getLoginStatus = function () {
        FB.getLoginStatus(function (response) {
            console.log(response, ' conect');
            if (response.status === 'connected') {
                console.log('login');
                FB.api('/me?fields=id,name,first_name,gender,picture.type(large),age_range,friends', function (result) {
                    if (result && !result.error) {
                        this.user = result;
                        console.log(this.user, ' conect');
                    }
                    else {
                        console.log(result.error);
                    }
                });
            }
        });
    };
    FacebookService.prototype.login = function () {
        FB.login(function (response) {
            if (response.status === 'connected') {
                // this.me(response.authResponse.userID, response.authResponse.accessToken);
                // Logged into your app and Facebook.
            }
            else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
            }
            else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
            }
        }, { scope: 'user_friends,email' });
    };
    FacebookService.prototype.me = function () {
        FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends', function (result) {
            if (result && !result.error) {
                this.user = result;
                console.log(this.user);
            }
            else {
                console.log(result.error);
            }
        });
    };
    FacebookService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return []; };
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map