import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentComponent } from '../comment/comment.component';
import { CreateCommentComponent } from '../createComment/createComment.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CommentComponent,
    CreateCommentComponent,
    FooterComponent
  ],
  declarations: [
    NavbarComponent,
    CommentComponent,
    CreateCommentComponent,
    FooterComponent
  ]
})
export class CustomModule { }
