/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './blog-footer.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../../src/app/blog-footer/blog-footer.component';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../src/app/services/post.service';
import * as i5 from '../../../../../src/app/services/status.service';
const styles_BlogFooterComponent:any[] = [i0.styles];
export const RenderType_BlogFooterComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_BlogFooterComponent,data:{}});
function View_BlogFooterComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'p',[['class',
      'errorMessage']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Email is Inavlid!!! Please enter correct Email']))],
      (null as any),(null as any));
}
function View_BlogFooterComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,[['subscriptionBox',1]],(null as any),15,'div',
      [['class','subscriptionBox']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),3,'div',[['class','top']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n        '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),0,'img',[['class',
      'closeMessage'],['role','button'],['src','/assets/images/sports-social-cancel-black.png']],
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.close()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(7,0,(null as any),
          (null as any),7,'div',[['class','bottom']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(9,0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Great'])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(12,0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n            You have Subscribed for our Newsletter and Blog updates.\n        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n']))],(null as any),(null as any));
}
export function View_BlogFooterComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵqud(402653184,1,{followUs:0}),i1.ɵqud(402653184,2,{copyright:0}),
      i1.ɵqud(402653184,3,{subscriber:0}),i1.ɵqud(402653184,4,{footer:0}),(_l()(),
          i1.ɵeld(4,0,[[4,0],['footer',1]],(null as any),66,'footer',([] as any[]),
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(6,0,(null as any),
          (null as any),9,'div',[['class','subscribe']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(8,0,(null as any),(null as any),1,'p',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n      Subscribe\n    '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵeld(11,0,[[3,0],['subscriber',1]],
          (null as any),0,'input',[['email',''],['placeholder','Enter your Email'],
              ['type','email']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(13,
          0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.BlogFooterComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.Subscribe()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Submit'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_BlogFooterComponent_1)),i1.ɵdid(18,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,
          i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  '])),(_l()(),i1.ɵeld(20,0,[['blogName',1]],(null as any),1,'p',[['class',
          'blogName']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Chase Your Sport'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  '])),(_l()(),i1.ɵeld(23,0,[['tagline',1]],(null as any),1,'p',[['class',
          'tagline']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['The Sports Social Blog'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵeld(26,0,[['about',1]],(null as any),
          1,'p',[['class','about']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),[' \n    Sports Social Blog: Chase Your Sport aims to create a sustainable platform for Indian sports \n    lovers to provide latest updates on Indian Sports Trends, analytics, career in sports & \n    health & fitness tips\n  '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(29,0,[['contactUs',
          1]],(null as any),1,'p',[['class','contactUs']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    Contact Us: letstalk@sportsocial.in\n  '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n  \n  '])),(_l()(),i1.ɵeld(33,
          0,[[1,0],['followUs',1]],(null as any),31,'p',[['class','followUs']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n    Follow us on \n    '])),(_l()(),i1.ɵeld(35,0,(null as any),
          (null as any),3,'a',[['href','https://www.facebook.com/chaseyoursport'],
              ['rel','noopener'],['target','_blank']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(37,0,(null as any),(null as any),0,'img',
          [['alt','facebook_Logo'],['src','/assets/images/sports-social-facebook-logo-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          [' \n    '])),(_l()(),i1.ɵeld(40,0,(null as any),(null as any),3,'a',[['href',
          'https://www.twitter.com/chaseyoursport'],['rel','noopener'],['target','_blank']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(42,0,(null as any),
          (null as any),0,'img',[['alt','twitter_Logo'],['src','/assets/images/sports-social-twitter-logo-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(45,0,(null as any),(null as any),3,'a',[['href',
          'https://www.instagram.com/chaseyoursport'],['rel','noopener'],['target',
          '_blank']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(47,0,(null as any),
          (null as any),0,'img',[['alt','insta_Logo'],['src','/assets/images/sports-social-instagram-logo-white.png']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(50,0,(null as any),(null as any),3,'a',[['href',
          'https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network'],
          ['rel','noopener'],['target','_blank']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(52,0,(null as any),(null as any),0,'img',[['alt','quora_Logo'],
          ['src','/assets/images/sports-social-quora-logo-white.png']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵeld(55,0,(null as any),(null as any),3,'a',[['href','https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ'],
          ['rel','noopener'],['target','_blank']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(57,0,(null as any),(null as any),0,'img',[['alt','youtube_Logo'],
          ['src','/assets/images/sports-social-youtube-logo-white.png']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵeld(60,0,(null as any),(null as any),3,'a',[['href','https://www.pinterest.com/chaseyoursport'],
          ['rel','noopener'],['target','_blank']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(62,0,(null as any),(null as any),0,'img',[['alt','pintrest_Logo'],
          ['src','/assets/images/sports-social-pinterest-logo-white.png']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    \n  '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(66,0,[[2,0],['copyright',
          1]],(null as any),3,'p',[['class','copyright']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    Copyright '])),(_l()(),i1.ɵeld(68,0,(null as any),(null as any),
          0,'img',[['src','/assets/images/copyright.png']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          [' 2017 CnP Sports Services Private Limited | All Rights Reserved\n  '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵted(-1,(null as any),['\n\n\n'])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_BlogFooterComponent_2)),
      i1.ɵdid(73,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.BlogFooterComponent = _v.component;
        const currVal_0:any = _co.errorMessage;
        _ck(_v,18,0,currVal_0);
        const currVal_1:any = _co.showSubscriptionBox;
        _ck(_v,73,0,currVal_1);
      },(null as any));
}
export function View_BlogFooterComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'SportSocial-blog-footer',
      ([] as any[]),(null as any),[['window','resize']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('window:resize' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onresize()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_BlogFooterComponent_0,RenderType_BlogFooterComponent)),i1.ɵdid(1,114688,
      (null as any),0,i2.BlogFooterComponent,[i4.PostService,i1.Renderer2,i5.StatusService,
          i1.PLATFORM_ID],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const BlogFooterComponentNgFactory:i1.ComponentFactory<i2.BlogFooterComponent> = i1.ɵccf('SportSocial-blog-footer',
    i2.BlogFooterComponent,View_BlogFooterComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvUmFqaXYgVGFud2FyL3NzYmxvZy9zcmMvYXBwL2Jsb2ctZm9vdGVyL2Jsb2ctZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9SYWppdiBUYW53YXIvc3NibG9nL3NyYy9hcHAvYmxvZy1mb290ZXIvYmxvZy1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvUmFqaXYgVGFud2FyL3NzYmxvZy9zcmMvYXBwL2Jsb2ctZm9vdGVyL2Jsb2ctZm9vdGVyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvUmFqaXYgVGFud2FyL3NzYmxvZy9zcmMvYXBwL2Jsb2ctZm9vdGVyL2Jsb2ctZm9vdGVyLmNvbXBvbmVudC50cy5CbG9nRm9vdGVyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGZvb3RlciAjZm9vdGVyPlxyXG4gIDxkaXYgY2xhc3M9XCJzdWJzY3JpYmVcIiA+XHJcbiAgICA8cD5cclxuICAgICAgU3Vic2NyaWJlXHJcbiAgICA8L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEVtYWlsXCIgI3N1YnNjcmliZXIgIGVtYWlsPlxyXG4gICAgPGJ1dHRvbiAgKGNsaWNrKT1cIlN1YnNjcmliZSgpXCI+U3VibWl0PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPHAgIGNsYXNzPVwiZXJyb3JNZXNzYWdlXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj5FbWFpbCBpcyBJbmF2bGlkISEhIFBsZWFzZSBlbnRlciBjb3JyZWN0IEVtYWlsPC9wPlxyXG4gIDxwIGNsYXNzPVwiYmxvZ05hbWVcIiAjYmxvZ05hbWU+Q2hhc2UgWW91ciBTcG9ydDwvcD5cclxuICA8cCBjbGFzcz1cInRhZ2xpbmVcIiAjdGFnbGluZT5UaGUgU3BvcnRzIFNvY2lhbCBCbG9nPC9wPlxyXG4gIDxwIGNsYXNzPVwiYWJvdXRcIiAjYWJvdXQ+IFxyXG4gICAgU3BvcnRzIFNvY2lhbCBCbG9nOiBDaGFzZSBZb3VyIFNwb3J0IGFpbXMgdG8gY3JlYXRlIGEgc3VzdGFpbmFibGUgcGxhdGZvcm0gZm9yIEluZGlhbiBzcG9ydHMgXHJcbiAgICBsb3ZlcnMgdG8gcHJvdmlkZSBsYXRlc3QgdXBkYXRlcyBvbiBJbmRpYW4gU3BvcnRzIFRyZW5kcywgYW5hbHl0aWNzLCBjYXJlZXIgaW4gc3BvcnRzICYgXHJcbiAgICBoZWFsdGggJiBmaXRuZXNzIHRpcHNcclxuICA8L3A+XHJcbiAgPHAgY2xhc3M9XCJjb250YWN0VXNcIiAjY29udGFjdFVzPlxyXG4gICAgQ29udGFjdCBVczogbGV0c3RhbGtAc3BvcnRzb2NpYWwuaW5cclxuICA8L3A+XHJcbiAgPCEtLSA8cCBjbGFzcz1cImVkaXRvclwiPiA8YSByb3V0ZXJMaW5rPVwiL2VkaXRvclBhbmVsXCI+RWRpdG9yPC9hPjwvcD4gLS0+XHJcbiAgXHJcbiAgPHAgY2xhc3M9XCJmb2xsb3dVc1wiICNmb2xsb3dVcz5cclxuICAgIEZvbGxvdyB1cyBvbiBcclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vY2hhc2V5b3Vyc3BvcnRcIiB0YXJnZXQ9XCJfYmxhbmtcIiAgcmVsPVwibm9vcGVuZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtZmFjZWJvb2stbG9nby13aGl0ZS5wbmdcIiBhbHQ9XCJmYWNlYm9va19Mb2dvXCIgPlxyXG4gICAgPC9hPiBcclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9jaGFzZXlvdXJzcG9ydFwiIHRhcmdldD1cIl9ibGFua1wiICByZWw9XCJub29wZW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC10d2l0dGVyLWxvZ28td2hpdGUucG5nXCIgYWx0PVwidHdpdHRlcl9Mb2dvXCIgID5cclxuICAgIDwvYT5cclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2NoYXNleW91cnNwb3J0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtaW5zdGFncmFtLWxvZ28td2hpdGUucG5nXCIgYWx0PVwiaW5zdGFfTG9nb1wiID5cclxuICAgIDwvYT5cclxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5xdW9yYS5jb20vdG9waWMvU3BvcnRzLVNvY2lhbC1JbmRpYXMtRmlyc3QtU3BvcnRzLVNvY2lhbC1OZXR3b3JrXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtcXVvcmEtbG9nby13aGl0ZS5wbmdcIiBhbHQ9XCJxdW9yYV9Mb2dvXCI+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQzhkUlBqeWZOa3htT296UHVVczVZVlFcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3BvcnRzLXNvY2lhbC15b3V0dWJlLWxvZ28td2hpdGUucG5nXCIgYWx0PVwieW91dHViZV9Mb2dvXCI+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9jaGFzZXlvdXJzcG9ydFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zcG9ydHMtc29jaWFsLXBpbnRlcmVzdC1sb2dvLXdoaXRlLnBuZ1wiIGFsdD1cInBpbnRyZXN0X0xvZ29cIj5cclxuICAgIDwvYT5cclxuICAgIFxyXG4gIDwvcD5cclxuICA8cCBjbGFzcz1cImNvcHlyaWdodFwiICNjb3B5cmlnaHQ+XHJcbiAgICBDb3B5cmlnaHQgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9jb3B5cmlnaHQucG5nXCI+IDIwMTcgQ25QIFNwb3J0cyBTZXJ2aWNlcyBQcml2YXRlIExpbWl0ZWQgfCBBbGwgUmlnaHRzIFJlc2VydmVkXHJcbiAgPC9wPlxyXG48L2Zvb3Rlcj5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uQm94XCIgI3N1YnNjcmlwdGlvbkJveCAqbmdJZj1cInNob3dTdWJzY3JpcHRpb25Cb3hcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Nwb3J0cy1zb2NpYWwtY2FuY2VsLWJsYWNrLnBuZ1wiIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlTWVzc2FnZVwiICAoY2xpY2spPVwiY2xvc2UoKVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcbiAgICAgICAgPHA+R3JlYXQ8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFlvdSBoYXZlIFN1YnNjcmliZWQgZm9yIG91ciBOZXdzbGV0dGVyIGFuZCBCbG9nIHVwZGF0ZXMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iLCI8U3BvcnRTb2NpYWwtYmxvZy1mb290ZXI+PC9TcG9ydFNvY2lhbC1ibG9nLWZvb3Rlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDUUU7TUFBQTtNQUE4Qzs7OztvQkF5Q2hEO01BQUE7TUFBQSxnQkFBMEUsOENBQ3RFO01BQUE7TUFBQSw0Q0FBaUI7TUFBQSxpQkFDYjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQTZGO1VBQUE7VUFBQTtRQUFBO1FBQTdGO01BQUEsZ0NBQStHO01BQzdHLDhDQUNOO1VBQUE7VUFBQSw4QkFBb0I7TUFDaEI7VUFBQSwwREFBRztVQUFBLDBCQUFTO01BQ1o7VUFBQSwwREFBRztVQUFBO01BRUMsOENBQ0Y7VUFBQTs7OzswRUExRFY7aUJBQUE7Y0FBQTtNQUFnQiw0Q0FDZDtVQUFBO1VBQUEsNENBQXdCO1VBQUEsYUFDdEI7VUFBQTtNQUFHLCtEQUVDO1VBQUEsMkJBQ0o7VUFBQTtjQUFBO1VBQUEsZ0JBQXNFLDhDQUN0RTtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQVM7Y0FBQTtjQUFBO1lBQUE7WUFBVDtVQUFBLGdDQUErQjtNQUFlLDRDQUMxQztVQUFBLFdBQ047VUFBQSxvQ0FBQTt3QkFBQSxtQ0FBZ0c7VUFBQSxXQUNoRztVQUFBO01BQThCLHdEQUFvQjtVQUFBLFdBQ2xEO1VBQUE7TUFBNEIsOERBQTBCO1VBQUEseUJBQ3REO1VBQUE7VUFBQSxnQkFBd0I7TUFJcEIsNENBQ0o7VUFBQTtVQUFBLDRDQUFnQztVQUFBLG9EQUU1QjtVQUFBLFdBQ21FLGdEQUV2RTtVQUFBO1VBQUEsMERBQThCO1VBQUEsOENBRTVCO1VBQUE7Y0FBQTtVQUFBLDRDQUFrRjtVQUFBLGlCQUM5RTtVQUFBO1VBQUE7TUFBcUYsOENBQ3JGO1VBQUEsY0FDSjtVQUFBO1VBQUE7TUFBaUYsa0RBQzdFO1VBQUE7VUFBQTtNQUFvRiw4Q0FDcEY7VUFBQSxhQUNKO1VBQUE7VUFBQTtNQUFrRixrREFDOUU7VUFBQTtVQUFBO01BQW1GLDhDQUNuRjtVQUFBLGFBQ0o7VUFBQTtVQUFBO1VBQUEsOEJBQXNIO01BQ2xIO1VBQUE7VUFBQSwwREFBOEU7VUFBQSwyQkFDOUU7TUFDSjtVQUFBO1VBQUEsOEJBQWtHO01BQzlGO1VBQUE7VUFBQSwwREFBa0Y7VUFBQSwyQkFDbEY7TUFDSjtVQUFBO1VBQUEsOEJBQWtGO01BQzlFO1VBQUE7VUFBQSwwREFBcUY7VUFBQSwyQkFDckY7TUFFRiw0Q0FDSjtVQUFBO1VBQUEsNENBQWdDO1VBQUEsdUJBQ3BCO1VBQUE7VUFBQSw0Q0FBd0M7VUFBQTtNQUNoRCwwQ0FDRztNQUdUO2FBQUE7VUFBQSxpQ0FVTTs7O1FBbkRxQjtRQUF6QixZQUF5QixTQUF6QjtRQXlDNEM7UUFBOUMsWUFBOEMsU0FBOUM7Ozs7b0JDakRBO01BQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSxxRUFBQTtNQUFBO3dCQUFBO0lBQUE7Ozs7In0=
