"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var property_service_1 = require("../services/property.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var EditorPanelComponent = /** @class */ (function () {
    function EditorPanelComponent(http, recieveHeight, renderer, route, sanitizer) {
        this.http = http;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.route = route;
        this.sanitizer = sanitizer;
        this.fontSize = [];
        this.bloggerimageLoaded = false;
        this.blogimageLoaded = false;
        this.text = '';
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
        this.linkAdded = true;
        this.linkCount = 0;
        this.youtubeVideoAdded = false;
        this.Keypress = false;
        this.selectedText = '';
        this.files = [];
        this.imageName = [];
        this.isDisabled = false;
        this.Preview = false;
        this.charCount = 0;
        this.filesToUpload = [];
    }
    EditorPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + 'px');
        for (var i = 4; i <= 28; i += 4) {
            this.fontSize.push(i);
        }
        this.title.nativeElement.focus();
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditorPanelComponent.prototype.startDesc = function () {
        if (this.desc.nativeElement.innerHTML) {
            this.Keypress = true;
        }
        else {
            this.Keypress = false;
        }
    };
    EditorPanelComponent.prototype.calCharCount = function () {
        this.charCount = this.shortDesc.nativeElement.innerText.length;
        console.log(this.charCount);
        if (this.charCount >= 139) {
            this.shortDesc.nativeElement.blur();
        }
        else {
            this.shortDesc.nativeElement.focus();
        }
    };
    EditorPanelComponent.prototype.onmousedown = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
        // console.log(event)
    };
    EditorPanelComponent.prototype.onkeyup = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditorPanelComponent.prototype.selectTag = function (event) {
        this.initialActiveElement.Element.focus();
        // console.log(event.target.value);
        document.execCommand('formatBlock', false, (event.target.value));
        // console.log(this.initialActiveElement.Element);
    };
    EditorPanelComponent.prototype.bold = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('bold', false, null);
        /*  if (event.target.className === 'not-selected') {
           this.renderer.removeClass(event.target, 'not-selected');
           this.renderer.addClass(event.target, 'selected');
         } else {
           this.renderer.removeClass(event.target, 'selected');
           this.renderer.addClass(event.target, 'not-selected');
         } */
    };
    EditorPanelComponent.prototype.italic = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('italic', false, null);
        /* if (event.target.className === 'not-selected'){
          this.renderer.removeClass(event.target, 'not-selected');
          this.renderer.addClass(event.target, 'selected');
        } else {
          this.renderer.removeClass(event.target, 'selected');
          this.renderer.addClass(event.target, 'not-selected');
        } */
    };
    EditorPanelComponent.prototype.underline = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('underline', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditorPanelComponent.prototype.leftAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyLeft', false, null);
    };
    EditorPanelComponent.prototype.rightAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyRight', false, null);
    };
    EditorPanelComponent.prototype.centerAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyCenter', false, null);
    };
    EditorPanelComponent.prototype.justify = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyFull', false, null);
    };
    EditorPanelComponent.prototype.undo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('undo', false, null);
    };
    EditorPanelComponent.prototype.redo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('redo', false, null);
    };
    EditorPanelComponent.prototype.indent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('indent', false, null);
    };
    EditorPanelComponent.prototype.outdent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('outdent', false, null);
    };
    EditorPanelComponent.prototype.subscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('subscript', false, null);
    };
    EditorPanelComponent.prototype.superscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('superscript', false, null);
    };
    EditorPanelComponent.prototype.listWithNumbers = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertOrderedList', false, null);
    };
    EditorPanelComponent.prototype.listWithDots = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertUnorderedList', false, null);
    };
    EditorPanelComponent.prototype.removeCss = function (event) {
        console.log(document.execCommand('removeFormat', false, null));
        document.execCommand('removeFormat', false, null);
    };
    EditorPanelComponent.prototype.addParagraph = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertParagraph', false, null);
    };
    EditorPanelComponent.prototype.selectTextColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('foreColor', false, event.target.value);
    };
    EditorPanelComponent.prototype.selectBackgroundColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('backColor', false, event.target.value);
    };
    EditorPanelComponent.prototype.selectFontSize = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('fontSize', false, (event.target.value) / 4);
    };
    EditorPanelComponent.prototype.preventdefault = function (event) {
        event.target.focus();
        event.preventDefault();
    };
    EditorPanelComponent.prototype.test = function () {
        console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
    };
    EditorPanelComponent.prototype.restoreCaret = function () {
        this.beforePopupActiveElement.focus();
        console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
        var sel = window.getSelection();
        sel.collapse(this.beforePopupSelectedElement, this.beforePopupCurPos);
    };
    EditorPanelComponent.prototype.addLink = function (event) {
        this.selectedText = document.getSelection().toString();
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
    };
    EditorPanelComponent.prototype.unLink = function () {
        this.selctedLink = document.getSelection();
        console.log(this.selctedLink);
    };
    EditorPanelComponent.prototype.linkOk = function (event) {
        this.linkUrl = this.URL.nativeElement.value;
        this.linkText = this.Text.nativeElement.value;
        var embed = "<a class=\"link\" href=\"" + this.linkUrl +
            "\"target=\"_blank\">" + ' ' + this.linkText + "</a>";
        if (this.linkUrl && this.linkText) {
            document.execCommand('insertHTML', false, embed);
        }
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.linkCancel = function () {
        event.preventDefault();
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.addYoutubevideo = function () {
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'block');
        this.beforePopupActiveElement = this.initialActiveElement.Element;
        this.initialSelectedELement = document.getSelection();
        this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
        this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
    };
    EditorPanelComponent.prototype.youtubeLinkOk = function (event) {
        this.youtubeUrl = this.youtubeURL.nativeElement.value.replace('watch?v=', 'embed/');
        console.log(this.youtubeUrl);
        if (this.youtubeURL.nativeElement.value) {
            document.execCommand('insertHTML', false, "\n      <div style=\"position: relative;\n      padding-bottom: 56.25%;\n      width:90%;\n      padding-top: 25px;\n      height: 0;\"><iframe style=\"position: absolute;\n      top: 0;\n      left: 5%;\n      width: 100%;\n      height: 100%;\" src=\"" + this.youtubeUrl
                + "\"   frameborder=\"0\" allowfullscreen></iframe></div><br><br>");
        }
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.youtubeLinkCancel = function () {
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditorPanelComponent.prototype.addQuote = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('formatBlock', false, 'blockquote');
    };
    EditorPanelComponent.prototype.selectImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditorPanelComponent.prototype._handleReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
        document.execCommand('insertHTML', false, "<div style=\"max-width:100%;height:auto;\" ><img style=\"max-width:100%;max-height:100%;\" src=\""
            + this.imageSrc + "\"></div>");
    };
    EditorPanelComponent.prototype.selectGif = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleGifReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditorPanelComponent.prototype._handleGifReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        document.execCommand('insertImage', false, this.imageSrc);
    };
    EditorPanelComponent.prototype.selectBloggerImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBloggerReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.bloggerimageLoaded = true;
    };
    EditorPanelComponent.prototype._handleBloggerReaderLoaded = function (event) {
        var reader = event.target;
        this.bloggerimageSrc = reader.result;
    };
    EditorPanelComponent.prototype.selectBlogImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBlogReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.blogimageLoaded = true;
    };
    EditorPanelComponent.prototype._handleBlogReaderLoaded = function (event) {
        var reader = event.target;
        this.blogimageSrc = reader.result;
    };
    EditorPanelComponent.prototype.openAddKeywordPopup = function () {
        this.isKeywordButtonClicked = true;
        if (this.Keys) {
            this.Keys = this.keywordArray.toString();
        }
    };
    EditorPanelComponent.prototype.addKeywords = function () {
        this.Keys = this.keys.nativeElement.textContent;
        this.keywordArray = (this.Keys.split(','));
        this.isKeywordButtonClicked = false;
        if (this.Keys) {
            this.keywordAdded = true;
        }
        else {
            this.keywordAdded = false;
        }
    };
    EditorPanelComponent.prototype.addKeywordsCancel = function () {
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
    };
    EditorPanelComponent.prototype.deleteKeyword = function (i) {
        this.keywordArray.splice(i, 1);
    };
    EditorPanelComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        this.imageName = ['blogImage', 'bloggerImage'];
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(_this.imageName[i], files[i]);
            }
            formData.append('bloggerName', _this.blog.bloggerName);
            formData.append('heading', _this.blog.blogTitle);
            formData.append('content', _this.blog.blogDesc);
            formData.append('keywords', _this.blog.keywords);
            formData.append('metaDesc', _this.blog.metaDesc);
            formData.append('imageDesc', _this.blog.imageDesc);
            formData.append('topic', _this.blog.primaryKey);
            formData.append('shortTitle', _this.blog.shortTitle);
            formData.append('readTime', _this.blog.readingTime);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    };
    EditorPanelComponent.prototype.upload = function () {
        var _this = this;
        // console.log(this.BlogImage,this.BloggerImage,this.BloggerName,this.title,this.desc,this.shortDesc,this.blogImageDesc);
        var Content = this.desc.nativeElement.innerHTML;
        this.blogImage = this.BlogImage.nativeElement.files[0];
        this.bloggerImage = this.BloggerImage.nativeElement.files[0];
        this.files = [this.blogImage, this.bloggerImage];
        console.log(this.files);
        this.isDisabled = true;
        this.blog = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            blogTitle: this.title.nativeElement.innerText,
            blogDesc: this.desc.nativeElement.innerHTML,
            keywords: this.Keys,
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText,
            primaryKey: this.primaryKey.nativeElement.innerText,
            shortTitle: this.ShortTitle.nativeElement.innerText,
            readingTime: this.timeToRead(this.strip(Content)),
        };
        console.log(this.blog);
        this.imageName = ['blogImage', 'bloggerImage'];
        for (var i = 0; i < this.files.length; i++) {
            this.filesToUpload.push(this.files[i]);
        }
        this.makeFileRequest('http://test.chaseyoursport.com:3000/saveNewBlog', [], this.filesToUpload)
            .then(function (result) {
            _this.Result = result;
            console.log(result);
            if (_this.Result.Status === 'Success') {
                _this.isDisabled = false;
            }
        }, function (error) {
            console.error(error);
            if (error) {
                _this.isDisabled = false;
            }
        });
    };
    EditorPanelComponent.prototype.strip = function (html) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    EditorPanelComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    EditorPanelComponent.prototype.preview = function () {
        this.Preview = true;
        var Content = this.desc.nativeElement.innerHTML;
        console.log(this.files);
        this.blogPreview = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            heading: this.title.nativeElement.innerHTML,
            content: this.sanitizer.bypassSecurityTrustHtml(this.desc.nativeElement.innerHTML),
            keywords: this.keywordArray,
            blogImage: this.blogimageSrc,
            bloggerImage: this.bloggerimageSrc,
            readingTime: this.timeToRead(this.strip(Content)),
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText,
            primaryKey: this.primaryKey.nativeElement.innerText,
            shortTitle: this.ShortTitle.nativeElement.innerText
        };
        console.log(this.blogPreview);
    };
    EditorPanelComponent.prototype.closePreview = function () {
        this.Preview = false;
    };
    EditorPanelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'SportSocialBlog-editor-panel',
                    templateUrl: './editor-panel.component.html',
                    styleUrls: ['./editor-panel.component.css']
                },] },
    ];
    /** @nocollapse */
    EditorPanelComponent.ctorParameters = function () { return [
        { type: http_1.Http, },
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: router_1.Router, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    EditorPanelComponent.propDecorators = {
        'title': [{ type: core_1.ViewChild, args: ['title',] },],
        'desc': [{ type: core_1.ViewChild, args: ['desc',] },],
        'BlogImage': [{ type: core_1.ViewChild, args: ['BlogImage',] },],
        'BloggerImage': [{ type: core_1.ViewChild, args: ['BloggerImage',] },],
        'blogImageDesc': [{ type: core_1.ViewChild, args: ['blogImageDesc',] },],
        'shortDesc': [{ type: core_1.ViewChild, args: ['shortDesc',] },],
        'BloggerName': [{ type: core_1.ViewChild, args: ['BloggerName',] },],
        'primaryKey': [{ type: core_1.ViewChild, args: ['primaryKey',] },],
        'ShortTitle': [{ type: core_1.ViewChild, args: ['shortTitle',] },],
        'URL': [{ type: core_1.ViewChild, args: ['url',] },],
        'youtubeURL': [{ type: core_1.ViewChild, args: ['YoutubeUrl',] },],
        'pluginURL': [{ type: core_1.ViewChild, args: ['PluginUrl',] },],
        'keys': [{ type: core_1.ViewChild, args: ['keys',] },],
        'Text': [{ type: core_1.ViewChild, args: ['text',] },],
        'editorPanel': [{ type: core_1.ViewChild, args: ['editorPanel',] },],
        'panel': [{ type: core_1.ViewChild, args: ['panel',] },],
        'linkpopup': [{ type: core_1.ViewChild, args: ['linkpopup',] },],
        'youtubeLinkPopup': [{ type: core_1.ViewChild, args: ['youtubeLinkPopup',] },],
        'pluginLinkPopup': [{ type: core_1.ViewChild, args: ['pluginLinkPopup',] },],
        'panelButton': [{ type: core_1.ViewChild, args: ['panelButton',] },],
        'onmousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        'onkeyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
    };
    return EditorPanelComponent;
}());
exports.EditorPanelComponent = EditorPanelComponent;
//# sourceMappingURL=editor-panel.component.js.map