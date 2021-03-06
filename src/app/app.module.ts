import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EditorPanelComponent } from './editor-panel/editor-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { TrendingBlogComponent } from './blogContent/trending-blog/trending-blog.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { KeywordComponent } from './keywords/keyword/keyword.component';
import { SubscribeCardComponent } from './subscribe-card/subscribe-card.component';
import { TrendingBlogCardComponent } from './blogContent/trending-blog/trending-blog-card/trending-blog-card.component';
import { LatestBlogComponent } from './blogContent/latest-blog/latest-blog.component';
import { NormalBlogComponent } from './blogContent/normal-blog/normal-blog.component';
import { BlogsComponent } from './blogContent/blogs/blogs.component';
import { BlogOpenComponent } from './blogContent/blog-open/blog-open.component';

import {PropertyService} from './services/property.service';
import {PostService} from './services/post.service';
import {PutService} from './services/put.service';
import {GetService} from './services/get.service';
import {SaveService} from './services/save.service';
import {StatusService} from './services/status.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-gaurd.service';
import { FacebookService } from './services/facebook.service';
import { WindowRefService } from './services/window-ref.service';
import { LinkService } from './services/link.service';

import { MaintainHeightWidthRatioDirective } from './directives/maintain-height-width-ratio.directive';
import { TabViewAvailableDirective } from './directives/tab-view-available.directive';

import {RoutingModule} from './routing/routing.module';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { SearchComponent } from './search/search.component';
import { CommentsComponent } from './comments/comments.component';
import {UrlSerializer} from '@angular/router';

import { MessageComponent } from './message/message.component';
import { CustomUrlComponent } from './custom-url/custom-url.component';
import { OpenFullImageComponent } from './open-full-image/open-full-image.component';
import { RelatedBlogsComponent } from './blogContent/related-blogs/related-blogs.component';
import { SinglePanelComponent } from './admin-panel/single-panel/single-panel.component';
import { EditBlogComponent } from './admin-panel/edit-blog/edit-blog.component';
import { BlogPreviewComponent } from './editor-panel/blog-preview/blog-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorPanelComponent,
    AdminPanelComponent,
    LoginPageComponent,
    BlogHeaderComponent,
    TrendingBlogComponent,
    KeywordsComponent,
    KeywordComponent,
    SubscribeCardComponent,
    TrendingBlogCardComponent,
    LatestBlogComponent,
    NormalBlogComponent,
    BlogsComponent,
    BlogOpenComponent,
    MaintainHeightWidthRatioDirective,
    TabViewAvailableDirective,
    BlogFooterComponent,
    SearchComponent,
    CommentsComponent,
    MessageComponent,
    CustomUrlComponent,
    OpenFullImageComponent,
    RelatedBlogsComponent,
    SinglePanelComponent,
    EditBlogComponent,
    BlogPreviewComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'blogist'}),
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    PropertyService,
    GetService,
    SaveService,
    StatusService,
    PostService,
    AuthService,
    AuthGuard,
    FacebookService,
    WindowRefService,
    LinkService,
    { provide: UrlSerializer, useClass: CustomUrlComponent }
  ],
  bootstrap: [AppComponent]
})
export class AppModule  { }
