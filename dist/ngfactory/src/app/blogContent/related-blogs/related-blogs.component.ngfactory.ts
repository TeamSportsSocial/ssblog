/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './related-blogs.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../../src/app/directives/tab-view-available.directive';
import * as i3 from '../../../../../../src/app/services/property.service';
import * as i4 from '../normal-blog/normal-blog.component.ngfactory';
import * as i5 from '../../../../../../src/app/blogContent/normal-blog/normal-blog.component';
import * as i6 from '../../../../../../src/app/services/post.service';
import * as i7 from '@angular/common';
import * as i8 from '../../../../../../src/app/blogContent/related-blogs/related-blogs.component';
const styles_RelatedBlogsComponent:any[] = [i0.styles];
export const RenderType_RelatedBlogsComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_RelatedBlogsComponent,data:{}});
function View_RelatedBlogsComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),0,'img',[['class',
      'loading'],['src','/assets/images/sports-social-loading.gif']],(null as any),
      (null as any),(null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_RelatedBlogsComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),6,'div',[['TabViewAvailable',
      ''],['class','col-4']],(null as any),[['window','resize']],(_v,en,$event) => {
    var ad:boolean = true;
    if (('window:resize' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(1,5259264,(null as any),0,i2.TabViewAvailableDirective,
      [i1.ElementRef,i1.Renderer2,i3.PropertyService,i1.PLATFORM_ID],(null as any),
      (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(3,
      0,(null as any),(null as any),2,'SportSocial-normal-blog',([] as any[]),(null as any),
      [['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,4).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i4.View_NormalBlogComponent_0,i4.RenderType_NormalBlogComponent)),i1.ɵdid(4,
      4308992,(null as any),0,i5.NormalBlogComponent,[i3.PropertyService,i3.PropertyService,
          i1.Renderer2,i6.PostService,i3.PropertyService,i1.NgZone,i1.PLATFORM_ID],
      {blogId:[0,'blogId'],blogImage:[1,'blogImage'],bloggerImage:[2,'bloggerImage'],
          bloggerName:[3,'bloggerName'],heading:[4,'heading'],insertedDate:[5,'insertedDate'],
          Content:[6,'Content'],ViewCount:[7,'ViewCount'],ShareCount:[8,'ShareCount'],
          keywords:[9,'keywords'],exactDate:[10,'exactDate'],readingTime:[11,'readingTime'],
          MetaDesc:[12,'MetaDesc'],ImageDesc:[13,'ImageDesc'],PrimaryKeyword:[14,'PrimaryKeyword'],
          ShortTitle:[15,'ShortTitle']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
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
    const currVal_14:any = _v.context.$implicit.PrimaryKeyword;
    const currVal_15:any = _v.context.$implicit.ShortTitle;
    _ck(_v,4,1,[currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
        currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,
        currVal_14,currVal_15]);
  },(null as any));
}
function View_RelatedBlogsComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),10,'div',[['class',
      'relatedBlog']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Related Articles'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_RelatedBlogsComponent_2)),i1.ɵdid(6,16384,
          (null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_RelatedBlogsComponent_3)),
      i1.ɵdid(9,802816,(null as any),0,i7.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n  ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:boolean = !_co.dataRecived;
    _ck(_v,6,0,currVal_0);
    const currVal_1:any = _co.relatedBlogDetails;
    _ck(_v,9,0,currVal_1);
  },(null as any));
}
function View_RelatedBlogsComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),0,'img',[['class',
      'loading'],['src','/assets/images/sports-social-loading.gif']],(null as any),
      (null as any),(null as any),(null as any),(null as any)))],(null as any),(null as any));
}
function View_RelatedBlogsComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),5,'div',[['class',
      'col-4']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),2,'SportSocial-normal-blog',([] as any[]),(null as any),[['window',
              'resize']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('window:resize' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,3).onresize()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i4.View_NormalBlogComponent_0,i4.RenderType_NormalBlogComponent)),i1.ɵdid(3,
          4308992,(null as any),0,i5.NormalBlogComponent,[i3.PropertyService,i3.PropertyService,
              i1.Renderer2,i6.PostService,i3.PropertyService,i1.NgZone,i1.PLATFORM_ID],
          {blogId:[0,'blogId'],blogImage:[1,'blogImage'],bloggerImage:[2,'bloggerImage'],
              bloggerName:[3,'bloggerName'],heading:[4,'heading'],insertedDate:[5,
                  'insertedDate'],Content:[6,'Content'],ViewCount:[7,'ViewCount'],
              ShareCount:[8,'ShareCount'],keywords:[9,'keywords'],exactDate:[10,'exactDate'],
              readingTime:[11,'readingTime'],MetaDesc:[12,'MetaDesc'],ImageDesc:[13,
                  'ImageDesc'],PrimaryKeyword:[14,'PrimaryKeyword'],ShortTitle:[15,
                  'ShortTitle']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  ']))],(_ck,_v) => {
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
    const currVal_14:any = _v.context.$implicit.PrimaryKeyword;
    const currVal_15:any = _v.context.$implicit.ShortTitle;
    _ck(_v,3,1,[currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
        currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,
        currVal_14,currVal_15]);
  },(null as any));
}
function View_RelatedBlogsComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),10,'div',[['class',
      'mobileView relatedBlog']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['Related Articles'])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),
      i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_RelatedBlogsComponent_5)),
      i1.ɵdid(6,16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_RelatedBlogsComponent_6)),
      i1.ɵdid(9,802816,(null as any),0,i7.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n  ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:boolean = !_co.dataRecived;
    _ck(_v,6,0,currVal_0);
    const currVal_1:any = _co.relatedBlogDetails;
    _ck(_v,9,0,currVal_1);
  },(null as any));
}
export function View_RelatedBlogsComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵqud(402653184,1,{window:0}),(_l()(),i1.ɵeld(1,0,[[1,0],['window',
      1]],(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),
      i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_RelatedBlogsComponent_1)),
      i1.ɵdid(4,16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_RelatedBlogsComponent_4)),
      i1.ɵdid(7,16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i8.RelatedBlogsComponent = _v.component;
    const currVal_0:boolean = !_co.mobileView;
    _ck(_v,4,0,currVal_0);
    const currVal_1:any = _co.mobileView;
    _ck(_v,7,0,currVal_1);
  },(null as any));
}
export function View_RelatedBlogsComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'SportSocial-related-blogs',
      ([] as any[]),(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_RelatedBlogsComponent_0,RenderType_RelatedBlogsComponent)),i1.ɵdid(1,
      114688,(null as any),0,i8.RelatedBlogsComponent,[i6.PostService,i3.PropertyService,
          i1.PLATFORM_ID],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const RelatedBlogsComponentNgFactory:i1.ComponentFactory<i8.RelatedBlogsComponent> = i1.ɵccf('SportSocial-related-blogs',
    i8.RelatedBlogsComponent,View_RelatedBlogsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovbmFkL3NzYmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L3JlbGF0ZWQtYmxvZ3MvcmVsYXRlZC1ibG9ncy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vRDovbmFkL3NzYmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L3JlbGF0ZWQtYmxvZ3MvcmVsYXRlZC1ibG9ncy5jb21wb25lbnQudHMiLCJuZzovLy9EOi9uYWQvc3NibG9nL3NyYy9hcHAvYmxvZ0NvbnRlbnQvcmVsYXRlZC1ibG9ncy9yZWxhdGVkLWJsb2dzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovbmFkL3NzYmxvZy9zcmMvYXBwL2Jsb2dDb250ZW50L3JlbGF0ZWQtYmxvZ3MvcmVsYXRlZC1ibG9ncy5jb21wb25lbnQudHMuUmVsYXRlZEJsb2dzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiAjd2luZG93PlxyXG4gIDxkaXYgICpuZ0lmPVwiIW1vYmlsZVZpZXdcIiBjbGFzcz1cInJlbGF0ZWRCbG9nXCI+XHJcbiAgICA8cCA+UmVsYXRlZCBBcnRpY2xlczwvcD5cclxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC1sb2FkaW5nLmdpZlwiICpuZ0lmPVwiIWRhdGFSZWNpdmVkXCIgY2xhc3M9XCJsb2FkaW5nXCIgPlxyXG4gICAgPGRpdiBUYWJWaWV3QXZhaWxhYmxlIGNsYXNzPVwiY29sLTRcIiAqbmdGb3I9XCJsZXQgZGF0YSBvZiByZWxhdGVkQmxvZ0RldGFpbHM7bGV0IGk9aW5kZXhcIj5cclxuICAgICAgPFNwb3J0U29jaWFsLW5vcm1hbC1ibG9nIFxyXG4gICAgICAgIFtibG9nSWRdPVwiZGF0YS5ibG9nSWRcIlxyXG4gICAgICAgIFtibG9nSW1hZ2VdPVwiZGF0YS5ibG9nSW1hZ2VcIlxyXG4gICAgICAgIFtibG9nZ2VySW1hZ2VdPVwiZGF0YS5ibG9nZ2VySW1hZ2VcIlxyXG4gICAgICAgIFtibG9nZ2VyTmFtZV09XCJkYXRhLmJsb2dnZXJOYW1lXCJcclxuICAgICAgICBbaW5zZXJ0ZWREYXRlXT1cImRhdGEuaW5zZXJ0ZWREYXRlXCJcclxuICAgICAgICBbaGVhZGluZ109XCJkYXRhLmhlYWRpbmdcIlxyXG4gICAgICAgIFtDb250ZW50XT1cImRhdGEuQ29udGVudFwiXHJcbiAgICAgICAgW1ZpZXdDb3VudF09XCJkYXRhLlZpZXdDb3VudFwiXHJcbiAgICAgICAgW1NoYXJlQ291bnRdPVwiZGF0YS5TaGFyZUNvdW50XCJcclxuICAgICAgICBba2V5d29yZHNdPVwiZGF0YS5rZXl3b3Jkc1wiXHJcbiAgICAgICAgW2V4YWN0RGF0ZV09XCJkYXRhLmV4YWN0RGF0ZVwiXHJcbiAgICAgICAgW3JlYWRpbmdUaW1lXT1cImRhdGEucmVhZGluZ1RpbWVcIlxyXG4gICAgICAgIFtNZXRhRGVzY109XCJkYXRhLk1ldGFEZXNjXCJcclxuICAgICAgICBbSW1hZ2VEZXNjXT1cImRhdGEuSW1hZ2VEZXNjXCJcclxuICAgICAgICBbUHJpbWFyeUtleXdvcmRdPVwiZGF0YS5QcmltYXJ5S2V5d29yZFwiXHJcbiAgICAgICAgW1Nob3J0VGl0bGVdPVwiZGF0YS5TaG9ydFRpdGxlXCI+XHJcbiAgICAgIDwvU3BvcnRTb2NpYWwtbm9ybWFsLWJsb2c+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibW9iaWxlVmlld1wiIGNsYXNzPVwibW9iaWxlVmlldyByZWxhdGVkQmxvZ1wiPlxyXG4gICAgPHA+UmVsYXRlZCBBcnRpY2xlczwvcD5cclxuICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC1sb2FkaW5nLmdpZlwiICpuZ0lmPVwiIWRhdGFSZWNpdmVkXCIgY2xhc3M9XCJsb2FkaW5nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIiAqbmdGb3I9XCJsZXQgZGF0YSBvZiByZWxhdGVkQmxvZ0RldGFpbHM7bGV0IGk9aW5kZXhcIj5cclxuICAgICAgPFNwb3J0U29jaWFsLW5vcm1hbC1ibG9nIFxyXG4gICAgICAgICAgW2Jsb2dJZF09XCJkYXRhLmJsb2dJZFwiXHJcbiAgICAgICAgICBbYmxvZ0ltYWdlXT1cImRhdGEuYmxvZ0ltYWdlXCJcclxuICAgICAgICAgIFtibG9nZ2VySW1hZ2VdPVwiZGF0YS5ibG9nZ2VySW1hZ2VcIlxyXG4gICAgICAgICAgW2Jsb2dnZXJOYW1lXT1cImRhdGEuYmxvZ2dlck5hbWVcIlxyXG4gICAgICAgICAgW2luc2VydGVkRGF0ZV09XCJkYXRhLmluc2VydGVkRGF0ZVwiXHJcbiAgICAgICAgICBbaGVhZGluZ109XCJkYXRhLmhlYWRpbmdcIlxyXG4gICAgICAgICAgW0NvbnRlbnRdPVwiZGF0YS5Db250ZW50XCJcclxuICAgICAgICAgIFtWaWV3Q291bnRdPVwiZGF0YS5WaWV3Q291bnRcIlxyXG4gICAgICAgICAgW1NoYXJlQ291bnRdPVwiZGF0YS5TaGFyZUNvdW50XCJcclxuICAgICAgICAgIFtrZXl3b3Jkc109XCJkYXRhLmtleXdvcmRzXCJcclxuICAgICAgICAgIFtleGFjdERhdGVdPVwiZGF0YS5leGFjdERhdGVcIlxyXG4gICAgICAgICAgW3JlYWRpbmdUaW1lXT1cImRhdGEucmVhZGluZ1RpbWVcIlxyXG4gICAgICAgICAgW01ldGFEZXNjXT1cImRhdGEuTWV0YURlc2NcIlxyXG4gICAgICAgICAgW0ltYWdlRGVzY109XCJkYXRhLkltYWdlRGVzY1wiXHJcbiAgICAgICAgICBbUHJpbWFyeUtleXdvcmRdPVwiZGF0YS5QcmltYXJ5S2V5d29yZFwiXHJcbiAgICAgICAgICBbU2hvcnRUaXRsZV09XCJkYXRhLlNob3J0VGl0bGVcIj5cclxuICAgICAgPC9TcG9ydFNvY2lhbC1ub3JtYWwtYmxvZz5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiIsIjxTcG9ydFNvY2lhbC1yZWxhdGVkLWJsb2dzPjwvU3BvcnRTb2NpYWwtcmVsYXRlZC1ibG9ncz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDR0k7TUFBQTtNQUFBOzs7b0JBQ0E7TUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtFQUFBLHVDQUFBO01BQUE7TUFBQSxlQUF3RixnREFDdEY7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsMkVBQUE7TUFBQTtpRkFBQTtNQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQSw2Q0FnQmlDO01BQUEsZUFDUDtJQWhCeEI7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQURBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFoQkYsWUFDRSxVQUNBLFVBQ0EsVUFDQSxVQUVBLFVBREEsVUFFQTtRQUNBLFVBQ0EsVUFDQSxVQUNBLFdBQ0EsV0FDQSxXQUNBO1FBQ0EsV0FDQSxVQWhCRjs7OztvQkFKSjtNQUFBO01BQThDLDhDQUM1QztVQUFBO1VBQUEsOEJBQUk7TUFBb0IsOENBQ3hCO1VBQUEsb0VBQUE7VUFBQTtVQUFBLGVBQTBGLDhDQUMxRjtVQUFBO2FBQUE7NEJBQUEseUNBbUJNO1VBQUE7O0lBcEI4QztJQUFwRCxXQUFvRCxTQUFwRDtJQUNvQztJQUFwQyxXQUFvQyxTQUFwQzs7OztvQkF1QkE7TUFBQTtNQUFBOzs7b0JBQ0E7TUFBQTtNQUF1RSxnREFDckU7VUFBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsMkVBQUE7VUFBQTtxRkFBQTtVQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO2tCQUFBO2tCQUFBLDhCQWdCbUM7TUFDVDtJQWhCdEI7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQURBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFoQkosWUFDSSxVQUNBLFVBQ0EsVUFDQSxVQUVBLFVBREEsVUFFQTtRQUNBLFVBQ0EsVUFDQSxVQUNBLFdBQ0EsV0FDQSxXQUNBO1FBQ0EsV0FDQSxVQWhCSjs7OztvQkFKSjtNQUFBO01BQUEsZ0JBQXVELDhDQUNyRDtNQUFBO01BQUEsNENBQUc7TUFBQSx1QkFBb0IsOENBQ3ZCO2FBQUE7YUFBQTtVQUFBLGlDQUF5RjtNQUN6RjthQUFBOzRCQUFBLHlDQW1CSTtVQUFBOztJQXBCZ0Q7SUFBcEQsV0FBb0QsU0FBcEQ7SUFDbUI7SUFBbkIsV0FBbUIsU0FBbkI7Ozs7b0RBNUJKO01BQUE7TUFBQSw4QkFBYSw0Q0FDWDthQUFBO2FBQUE7VUFBQSxpQ0F1Qk07TUFDTjthQUFBO1VBQUEsaUNBdUJNO01BQ0Y7O0lBaERFO0lBQU4sV0FBTSxTQUFOO0lBd0JLO0lBQUwsV0FBSyxTQUFMOzs7O29CQ3pCRjtNQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEseUVBQUE7TUFBQTt3QkFBQTtJQUFBOzs7OyJ9
