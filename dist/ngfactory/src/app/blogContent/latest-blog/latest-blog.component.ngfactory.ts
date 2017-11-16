/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './latest-blog.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../../src/app/directives/maintain-height-width-ratio.directive';
import * as i3 from '../../../../../../src/app/services/property.service';
import * as i4 from '../../../../../../src/app/blogContent/latest-blog/latest-blog.component';
import * as i5 from '@angular/router';
import * as i6 from '@angular/common';
import * as i7 from '../../../../../../src/app/services/post.service';
const styles_LatestBlogComponent:any[] = [i0.styles];
export const RenderType_LatestBlogComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LatestBlogComponent,data:{}});
function View_LatestBlogComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,[[6,0],['initialImage',1]],(null as any),0,
      'img',[['alt','InitialblogImage'],['src','/assets/images/default-image.png']],
      (null as any),(null as any),(null as any),(null as any),(null as any)))],(null as any),
      (null as any));
}
function View_LatestBlogComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,[[4,0],['blogimage',1]],(null as any),0,'img',
      [['alt','blogImage']],[[8,'src',4],[8,'title',0]],[[(null as any),'error'],[(null as any),
          'load']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('error' === en)) {
          const pd_0:any = ((<any>_co.setDefault()) !== false);
          ad = (pd_0 && ad);
        }
        if (('load' === en)) {
          const pd_1:any = ((<any>_co.removeInitialImage()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any)))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i1.ɵinlineInterpolate(1,'',_co.blogImage,'');
    const currVal_1:any = i1.ɵinlineInterpolate(1,'',_co.ImageDesc,'');
    _ck(_v,0,0,currVal_0,currVal_1);
  });
}
export function View_LatestBlogComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵqud(402653184,1,{DescChild:0}),i1.ɵqud(402653184,2,{latestTitle:0}),
      i1.ɵqud(402653184,3,{latestDesc:0}),i1.ɵqud(671088640,4,{blogimage:0}),i1.ɵqud(402653184,
          5,{latest:0}),i1.ɵqud(671088640,6,{initialImage:0}),i1.ɵqud(402653184,7,
          {Desc:0}),(_l()(),i1.ɵted(-1,(null as any),['\n\n'])),(_l()(),i1.ɵeld(8,
          0,[[5,0],['latest',1]],(null as any),61,'div',[['MaintainHeightWidthRatio',
              ''],['class','latest']],(null as any),[['window','resize']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('window:resize' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,9).onresize()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(9,4210688,(null as any),0,i2.MaintainHeightWidthRatioDirective,
          [i1.ElementRef,i1.Renderer2,i1.PLATFORM_ID,i3.PropertyService],(null as any),
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(11,
          0,(null as any),(null as any),57,'a',([] as any[]),[[1,'target',0],[8,'href',
              4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i4.LatestBlogComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,12).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            if (('click' === en)) {
              const pd_1:any = ((<any>_co.send()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(12,671744,(null as any),0,i5.RouterLinkWithHref,
          [i5.Router,i5.ActivatedRoute,i6.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_LatestBlogComponent_1)),
      i1.ɵdid(15,16384,(null as any),0,i6.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LatestBlogComponent_2)),
      i1.ɵdid(18,16384,(null as any),0,i6.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    \n    \n    '])),
      (_l()(),i1.ɵeld(20,0,[[7,0],['Desc',1]],(null as any),47,'div',[['class','desc']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(22,0,[[1,0],
          ['DescChild',1]],(null as any),44,'div',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(24,0,(null as any),(null as any),11,'div',
          [['class','count']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),
          i1.ɵeld(26,0,(null as any),(null as any),0,'img',[['alt','sports-social-view-white'],
              ['src','/assets/images/sports-social-view-white.png']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n          '])),(_l()(),i1.ɵeld(28,0,(null as any),(null as any),
          1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(29,(null as any),['',''])),(_l()(),i1.ɵted(-1,
          (null as any),[' \n          '])),(_l()(),i1.ɵeld(31,0,(null as any),(null as any),
          0,'img',[['alt','sports-social-share-white'],['src','/assets/images/sports-social-share-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(33,0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(34,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          [' \n        '])),(_l()(),i1.ɵeld(37,0,(null as any),(null as any),10,'div',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(39,0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(40,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(42,0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['|'])),(_l()(),
          i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(45,0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(46,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(49,0,[[2,0],['latestTitle',1]],(null as any),
          1,'p',[['class','heading']],[[8,'innerHTML',1]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),[' '])),(_l()(),
          i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(53,0,[[3,0],['latestDesc',1]],(null as any),
          1,'p',[['class','smallDesc']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(54,(null as any),['',''])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(56,0,(null as any),
          (null as any),9,'div',[['class','Blogger']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n          '])),(_l()(),i1.ɵeld(58,0,[['BloggerImage',1]],(null as any),
          3,'div',[['class','bloggerImage']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵeld(60,0,(null as any),(null as any),0,'img',[['alt','sports-social-blogger-white'],
          ['src','/assets/images/sports-social-blogger-white.png']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n          '])),(_l()(),i1.ɵted(-1,(null as any),['  \n          '])),
      (_l()(),i1.ɵeld(63,0,(null as any),(null as any),1,'p',[['class','bloggerName']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(64,(null as any),['',''])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),
          i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i4.LatestBlogComponent = _v.component;
    const currVal_2:any = i1.ɵinlineInterpolate(3,'/',_co.keywords[0],'/',_co.heading,
        '/',_co.blogId,'');
    _ck(_v,12,0,currVal_2);
    const currVal_3:any = _co.isloading;
    _ck(_v,15,0,currVal_3);
    const currVal_4:any = _co.dataRecieved;
    _ck(_v,18,0,currVal_4);
  },(_ck,_v) => {
    var _co:i4.LatestBlogComponent = _v.component;
    const currVal_0:any = i1.ɵnov(_v,12).target;
    const currVal_1:any = i1.ɵnov(_v,12).href;
    _ck(_v,11,0,currVal_0,currVal_1);
    const currVal_5:any = _co.ViewCount;
    _ck(_v,29,0,currVal_5);
    const currVal_6:any = _co.ShareCount;
    _ck(_v,34,0,currVal_6);
    const currVal_7:any = _co.insertedDate;
    _ck(_v,40,0,currVal_7);
    const currVal_8:any = _co.keywords[0];
    _ck(_v,46,0,currVal_8);
    const currVal_9:any = _co.heading;
    _ck(_v,49,0,currVal_9);
    const currVal_10:any = _co.content;
    _ck(_v,54,0,currVal_10);
    const currVal_11:any = _co.bloggerName;
    _ck(_v,64,0,currVal_11);
  });
}
export function View_LatestBlogComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'SportSocial-latest-blog',
      ([] as any[]),(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_LatestBlogComponent_0,RenderType_LatestBlogComponent)),i1.ɵdid(1,4308992,
      (null as any),0,i4.LatestBlogComponent,[i3.PropertyService,i3.PropertyService,
          i1.Renderer2,i7.PostService,i1.PLATFORM_ID],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const LatestBlogComponentNgFactory:i1.ComponentFactory<i4.LatestBlogComponent> = i1.ɵccf('SportSocial-latest-blog',
    i4.LatestBlogComponent,View_LatestBlogComponent_Host_0,{blogId:'blogId',blogImage:'blogImage',
        bloggerName:'bloggerName',bloggerImage:'bloggerImage',heading:'heading',Content:'Content',
        insertedDate:'insertedDate',ViewCount:'ViewCount',ShareCount:'ShareCount',
        keywords:'keywords',exactDate:'exactDate',readingTime:'readingTime',MetaDesc:'MetaDesc',
        ImageDesc:'ImageDesc'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovbmFkL3NzYmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L2xhdGVzdC1ibG9nL2xhdGVzdC1ibG9nLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9uYWQvc3NibG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvbGF0ZXN0LWJsb2cvbGF0ZXN0LWJsb2cuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovbmFkL3NzYmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L2xhdGVzdC1ibG9nL2xhdGVzdC1ibG9nLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovbmFkL3NzYmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L2xhdGVzdC1ibG9nL2xhdGVzdC1ibG9nLmNvbXBvbmVudC50cy5MYXRlc3RCbG9nQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXHJcblxyXG48ZGl2IGNsYXNzPVwibGF0ZXN0XCIgTWFpbnRhaW5IZWlnaHRXaWR0aFJhdGlvICNsYXRlc3Q+XHJcbiAgPGEgcm91dGVyTGluaz1cIi97e2tleXdvcmRzWzBdfX0ve3toZWFkaW5nfX0ve3tibG9nSWR9fVwiIChjbGljayk9XCJzZW5kKClcIj5cclxuICAgIDxpbWcgI2luaXRpYWxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9kZWZhdWx0LWltYWdlLnBuZ1wiIGFsdD1cIkluaXRpYWxibG9nSW1hZ2VcIiAqbmdJZj1cImlzbG9hZGluZ1wiPlxyXG4gICAgPGltZyBzcmM9XCJ7e2Jsb2dJbWFnZX19XCIgdGl0bGU9XCJ7e0ltYWdlRGVzY319XCIgKGVycm9yKT1cInNldERlZmF1bHQoKVwiIChsb2FkKT1cInJlbW92ZUluaXRpYWxJbWFnZSgpXCIgYWx0PVwiYmxvZ0ltYWdlXCIgICpuZ0lmPVwiZGF0YVJlY2lldmVkXCIgI2Jsb2dpbWFnZT5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiICNEZXNjPlxyXG4gICAgICA8ZGl2ICNEZXNjQ2hpbGQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtdmlldy13aGl0ZS5wbmdcIiBhbHQ9XCJzcG9ydHMtc29jaWFsLXZpZXctd2hpdGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7Vmlld0NvdW50fX08L3NwYW4+IFxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zcG9ydHMtc29jaWFsLXNoYXJlLXdoaXRlLnBuZ1wiIGFsdD1cInNwb3J0cy1zb2NpYWwtc2hhcmUtd2hpdGVcIj5cclxuICAgICAgICAgIDxzcGFuPnt7U2hhcmVDb3VudH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgIDxzcGFuPnt7aW5zZXJ0ZWREYXRlfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj58PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3trZXl3b3Jkc1swXX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGluZ1wiIFtpbm5lckh0bWxdPVwiaGVhZGluZ1wiICNsYXRlc3RUaXRsZT4gPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgIGNsYXNzPVwic21hbGxEZXNjXCIgI2xhdGVzdERlc2M+e3tDb250ZW50fX08L3A+IC0tPlxyXG4gICAgICAgIDxwICBjbGFzcz1cInNtYWxsRGVzY1wiICNsYXRlc3REZXNjPnt7Y29udGVudH19PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJCbG9nZ2VyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ2dlckltYWdlXCIgI0Jsb2dnZXJJbWFnZT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtYmxvZ2dlci13aGl0ZS5wbmdcIiBhbHQ9XCJzcG9ydHMtc29jaWFsLWJsb2dnZXItd2hpdGVcIiA+XHJcbiAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJibG9nZ2VyTmFtZVwiPnt7YmxvZ2dlck5hbWV9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbjwvZGl2PiIsIjxTcG9ydFNvY2lhbC1sYXRlc3QtYmxvZz48L1Nwb3J0U29jaWFsLWxhdGVzdC1ibG9nPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0lJO01BQUE7TUFBQTs7OztvQkFDQTtNQUFBO1VBQUE7UUFBQTtRQUFBO1FBQStDO1VBQUE7VUFBQTtRQUFBO1FBQXVCO1VBQUE7VUFBQTtRQUFBO1FBQXRFO01BQUE7O0lBQUs7SUFBb0I7SUFBekIsV0FBSyxVQUFvQixTQUF6Qjs7Ozs7OztvQkFMSiw0Q0FFQTtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBcUQsNENBQ25EO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2tCQUFBO2NBQUE7WUFBQTtZQUF3RDtjQUFBO2NBQUE7WUFBQTtZQUF4RDtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUF5RSw4Q0FDdkU7VUFBQTthQUFBO1VBQUEsaUNBQW1HO01BQ25HO2FBQUE7VUFBQSxpQ0FBcUo7TUFHcko7VUFBQTtNQUF3QixnREFDdEI7VUFBQTtVQUFBLDRDQUFnQjtVQUFBLGlCQUNkO1VBQUE7VUFBQSxnQkFBbUIsb0RBQ2pCO2lCQUFBO2NBQUE7Y0FBQSwwREFBc0Y7VUFBQSxpQ0FDdEY7VUFBQTtVQUFBLGdCQUFNLDJDQUFvQjtVQUFBLGtDQUMxQjtVQUFBO1VBQUE7TUFBd0Ysb0RBQ3hGO1VBQUE7VUFBQSw4QkFBTTtNQUFxQixrREFDdkI7VUFBQSxrQkFDTjtVQUFBO01BQU0sb0RBQ0o7VUFBQTtVQUFBLDhCQUFNO01BQXVCLG9EQUM3QjtVQUFBO1VBQUEsOEJBQU0seUNBQVE7aUJBQUEscUNBQ2Q7VUFBQTtVQUFBLDhCQUFNO01BQXNCLGtEQUN4QjtVQUFBLGlCQUNOO1VBQUE7VUFBQSw4QkFBc0QseUNBQUs7aUJBQUEsbUNBQ0Q7VUFBQSxpQkFDMUQ7VUFBQTtVQUFBLDhCQUFrQztNQUFlLGtEQUNqRDtVQUFBO1VBQUEsNENBQXFCO1VBQUEsbUJBQ25CO1VBQUE7VUFBQSw4QkFBd0M7TUFDcEM7VUFBQTtVQUFBLDBEQUE2RjtVQUFBLGlDQUMzRjtNQUNOO1VBQUE7TUFBdUIsMkNBQW1CO1VBQUEsaUJBQ3RDLGdEQUNGO2lCQUFBLCtCQUNGO01BQ0o7O0lBN0JEO1FBQUE7SUFBSCxZQUFHLFNBQUg7SUFDbUY7SUFBakYsWUFBaUYsU0FBakY7SUFDcUg7SUFBckgsWUFBcUgsU0FBckg7OztJQUZGO0lBQUE7SUFBQSxZQUFBLG1CQUFBO0lBU2M7SUFBQTtJQUVBO0lBQUE7SUFHQTtJQUFBO0lBRUE7SUFBQTtJQUVXO0lBQW5CLFlBQW1CLFNBQW5CO0lBRWtDO0lBQUE7SUFLVDtJQUFBOzs7O29CQzVCakM7TUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHFFQUFBO01BQUE7b0RBQUE7O1FBQUE7Ozs7Ozs7OyJ9
