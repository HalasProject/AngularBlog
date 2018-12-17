import { Component, OnInit, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

 @Input() title:string;
 @Input() content:string;
 @Input() loveit:number;
 @Input() createdAt:Date;

  constructor() { 

  }


  ngOnInit() {
   
  }

  isSup():boolean{
    if (this.loveit >= 0)
    return true;
  }


  onLove(){
    this.loveit++;
  }

  onDontLove(){
    this.loveit--;
  }
}
