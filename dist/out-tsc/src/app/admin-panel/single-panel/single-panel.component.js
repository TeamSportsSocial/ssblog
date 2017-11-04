"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var SinglePanelComponent = /** @class */ (function () {
    function SinglePanelComponent(perform, route, send, renderer) {
        this.perform = perform;
        this.route = route;
        this.send = send;
        this.renderer = renderer;
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
        var _this = this;
        this.perform.deleteBlog(this.blog.blogId).subscribe(function (res) {
            console.log(res);
            if (res.Status === 'Success') {
                console.log('blog Deleted');
                _this.renderer.setStyle(_this.panel.nativeElement, 'display', 'none');
            }
            else {
                console.log('something went wrong');
            }
        });
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
        { type: post_service_1.PostService, },
        { type: router_1.Router, },
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
    ]; };
    SinglePanelComponent.propDecorators = {
        'blogId': [{ type: core_1.Input },],
        'blogImage': [{ type: core_1.Input },],
        'bloggerImage': [{ type: core_1.Input },],
        'bloggerName': [{ type: core_1.Input },],
        'heading': [{ type: core_1.Input },],
        'Content': [{ type: core_1.Input },],
        'keywords': [{ type: core_1.Input },],
        'panel': [{ type: core_1.ViewChild, args: ['panel',] },],
    };
    return SinglePanelComponent;
}());
exports.SinglePanelComponent = SinglePanelComponent;
//# sourceMappingURL=single-panel.component.js.map