import { Component, input } from '@angular/core';
import { Profile } from '../../model/profile.types';
import { ImgUrlPipe } from '../../pipes/img-url-pipe';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ImgUrlPipe, RouterLink],
  selector: 'app-profile-card',
  styleUrl: './profile-card.scss',
  templateUrl: './profile-card.html',
})
export class ProfileCardComponent {
  profile = input.required<Profile>()
}
