import { Component, inject } from '@angular/core';
import { ProfileFiltersComponent } from '@/app/components/profile-filters/profile-filters';
import { ProfileCardComponent } from '@/app/components/profile-card/profile-card';
import { ProfileService } from '@/app/services/profile';

@Component({
  imports: [ProfileFiltersComponent, ProfileCardComponent],
  selector: 'app-subscribers',
  styleUrl: './subscribers.scss',
  templateUrl: './subscribers.html',
})
export class SubscribersPage {
  profileService = inject(ProfileService);
  subscribers = this.profileService.filteredSubscribers;
  filterSubscribers = (params: Record<string, any>) => {
    const {firstName, lastName, ...rest} = params;
    const firstLastName = [firstName, lastName].join('');
    return this.profileService.filterSubscribers({
      ...(firstLastName? {firstLastName} : {}),
      ...rest, 
    })
  };
}
