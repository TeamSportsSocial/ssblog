"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var property_service_1 = require("../../services/property.service");
var post_service_1 = require("../../services/post.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(http, recieveHeight, renderer, route, sanitizer, rec, recieve) {
        this.http = http;
        this.recieveHeight = recieveHeight;
        this.renderer = renderer;
        this.route = route;
        this.sanitizer = sanitizer;
        this.rec = rec;
        this.recieve = recieve;
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
        this.charCount = 0;
        this.files = [];
        this.imageName = [];
        this.isDisabled = false;
        this.Preview = false;
        this.filesToUpload = [];
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (margin) {
            _this.topMargin = margin;
        });
        this.renderer.setStyle(this.panel.nativeElement, 'margin-top', this.topMargin + 10 + 'px');
        this.recieveBlogdetails();
        for (var i = 4; i <= 28; i += 4) {
            this.fontSize.push(i);
        }
        this.title.nativeElement.focus();
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditBlogComponent.prototype.recieveBlogdetails = function () {
        var _this = this;
        this.rec.detailsofBlog.subscribe(function (data) {
            _this.blogID = data['blogId'];
            _this.Keys = data['keywords'];
            _this.getBlogDetails();
        });
    };
    EditBlogComponent.prototype.getBlogDetails = function () {
        var _this = this;
        this.recieve.dataOfsingleBlog(this.blogID).subscribe(function (data) {
            // console.clear();
            // console.log(data[0]);
            _this.bloggerimageLoaded = true;
            _this.blogimageLoaded = true;
            _this.keywordAdded = true;
            _this.Keypress = true;
            _this.blogimageSrc = data[0].blogImage;
            _this.bloggerimageSrc = data[0].bloggerImage;
            _this.BloggerName.nativeElement.innerText = data[0].bloggerName;
            _this.title.nativeElement.innerHTML = data[0].heading;
            _this.desc.nativeElement.innerHTML = data[0].Content;
            _this.keywordArray = data[0].keys.split(',');
            _this.Keys = data[0].keys;
            _this.shortDesc.nativeElement.innerText = data[0].MetaDesc;
            _this.blogImageDesc.nativeElement.innerText = data[0].ImageDesc;
        });
        this.calCharCount();
    };
    EditBlogComponent.prototype.bloggerImageNotFound = function () {
        this.bloggerimageLoaded = false;
    };
    EditBlogComponent.prototype.blogImageNotFound = function () {
        this.blogimageLoaded = false;
    };
    EditBlogComponent.prototype.startDesc = function () {
        if (this.desc.nativeElement.innerHTML) {
            this.Keypress = true;
        }
        else {
            this.Keypress = false;
        }
    };
    EditBlogComponent.prototype.calCharCount = function () {
        this.charCount = this.shortDesc.nativeElement.innerText.length;
        console.log(this.charCount);
        if (this.charCount >= 139) {
            this.shortDesc.nativeElement.blur();
        }
        else {
            this.shortDesc.nativeElement.focus();
        }
    };
    EditBlogComponent.prototype.onmousedown = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditBlogComponent.prototype.onkeyup = function (event) {
        this.initialActiveElement = {
            key: 'hello',
            Element: document.activeElement
        };
    };
    EditBlogComponent.prototype.selectTag = function (event) {
        this.initialActiveElement.Element.focus();
        // console.log(event.target.value);
        document.execCommand('formatBlock', false, (event.target.value));
        // console.log(this.initialActiveElement.Element);
    };
    EditBlogComponent.prototype.bold = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('bold', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditBlogComponent.prototype.italic = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('italic', false, null);
        if (event.target.className === 'not-selected') {
            this.renderer.removeClass(event.target, 'not-selected');
            this.renderer.addClass(event.target, 'selected');
        }
        else {
            this.renderer.removeClass(event.target, 'selected');
            this.renderer.addClass(event.target, 'not-selected');
        }
    };
    EditBlogComponent.prototype.underline = function (event) {
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
    EditBlogComponent.prototype.leftAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyLeft', false, null);
    };
    EditBlogComponent.prototype.rightAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyRight', false, null);
    };
    EditBlogComponent.prototype.centerAlign = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyCenter', false, null);
    };
    EditBlogComponent.prototype.justify = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('justifyFull', false, null);
    };
    EditBlogComponent.prototype.undo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('undo', false, null);
    };
    EditBlogComponent.prototype.redo = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('redo', false, null);
    };
    EditBlogComponent.prototype.indent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('indent', false, null);
    };
    EditBlogComponent.prototype.outdent = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('outdent', false, null);
    };
    EditBlogComponent.prototype.subscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('subscript', false, null);
    };
    EditBlogComponent.prototype.superscript = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('superscript', false, null);
    };
    EditBlogComponent.prototype.listWithNumbers = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertOrderedList', false, null);
    };
    EditBlogComponent.prototype.listWithDots = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertUnorderedList', false, null);
    };
    EditBlogComponent.prototype.removeCss = function (event) {
        console.log(document.execCommand('removeFormat', false, null));
        document.execCommand('removeFormat', false, null);
    };
    EditBlogComponent.prototype.addParagraph = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('insertParagraph', false, null);
    };
    EditBlogComponent.prototype.selectTextColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('foreColor', false, event.target.value);
    };
    EditBlogComponent.prototype.selectBackgroundColor = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('backColor', false, event.target.value);
    };
    EditBlogComponent.prototype.selectFontSize = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('fontSize', false, (event.target.value) / 4);
    };
    EditBlogComponent.prototype.preventdefault = function (event) {
        event.target.focus();
        event.preventDefault();
    };
    EditBlogComponent.prototype.test = function () {
        //  console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
    };
    EditBlogComponent.prototype.restoreCaret = function () {
        this.beforePopupActiveElement.focus();
        // console.log(this.beforePopupSelectedElement, this.beforePopupActiveElement, this.beforePopupCurPos);
        var sel = window.getSelection();
        sel.collapse(this.beforePopupSelectedElement, this.beforePopupCurPos);
    };
    EditBlogComponent.prototype.addLink = function (event) {
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
    EditBlogComponent.prototype.unLink = function () {
        this.selctedLink = document.getSelection();
        // console.log(this.selctedLink);
    };
    EditBlogComponent.prototype.linkOk = function (event) {
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
    EditBlogComponent.prototype.linkCancel = function () {
        event.preventDefault();
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.linkpopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.addYoutubevideo = function () {
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'block');
        this.beforePopupActiveElement = this.initialActiveElement.Element;
        this.initialSelectedELement = document.getSelection();
        this.beforePopupSelectedElement = this.initialSelectedELement.focusNode;
        this.beforePopupCurPos = this.initialSelectedELement.focusOffset;
    };
    EditBlogComponent.prototype.youtubeLinkOk = function (event) {
        this.youtubeUrl = this.youtubeURL.nativeElement.value.replace('watch?v=', 'embed/');
        console.log(this.youtubeUrl);
        if (this.youtubeURL.nativeElement.value) {
            document.execCommand('insertHTML', false, "\n      <div style=\"position: relative;\n      padding-bottom: 56.25%;\n      width:90%;\n      padding-top: 25px;\n      height: 0;\"><iframe style=\"position: absolute;\n      top: 0;\n      left: 5%;\n      width: 100%;\n      height: 100%;\" src=\"" + this.youtubeUrl
                + "\"   frameborder=\"0\" allowfullscreen></iframe></div><br><br>");
        }
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.youtubeLinkCancel = function () {
        document.execCommand('insertHTML', false, '');
        this.renderer.setStyle(this.youtubeLinkPopup.nativeElement, 'display', 'none');
        this.beforePopupActiveElement.focus();
    };
    EditBlogComponent.prototype.addQuote = function (event) {
        this.initialActiveElement.Element.focus();
        document.execCommand('formatBlock', false, 'blockquote');
    };
    EditBlogComponent.prototype.selectImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditBlogComponent.prototype._handleReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        // console.log(this.imageSrc);
        document.execCommand('insertHTML', false, "<div style=\"max-width:100%;height:auto;\" >\n    <img style=\"max-width:100%;max-height:100%;\" src=\"" + this.imageSrc + "\"></div>");
    };
    EditBlogComponent.prototype.selectGif = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleGifReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    EditBlogComponent.prototype._handleGifReaderLoaded = function (event) {
        var reader = event.target;
        this.imageSrc = reader.result;
        document.execCommand('insertImage', false, this.imageSrc);
    };
    EditBlogComponent.prototype.selectBloggerImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBloggerReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.bloggerimageLoaded = true;
    };
    EditBlogComponent.prototype._handleBloggerReaderLoaded = function (event) {
        var reader = event.target;
        this.bloggerimageSrc = reader.result;
    };
    EditBlogComponent.prototype.selectBlogImage = function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleBlogReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        this.blogimageLoaded = true;
    };
    EditBlogComponent.prototype._handleBlogReaderLoaded = function (event) {
        var reader = event.target;
        this.blogimageSrc = reader.result;
    };
    EditBlogComponent.prototype.openAddKeywordPopup = function () {
        this.isKeywordButtonClicked = true;
        if (this.Keys) {
            this.Keys = this.keywordArray.toString();
        }
    };
    EditBlogComponent.prototype.addKeywords = function () {
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
    EditBlogComponent.prototype.addKeywordsCancel = function () {
        this.isKeywordButtonClicked = false;
        this.keywordAdded = false;
    };
    EditBlogComponent.prototype.deleteKeyword = function (i) {
        this.keywordArray.splice(i, 1);
    };
    EditBlogComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        this.imageName = ['blogImage', 'bloggerImage'];
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(_this.imageName[i], files[i]);
            }
            formData.append('bloggerName', _this.blog.bloggerName);
            formData.append('blogrTitle', _this.blog.blogTitle);
            formData.append('blogDesc', _this.blog.blogDesc);
            formData.append('keywords', _this.blog.keywords);
            formData.append('blogid', _this.blog.blogid);
            formData.append('metaDesc', _this.blog.metaDesc);
            formData.append('imageDesc', _this.blog.imageDesc);
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
            console.log(formData);
        });
    };
    EditBlogComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.panel);
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
            blogid: this.blogID,
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText
        };
        console.log(this.blog);
        this.imageName = ['blogImage', 'bloggerImage'];
        for (var i = 0; i < this.files.length; i++) {
            this.filesToUpload.push(this.files[i]);
        }
        this.makeFileRequest('https://admin.chaseyoursport.com/blog/updateBlog', [], this.filesToUpload)
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
    EditBlogComponent.prototype.strip = function (html) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    EditBlogComponent.prototype.timeToRead = function (s) {
        var words = s.split(' ');
        var time = Math.round(words.length / 180);
        if (time > 1) {
            return time + ' min read';
        }
        else {
            return '2 min read';
        }
    };
    EditBlogComponent.prototype.preview = function () {
        this.Preview = true;
        var Content = this.desc.nativeElement.innerHTML;
        this.blogPreview = {
            bloggerName: this.BloggerName.nativeElement.innerText,
            heading: this.title.nativeElement.innerHTML,
            content: this.sanitizer.bypassSecurityTrustHtml(this.desc.nativeElement.innerHTML),
            keywords: this.keywordArray,
            blogImage: this.blogimageSrc,
            bloggerImage: this.bloggerimageSrc,
            readingTime: this.timeToRead(this.strip(Content)),
            metaDesc: this.shortDesc.nativeElement.innerText,
            imageDesc: this.blogImageDesc.nativeElement.innerText
        };
        console.log(this.blogPreview);
    };
    EditBlogComponent.prototype.closePreview = function () {
        this.Preview = false;
    };
    EditBlogComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-edit-blog',
                    templateUrl: './edit-blog.component.html',
                    styleUrls: ['./edit-blog.component.css']
                },] },
    ];
    /** @nocollapse */
    EditBlogComponent.ctorParameters = function () { return [
        { type: http_1.Http, },
        { type: property_service_1.PropertyService, },
        { type: core_1.Renderer2, },
        { type: router_1.Router, },
        { type: platform_browser_1.DomSanitizer, },
        { type: property_service_1.PropertyService, },
        { type: post_service_1.PostService, },
    ]; };
    EditBlogComponent.propDecorators = {
        'title': [{ type: core_1.ViewChild, args: ['title',] },],
        'desc': [{ type: core_1.ViewChild, args: ['desc',] },],
        'BlogImage': [{ type: core_1.ViewChild, args: ['BlogImage',] },],
        'BloggerImage': [{ type: core_1.ViewChild, args: ['BloggerImage',] },],
        'blogImageDesc': [{ type: core_1.ViewChild, args: ['blogImageDesc',] },],
        'shortDesc': [{ type: core_1.ViewChild, args: ['shortDesc',] },],
        'BloggerName': [{ type: core_1.ViewChild, args: ['BloggerName',] },],
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
        'onmousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        'onkeyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
    };
    return EditBlogComponent;
}());
exports.EditBlogComponent = EditBlogComponent;
//# sourceMappingURL=edit-blog.component.js.map