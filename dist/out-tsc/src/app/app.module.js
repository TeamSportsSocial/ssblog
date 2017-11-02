"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var editor_panel_component_1 = require("./editor-panel/editor-panel.component");
var admin_panel_component_1 = require("./admin-panel/admin-panel.component");
var login_page_component_1 = require("./login-page/login-page.component");
var blog_header_component_1 = require("./blog-header/blog-header.component");
var trending_blog_component_1 = require("./blogContent/trending-blog/trending-blog.component");
var keywords_component_1 = require("./keywords/keywords.component");
var keyword_component_1 = require("./keywords/keyword/keyword.component");
var subscribe_card_component_1 = require("./subscribe-card/subscribe-card.component");
var trending_blog_card_component_1 = require("./blogContent/trending-blog/trending-blog-card/trending-blog-card.component");
var latest_blog_component_1 = require("./blogContent/latest-blog/latest-blog.component");
var normal_blog_component_1 = require("./blogContent/normal-blog/normal-blog.component");
var blogs_component_1 = require("./blogContent/blogs/blogs.component");
var blog_open_component_1 = require("./blogContent/blog-open/blog-open.component");
var property_service_1 = require("./services/property.service");
var post_service_1 = require("./services/post.service");
var get_service_1 = require("./services/get.service");
var save_service_1 = require("./services/save.service");
var status_service_1 = require("./services/status.service");
var auth_service_1 = require("./services/auth.service");
var auth_gaurd_service_1 = require("./services/auth-gaurd.service");
var facebook_service_1 = require("./services/facebook.service");
var window_ref_service_1 = require("./services/window-ref.service");
var maintain_height_width_ratio_directive_1 = require("./directives/maintain-height-width-ratio.directive");
var tab_view_available_directive_1 = require("./directives/tab-view-available.directive");
var routing_module_1 = require("./routing/routing.module");
var blog_footer_component_1 = require("./blog-footer/blog-footer.component");
var search_component_1 = require("./search/search.component");
var comments_component_1 = require("./comments/comments.component");
var router_1 = require("@angular/router");
var message_component_1 = require("./message/message.component");
var custom_url_component_1 = require("./custom-url/custom-url.component");
var open_full_image_component_1 = require("./open-full-image/open-full-image.component");
var related_blogs_component_1 = require("./blogContent/related-blogs/related-blogs.component");
var single_panel_component_1 = require("./admin-panel/single-panel/single-panel.component");
var edit_blog_component_1 = require("./admin-panel/edit-blog/edit-blog.component");
var blog_preview_component_1 = require("./editor-panel/blog-preview/blog-preview.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        editor_panel_component_1.EditorPanelComponent,
                        admin_panel_component_1.AdminPanelComponent,
                        login_page_component_1.LoginPageComponent,
                        blog_header_component_1.BlogHeaderComponent,
                        trending_blog_component_1.TrendingBlogComponent,
                        keywords_component_1.KeywordsComponent,
                        keyword_component_1.KeywordComponent,
                        subscribe_card_component_1.SubscribeCardComponent,
                        trending_blog_card_component_1.TrendingBlogCardComponent,
                        latest_blog_component_1.LatestBlogComponent,
                        normal_blog_component_1.NormalBlogComponent,
                        blogs_component_1.BlogsComponent,
                        blog_open_component_1.BlogOpenComponent,
                        maintain_height_width_ratio_directive_1.MaintainHeightWidthRatioDirective,
                        tab_view_available_directive_1.TabViewAvailableDirective,
                        blog_footer_component_1.BlogFooterComponent,
                        search_component_1.SearchComponent,
                        comments_component_1.CommentsComponent,
                        message_component_1.MessageComponent,
                        custom_url_component_1.CustomUrlComponent,
                        open_full_image_component_1.OpenFullImageComponent,
                        related_blogs_component_1.RelatedBlogsComponent,
                        single_panel_component_1.SinglePanelComponent,
                        edit_blog_component_1.EditBlogComponent,
                        blog_preview_component_1.BlogPreviewComponent,
                    ],
                    imports: [
                        platform_browser_1.BrowserModule.withServerTransition({ appId: 'blogist' }),
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        routing_module_1.RoutingModule,
                        forms_1.ReactiveFormsModule,
                    ],
                    providers: [
                        property_service_1.PropertyService,
                        get_service_1.GetService,
                        save_service_1.SaveService,
                        status_service_1.StatusService,
                        post_service_1.PostService,
                        auth_service_1.AuthService,
                        auth_gaurd_service_1.AuthGuard,
                        facebook_service_1.FacebookService,
                        window_ref_service_1.WindowRefService,
                        { provide: router_1.UrlSerializer, useClass: custom_url_component_1.CustomUrlComponent }
                    ],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map