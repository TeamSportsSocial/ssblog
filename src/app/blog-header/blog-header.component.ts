import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Renderer2,
  ChangeDetectorRef,
  NgZone,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {PropertyService} from '../services/property.service';
import {GetService} from '../services/get.service';
import {Http} from '@angular/http';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs/Rx';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';



@Component({
  selector: 'SportSocialBlog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css'],
})
export class BlogHeaderComponent implements OnInit {
  data;
  keywords=[];
  pageNumber=1;
  selected;
  customText;
  Page:{
    name:string
    page:number
  };

  @ViewChild('Header') Header:ElementRef;
  @ViewChild('searchBox') searchBox:ElementRef;
  @ViewChild('resultBox') resultBox:ElementRef;
  @ViewChild('linkImage') linkImage:ElementRef;
  mobileView:boolean=false;
  searchedTextPresent:boolean=false;
  open:boolean=false;
  search:boolean=false;
  results = [];
  haveresult:boolean=false;
  searchKey = new ReplaySubject();
  SearchKey;
  isBrowser: boolean;
  constructor(
    private sendHeight: PropertyService,
    private renderer: Renderer2,
    private send: PropertyService,
    private get: GetService,
    private elRef: ElementRef,
    private _sanitizer: DomSanitizer,
    private searchKeyword: PostService,
    private router: Router,
    private sendKey: PropertyService,
    private zone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) { 
      this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit() {

    this.get.keywords()
    .subscribe(
      res=>{
        for(let i in res){
          this.keywords.push(
            res[i].Keyword
          )
        }
      }
    );
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    if (this.isBrowser) {
      if (window.innerWidth <= 750) {
        this.mobileView = true;
      }else {
        this.mobileView = false;
      }
    }

  }
  ngAfterViewChecked() {
    if ( this.isBrowser ) {
      this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    }
  }

  /* reloadPage() {
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  } */

  @HostListener('window:click', [])onclick() {
    this.haveresult = false;
    if (this.searchBox) {
      this.searchBox.nativeElement.value = '';
    }
  }

  @HostListener('window:resize', []) onresize() {
    if (this.resultBox) {
     this.setStyleOfResultBox();
    }
    this.sendHeight.ofHeader.next(this.Header.nativeElement.getBoundingClientRect().bottom);
    if ( this.isBrowser ) {
    if ( window.innerWidth <= 750 ) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }}

  }
  openDropDown() {
    this.open = true;
  }
  closeDropDown() {
    this.open = false;
  }
  searchSportSocial() {
    const input = this.searchBox.nativeElement.value;
    this.open = false;
    this.router.navigate(['/' + input]);
    this.searchBox.nativeElement.value = '';
    this.haveresult = false;
  }

  sendData(event) {
    console.clear();
    console.log(event);
    if (event.target.value !== '' ) {
      this.haveresult = true;
    }
    if (event.target.value === '') {
      this.haveresult = false;
    }
    this.searchKey.
    next(event.target.value);
    this.SearchKey = this.searchKey
    .debounceTime(100)
    .distinctUntilChanged()
    .subscribe(
      (res: string) => {
        const str = res.toLowerCase();
        console.log(res, 'conect');
        this.results = this.keywords.filter(
          function(data){
            return data.toLowerCase().indexOf(str) !== -1 && str !== '';
          }
        );
        if (this.resultBox) {
          this.setStyleOfResultBox();
        }
        console.log(this.results, ' conect');
      }
    );

    const input = this.searchBox.nativeElement.value;
    if (event.code  === 'Enter' ) {
      this.open = false;
      this.router.navigate(['/' + input]);
      this.searchBox.nativeElement.value = '';
      this.haveresult = false;
    }
  }

  navigate() {
    this.open = false;
  }
  hover(event) {
    this.linkImage.nativeElement.src = '/assets/images/sports-social-link-orange-symbol.png';
  }
  removehoverColor(event) {
    this.linkImage.nativeElement.src = '/assets/images/sports-social-link-blue-symbol.png';
  }

  setStyleOfResultBox() {
    const prop = this.searchBox.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.resultBox.nativeElement, 'width', prop.width + 'px');
    if (!this.mobileView) {
      this.renderer.setStyle(this.resultBox.nativeElement, 'top', prop.bottom + 2 + 'px');
    } else {
      this.renderer.setStyle(this.resultBox.nativeElement, 'top', prop.top - 22 + 'px');
      if (this.results.toString() === '') {
        this.haveresult = false;
      }
    }
  }

}
