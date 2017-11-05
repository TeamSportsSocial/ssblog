/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './trending-blog-card.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../../../src/app/blogContent/trending-blog/trending-blog-card/trending-blog-card.component';
import * as i3 from '@angular/router';
import * as i4 from '@angular/common';
import * as i5 from '../../../../../../../src/app/services/property.service';
const styles_TrendingBlogCardComponent:any[] = [i0.styles];
export const RenderType_TrendingBlogCardComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_TrendingBlogCardComponent,data:{}});
function View_TrendingBlogCardComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,[['initialImage',1]],(null as any),0,'img',[['alt',
      'InitialblogImage'],['src','/assets/images/default-image.png']],(null as any),
      (null as any),(null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_TrendingBlogCardComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['alt',
      'blogImage']],[[8,'src',4]],[[(null as any),'load'],[(null as any),'error']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('load' === en)) {
          const pd_0:any = ((<any>_co.removeInitialImage()) !== false);
          ad = (pd_0 && ad);
        }
        if (('error' === en)) {
          const pd_1:any = ((<any>_co.setDefault()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any)))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i1.ɵinlineInterpolate(1,'',_co.blogImage,'');
    _ck(_v,0,0,currVal_0);
  });
}
export function View_TrendingBlogCardComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),38,'div',[['class',
      'trending']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          35,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.TrendingBlogCardComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            if (('click' === en)) {
              const pd_1:any = ((<any>_co.send()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i3.RouterLinkWithHref,
          [i3.Router,i3.ActivatedRoute,i4.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
          [['holder',1]],(null as any),7,'div',[['class','blogImageHolder']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_TrendingBlogCardComponent_1)),i1.ɵdid(16384,(null as any),
          0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_TrendingBlogCardComponent_2)),i1.ɵdid(16384,
          (null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),22,'div',[['class',
          'desc']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    \n    '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),17,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),6,'span',[['class','views']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['alt',
          'sports-social-view-white'],['src','/assets/images/sports-social-view-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),
          i1.ɵted((null as any),[' \n      '])),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),6,'span',[['class','share']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['alt',
          'sports-social-share-white'],['src','/assets/images/sports-social-share-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),
          i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          0,'p',([] as any[]),[[8,'innerHTML',1]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.TrendingBlogCardComponent = _v.component;
    const currVal_2:any = i1.ɵinlineInterpolate(3,'/',_co.keywords[0],'/',_co.heading,
        '/',_co.blogId,'');
    _ck(_v,3,0,currVal_2);
    const currVal_3:any = _co.isloading;
    _ck(_v,8,0,currVal_3);
    const currVal_4:any = _co.dataRecieved;
    _ck(_v,11,0,currVal_4);
  },(_ck,_v) => {
    var _co:i2.TrendingBlogCardComponent = _v.component;
    const currVal_0:any = i1.ɵnov(_v,3).target;
    const currVal_1:any = i1.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_5:any = _co.ViewCount;
    _ck(_v,23,0,currVal_5);
    const currVal_6:any = _co.ShareCount;
    _ck(_v,31,0,currVal_6);
    const currVal_7:any = _co.heading;
    _ck(_v,35,0,currVal_7);
  });
}
export function View_TrendingBlogCardComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'SportSocial-trending-blog-card',
      ([] as any[]),(null as any),(null as any),(null as any),View_TrendingBlogCardComponent_0,
      RenderType_TrendingBlogCardComponent)),i1.ɵdid(4308992,(null as any),0,i2.TrendingBlogCardComponent,
      [i5.PropertyService,i1.PLATFORM_ID],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const TrendingBlogCardComponentNgFactory:i1.ComponentFactory<i2.TrendingBlogCardComponent> = i1.ɵccf('SportSocial-trending-blog-card',
    i2.TrendingBlogCardComponent,View_TrendingBlogCardComponent_Host_0,{blogId:'blogId',
        blogImage:'blogImage',bloggerImage:'bloggerImage',bloggerName:'bloggerName',
        heading:'heading',insertedDate:'insertedDate',Content:'Content',ViewCount:'ViewCount',
        ShareCount:'ShareCount',keywords:'keywords',exactDate:'exactDate',readingTime:'readingTime',
        MetaDesc:'MetaDesc',ImageDesc:'ImageDesc'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovU3BvcnRTb2NpYWxCbG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvdHJlbmRpbmctYmxvZy90cmVuZGluZy1ibG9nLWNhcmQvdHJlbmRpbmctYmxvZy1jYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9TcG9ydFNvY2lhbEJsb2cvc3JjL2FwcC9ibG9nQ29udGVudC90cmVuZGluZy1ibG9nL3RyZW5kaW5nLWJsb2ctY2FyZC90cmVuZGluZy1ibG9nLWNhcmQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovU3BvcnRTb2NpYWxCbG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvdHJlbmRpbmctYmxvZy90cmVuZGluZy1ibG9nLWNhcmQvdHJlbmRpbmctYmxvZy1jYXJkLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovU3BvcnRTb2NpYWxCbG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvdHJlbmRpbmctYmxvZy90cmVuZGluZy1ibG9nLWNhcmQvdHJlbmRpbmctYmxvZy1jYXJkLmNvbXBvbmVudC50cy5UcmVuZGluZ0Jsb2dDYXJkQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInRyZW5kaW5nXCI+XG4gIDxhIHJvdXRlckxpbms9XCIve3trZXl3b3Jkc1swXX19L3t7aGVhZGluZ319L3t7YmxvZ0lkfX1cIiAoY2xpY2spPVwic2VuZCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImJsb2dJbWFnZUhvbGRlclwiICNob2xkZXI+XG4gICAgICAgIDxpbWcgI2luaXRpYWxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9kZWZhdWx0LWltYWdlLnBuZ1wiIGFsdD1cIkluaXRpYWxibG9nSW1hZ2VcIiAqbmdJZj1cImlzbG9hZGluZ1wiPlxuICAgICAgICA8aW1nIHNyYz1cInt7YmxvZ0ltYWdlfX1cIiAobG9hZCk9XCJyZW1vdmVJbml0aWFsSW1hZ2UoKVwiICAoZXJyb3IpPVwic2V0RGVmYXVsdCgpXCIgYWx0PVwiYmxvZ0ltYWdlXCIgICpuZ0lmPVwiZGF0YVJlY2lldmVkXCIgPlxuICAgIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGVzY1wiPlxuICAgIFxuICAgIDxwID5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmlld3NcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zcG9ydHMtc29jaWFsLXZpZXctd2hpdGUucG5nXCIgYWx0PVwic3BvcnRzLXNvY2lhbC12aWV3LXdoaXRlXCI+XG4gICAgICAgIDxzcGFuPnt7Vmlld0NvdW50fX08L3NwYW4+IFxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzaGFyZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtc2hhcmUtd2hpdGUucG5nXCIgYWx0PVwic3BvcnRzLXNvY2lhbC1zaGFyZS13aGl0ZVwiICA+XG4gICAgICAgIDxzcGFuPnt7U2hhcmVDb3VudH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvcD5cbiAgICA8cCBbaW5uZXJIdG1sXT1cImhlYWRpbmdcIj48L3A+XG4gIDwvZGl2PlxuICA8L2E+XG48L2Rpdj5cbiIsIjxTcG9ydFNvY2lhbC10cmVuZGluZy1ibG9nLWNhcmQ+PC9TcG9ydFNvY2lhbC10cmVuZGluZy1ibG9nLWNhcmQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0dRO01BQUE7TUFBQTs7O29CQUNBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBeUI7VUFBQTtVQUFBO1FBQUE7UUFBK0I7VUFBQTtVQUFBO1FBQUE7UUFBeEQ7TUFBQTs7SUFBSztJQUFMLFdBQUssU0FBTDs7OztvQkFKUjtNQUFBO01BQXNCLHlDQUNwQjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBd0Q7Y0FBQTtjQUFBO1lBQUE7WUFBeEQ7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBeUUsMkNBQ3ZFO1VBQUE7VUFBQSwwREFBcUM7VUFBQSxpQkFDakM7VUFBQSx3REFBQTtVQUFBO01BQW1HLCtDQUNuRztVQUFBLHdFQUFBO1VBQUE7VUFBQSxlQUFzSCwyQ0FDcEg7VUFBQSxXQUNSO1VBQUE7TUFBa0IsaURBRWhCO1VBQUE7VUFBQSw4QkFBSTtNQUNGO1VBQUEsMERBQW9CO1VBQUEsaUJBQ2xCO1VBQUE7VUFBQTtNQUFzRiwrQ0FDdEY7VUFBQTtVQUFBLDhCQUFNLHdDQUFvQjtpQkFBQSwrQkFDckI7TUFDUDtVQUFBLDBEQUFvQjtVQUFBLGlCQUNsQjtVQUFBO1VBQUE7TUFBMEYsK0NBQzFGO1VBQUE7VUFBQSw4QkFBTSx3Q0FBcUI7aUJBQUEsOEJBQ3RCO01BQ0wsMkNBQ0o7VUFBQTtVQUFBLGdCQUE2Qix5Q0FDekI7VUFBQSxXQUNGLHVDQUNBO1VBQUE7O0lBcEJEO1FBQUE7SUFBSCxXQUFHLFNBQUg7SUFFdUY7SUFBakYsV0FBaUYsU0FBakY7SUFDZ0c7SUFBaEcsWUFBZ0csU0FBaEc7OztJQUhOO0lBQUE7SUFBQSxXQUFBLG1CQUFBO0lBVVk7SUFBQTtJQUlBO0lBQUE7SUFHUDtJQUFILFlBQUcsU0FBSDs7OztvQkNsQko7TUFBQTswQ0FBQSxVQUFBO01BQUE7SUFBQTs7Ozs7Ozs7In0=
