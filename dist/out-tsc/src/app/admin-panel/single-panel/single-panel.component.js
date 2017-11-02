"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var property_service_1 = require("../../services/property.service");
var SinglePanelComponent = /** @class */ (function () {
    function SinglePanelComponent(route, send) {
        this.route = route;
        this.send = send;
    }
    SinglePanelComponent.prototype.ngOnInit = function () {
        this.blog = {
            blogId: this.blogId,
            blogImage: this.blogImage,
            bloggerName: this.bloggerName,
            bloggerImage: this.bloggerImage,
            heading: this.heading,
            Content: this.Content,
            keywords: this.keywords
        };
    };
    SinglePanelComponent.prototype.editBlog = function () {
        this.route.navigate(['/' + this.blogId + '/edit']);
        this.send.detailsofBlog.next(this.blog);
    };
    SinglePanelComponent.prototype.deleteBlog = function () {
    };
    SinglePanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocial-single-panel',
                    templateUrl: './single-panel.component.html',
                    styleUrls: ['./single-panel.component.css']
                },] },
    ];
    /** @nocollapse */
    SinglePanelComponent.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: property_service_1.PropertyService, },
    ]; };
    SinglePanelComponent.propDecorators = {
        'blogId': [{ type: core_1.Input },],
        'blogImage': [{ type: core_1.Input },],
        'bloggerImage': [{ type: core_1.Input },],
        'bloggerName': [{ type: core_1.Input },],
        'heading': [{ type: core_1.Input },],
        'Content': [{ type: core_1.Input },],
        'keywords': [{ type: core_1.Input },],
    };
    return SinglePanelComponent;
}());
exports.SinglePanelComponent = SinglePanelComponent;
//# sourceMappingURL=single-panel.component.js.map