import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './Components/blog-list/blog-list.component';
import { BlogDetailComponent } from './Components/blog-detail/blog-detail.component';
import { BlogEditorComponent } from './Components/blog-editor/blog-editor.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'blog/create', component: BlogEditorComponent },
  { path: 'blog/update', component: BlogEditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
