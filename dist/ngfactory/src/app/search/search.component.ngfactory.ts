/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './search.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../src/app/directives/tab-view-available.directive';
import * as i3 from '../blogContent/normal-blog/normal-blog.component.ngfactory';
import * as i4 from '../../../../../src/app/blogContent/normal-blog/normal-blog.component';
import * as i5 from '../../../../../src/app/services/property.service';
import * as i6 from '../../../../../src/app/services/post.service';
import * as i7 from '@angular/common';
import * as i8 from '../blog-footer/blog-footer.component.ngfactory';
import * as i9 from '../../../../../src/app/blog-footer/blog-footer.component';
import * as i10 from '../../../../../src/app/services/status.service';
import * as i11 from '../../../../../src/app/search/search.component';
import * as i12 from '@angular/router';
import * as i13 from '@angular/platform-browser';
const styles_SearchComponent:any[] = [i0.styles];
export const RenderType_SearchComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_SearchComponent,data:{}});
function View_SearchComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),6,'div',[['TabViewAvailable',
      ''],['class','col-4']],(null as any),[['window','resize']],(_v,en,$event) => {
    var ad:boolean = true;
    if (('window:resize' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(1,5259264,(null as any),0,i2.TabViewAvailableDirective,
      [i1.ElementRef,i1.Renderer2,i1.PLATFORM_ID],(null as any),(null as any)),(_l()(),
      i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(3,0,(null as any),(null as any),
      2,'SportSocial-normal-blog',([] as any[]),(null as any),[['window','resize']],
      (_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,4).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i3.View_NormalBlogComponent_0,i3.RenderType_NormalBlogComponent)),i1.ɵdid(4,
      4308992,(null as any),0,i4.NormalBlogComponent,[i5.PropertyService,i1.Renderer2,
          i6.PostService,i1.NgZone,i1.PLATFORM_ID],{blogId:[0,'blogId'],blogImage:[1,
          'blogImage'],bloggerImage:[2,'bloggerImage'],bloggerName:[3,'bloggerName'],
          heading:[4,'heading'],insertedDate:[5,'insertedDate'],Content:[6,'Content'],
          ViewCount:[7,'ViewCount'],ShareCount:[8,'ShareCount'],keywords:[9,'keywords'],
          exactDate:[10,'exactDate'],readingTime:[11,'readingTime'],MetaDesc:[12,'MetaDesc'],
          ImageDesc:[13,'ImageDesc']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
      ['\n      '])),(_l()(),i1.ɵted(-1,(null as any),['\n    ']))],(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.blogId;
    const currVal_1:any = _v.context.$implicit.blogImage;
    const currVal_2:any = _v.context.$implicit.bloggerImage;
    const currVal_3:any = _v.context.$implicit.bloggerName;
    const currVal_4:any = _v.context.$implicit.heading;
    const currVal_5:any = _v.context.$implicit.insertedDate;
    const currVal_6:any = _v.context.$implicit.Content;
    const currVal_7:any = _v.context.$implicit.ViewCount;
    const currVal_8:any = _v.context.$implicit.ShareCount;
    const currVal_9:any = _v.context.$implicit.keywords;
    const currVal_10:any = _v.context.$implicit.exactDate;
    const currVal_11:any = _v.context.$implicit.readingTime;
    const currVal_12:any = _v.context.$implicit.MetaDesc;
    const currVal_13:any = _v.context.$implicit.ImageDesc;
    _ck(_v,4,1,[currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
        currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13]);
  },(null as any));
}
function View_SearchComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'div',[['class',
      'Row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n      \n    '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_SearchComponent_2)),i1.ɵdid(3,
          802816,(null as any),0,i7.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    \n  ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.blogDetails;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_SearchComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),5,'div',[['class',
      'col-4']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),2,'SportSocial-normal-blog',([] as any[]),(null as any),[['window',
              'resize']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('window:resize' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,3).onresize()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i3.View_NormalBlogComponent_0,i3.RenderType_NormalBlogComponent)),i1.ɵdid(3,
          4308992,(null as any),0,i4.NormalBlogComponent,[i5.PropertyService,i1.Renderer2,
              i6.PostService,i1.NgZone,i1.PLATFORM_ID],{blogId:[0,'blogId'],blogImage:[1,
              'blogImage'],bloggerImage:[2,'bloggerImage'],bloggerName:[3,'bloggerName'],
              heading:[4,'heading'],insertedDate:[5,'insertedDate'],Content:[6,'Content'],
              ViewCount:[7,'ViewCount'],ShareCount:[8,'ShareCount'],keywords:[9,'keywords'],
              exactDate:[10,'exactDate'],readingTime:[11,'readingTime'],MetaDesc:[12,
                  'MetaDesc'],ImageDesc:[13,'ImageDesc']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n          '])),(_l()(),i1.ɵted(-1,(null as any),['\n      ']))],
      (_ck,_v) => {
        const currVal_0:any = _v.context.$implicit.blogId;
        const currVal_1:any = _v.context.$implicit.blogImage;
        const currVal_2:any = _v.context.$implicit.bloggerImage;
        const currVal_3:any = _v.context.$implicit.bloggerName;
        const currVal_4:any = _v.context.$implicit.heading;
        const currVal_5:any = _v.context.$implicit.insertedDate;
        const currVal_6:any = _v.context.$implicit.Content;
        const currVal_7:any = _v.context.$implicit.ViewCount;
        const currVal_8:any = _v.context.$implicit.ShareCount;
        const currVal_9:any = _v.context.$implicit.keywords;
        const currVal_10:any = _v.context.$implicit.exactDate;
        const currVal_11:any = _v.context.$implicit.readingTime;
        const currVal_12:any = _v.context.$implicit.MetaDesc;
        const currVal_13:any = _v.context.$implicit.ImageDesc;
        _ck(_v,3,1,[currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
            currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13]);
      },(null as any));
}
function View_SearchComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),4,'div',[['class',
      'Row mobileView']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_SearchComponent_4)),i1.ɵdid(3,802816,
          (null as any),0,i7.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.blogDetails;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_SearchComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'button',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.nextPage()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Load More']))],
      (null as any),(null as any));
}
function View_SearchComponent_7(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),0,'img',[['class',
      'loading'],['src','/assets/images/sports-social-loading.gif']],(null as any),
      (null as any),(null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_SearchComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),7,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
      (null as any),1,(null as any),View_SearchComponent_6)),i1.ɵdid(3,16384,(null as any),
      0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_SearchComponent_7)),i1.ɵdid(6,16384,(null as any),
          0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.dataRecieved;
    _ck(_v,3,0,currVal_0);
    const currVal_1:boolean = !_co.dataRecieved;
    _ck(_v,6,0,currVal_1);
  },(null as any));
}
function View_SearchComponent_8(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'p',[['class',
      'noMoreData']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['No More Data !!!']))],(null as any),(null as any));
}
function View_SearchComponent_9(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'SportSocial-blog-footer',
      ([] as any[]),(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i8.View_BlogFooterComponent_0,i8.RenderType_BlogFooterComponent)),i1.ɵdid(1,
      114688,(null as any),0,i9.BlogFooterComponent,[i6.PostService,i1.Renderer2,i10.StatusService,
          i1.PLATFORM_ID],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export function View_SearchComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵqud(402653184,1,{searchPage:0}),i1.ɵqud(402653184,2,{blog:0}),
      (_l()(),i1.ɵeld(2,0,[[1,0],['searchPage',1]],(null as any),13,'div',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n\n  '])),(_l()(),i1.ɵeld(4,0,(null as any),
          (null as any),1,'h2',[['class','topic']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(5,(null as any),['',' blogs'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(7,0,(null as any),
          (null as any),1,'p',[['class','topicDetails']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(8,(null as any),
          ['Read the latest articles, blogs, news and other informations related to ',
              ''])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_SearchComponent_1)),i1.ɵdid(11,
          16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SearchComponent_3)),
      i1.ɵdid(14,16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_SearchComponent_5)),i1.ɵdid(18,16384,
          (null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_SearchComponent_8)),i1.ɵdid(21,
          16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['         \n'])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SearchComponent_9)),
      i1.ɵdid(24,16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),[' ']))],
      (_ck,_v) => {
        var _co:i11.SearchComponent = _v.component;
        const currVal_2:boolean = !_co.mobileView;
        _ck(_v,11,0,currVal_2);
        const currVal_3:any = _co.mobileView;
        _ck(_v,14,0,currVal_3);
        const currVal_4:any = _co.haveData;
        _ck(_v,18,0,currVal_4);
        const currVal_5:boolean = !_co.haveData;
        _ck(_v,21,0,currVal_5);
        const currVal_6:any = _co.show;
        _ck(_v,24,0,currVal_6);
      },(_ck,_v) => {
        var _co:i11.SearchComponent = _v.component;
        const currVal_0:any = _co.recievedKey;
        _ck(_v,5,0,currVal_0);
        const currVal_1:any = _co.recievedKey;
        _ck(_v,8,0,currVal_1);
      });
}
export function View_SearchComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-search',
      ([] as any[]),(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_SearchComponent_0,RenderType_SearchComponent)),i1.ɵdid(1,4308992,(null as any),
      0,i11.SearchComponent,[i5.PropertyService,i1.Renderer2,i5.PropertyService,i5.PropertyService,
          i6.PostService,i12.ActivatedRoute,i1.NgZone,i13.Title,i13.Meta],(null as any),
      (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const SearchComponentNgFactory:i1.ComponentFactory<i11.SearchComponent> = i1.ɵccf('app-search',
    i11.SearchComponent,View_SearchComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovc3NibG9nL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovc3NibG9nL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJuZzovLy9DOi9zc2Jsb2cvc3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovc3NibG9nL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMuU2VhcmNoQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiAjc2VhcmNoUGFnZT5cclxuXHJcbiAgPGgyIGNsYXNzPVwidG9waWNcIj57e3JlY2lldmVkS2V5fX0gYmxvZ3M8L2gyPlxyXG4gIDxwIGNsYXNzPVwidG9waWNEZXRhaWxzXCI+UmVhZCB0aGUgbGF0ZXN0IGFydGljbGVzLCBibG9ncywgbmV3cyBhbmQgb3RoZXIgaW5mb3JtYXRpb25zIHJlbGF0ZWQgdG8ge3tyZWNpZXZlZEtleX19PC9wPlxyXG4gIDxkaXYgY2xhc3M9XCJSb3dcIiAgKm5nSWY9XCIhbW9iaWxlVmlld1wiPlxyXG4gICAgICBcclxuICAgIDxkaXYgVGFiVmlld0F2YWlsYWJsZSBjbGFzcz1cImNvbC00XCIgKm5nRm9yPVwibGV0IGRhdGEgb2YgYmxvZ0RldGFpbHNcIj5cclxuICAgICAgPFNwb3J0U29jaWFsLW5vcm1hbC1ibG9nIFxyXG4gICAgICAgIFtibG9nSWRdPVwiZGF0YS5ibG9nSWRcIlxyXG4gICAgICAgIFtibG9nSW1hZ2VdPVwiZGF0YS5ibG9nSW1hZ2VcIlxyXG4gICAgICAgIFtibG9nZ2VySW1hZ2VdPVwiZGF0YS5ibG9nZ2VySW1hZ2VcIlxyXG4gICAgICAgIFtibG9nZ2VyTmFtZV09XCJkYXRhLmJsb2dnZXJOYW1lXCJcclxuICAgICAgICBbaW5zZXJ0ZWREYXRlXT1cImRhdGEuaW5zZXJ0ZWREYXRlXCJcclxuICAgICAgICBbaGVhZGluZ109XCJkYXRhLmhlYWRpbmdcIlxyXG4gICAgICAgIFtDb250ZW50XT1cImRhdGEuQ29udGVudFwiXHJcbiAgICAgICAgW1ZpZXdDb3VudF09XCJkYXRhLlZpZXdDb3VudFwiXHJcbiAgICAgICAgW1NoYXJlQ291bnRdPVwiZGF0YS5TaGFyZUNvdW50XCJcclxuICAgICAgICBba2V5d29yZHNdPVwiZGF0YS5rZXl3b3Jkc1wiXHJcbiAgICAgICAgW2V4YWN0RGF0ZV09XCJkYXRhLmV4YWN0RGF0ZVwiXHJcbiAgICAgICAgW3JlYWRpbmdUaW1lXT1cImRhdGEucmVhZGluZ1RpbWVcIlxyXG4gICAgICAgIFtNZXRhRGVzY109XCJkYXRhLk1ldGFEZXNjXCJcclxuICAgICAgICBbSW1hZ2VEZXNjXT1cImRhdGEuSW1hZ2VEZXNjXCI+XHJcbiAgICAgIDwvU3BvcnRTb2NpYWwtbm9ybWFsLWJsb2c+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJSb3cgbW9iaWxlVmlld1wiICpuZ0lmPVwibW9iaWxlVmlld1wiID5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCIgKm5nRm9yPVwibGV0IGRhdGEgb2YgYmxvZ0RldGFpbHM7bGV0IGk9aW5kZXhcIj5cclxuICAgICAgICAgIDxTcG9ydFNvY2lhbC1ub3JtYWwtYmxvZyBcclxuICAgICAgICAgICAgICBbYmxvZ0lkXT1cImRhdGEuYmxvZ0lkXCJcclxuICAgICAgICAgICAgICBbYmxvZ0ltYWdlXT1cImRhdGEuYmxvZ0ltYWdlXCJcclxuICAgICAgICAgICAgICBbYmxvZ2dlckltYWdlXT1cImRhdGEuYmxvZ2dlckltYWdlXCJcclxuICAgICAgICAgICAgICBbYmxvZ2dlck5hbWVdPVwiZGF0YS5ibG9nZ2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgW2luc2VydGVkRGF0ZV09XCJkYXRhLmluc2VydGVkRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW2hlYWRpbmddPVwiZGF0YS5oZWFkaW5nXCJcclxuICAgICAgICAgICAgICBbQ29udGVudF09XCJkYXRhLkNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIFtWaWV3Q291bnRdPVwiZGF0YS5WaWV3Q291bnRcIlxyXG4gICAgICAgICAgICAgIFtTaGFyZUNvdW50XT1cImRhdGEuU2hhcmVDb3VudFwiXHJcbiAgICAgICAgICAgICAgW2tleXdvcmRzXT1cImRhdGEua2V5d29yZHNcIlxyXG4gICAgICAgICAgICAgIFtleGFjdERhdGVdPVwiZGF0YS5leGFjdERhdGVcIlxyXG4gICAgICAgICAgICAgIFtyZWFkaW5nVGltZV09XCJkYXRhLnJlYWRpbmdUaW1lXCIgXHJcbiAgICAgICAgICAgICAgW01ldGFEZXNjXT1cImRhdGEuTWV0YURlc2NcIlxyXG4gICAgICAgICAgICAgIFtJbWFnZURlc2NdPVwiZGF0YS5JbWFnZURlc2NcIj5cclxuICAgICAgICAgIDwvU3BvcnRTb2NpYWwtbm9ybWFsLWJsb2c+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cImhhdmVEYXRhXCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJuZXh0UGFnZSgpXCIgKm5nSWY9XCJkYXRhUmVjaWV2ZWRcIj5Mb2FkIE1vcmU8L2J1dHRvbj5cclxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC1sb2FkaW5nLmdpZlwiICpuZ0lmPVwiIWRhdGFSZWNpZXZlZFwiIGNsYXNzPVwibG9hZGluZ1wiPlxyXG48L2Rpdj5cclxuPHAgKm5nSWY9XCIhaGF2ZURhdGFcIiBjbGFzcz1cIm5vTW9yZURhdGFcIiA+Tm8gTW9yZSBEYXRhICEhITwvcD4gICAgICAgICBcclxuPFNwb3J0U29jaWFsLWJsb2ctZm9vdGVyICpuZ0lmPVwic2hvd1wiPjwvU3BvcnRTb2NpYWwtYmxvZy1mb290ZXI+ICIsIjxhcHAtc2VhcmNoPjwvYXBwLXNlYXJjaD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7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
