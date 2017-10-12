import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from '../blogContent/blogs/blogs.component';
import { BlogOpenComponent } from '../blogContent/blog-open/blog-open.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { EditorPanelComponent } from '../editor-panel/editor-panel.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { SearchComponent } from '../search/search.component';
import { EditBlogComponent } from '../admin-panel/edit-blog/edit-blog.component';

import {
  Routes,
  RouterModule,
  RouterLink,
} from '@angular/router';

 const appRoute:Routes=[
   {path:"" ,component:BlogsComponent},
   {path:"editorPanel" , component: EditorPanelComponent},
   {path:'adminPanel' , component:AdminPanelComponent},
   {path:":tag" ,component:SearchComponent},
   {path:":blogId/edit" ,component:EditBlogComponent},
   {path:':tag/:title/:blogId',component: BlogOpenComponent },
   {path:'**',redirectTo:''}
   
 ]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
