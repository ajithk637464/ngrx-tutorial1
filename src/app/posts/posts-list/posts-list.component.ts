import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/posts.model';
import { getPosts } from './state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  standalone: false,
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  
  posts$!: Observable<Post[]>
  constructor(private store : Store<AppState>) {
  
}
ngOnInit(): void {
  this.posts$ = this.store.select(getPosts);
}
}