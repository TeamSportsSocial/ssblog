/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './latest-blog.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../../src/app/directives/maintain-height-width-ratio.directive';
import * as i3 from '../../../../../../src/app/blogContent/latest-blog/latest-blog.component';
import * as i4 from '@angular/router';
import * as i5 from '@angular/common';
import * as i6 from '../../../../../../src/app/services/property.service';
import * as i7 from '../../../../../../src/app/services/post.service';
import * as i8 from '../../../../../../src/app/services/window-ref.service';
const styles_LatestBlogComponent:any[] = [i0.styles];
export const RenderType_LatestBlogComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LatestBlogComponent,data:{}});
function View_LatestBlogComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,[[6,0],['initialImage',1]],(null as any),0,'img',
      [['alt','InitialblogImage'],['src','/assets/images/default-image.png']],(null as any),
      (null as any),(null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_LatestBlogComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,[[4,0],['blogimage',1]],(null as any),0,'img',
      [['alt','blogImage']],[[8,'src',4],[8,'title',0]],[[(null as any),'load'],[(null as any),
          'error']],(_v,en,$event) => {
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
    const currVal_1:any = i1.ɵinlineInterpolate(1,'',_co.ImageDesc,'');
    _ck(_v,0,0,currVal_0,currVal_1);
  });
}
export function View_LatestBlogComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵqud(402653184,1,{DescChild:0}),i1.ɵqud(402653184,2,{latestTitle:0}),
      i1.ɵqud(402653184,3,{latestDesc:0}),i1.ɵqud(671088640,4,{blogimage:0}),i1.ɵqud(402653184,
          5,{latest:0}),i1.ɵqud(671088640,6,{initialImage:0}),i1.ɵqud(402653184,7,
          {Desc:0}),(_l()(),i1.ɵted((null as any),['\n\n'])),(_l()(),i1.ɵeld(0,[[5,
          0],['latest',1]],(null as any),61,'div',[['MaintainHeightWidthRatio',''],
          ['class','latest']],(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,9).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(4210688,(null as any),0,i2.MaintainHeightWidthRatioDirective,
          [i1.ElementRef,i1.Renderer2],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),57,'a',([] as any[]),
          [[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.LatestBlogComponent = _v.component;
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
          },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i4.RouterLinkWithHref,
          [i4.Router,i4.ActivatedRoute,i5.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_LatestBlogComponent_1)),
      i1.ɵdid(16384,(null as any),0,i5.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),
          i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_LatestBlogComponent_2)),
      i1.ɵdid(16384,(null as any),0,i5.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n    \n    \n    '])),
      (_l()(),i1.ɵeld(0,[[7,0],['Desc',1]],(null as any),47,'div',[['class','desc']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,[[1,0],['DescChild',
          1]],(null as any),44,'div',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),11,'div',[['class','count']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',
          [['alt','sports-social-view-white'],['src','/assets/images/sports-social-view-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),
          i1.ɵted((null as any),[' \n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),0,'img',[['alt','sports-social-share-white'],['src','/assets/images/sports-social-share-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),
          i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),[' \n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['|'])),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,[[2,0],['latestTitle',1]],(null as any),
          1,'p',[['class','heading']],[[8,'innerHTML',1]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),[' '])),(_l()(),
          i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,[[3,0],['latestDesc',1]],(null as any),1,'p',[['class','smallDesc']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),9,'div',[['class','Blogger']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,[['BloggerImage',
          1]],(null as any),3,'div',[['class','bloggerImage']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n              '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',
          [['alt','sports-social-blogger-white'],['src','/assets/images/sports-social-blogger-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵted((null as any),
          ['  \n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'p',
          [['class','bloggerName']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i3.LatestBlogComponent = _v.component;
    const currVal_2:any = i1.ɵinlineInterpolate(3,'/',_co.keywords[0],'/',_co.heading,
        '/',_co.blogId,'');
    _ck(_v,12,0,currVal_2);
    const currVal_3:any = _co.isloading;
    _ck(_v,15,0,currVal_3);
    const currVal_4:any = _co.dataRecieved;
    _ck(_v,18,0,currVal_4);
  },(_ck,_v) => {
    var _co:i3.LatestBlogComponent = _v.component;
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
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'SportSocial-latest-blog',
      ([] as any[]),(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_LatestBlogComponent_0,RenderType_LatestBlogComponent)),i1.ɵdid(4308992,
      (null as any),0,i3.LatestBlogComponent,[i6.PropertyService,i1.Renderer2,i7.PostService,
          i8.WindowRefService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const LatestBlogComponentNgFactory:i1.ComponentFactory<i3.LatestBlogComponent> = i1.ɵccf('SportSocial-latest-blog',
    i3.LatestBlogComponent,View_LatestBlogComponent_Host_0,{blogId:'blogId',blogImage:'blogImage',
        bloggerName:'bloggerName',bloggerImage:'bloggerImage',heading:'heading',Content:'Content',
        insertedDate:'insertedDate',ViewCount:'ViewCount',ShareCount:'ShareCount',
        keywords:'keywords',exactDate:'exactDate',readingTime:'readingTime',MetaDesc:'MetaDesc',
        ImageDesc:'ImageDesc'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovU3BvcnRTb2NpYWxCbG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvbGF0ZXN0LWJsb2cvbGF0ZXN0LWJsb2cuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1Nwb3J0U29jaWFsQmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L2xhdGVzdC1ibG9nL2xhdGVzdC1ibG9nLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1Nwb3J0U29jaWFsQmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L2xhdGVzdC1ibG9nL2xhdGVzdC1ibG9nLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovU3BvcnRTb2NpYWxCbG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvbGF0ZXN0LWJsb2cvbGF0ZXN0LWJsb2cuY29tcG9uZW50LnRzLkxhdGVzdEJsb2dDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcblxuPGRpdiBjbGFzcz1cImxhdGVzdFwiIE1haW50YWluSGVpZ2h0V2lkdGhSYXRpbyAjbGF0ZXN0PlxuICA8YSByb3V0ZXJMaW5rPVwiL3t7a2V5d29yZHNbMF19fS97e2hlYWRpbmd9fS97e2Jsb2dJZH19XCIgKGNsaWNrKT1cInNlbmQoKVwiPlxuICAgIDxpbWcgI2luaXRpYWxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9kZWZhdWx0LWltYWdlLnBuZ1wiIGFsdD1cIkluaXRpYWxibG9nSW1hZ2VcIiAqbmdJZj1cImlzbG9hZGluZ1wiPlxuICAgIDxpbWcgc3JjPVwie3tibG9nSW1hZ2V9fVwiIHRpdGxlPVwie3tJbWFnZURlc2N9fVwiIChsb2FkKT1cInJlbW92ZUluaXRpYWxJbWFnZSgpXCIgIChlcnJvcik9XCJzZXREZWZhdWx0KClcIiBhbHQ9XCJibG9nSW1hZ2VcIiAgKm5nSWY9XCJkYXRhUmVjaWV2ZWRcIiAjYmxvZ2ltYWdlPlxuICAgIFxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJkZXNjXCIgI0Rlc2M+XG4gICAgICA8ZGl2ICNEZXNjQ2hpbGQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC12aWV3LXdoaXRlLnBuZ1wiIGFsdD1cInNwb3J0cy1zb2NpYWwtdmlldy13aGl0ZVwiPlxuICAgICAgICAgIDxzcGFuPnt7Vmlld0NvdW50fX08L3NwYW4+IFxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC1zaGFyZS13aGl0ZS5wbmdcIiBhbHQ9XCJzcG9ydHMtc29jaWFsLXNoYXJlLXdoaXRlXCI+XG4gICAgICAgICAgPHNwYW4+e3tTaGFyZUNvdW50fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgPHNwYW4+e3tpbnNlcnRlZERhdGV9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj58PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt7a2V5d29yZHNbMF19fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGluZ1wiIFtpbm5lckh0bWxdPVwiaGVhZGluZ1wiICNsYXRlc3RUaXRsZT4gPC9wPlxuICAgICAgICA8IS0tIDxwICBjbGFzcz1cInNtYWxsRGVzY1wiICNsYXRlc3REZXNjPnt7Q29udGVudH19PC9wPiAtLT5cbiAgICAgICAgPHAgIGNsYXNzPVwic21hbGxEZXNjXCIgI2xhdGVzdERlc2M+e3tjb250ZW50fX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJCbG9nZ2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2dnZXJJbWFnZVwiICNCbG9nZ2VySW1hZ2U+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC1ibG9nZ2VyLXdoaXRlLnBuZ1wiIGFsdD1cInNwb3J0cy1zb2NpYWwtYmxvZ2dlci13aGl0ZVwiID5cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgIDxwIGNsYXNzPVwiYmxvZ2dlck5hbWVcIj57e2Jsb2dnZXJOYW1lfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYT5cbjwvZGl2PiIsIjxTcG9ydFNvY2lhbC1sYXRlc3QtYmxvZz48L1Nwb3J0U29jaWFsLWxhdGVzdC1ibG9nPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNJSTtNQUFBO01BQUE7OztvQkFDQTtNQUFBO1VBQUE7UUFBQTtRQUFBO1FBQStDO1VBQUE7VUFBQTtRQUFBO1FBQStCO1VBQUE7VUFBQTtRQUFBO1FBQTlFO01BQUE7O0lBQUs7SUFBb0I7SUFBekIsV0FBSyxVQUFvQixTQUF6Qjs7Ozs7OztvQkFMSix5Q0FFQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBLDBEQUFxRDtVQUFBLFdBQ25EO1VBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBd0Q7Y0FBQTtjQUFBO1lBQUE7WUFBeEQ7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBeUUsMkNBQ3ZFO1VBQUE7YUFBQTtVQUFBLHdCQUFtRywyQ0FDbkc7aUJBQUE7YUFBQTtVQUFBLHdCQUFzSjtNQUd0SjtVQUFBO01BQXdCLDZDQUN0QjtVQUFBO1VBQUEsOEJBQWdCO01BQ2Q7VUFBQSwwREFBbUI7VUFBQSxtQkFDakI7VUFBQTtVQUFBO01BQXNGLGlEQUN0RjtVQUFBO1VBQUEsOEJBQU0sd0NBQW9CO2lCQUFBLG1DQUMxQjtVQUFBO1VBQUE7TUFBd0YsaURBQ3hGO1VBQUE7VUFBQSw4QkFBTSx3Q0FBcUI7aUJBQUEsZ0NBQ3ZCO01BQ047VUFBQSwwREFBTTtVQUFBLG1CQUNKO1VBQUE7TUFBTSx3Q0FBdUI7TUFDN0I7VUFBQSwwREFBTTtVQUFBLFFBQVEsaURBQ2Q7VUFBQTtVQUFBLDRDQUFNO1VBQUEsVUFBc0IsK0NBQ3hCO1VBQUEsaUJBQ047VUFBQTtVQUFBLDhCQUFzRCxzQ0FBSztpQkFBQSxnQ0FDRDtNQUMxRDtVQUFBO01BQWtDLHdDQUFlO01BQ2pEO1VBQUE7TUFBcUIsaURBQ25CO1VBQUE7VUFBQSw0Q0FBd0M7VUFBQSx1QkFDcEM7VUFBQTtVQUFBO01BQTZGLGlEQUMzRjtVQUFBLHFCQUNOO1VBQUE7VUFBQSxnQkFBdUIsd0NBQW1CO1VBQUEsaUJBQ3RDLDZDQUNGO1VBQUEsYUFDRix5Q0FDSjtVQUFBOztJQTdCRDtRQUFBO0lBQUgsWUFBRyxTQUFIO0lBQ21GO0lBQWpGLFlBQWlGLFNBQWpGO0lBQ3NIO0lBQXRILFlBQXNILFNBQXRIOzs7SUFGRjtJQUFBO0lBQUEsWUFBQSxtQkFBQTtJQVNjO0lBQUE7SUFFQTtJQUFBO0lBR0E7SUFBQTtJQUVBO0lBQUE7SUFFVztJQUFuQixZQUFtQixTQUFuQjtJQUVrQztJQUFBO0lBS1Q7SUFBQTs7OztvQkM1QmpDO01BQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSxxRUFBQTtNQUFBOzZCQUFBO0lBQUE7Ozs7Ozs7OyJ9
