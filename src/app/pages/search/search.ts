import { Component, inject, signal } from '@angular/core';
import { ProfileFiltersComponent } from '../../components/profile-filters/profile-filters';
import { ProfileService } from '../../services/profile';
import { Profile } from '../../model/profile.types';
import { ProfileCardComponent } from '../../components/profile-card/profile-card';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [ProfileFiltersComponent, ProfileCardComponent],
  selector: 'app-search',
  styleUrl: './search.scss',
  templateUrl: './search.html',
})
export class SearchPage {
  profileService = inject(ProfileService);
  profiles = this.profileService.filteredProfiles;
  loading = signal(false);
  filterProfiles = (params: Record<string, any>) => this.profileService.filterProfiles(params);
}
