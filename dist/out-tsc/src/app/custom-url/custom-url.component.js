"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CustomUrlComponent = /** @class */ (function () {
    function CustomUrlComponent() {
    }
    CustomUrlComponent.prototype.ngOnInit = function () {
    };
    /* parse(url: any): UrlTree {
      let dus = new DefaultUrlSerializer();
      return dus.parse(url);
    } */
    /* serialize(tree: UrlTree): any {
        let dus = new DefaultUrlSerializer(),
            path = dus.serialize(tree);
        // use your regex to replace as per your requirement.
        return path.replace(/\+/g, '%20');
    } */
    CustomUrlComponent.prototype.serialize = function (tree) {
        var dus = new router_1.DefaultUrlSerializer();
        // Use the default serializer to create a url and replace any spaces with + signs
        return dus.serialize(tree).replace(/%20/g, '-');
    };
    CustomUrlComponent.prototype.parse = function (url) {
        var dus = new router_1.DefaultUrlSerializer();
        // Change plus signs to encoded spaces
        url = url.replace(/\+/g, '%20');
        // Use the default serializer that you can import to just do the 
        // default parsing now that you have fixed the url.
        return dus.parse(url);
    };
    CustomUrlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-custom-url',
                    templateUrl: './custom-url.component.html',
                    styleUrls: ['./custom-url.component.css']
                },] },
    ];
    /** @nocollapse */
    CustomUrlComponent.ctorParameters = function () { return []; };
    return CustomUrlComponent;
}());
exports.CustomUrlComponent = CustomUrlComponent;
//# sourceMappingURL=custom-url.component.js.map