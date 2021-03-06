/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app-server.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './blogContent/blogs/blogs.component.ngfactory';
import * as i4 from './editor-panel/editor-panel.component.ngfactory';
import * as i5 from './login-page/login-page.component.ngfactory';
import * as i6 from './admin-panel/admin-panel.component.ngfactory';
import * as i7 from './search/search.component.ngfactory';
import * as i8 from './admin-panel/edit-blog/edit-blog.component.ngfactory';
import * as i9 from './blogContent/blog-open/blog-open.component.ngfactory';
import * as i10 from './app.component.ngfactory';
import * as i11 from '@angular/http';
import * as i12 from '@angular/platform-server';
import * as i13 from '@angular/common/http';
import * as i14 from '@angular/common';
import * as i15 from '@angular/platform-browser';
import * as i16 from '@angular/animations/browser';
import * as i17 from '@angular/platform-browser/animations';
import * as i18 from '@angular/animations';
import * as i19 from '@angular/forms';
import * as i20 from '@angular/router';
import * as i21 from '../../../../src/app/services/property.service';
import * as i22 from '../../../../src/app/services/get.service';
import * as i23 from '../../../../src/app/services/save.service';
import * as i24 from '../../../../src/app/services/status.service';
import * as i25 from '../../../../src/app/services/post.service';
import * as i26 from '../../../../src/app/services/auth.service';
import * as i27 from '../../../../src/app/services/auth-gaurd.service';
import * as i28 from '../../../../src/app/services/facebook.service';
import * as i29 from '../../../../src/app/services/window-ref.service';
import * as i30 from '../../../../src/app/services/link.service';
import * as i31 from '../../../../src/app/custom-url/custom-url.component';
import * as i32 from '../../../../src/app/blogContent/blogs/blogs.component';
import * as i33 from '../../../../src/app/editor-panel/editor-panel.component';
import * as i34 from '../../../../src/app/login-page/login-page.component';
import * as i35 from '../../../../src/app/admin-panel/admin-panel.component';
import * as i36 from '../../../../src/app/search/search.component';
import * as i37 from '../../../../src/app/admin-panel/edit-blog/edit-blog.component';
import * as i38 from '../../../../src/app/blogContent/blog-open/blog-open.component';
import * as i39 from '../../../../src/app/routing/routing.module';
import * as i40 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.BlogsComponentNgFactory,i4.EditorPanelComponentNgFactory,i5.LoginPageComponentNgFactory,
              i6.AdminPanelComponentNgFactory,i7.SearchComponentNgFactory,i8.EditBlogComponentNgFactory,
              i9.BlogOpenComponentNgFactory,i10.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(4608,i11.BrowserXhr,i12.ɵc,([] as any[])),i0.ɵmpd(4608,
          i11.ResponseOptions,i11.BaseResponseOptions,([] as any[])),i0.ɵmpd(4608,
          i11.XSRFStrategy,i12.ɵd,([] as any[])),i0.ɵmpd(4608,i11.XHRBackend,i11.XHRBackend,
          [i11.BrowserXhr,i11.ResponseOptions,i11.XSRFStrategy]),i0.ɵmpd(4608,i11.RequestOptions,
          i11.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i11.Http,i12.ɵe,[i11.XHRBackend,
          i11.RequestOptions]),i0.ɵmpd(4608,i13.HttpXsrfTokenExtractor,i13.ɵg,[i14.DOCUMENT,
          i0.PLATFORM_ID,i13.ɵe]),i0.ɵmpd(4608,i13.ɵh,i13.ɵh,[i13.HttpXsrfTokenExtractor,
          i13.ɵf]),i0.ɵmpd(5120,i13.HTTP_INTERCEPTORS,(p0_0:any) => {
        return [p0_0];
      },[i13.ɵh]),i0.ɵmpd(4608,i13.XhrFactory,i12.ɵc,([] as any[])),i0.ɵmpd(4608,i13.HttpXhrBackend,
          i13.HttpXhrBackend,[i13.XhrFactory]),i0.ɵmpd(6144,i13.HttpBackend,(null as any),
          [i13.HttpXhrBackend]),i0.ɵmpd(5120,i13.HttpHandler,i12.ɵf,[i13.HttpBackend,
          [2,i13.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i13.HttpClient,i13.HttpClient,[i13.HttpHandler]),
          i0.ɵmpd(4608,i13.ɵd,i13.ɵd,([] as any[])),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,
              [[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i14.NgLocalization,i14.NgLocaleLocalization,
              [i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i15.DomSanitizer,
              i15.ɵe,[i14.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i15.DomSanitizer]),
          i0.ɵmpd(4608,i15.HAMMER_GESTURE_CONFIG,i15.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i15.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i15.ɵDomEventsPlugin(p0_0),new i15.ɵKeyEventsPlugin(p1_0),
                new i15.ɵHammerGesturesPlugin(p2_0,p2_1)];
          },[i14.DOCUMENT,i14.DOCUMENT,i14.DOCUMENT,i15.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i15.EventManager,i15.EventManager,[i15.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i15.ɵDomSharedStylesHost,i15.ɵDomSharedStylesHost,[i14.DOCUMENT]),
          i0.ɵmpd(4608,i15.ɵDomRendererFactory2,i15.ɵDomRendererFactory2,[i15.EventManager,
              i15.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i12.ɵb,i12.ɵb,[i15.DOCUMENT,
              [2,i15.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i15.ɵSharedStylesHost,(null as any),
              [i12.ɵb]),i0.ɵmpd(4608,i12.ɵServerRendererFactory2,i12.ɵServerRendererFactory2,
              [i0.NgZone,i15.DOCUMENT,i15.ɵSharedStylesHost]),i0.ɵmpd(4608,i16.AnimationDriver,
              i16.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i16.ɵAnimationStyleNormalizer,
              i17.ɵd,([] as any[])),i0.ɵmpd(4608,i16.ɵAnimationEngine,i17.ɵb,[i16.AnimationDriver,
              i16.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i12.ɵa,
              [i12.ɵServerRendererFactory2,i16.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i15.Meta,i15.Meta,
              [i14.DOCUMENT]),i0.ɵmpd(4608,i15.Title,i15.Title,[i14.DOCUMENT]),i0.ɵmpd(4608,
              i18.AnimationBuilder,i17.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i15.DOCUMENT]),i0.ɵmpd(4608,i19.ɵi,i19.ɵi,([] as any[])),i0.ɵmpd(5120,
              i20.ActivatedRoute,i20.ɵf,[i20.Router]),i0.ɵmpd(4608,i20.NoPreloading,
              i20.NoPreloading,([] as any[])),i0.ɵmpd(6144,i20.PreloadingStrategy,
              (null as any),[i20.NoPreloading]),i0.ɵmpd(135680,i20.RouterPreloader,
              i20.RouterPreloader,[i20.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i20.PreloadingStrategy]),i0.ɵmpd(4608,i20.PreloadAllModules,
              i20.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i20.ROUTER_INITIALIZER,
              i20.ɵi,[i20.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i20.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i19.FormBuilder,i19.FormBuilder,
              ([] as any[])),i0.ɵmpd(4608,i21.PropertyService,i21.PropertyService,
              ([] as any[])),i0.ɵmpd(4608,i22.GetService,i22.GetService,[i11.Http]),
          i0.ɵmpd(4608,i23.SaveService,i23.SaveService,([] as any[])),i0.ɵmpd(4608,
              i24.StatusService,i24.StatusService,([] as any[])),i0.ɵmpd(4608,i25.PostService,
              i25.PostService,[i11.Http]),i0.ɵmpd(4608,i26.AuthService,i26.AuthService,
              ([] as any[])),i0.ɵmpd(4608,i27.AuthGuard,i27.AuthGuard,[i26.AuthService,
              i20.Router]),i0.ɵmpd(4608,i28.FacebookService,i28.FacebookService,[i0.PLATFORM_ID]),
          i0.ɵmpd(4608,i29.WindowRefService,i29.WindowRefService,([] as any[])),i0.ɵmpd(4608,
              i30.LinkService,i30.LinkService,[i0.RendererFactory2,i15.DOCUMENT]),
          i0.ɵmpd(512,i11.HttpModule,i11.HttpModule,([] as any[])),i0.ɵmpd(512,i13.HttpClientXsrfModule,
              i13.HttpClientXsrfModule,([] as any[])),i0.ɵmpd(512,i13.HttpClientModule,
              i13.HttpClientModule,([] as any[])),i0.ɵmpd(512,i14.CommonModule,i14.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i15.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.NgProbeToken,() => {
                return [i20.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i20.ɵg,i20.ɵg,[i0.Injector]),i0.ɵmpd(256,
              i0.APP_ID,'blogist',([] as any[])),i0.ɵmpd(2048,i15.ɵTRANSITION_ID,(null as any),
              [i0.APP_ID]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any,
              p2_0:any,p2_1:any,p2_2:any) => {
            return [i15.ɵc(p0_0,p0_1),i20.ɵh(p1_0),i15.ɵf(p2_0,p2_1,p2_2)];
          },[[2,i15.NgProbeToken],[2,i0.NgProbeToken],i20.ɵg,i15.ɵTRANSITION_ID,i14.DOCUMENT,
              i0.Injector]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i15.BrowserModule,
              i15.BrowserModule,[[3,i15.BrowserModule]]),i0.ɵmpd(512,i17.NoopAnimationsModule,
              i17.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i12.ServerModule,
              i12.ServerModule,([] as any[])),i0.ɵmpd(512,i19.ɵba,i19.ɵba,([] as any[])),
          i0.ɵmpd(512,i19.FormsModule,i19.FormsModule,([] as any[])),i0.ɵmpd(1024,
              i20.ɵa,i20.ɵd,[[3,i20.Router]]),i0.ɵmpd(512,i20.UrlSerializer,i31.CustomUrlComponent,
              ([] as any[])),i0.ɵmpd(512,i20.ChildrenOutletContexts,i20.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i20.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i14.LocationStrategy,i20.ɵc,[i14.PlatformLocation,[2,i14.APP_BASE_HREF],
              i20.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i14.Location,i14.Location,[i14.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i20.ROUTES,() => {
            return [[{path:'',component:i32.BlogsComponent},{path:'editorPanel',canActivate:[i27.AuthGuard],
                component:i33.EditorPanelComponent},{path:'login',component:i34.LoginPageComponent},
                {path:'adminPanel',canActivate:[i27.AuthGuard],component:i35.AdminPanelComponent},
                {path:':tag',component:i36.SearchComponent},{path:':blogId/edit',component:i37.EditBlogComponent},
                {path:':tag/:title/:blogId',component:i38.BlogOpenComponent},{path:'**',
                    redirectTo:''}]];
          },([] as any[])),i0.ɵmpd(1024,i20.Router,i20.ɵe,[i0.ApplicationRef,i20.UrlSerializer,
              i20.ChildrenOutletContexts,i14.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i20.ROUTES,i20.ROUTER_CONFIGURATION,[2,i20.UrlHandlingStrategy],
              [2,i20.RouteReuseStrategy]]),i0.ɵmpd(512,i20.RouterModule,i20.RouterModule,
              [[2,i20.ɵa],[2,i20.Router]]),i0.ɵmpd(512,i39.RoutingModule,i39.RoutingModule,
              ([] as any[])),i0.ɵmpd(512,i19.ReactiveFormsModule,i19.ReactiveFormsModule,
              ([] as any[])),i0.ɵmpd(512,i40.AppModule,i40.AppModule,([] as any[])),
          i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,([] as any[])),i0.ɵmpd(256,
              i13.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,i13.ɵf,'X-XSRF-TOKEN',
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvUmFqaXYgVGFud2FyL3NzYmxvZy9zcmMvYXBwL2FwcC1zZXJ2ZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL1Jhaml2IFRhbndhci9zc2Jsb2cvc3JjL2FwcC9hcHAtc2VydmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
