import { Component } from '@angular/core';
import { PostInputComponent } from '../post-input/post-input';
import { PostComponent } from '../post/post';

@Component({
  imports: [PostInputComponent, PostComponent],
  selector: 'app-post-feed',
  styleUrl: './post-feed.scss',
  templateUrl: './post-feed.html',
})
export class PostFeedComponent {
}
