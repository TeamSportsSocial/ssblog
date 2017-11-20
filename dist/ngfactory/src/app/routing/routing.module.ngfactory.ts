/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../src/app/routing/routing.module';
import * as i2 from '../blogContent/blogs/blogs.component.ngfactory';
import * as i3 from '../editor-panel/editor-panel.component.ngfactory';
import * as i4 from '../login-page/login-page.component.ngfactory';
import * as i5 from '../admin-panel/admin-panel.component.ngfactory';
import * as i6 from '../search/search.component.ngfactory';
import * as i7 from '../admin-panel/edit-blog/edit-blog.component.ngfactory';
import * as i8 from '../blogContent/blog-open/blog-open.component.ngfactory';
import * as i9 from '@angular/router';
import * as i10 from '@angular/common';
import * as i11 from '../../../../../src/app/blogContent/blogs/blogs.component';
import * as i12 from '../../../../../src/app/services/auth-gaurd.service';
import * as i13 from '../../../../../src/app/editor-panel/editor-panel.component';
import * as i14 from '../../../../../src/app/login-page/login-page.component';
import * as i15 from '../../../../../src/app/admin-panel/admin-panel.component';
import * as i16 from '../../../../../src/app/search/search.component';
import * as i17 from '../../../../../src/app/admin-panel/edit-blog/edit-blog.component';
import * as i18 from '../../../../../src/app/blogContent/blog-open/blog-open.component';
export const RoutingModuleNgFactory:i0.NgModuleFactory<i1.RoutingModule> = i0.ɵcmf(i1.RoutingModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.BlogsComponentNgFactory,i3.EditorPanelComponentNgFactory,i4.LoginPageComponentNgFactory,
              i5.AdminPanelComponentNgFactory,i6.SearchComponentNgFactory,i7.EditBlogComponentNgFactory,
              i8.BlogOpenComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(5120,i9.ActivatedRoute,i9.ɵf,[i9.Router]),i0.ɵmpd(4608,i9.NoPreloading,
              i9.NoPreloading,([] as any[])),i0.ɵmpd(6144,i9.PreloadingStrategy,(null as any),
              [i9.NoPreloading]),i0.ɵmpd(135680,i9.RouterPreloader,i9.RouterPreloader,
              [i9.Router,i0.NgModuleFactoryLoader,i0.Compiler,i0.Injector,i9.PreloadingStrategy]),
          i0.ɵmpd(4608,i9.PreloadAllModules,i9.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,
              i0.NgProbeToken,() => {
                return [i9.ɵb()];
              },([] as any[])),i0.ɵmpd(4608,i9.ɵg,i9.ɵg,[i0.Injector]),i0.ɵmpd(5120,
              i0.APP_INITIALIZER,(p0_0:any) => {
                return [i9.ɵh(p0_0)];
              },[i9.ɵg]),i0.ɵmpd(5120,i9.ROUTER_INITIALIZER,i9.ɵi,[i9.ɵg]),i0.ɵmpd(5120,
              i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
                return [p0_0];
              },[i9.ROUTER_INITIALIZER]),i0.ɵmpd(1024,i9.ɵa,i9.ɵd,[[3,i9.Router]]),
          i0.ɵmpd(512,i9.UrlSerializer,i9.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i9.ChildrenOutletContexts,i9.ChildrenOutletContexts,([] as any[])),i0.ɵmpd(256,
              i9.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i10.LocationStrategy,
              i9.ɵc,[i10.PlatformLocation,[2,i10.APP_BASE_HREF],i9.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i10.Location,i10.Location,[i10.LocationStrategy]),i0.ɵmpd(512,
              i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i9.ROUTES,() => {
            return [[{path:'',component:i11.BlogsComponent},{path:'editorPanel',canActivate:[i12.AuthGuard],
                component:i13.EditorPanelComponent},{path:'login',component:i14.LoginPageComponent},
                {path:'adminPanel',canActivate:[i12.AuthGuard],component:i15.AdminPanelComponent},
                {path:':tag',component:i16.SearchComponent},{path:':blogId/edit',component:i17.EditBlogComponent},
                {path:':tag/:title/:blogId',component:i18.BlogOpenComponent},{path:'**',
                    redirectTo:''}]];
          },([] as any[])),i0.ɵmpd(1024,i9.Router,i9.ɵe,[i0.ApplicationRef,i9.UrlSerializer,
              i9.ChildrenOutletContexts,i10.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i9.ROUTES,i9.ROUTER_CONFIGURATION,[2,i9.UrlHandlingStrategy],
              [2,i9.RouteReuseStrategy]]),i0.ɵmpd(512,i9.RouterModule,i9.RouterModule,
              [[2,i9.ɵa],[2,i9.Router]]),i0.ɵmpd(512,i1.RoutingModule,i1.RoutingModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovbmFkL3NzYmxvZy9zcmMvYXBwL3JvdXRpbmcvcm91dGluZy5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovbmFkL3NzYmxvZy9zcmMvYXBwL3JvdXRpbmcvcm91dGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
