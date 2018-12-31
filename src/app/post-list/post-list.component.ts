import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from '../app.component'
import { ArrayType } from '@angular/compiler';
import { PostServiceService } from '../Service/post-service.service';
import { Post } from '../post';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {

 
  ArrayOfPosts:Post[] = [];
  ArraySubscription: Subscription;
  constructor(private PostService:PostServiceService) { 
    
  
  }


  ngOnInit() {


    this.PostService.emitPosts();

    this.ArraySubscription = this.PostService.PostsObservable
    .subscribe(
      (value)=> { this.ArrayOfPosts = value}
    )
  


  }

  ngOnDestroy(){
    this.ArraySubscription.unsubscribe();
  }

}
