"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var property_service_1 = require("../../services/property.service");
var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(recieveHeight, renderer, recieve) {
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.recieve = recieve;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.editBlog);
        this.setTopMargin();
        this.recieve.detailsofBlog.subscribe(function (data) {
            console.log(data['bloggerName']);
            _this.title.nativeElement.value = data['heading'];
            _this.desc.nativeElement.value = data['Content'];
            _this.name.nativeElement.value = data['bloggerName'];
            _this.keywords.nativeElement.value = data['keywords'];
            //console.log(this.title, this.title.nativeElement.value)
        });
    };
    EditBlogComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.editBlog.nativeElement, 'margin-top', this.topMargin + 10 + "px");
    };
    EditBlogComponent.prototype.onresize = function () {
        this.setTopMargin();
    };
    EditBlogComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-edit-blog',
                    templateUrl: './edit-blog.component.html',
                    styleUrls: ['./edit-blog.component.css']
                },] },
    ];
    /** @nocollapse */
    EditBlogComponent.ctorParameters = function () { return [
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: property_service_1.PropertyService, },
    ]; };
    EditBlogComponent.propDecorators = {
        'editBlog': [{ type: core_1.ViewChild, args: ['editBlog',] },],
        'editBlogForm': [{ type: core_1.ViewChild, args: ['f',] },],
        'desc': [{ type: core_1.ViewChild, args: ['desc',] },],
        'title': [{ type: core_1.ViewChild, args: ['title',] },],
        'name': [{ type: core_1.ViewChild, args: ['name',] },],
        'keywords': [{ type: core_1.ViewChild, args: ['keywords',] },],
        'onresize': [{ type: core_1.HostListener, args: ['window:resize', [],] },],
    };
    return EditBlogComponent;
}());
exports.EditBlogComponent = EditBlogComponent;
//# sourceMappingURL=edit-blog.component.js.map