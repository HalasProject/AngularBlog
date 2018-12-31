import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PostServiceService } from '../Service/post-service.service';
import { Post } from 'src/app/post'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  constructor(private PostService: PostServiceService,
    private Route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    let titre = form.value['Titre'];
    let content = form.value['Content'];

    let newPost: Post = new Post(titre, content, 0, new Date());

    this.PostService.onAddPost(newPost);

    this.Route.navigate(['']);

  }

}
