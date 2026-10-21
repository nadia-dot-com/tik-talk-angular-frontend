import { Profile } from '@/app/model/profile.types';
import { ImgUrlPipe } from '@/app/pipes/img-url-pipe';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ImgUrlPipe, RouterLink],
  selector: 'app-subsriber-card',
  styleUrl: './subsriber-card.scss',
  templateUrl: './subsriber-card.html',
})
export class SubsriberCardComponent {
  profile = input<Profile>();
}
