import { Component, OnInit, HostListener, PLATFORM_ID, Inject, ViewChild} from '@angular/core';
import {PostService} from '../../services/post.service';
import {PropertyService} from '../../services/property.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ɵgetDOM } from '@angular/platform-browser';

@Component({
  selector: 'SportSocial-related-blogs',
  templateUrl: './related-blogs.component.html',
  styleUrls: ['./related-blogs.component.css']
})
export class RelatedBlogsComponent implements OnInit {

  @ViewChild('window') window;
  relatedBlogDetails;
  numberofBlog;
  dataRecived:boolean=false;
  mobileView:boolean=false;
  isBrowser: boolean;

  constructor(
    private getRelated: PostService,
    private recieveKey: PropertyService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  ngOnInit() {
    this.setMobileView();
   this.recieveKey.ofBlogCard.subscribe(
     data => {
       // console.log(data, ' checkarticle');
       this.getRelatedBlogs(data);
     }
   );

  }
  getRelatedBlogs(key) {
    const relatedBlogDetails: {
      blogId: string;
      blogImage: string;
      bloggerName: string,
     // bloggerImage: string,
      heading: string,
      // content: string,
      insertedDate: string,
      viewCount: string,
      shareCount: string,
      // keywords: string[],
     // exactDate: string;
      // readingTime: string;
      metaDesc: string;
      imageDesc: string;
      primaryKeyword: string;
      // shortTitle: string;
    }[] = [];
    this.getRelated.blogData(1, key).subscribe(
        data => {
            this.dataRecived = true;
            // console.log(data, 'related');
            if ( data.length > 3 ) {
                this.numberofBlog = 3;
            }else {
              this.numberofBlog = data.length;
            }
            for (let i = 0; i < this.numberofBlog; i++) {
                relatedBlogDetails.push(
                  {
                    blogId: data[i].blogId,
                    blogImage: data[i].blogImage,
                    bloggerName: data[i].bloggerName,
                   // bloggerImage: data[i].bloggerImage,
                    heading: data[i].heading,
                   //  content: data[i].content,
                    insertedDate: this.timePassed(data[i].insertedDate),
                    viewCount: data[i].viewCount,
                    shareCount: data[i].shareCount,
                   // keywords: data[i].keywords.split(','),
                   // exactDate: this.ExactDate(data[i].insertedDate),
                   // readingTime: this.timeToRead(data[i].Content),
                    metaDesc: data[i].metaDesc == null ? ' ' : data[i].metaDesc,
                    imageDesc: data[i].imageDesc == null ? ' ' : data[i].imageDesc,
                    primaryKeyword: data[i].primaryKeyword == null ? 'sport social' : data[i].primaryKeyword,
                   // shortTitle: data[i].shortTitle == null ? data[i].heading : data[i].shortTitle
                  }
                );
            }
            this.relatedBlogDetails = relatedBlogDetails;
        }
    );
}
timeToRead(s: string) {
  const words = s.split(' ');
  const time = Math.round(words.length / 180);
  if (time > 1) {
    return time + ' min read';
  }else {
    return '2 min read';
  }
}

timePassed(i: string) {

    const writtenDate = new Date( parseInt(i) * 1000);
    const presentDate = new Date();
    if (writtenDate.getFullYear() === presentDate.getFullYear()) {
      if (writtenDate.getMonth() === presentDate.getMonth() || writtenDate.getDate() > presentDate.getDate()) {
        if (writtenDate.getDate() === presentDate.getDate()) {
            if (writtenDate.getHours() === presentDate.getHours()) {
              if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                  return 'Just Now';
                }else {
                  return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                }
              }else {
                return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
              }
            }
            else{
              return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
            }
        }
        else{
          let date = (presentDate.getDate() - writtenDate.getDate());
          if (date < 0) {
            date += 30;
          }
          return date + ' day ago';
        }
      }
      else{
        return presentDate.getMonth() - writtenDate.getMonth() + ' month ago';
      }
    }
    else{
      return presentDate.getFullYear() - writtenDate.getFullYear() + ' year ago';
    }

}


ExactDate(i: number) {
const writtenDate = new Date(i * 1000);
return writtenDate.toDateString();
}
setMobileView() {
  const width = ɵgetDOM().getBoundingClientRect(this.window.nativeElement).width;
    if (width > 950 ) {
        this.mobileView = false;
    }else {
      this.mobileView = true;
    }
}
@HostListener('window:resize', [])onresize() {
  this.setMobileView();
}

}
