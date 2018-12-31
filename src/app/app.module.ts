import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostAddComponent } from './post-add/post-add.component';
import { Routes, RouterModule } from '@angular/router'
import { PostServiceService } from './Service/post-service.service';

const router: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/new', component: PostAddComponent },
  { path: '', component: PostListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NavbarComponent,
    PostAddComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
