import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Renderer2,
  HostListener
} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {NgForm} from '@angular/forms';
import {PropertyService} from '../../services/property.service';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  fontSize = [];
  @ViewChild('title') title;
  @ViewChild('desc') desc;
  @ViewChild('BlogImage') BlogImage;
  @ViewChild('BloggerImage') BloggerImage;
  @ViewChild('blogImageDesc') blogImageDesc;
  @ViewChild('shortDesc') shortDesc;
  @ViewChild('BloggerName') BloggerName;
  @ViewChild('url') URL;
  @ViewChild('YoutubeUrl') youtubeURL;
  @ViewChild('PluginUrl') pluginURL;
  @ViewChild('keys') keys;
  @ViewChild('text') Text;
  @ViewChild('editorPanel') editorPanel;
  @ViewChild('panel') panel;
  @ViewChild('linkpopup') linkpopup;
  @ViewChild('youtubeLinkPopup') youtubeLinkPopup;
  @ViewChild('pluginLinkPopup') pluginLinkPopup;
  blogimageSrc;
  bloggerimageSrc;
  imageSrc;
  bloggerimageLoaded:boolean = false;
  blogimageLoaded:boolean = false;
  text:string = '';
  FontSize;
  embeddFont;
  FontSizeArray;
  linkUrl;
  linkText;
  youtubeUrl;
  pluginUrl;
  isKeywordButtonClicked:boolean = false;
  keywordAdded:boolean = false;
  linkAdded:boolean = true;
  linkCount = 0;
  youtubeVideoAdded:boolean= false;
  Keypress:boolean = false;
  Keys;
  keywordArray;
  initialActiveElement: {key, Element};
  beforePopupActiveElement;
  initialSelectedELement;
  initialCurPos;
  beforePopupSelectedElement;
  beforePopupCurPos;
  selectedText:string='';
  selctedLink; 
  charCount = 0;
  blogDetails: {
    heading: string;
    blogImage: string;
    keywords: string;
    bloggerName: string;
    content: string;
  };
  blogImage;
  bloggerImage;
  filesToUpload: Array<File>;
  files = [];
  topMargin;
  Result;
  imageName = [];
  isDisabled:boolean = false;
  Preview:boolean = false;
  blogID;
  blog: {
    bloggerName: any,
    blogTitle: any,
    blogDesc: any,
    keywords: any,
    blogid: any,
    metaDesc: any,
    imageDesc: any
};
blogPreview: {
  bloggerName: any,
  heading: any,
  content: any,
  keywords: string[],
  blogImage: any,
  bloggerImage: any,
  readingTime: any,
  metaDesc: any,
  imageDesc: any
};
constructor(
  private http: Http,
  private recieveHeight: PropertyService,
  private renderer: Renderer2,
  private route: Router,
  private sanitizer: DomSanitizer,
  private rec: PropertyService,
  private recieve: PostService
) {
  this.filesToUpload = [];
}
ngOnInit() {
  this.recieveHeight.ofHeader.subscribe(
    margin => {
      this.topMargin = margin;
    }
  );
  this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + 'px');
  this.recieveBlogdetails();
  for (let i = 4 ; i <= 28 ; i += 4) {
    this.fontSize.push(i);
  }
  this.title.nativeElement.focus();
  this.initialActiveElement = {
    key: 'hello',
    Element: document.activeElement
  };
  
}

recieveBlogdetails() {
  this.rec.detailsofBlog.subscribe(
    (data) => {
      this.blogID = data['blogId'];
      this.Keys = data['keywords'];
      this.getBlogDetails();
    }
  );

}
getBlogDetails() {
  this.recieve.dataOfsingleBlog(this.blogID).subscribe(
    data => {
      console.clear();
      console.log(data[0]);
      this.bloggerimageLoaded = true;
      this.blogimageLoaded = true;
      this.keywordAdded = true;
      this.Keypress = true;
      this.blogimageSrc = data[0].blogImage;
      this.bloggerimageSrc = data[0].bloggerImage;
      this.BloggerName.nativeElement.innerText = data[0].bloggerName;
      this.title.nativeElement.innerText = data[0].heading;
      this.desc.nativeElement.innerHTML = data[0].Content;
      this.keywordArray = data[0].keys.split(',');
      this.Keys = data[0].keys;
      this.shortDesc.nativeElement.innerText = data[0].MetaDesc;
      this.blogImageDesc.nativeElement.innerText = data[0].ImageDesc;
    }
  );
  this.calCharCount();
}
bloggerImageNotFound() {
  this.bloggerimageLoaded = false;
}
blogImageNotFound() {
  this.blogimageLoaded = false;
}
startDesc() {
  if (this.desc.nativeElement.innerHTML) {
    this.Keypress = true;
  } else {
    this.Keypress = false;
  }
}
calCharCount() {
  this.charCount = this.shortDesc.nativeElement.innerText.length;
  console.log( this.charCount);
  if (this.charCount >= 139) {
    this.shortDesc.nativeElement.blur();
  }else {
    this.shortDesc.nativeElement.focus();
  }
}
@HostListener('mousedown', ['$event'])onmousedown(event){
  this.initialActiveElement = {
    key: 'hello',
    Element: document.activeElement
  };
}
@HostListener('keyup', ['$event'])onkeyup(event) {
  this.initialActiveElement = {
    key: 'hello',
    Element: document.activeElement
  };
}

bold(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('bold', false, null);
  if (event.target.className === 'not-selected') {
    this.renderer.removeClass(event.target, 'not-selected');
    this.renderer.addClass(event.target, 'selected');
  } else {
    this.renderer.removeClass(event.target, 'selected');
    this.renderer.addClass(event.target, 'not-selected');
  }
}

italic(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('italic', false, null);
  if (event.target.className === 'not-selected') {
    this.renderer.removeClass(event.target, 'not-selected');
    this.renderer.addClass(event.target, 'selected');
  } else {
    this.renderer.removeClass(event.target, 'selected');
    this.renderer.addClass(event.target, 'not-selected');
  }
}

underline(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('underline', false, null);
  if (event.target.className === 'not-selected') {
    this.renderer.removeClass(event.target, 'not-selected');
    this.renderer.addClass(event.target, 'selected');
  } else {
    this.renderer.removeClass(event.target, 'selected');
    this.renderer.addClass(event.target, 'not-selected');
  }
}

leftAlign(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('justifyLeft', false, null);
}

rightAlign(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('justifyRight', false, null);
}

centerAlign(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('justifyCenter', false, null);
}

justify(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('justifyFull', false, null);
}

undo(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('undo', false, null);
}


redo(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('redo', false, null);
}



indent(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('indent', false, null);
}
outdent(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('outdent', false, null);
}

subscript(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('subscript', false, null);
}
superscript(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('superscript', false, null);
}


listWithNumbers(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('insertOrderedList', false, null);
}

listWithDots(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('insertUnorderedList', false, null);
}

removeCss(event) {
  console.log(document.execCommand('removeFormat', false, null));
  document.execCommand('removeFormat', false, null);
}

addParagraph(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('insertParagraph', false, null);
}

selectTextColor(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('foreColor', false, event.target.value);
}

selectBackgroundColor(event) {
  this.initialActiveElement.Element.focus();
 document.execCommand('styleWithCSS', false, true);
  document.execCommand('backColor', false, event.target.value);
}

selectFontSize(event) {
  this.initialActiveElement.Element.focus();
  document.execCommand('fontSize', false, (event.target.value) / 4);

}
preventdefault(event) {
  event.target.focus();
  event.preventDefault();
}
test(){
  console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
}
restoreCaret(){
  this.beforePopupActiveElement.focus();
  console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
  const sel = window.getSelection();
  sel.collapse(this.beforePopupSelectedElement, this.beforePopupCurPos);
}
addLink(event) {
  this.selectedText =  document.getSelection().toString();
  console.log(this.selectedText);
  if (this.selectedText !== '') {
    this.Text.nativeElement.value = this.selectedText;
    document.execCommand('cut', false, null);
  }
  this.initialActiveElement.Element.focus();
  this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'block');
  this.beforePopupActiveElement = this.initialActiveElement.Element;
  this.initialSelectedELement = document.getSelection();
  this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
  this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
}
unLink() {
  this.selctedLink = document.getSelection();
  console.log(this.selctedLink);
}
linkOk(event) {
  this.linkUrl = this.URL.nativeElement.value;
  this.linkText = this.Text.nativeElement.value;
  const embed = `<a class="link" href="` + this.linkUrl +
    `"target="_blank">` + ' ' + this.linkText + `</a>`;
  if (this.linkUrl && this.linkText) {
    document.execCommand('insertHTML', false, embed);
  }
  this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
  this.beforePopupActiveElement.focus();

}
linkCancel() {
  event.preventDefault();
  document.execCommand('insertHTML', false, '');
  this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
  this.beforePopupActiveElement.focus();
}


addYoutubevideo() {
  this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'block');
  this.beforePopupActiveElement = this.initialActiveElement.Element;
  this.initialSelectedELement = document.getSelection();
  this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
  this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
}
youtubeLinkOk(event) {
  this.youtubeUrl = this.youtubeURL.nativeElement.value.replace('watch?v=', 'embed/') ;
  console.log(this.youtubeUrl);
  if (this.youtubeURL.nativeElement.value) {
  document.execCommand('insertHTML', false, `
      <div style="position: relative;
      padding-bottom: 56.25%;
      width:90%;
      padding-top: 25px;
      height: 0;"><iframe style="position: absolute;
      top: 0;
      left: 5%;
      width: 100%;
      height: 100%;" src="` + this.youtubeUrl
      + `"   frameborder="0" allowfullscreen></iframe></div><br><br>`);

  }
  this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
  this.beforePopupActiveElement.focus();
}
youtubeLinkCancel() {
  document.execCommand('insertHTML', false, '');
  this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
  this.beforePopupActiveElement.focus();
}
addQuote(event) {
  this.initialActiveElement.Element.focus();
   document.execCommand('formatBlock', false, 'blockquote');
}
selectImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(event) {
  const reader = event.target;
  this.imageSrc = reader.result;
  console.log(this.imageSrc);
  document.execCommand('insertHTML', false, `<div style="max-width:100%;height:auto;" >
    <img style="max-width:100%;max-height:100%;" src="` + this.imageSrc + `"></div>`);
}


selectGif(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = this._handleGifReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleGifReaderLoaded(event) {
  const reader = event.target;
  this.imageSrc = reader.result;
  document.execCommand('insertImage', false, this.imageSrc);
}


selectBloggerImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = this._handleBloggerReaderLoaded.bind(this);
  reader.readAsDataURL(file);
  this.bloggerimageLoaded = true;
}
_handleBloggerReaderLoaded(event) {
  const reader = event.target;
  this.bloggerimageSrc = reader.result;
}


selectBlogImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = this._handleBlogReaderLoaded.bind(this);
  reader.readAsDataURL(file);
  this.blogimageLoaded = true;
}
_handleBlogReaderLoaded(event) {
  const reader = event.target;
  this.blogimageSrc = reader.result;

}
openAddKeywordPopup() {
  this.isKeywordButtonClicked = true;
  if (this.Keys) {
    this.Keys = this.keywordArray.toString();
  }
}
addKeywords() {
  this.Keys = this.keys.nativeElement.textContent;
  this.keywordArray = (this.Keys.split(','));
  this.isKeywordButtonClicked = false;
  if (this.Keys) {
    this.keywordAdded = true;
  } else {
    this.keywordAdded = false;
  }
}
addKeywordsCancel() {
  this.isKeywordButtonClicked = false;
  this.keywordAdded = false;
}
deleteKeyword(i: number) {
  this.keywordArray.splice(i, 1);
}

makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
  this.imageName = ['blogImage', 'bloggerImage'];
  return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
          formData.append(this.imageName[i], files[i]);
      }
      formData.append('bloggerName', this.blog.bloggerName);
      formData.append('blogrTitle', this.blog.blogTitle);
      formData.append('blogDesc', this.blog.blogDesc);
      formData.append('keywords', this.blog.keywords);
      formData.append('blogid', this.blog.blogid);
      formData.append('metaDesc', this.blog.metaDesc);
      formData.append('imageDesc', this.blog.imageDesc);
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  resolve(JSON.parse(xhr.response));
              } else {
                  reject(xhr.response);
              }
          }
      };
      xhr.open('POST', url, true);
      xhr.send(formData);
      console.log(formData);
  });
}
upload() {
  console.log(this.panel);
  this.blogImage = this.BlogImage.nativeElement.files[0];
  this.bloggerImage = this.BloggerImage.nativeElement.files[0];
  this.files = [ this.blogImage, this.bloggerImage];
  console.log(this.files);
  this.isDisabled = true;
  this.blog = {
    bloggerName: this.BloggerName.nativeElement.innerText,
    blogTitle: this.title.nativeElement.innerText,
    blogDesc: this.desc.nativeElement.innerHTML,
    keywords: this.Keys,
    blogid: this.blogID,
    metaDesc: this.shortDesc.nativeElement.innerText,
    imageDesc: this.blogImageDesc.nativeElement.innerText
  };
  console.log(this.blog);
  this.imageName = ['blogImage', 'bloggerImage'];
  for (let i = 0 ; i < this.files.length; i++ ) {
    this.filesToUpload.push(<File> this.files[i]);
  }
  this.makeFileRequest('https://admin.chaseyoursport.com/blog/updateBlog', [], this.filesToUpload)
  .then((result) => {
    this.Result = result;
    console.log(result);
    if (this.Result.Status === 'Success') {
      this.isDisabled = false;
    }
  }, (error) => {
    console.error(error);
    if (error) {
      this.isDisabled = false;
    }
  });


 }
 strip(html) {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
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
 preview() {
  this.Preview = true;
  const Content = this.desc.nativeElement.innerHTML;
  this.blogPreview = {
    bloggerName: this.BloggerName.nativeElement.innerText,
    heading: this.title.nativeElement.innerText,
    content: this.sanitizer.bypassSecurityTrustHtml( this.desc.nativeElement.innerHTML),
    keywords: this.keywordArray,
    blogImage: this.blogimageSrc,
    bloggerImage: this.bloggerimageSrc,
    readingTime: this.timeToRead(this.strip(Content)),
    metaDesc: this.shortDesc.nativeElement.innerText,
    imageDesc: this.blogImageDesc.nativeElement.innerText
  };
  console.log(this.blogPreview);
 }
 closePreview() {
  this.Preview = false;
 }
}
