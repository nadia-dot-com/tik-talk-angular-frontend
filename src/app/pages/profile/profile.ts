import { Component, inject, signal } from '@angular/core';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header';
import { ProfileDetailsComponent } from '../../components/profile-details/profile-details';
import { ProfileService } from '../../services/profile';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon';
import { ImgUrlPipe } from '../../pipes/img-url-pipe';
import { Profile } from '../../model/profile.types';
import { PostFeedComponent } from './post-feed/post-feed';

@Component({
  imports: [ProfileHeaderComponent, ProfileDetailsComponent, AsyncPipe, SvgIconComponent, RouterLink, ImgUrlPipe, PostFeedComponent],
  selector: 'app-my-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class ProfilePage {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  total = signal<number | null>(null)
  subscribers = signal<Profile[]>([]);
  me$ = toObservable(this.profileService.me);
  isMe = signal<boolean>(false);
  profile$ = this.route.params
    .pipe(
      switchMap(({ id }) => {
        if (id === 'me') {
          this.isMe.set(true);
          return this.me$
        };
        this.isMe.set(false);
        return this.profileService.getProfile(id);
      })
    );

  ngOnInit() {
    this.profileService.getSubscribers().pipe(
      tap(res => this.total.set(res.total)),
      tap(res => this.subscribers.set(res.items.slice(0, 9))),
    )
      .subscribe();
  }
}
