"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blogs_component_1 = require("../blogContent/blogs/blogs.component");
var blog_open_component_1 = require("../blogContent/blog-open/blog-open.component");
var login_page_component_1 = require("../login-page/login-page.component");
var editor_panel_component_1 = require("../editor-panel/editor-panel.component");
var admin_panel_component_1 = require("../admin-panel/admin-panel.component");
var search_component_1 = require("../search/search.component");
var edit_blog_component_1 = require("../admin-panel/edit-blog/edit-blog.component");
var auth_gaurd_service_1 = require("../services/auth-gaurd.service");
var router_1 = require("@angular/router");
var appRoute = [
    { path: '', component: blogs_component_1.BlogsComponent },
    { path: 'editorPanel',
        canActivate: [auth_gaurd_service_1.AuthGuard],
        component: editor_panel_component_1.EditorPanelComponent },
    { path: 'login',
        component: login_page_component_1.LoginPageComponent },
    { path: 'adminPanel',
        canActivate: [auth_gaurd_service_1.AuthGuard],
        component: admin_panel_component_1.AdminPanelComponent },
    { path: ':tag', component: search_component_1.SearchComponent },
    { path: ':blogId/edit', component: edit_blog_component_1.EditBlogComponent },
    { path: ':tag/:title/:blogId', component: blog_open_component_1.BlogOpenComponent },
    { path: '**', redirectTo: '' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        router_1.RouterModule.forRoot(appRoute)
                    ],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    RoutingModule.ctorParameters = function () { return []; };
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=routing.module.js.map