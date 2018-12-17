import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component'
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

 
  @Input() ArrayOfPosts:any;

  constructor() { 
  
  }


  ngOnInit() {
  }

}
