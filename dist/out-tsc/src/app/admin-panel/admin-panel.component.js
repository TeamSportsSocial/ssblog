"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../services/property.service");
var post_service_1 = require("../services/post.service");
var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent(recieveHeight, renderer, get) {
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.get = get;
        this.pageNumber = 1;
        this.defaultKey = "dfg";
        this.dataRecieved = false;
        this.show = false;
        this.haveData = true;
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.getBlogData();
    };
    AdminPanelComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + "px");
    };
    AdminPanelComponent.prototype.getBlogData = function () {
        var _this = this;
        console.log("true");
        var blogDetails = [];
        this.get.blogData(this.pageNumber, this.defaultKey).subscribe(function (data) {
            console.log(data);
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            _this.show = true;
            _this.dataRecieved = true;
            for (var i in data) {
                blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    Content: data[i].Content,
                    keywords: data[i].keywords,
                });
            }
            _this.blogDetails = blogDetails;
        });
    };
    AdminPanelComponent.prototype.onresize = function () {
        this.setTopMargin();
    };
    AdminPanelComponent.prototype.nextPage = function () {
        var _this = this;
        this.dataRecieved = false;
        this.pageNumber++;
        this.get.blogData(this.pageNumber, this.defaultKey).subscribe(function (data) {
            if (data.length > 0) {
                _this.haveData = true;
            }
            else {
                _this.haveData = false;
            }
            _this.dataRecieved = true;
            for (var i in data) {
                _this.blogDetails.push({
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                    bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                    Content: data[i].Content,
                    keywords: data[i].keywords,
                });
            }
        });
    };
    AdminPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocialBlog-admin-panel',
                    templateUrl: './admin-panel.component.html',
                    styleUrls: ['./admin-panel.component.css']
                },] },
    ];
    /** @nocollapse */
    AdminPanelComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: post_service_1.PostService, },
    ]; };
    AdminPanelComponent.propDecorators = {
        'panel': [{ type: core_1.ViewChild, args: ['panel',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return AdminPanelComponent;
}());
exports.AdminPanelComponent = AdminPanelComponent;
//# sourceMappingURL=admin-panel.component.js.map