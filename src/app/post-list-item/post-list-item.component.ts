import { Component, OnInit, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component'
import { PostServiceService } from '../Service/post-service.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveit: number;
  @Input() createdAt: Date;
  @Input() Index: number

  constructor(private PostService: PostServiceService) {

  }


  ngOnInit() {
    this.PostService.emitPosts();

  }

  isSup(): boolean {
    if (this.loveit >= 0)
      return true;
  }


  onLove(i: number) {
    this.PostService.onLove(i);
  }

  onDontLove(i: number) {
    this.PostService.onDontLove(i)
  }

  onDelete(i: number) {
    if (confirm("Etes vous sur de suprimer le poste ? ")) { this.PostService.onDeletePost(this.Index) }
  }

}
