import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  date = new Date();
  PostsObservable = new ReplaySubject<Post[]>();

  Posts: Post[] = [
    new Post(
      "Mon premier post",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié",
      -2,
      this.date,
    ),
    new Post(
      "Mon premier post",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié",
      5,
      this.date,
    ),
    new Post(
      "Mon premier post",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié",
      0,
      this.date,
    ),
  ];

  emitPosts() {
    this.PostsObservable.next(this.Posts.slice().reverse())
  }

  onAddPost(post: Post) {
    this.Posts.push(post);
    this.emitPosts();
  }

  onDeletePost(index: number) {
    index = this.Posts.length - index - 1;
    this.Posts.splice(index, 1);
    this.emitPosts();
  }

  onLove(index: number) {
    index = this.Posts.length - index - 1;
    this.Posts[index].loveIts++;
    this.emitPosts();
  }

  onDontLove(index: number) {
    index = this.Posts.length - index - 1;
    this.Posts[index].loveIts--;
    this.emitPosts();
  }
}
