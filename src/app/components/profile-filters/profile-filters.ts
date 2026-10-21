import { Component, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith, Subscription, switchMap } from 'rxjs';
import { SvgIconComponent } from '../svg-icon/svg-icon';
import { ProfileFilterMethod } from '@/app/model/profile.types';

@Component({
  imports: [ReactiveFormsModule, SvgIconComponent],
  selector: 'app-profile-filters',
  styleUrl: './profile-filters.scss',
  templateUrl: './profile-filters.html',
})
export class ProfileFiltersComponent {
  fb = inject(FormBuilder);
  profileMethod = input.required<ProfileFilterMethod>();

  searchForms = this.fb.group({
    firstName: [''],
    lastName: [''],
    city: [''],
    stack: [''],
  });

  searchFormSubscription!: Subscription;

  constructor() {
    this.searchFormSubscription = this.searchForms.valueChanges
      .pipe(
        startWith({}),
        debounceTime(500),
        switchMap(formValue => {
          const params = Object.fromEntries(
            Object.entries(formValue).filter(([, value]) => !!value)
          );
          return this.profileMethod()(params);
        }),
        takeUntilDestroyed()
      )
      .subscribe()
  }

  cleanFilters() {
   this.searchForms.reset()
  }
}
