import { Profile } from '@/app/model/profile.types';
import { ImgUrlPipe } from '@/app/pipes/img-url-pipe';
import { Component, effect, input} from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon';

@Component({
  imports: [ImgUrlPipe],
  selector: 'app-profile-header',
  styleUrl: './profile-header.scss',
  templateUrl: './profile-header.html',
})
export class ProfileHeaderComponent {
  profile = input<Profile | null>(null);
}
