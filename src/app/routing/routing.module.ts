import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from '../blogContent/blogs/blogs.component';
import { BlogOpenComponent } from '../blogContent/blog-open/blog-open.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { EditorPanelComponent } from '../editor-panel/editor-panel.component';

import {Routes,RouterModule,RouterLink} from '@angular/router';

 const appRoute:Routes=[
   {path:"" ,component:BlogsComponent},
   {path:'blogOpen',component: BlogOpenComponent },
   {path:"editorPanel" , component: EditorPanelComponent}
 ]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
